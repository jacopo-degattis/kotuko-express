import axios, { AxiosInstance } from 'axios';
import xml2js, { Builder } from 'xml2js';
import moment from 'moment';

class GuardianService {

  xmlBuilder: Builder;
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      params: { 'api-key': process.env.GUARDIAN_API_KEY },
      baseURL: process.env.GUARDIAN_ENDPOINT
    })
    this.xmlBuilder = new xml2js.Builder({
      xmldec: { version: '1.0' }
    })
  }

  // Extract words from sentence with the given `wordLength`
  extractWordle(wordLength: number, sentence: string) {
    const words = sentence.split(' ');
    return words.filter((word) => word.length === wordLength);
  }

  // Convert API date to RFC-822 standard
  convertDateToRFC(date: string): string {
    return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
  }

  async getSection(section: string) {
    return await this.axiosInstance.get(`/${section}`, {
      params: { section }
    })
  }

  async asXML(xmlConfig: unknown) {
    return this.xmlBuilder.buildObject(xmlConfig);
  }

}

export default GuardianService;