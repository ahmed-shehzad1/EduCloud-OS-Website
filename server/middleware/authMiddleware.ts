import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  user?: {
    githubId: number;
    login: string;
    name: string | null;
    avatarUrl: string;
    email: string | null;
  };
}

export function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  const token = req.cookies?.educloud_auth;

  if (!token) {
    res.status(401).json({
      message: 'Authentication required.',
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

    if (typeof decoded !== 'object' || decoded === null) {
      res.status(401).json({
        message: 'Invalid authentication token.',
      });
      return;
    }

    req.user = {
      githubId: Number(decoded.githubId),
      login: String(decoded.login),
      name: decoded.name ? String(decoded.name) : null,
      avatarUrl: String(decoded.avatarUrl),
      email: decoded.email ? String(decoded.email) : null,
    };

    next();
  } catch {
    res.status(401).json({
      message: 'Invalid or expired authentication session.',
    });
  }
}