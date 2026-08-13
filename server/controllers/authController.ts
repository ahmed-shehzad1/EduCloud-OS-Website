import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import type { AuthenticatedRequest } from '../middleware/authMiddleware';

import {
  exchangeCodeForToken,
  getGitHubAuthorizationUrl,
  getGitHubUser,
} from '../services/githubOAuth';

export function redirectToGitHub(
  _req: Request,
  res: Response
): void {
  const authorizationUrl = getGitHubAuthorizationUrl();

  res.redirect(authorizationUrl);
}

export async function handleGitHubCallback(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const code = req.query.code;

    if (typeof code !== 'string' || !code) {
      res.status(400).send('Missing GitHub authorization code.');
      return;
    }

    const accessToken = await exchangeCodeForToken(code);

    const githubUser = await getGitHubUser(accessToken);

    console.log('GitHub user authenticated:', {
      id: githubUser.id,
      login: githubUser.login,
      name: githubUser.name,
    });

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      console.error('JWT_SECRET is missing.');
      res.status(500).send('Authentication configuration error.');
      return;
    }

    const token = jwt.sign(
      {
        githubId: githubUser.id,
        login: githubUser.login,
        name: githubUser.name,
        avatarUrl: githubUser.avatar_url,
        email: githubUser.email,
      },
      jwtSecret,
      {
        expiresIn: '7d',
      }
    );

    

    res.cookie('educloud_auth', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const clientUrl =
      process.env.CLIENT_URL || 'http://localhost:5173';

    res.redirect(`${clientUrl}/profile`);
  } catch (error) {
    console.error('GitHub OAuth error:', error);

    res.status(500).json({
      message: 'GitHub authentication failed.',
    });
  }
}

export function getCurrentUser(
  req: AuthenticatedRequest,
  res: Response
): void {
  if (!req.user) {
    res.status(401).json({
      message: 'Not authenticated.',
    });
    return;
  }

  res.json({
    user: req.user,
  });
}