import express from 'express'
import * as guardianController from '../controllers/guardian.controller';

const router = express.Router();

router.get('/', guardianController.get);

export default router;