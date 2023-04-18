import axios, { AxiosInstance } from 'axios';
import xml2js, { Builder } from 'xml2js';

class GuardianService {

  builder: Builder;
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
    this.builder = new xml2js.Builder({
      xmldec: { version: '1.0' }
    })
  }

  async getSection(section: string) {
    return await this.axiosInstance.get(`/${section}`, {
      params: { section }
    })
  }

  async asXML(xmlConfig: unknown) {
    return this.builder.buildObject(xmlConfig);
  }

}

export default GuardianService;