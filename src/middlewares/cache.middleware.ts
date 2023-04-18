import { NextFunction, Request, Response } from "express"
import mcache from 'memory-cache'

export const cache = (duration: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = `__express_${req.originalUrl || req.url}`;
    const cachedBody = mcache.get(key);
    res.setHeader('Content-Type', 'application/xml');

    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      const sendResponse = res.send.bind(res);
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        return sendResponse(body);
      }
      next();
    }

  }
}