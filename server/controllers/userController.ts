import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function getCurrentUser(
  req: Request,
  res: Response
): void {
  const token = req.cookies.educloud_auth;

  if (!token) {
    res.status(401).json({
      authenticated: false,
      message: 'Not authenticated.',
    });
    return;
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    res.status(500).json({
      message: 'Authentication configuration error.',
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    res.json({
      authenticated: true,
      user: decoded,
    });
  } catch {
    res.status(401).json({
      authenticated: false,
      message: 'Invalid or expired session.',
    });
  }
}