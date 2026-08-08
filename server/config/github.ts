import 'dotenv/config';

export const githubConfig = {
  clientId: process.env.GITHUB_CLIENT_ID ?? '',
  clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
  callbackUrl:
    process.env.GITHUB_CALLBACK_URL ??
    'http://localhost:5000/api/auth/github/callback',
};

if (!githubConfig.clientId) {
  console.warn('⚠️ GITHUB_CLIENT_ID is missing from .env');
}

if (!githubConfig.clientSecret) {
  console.warn('⚠️ GITHUB_CLIENT_SECRET is missing from .env');
}