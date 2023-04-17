import axios, { AxiosInstance } from 'axios';
import { IGuardianSection } from '../models/guardian.model';

class GuardianService {

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
  }

  async getSection(section: string) {
    return await this.axiosInstance.get('/search', {
      params: { section }
    })
  }

}

export default GuardianService;