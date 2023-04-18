import { Request, Response } from "express";
import GuardianService from '../services/guardian.service';
import logger from '../logger'
import { ISectionResult } from "../models/guardian.model";

const guardian = new GuardianService();

export async function get(req: Request, res: Response) {
  try {

    logger.log('debug', `Fetching data from /${req.params.section} endpoint`)
    
    const request = await guardian.getSection(req.params.section);
    
    const { results } = request.data.response;

    const xmlConfig = {
      rss: {
        $: { version: "2.0" },
        channel: {
          title: 'The Guardian Journal',
          link: 'https://www.theguardian.com/',
          description: 'The Guardian News RSS Feed',
          language: 'en-US',
          docs: 'https://open-platform.theguardian.com/',
          item: results.map((news: ISectionResult) => {
            return {
              title: news.webTitle,
              link: news.webUrl,
              pubDate: news.webPublicationDate
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