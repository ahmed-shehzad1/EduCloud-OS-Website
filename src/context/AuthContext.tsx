import React, { createContext, useEffect, useState } from 'react';

export interface GitHubUser {
  githubId: number;
  login: string;
  name: string | null;
  avatarUrl: string | null;
  email: string | null;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: GitHubUser | null;
  loading: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  const login = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      console.error('VITE_API_URL is missing.');
      return;
    }

    window.location.href = `${apiUrl}/api/auth/github`;
  };

 const logout = async () => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      console.error('VITE_API_URL is missing.');
      return;
    }

    await fetch(`${apiUrl}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  } catch (error) {
    console.error('Logout request failed:', error);
  } finally {
    setUser(null);
  }
};

  useEffect(() => {
    const loadCurrentUser = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        if (!apiUrl) {
          console.error('VITE_API_URL is missing.');
          setLoading(false);
          return;
        }

        const response = await fetch(`${apiUrl}/api/user/me`, {
          credentials: 'include',
        });

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();

        setUser(data.user);
      } catch (error) {
        console.error('Failed to restore authentication session:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};