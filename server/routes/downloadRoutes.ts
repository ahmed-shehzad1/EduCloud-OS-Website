import { Router } from 'express';
import { downloadWindowsRelease } from '../controllers/downloadController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.get('/windows', requireAuth, downloadWindowsRelease);

export default router;