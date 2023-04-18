import { Request, Response } from "express";
import GuardianService from '../services/guardian.service';

const guardian = new GuardianService();

export async function get(req: Request, res: Response) {
  try {
    const request = await guardian.getSection(req.params.section);
    return res.send(request.data);
  } catch(e: any) {
    return res.status(e.response.status).send(e.message)
  }
}