import { Router } from 'express';
import {
  redirectToGitHub,
  handleGitHubCallback,
} from '../controllers/authController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.get('/github', redirectToGitHub);
router.get('/github/callback', handleGitHubCallback);
router.get('/me', requireAuth, getCurrentUser);

export default router;