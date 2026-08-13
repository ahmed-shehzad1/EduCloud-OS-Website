import React, { useEffect, useState } from 'react';

interface GitHubUser {
  githubId: number;
  login: string;
  name?: string | null;
  avatarUrl?: string | null;
  email?: string | null;
}

export const Profile: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        const response = await fetch(
          `${apiUrl}/api/user/me`,
          {
            credentials: 'include',
          }
        );

        if (!response.ok) {
          throw new Error('Not authenticated');
        }

        const data = await response.json();

        setUser(data.user);
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>Loading profile...</h1>
      </main>
    );
  }

  if (!user) {
    return (
      <main>
        <h1>Authentication Required</h1>
        <p>Please connect your GitHub account first.</p>
      </main>
    );
  }

  return (
    <main>
      <section>
        <img
          src={user.avatarUrl ?? ''}
          alt={`${user.login} GitHub avatar`}
          width={120}
          height={120}
        />

        <h1>
          Welcome, {user.name || user.login}
        </h1>

        <p>@{user.login}</p>

        <p>
          GitHub authentication established.
        </p>

        <button>
          DOWNLOAD EDUCloud OS
        </button>
      </section>
    </main>
  );
};