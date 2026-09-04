import type { Response } from 'express';
import path from 'node:path';
import type { AuthenticatedRequest } from '../middleware/authMiddleware';

export function downloadWindowsRelease(
  req: AuthenticatedRequest,
  res: Response
): void {
  if (!req.user) {
    res.status(401).json({
      message: 'Authentication required.',
    });
    return;
  }

  const releasePath = path.resolve(
    process.env.RELEASE_FILE_PATH ||
      './server/releases/EduCloudOS-Windows-v1.0.0.zip'
  );

  res.download(
    releasePath,
    'EduCloudOS-Windows-v1.0.0.zip',
    (error) => {
      if (error && !res.headersSent) {
        console.error('Release download failed:', error);

        res.status(500).json({
          message: 'Unable to download the release.',
        });
      }
    }
  );
}