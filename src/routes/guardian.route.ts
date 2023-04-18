import express from 'express'
import * as guardianController from '../controllers/guardian.controller';
import { cache } from '../middlewares/cache.middleware';

const router = express.Router();

// Cache is set to 600 seconds, the equivalent of 10 minutes
router.get('/:section', cache(600), guardianController.get);

export default router;