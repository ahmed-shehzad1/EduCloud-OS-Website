import type { Request, Response } from 'express';
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

    res.json({
      message: 'GitHub authentication successful.',
      user: githubUser,
    });
  } catch (error) {
    console.error('GitHub OAuth error:', error);

    res.status(500).json({
      message: 'GitHub authentication failed.',
    });
  }
}