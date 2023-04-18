import { Request, Response } from "express";
import GuardianService from '../services/guardian.service';
import logger from '../logger'
import { ISectionResult } from "../models/guardian.model";

const guardian = new GuardianService();

export async function get(req: Request, res: Response) {
  try {

    if (!req.params.section.match(/^\p{L}+(?:[- ']\p{L}+)*$/u)) {
      logger.log(
        'error', `${req.params.section} a an invalid input, you must provide a dash separated or single word`
      );

      return res
        .status(400)
        .send('You must provide a dash separated word or a single word');
    }

    logger.log('debug', `Fetching data from /${req.params.section} endpoint`)
    
    const request = await guardian.getSection(req.params.section);
    
    const { results } = request.data.response;

    // Build xml tree schema
    const xmlConfig = {
      rss: {
        $: { version: "2.0", "xmlns:kotuko": "https://www.kotuko.it/" },
        channel: {
          title: 'The Guardian Journal',
          link: 'https://www.theguardian.com/',
          description: 'The Guardian News RSS Feed',
          language: 'en-US',
          docs: 'https://open-platform.theguardian.com/',
          item: results.map((news: ISectionResult) => {
            return {
              guid: news.apiUrl,
              title: news.webTitle,
              link: news.webUrl,
              pubDate: guardian.convertDateToRFC(news.webPublicationDate),
              "kotuko:wordleScore": guardian.extractWordle(5, news.webTitle).length
            }
          })
        }
      }
    }

    logger.log('debug', 'Parsing data as XML')

    const xmlData = await guardian.asXML(xmlConfig);
    
    return res
      .setHeader('Content-Type', 'application/xml')
      .send(xmlData);

  } catch(e: any) {
    logger.log('error', e.message );
    return res.status(e.response.status).send(e.message)
  }
}