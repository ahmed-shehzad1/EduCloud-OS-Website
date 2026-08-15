import React, { useEffect, useState } from 'react';
import '../../styles/pages/Profile.css';

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

        const response = await fetch(`${apiUrl}/api/user/me`, {
          credentials: 'include',
        });

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
      <main className="cyber-profile-page">
        <div className="cyber-bg-anim-container" aria-hidden="true">
          <div className="cyber-grid-perspective" />
          <div className="quantum-orb orb-ruby" />
          <div className="quantum-orb orb-cyan" />
          <div className="cyber-laser-beam beam-1" />
          <div className="cyber-laser-beam beam-2" />
        </div>

        <div className="profile-main-wrapper flex-center">
          <div className="cyber-status-card">
            <div className="hero-status-pill">
              SYSTEM BUS: FETCHING IDENTITY
            </div>
            <h1 className="hero-title">Initializing Session...</h1>
            <div className="equalizer-bars">
              <span className="eq-bar" style={{ background: 'var(--ruby-bright)', animationDelay: '0s' }} />
              <span className="eq-bar" style={{ background: 'var(--cyan-accent)', animationDelay: '0.2s' }} />
              <span className="eq-bar" style={{ background: 'var(--emerald-accent)', animationDelay: '0.4s' }} />
              <span className="eq-bar" style={{ background: 'var(--gold-accent)', animationDelay: '0.1s' }} />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="cyber-profile-page">
        <div className="cyber-bg-anim-container" aria-hidden="true">
          <div className="cyber-grid-perspective" />
          <div className="quantum-orb orb-ruby" />
          <div className="quantum-orb orb-cyan" />
          <div className="cyber-laser-beam beam-1" />
        </div>

        <div className="profile-main-wrapper flex-center">
          <div className="cyber-status-card error-state">
            <div className="hero-status-pill restricted">
              ACCESS RESTRICTED: 401
            </div>
            <h1 className="hero-title">Authentication Required</h1>
            <p className="hero-description">Please connect your GitHub account first to access the EDUCloud stream.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cyber-profile-page">
      <div className="cyber-bg-anim-container" aria-hidden="true">
        <div className="cyber-grid-perspective" />
        <div className="quantum-orb orb-ruby" />
        <div className="quantum-orb orb-cyan" />
        <div className="quantum-orb orb-emerald" />
        <div className="cyber-laser-beam beam-1" />
        <div className="cyber-laser-beam beam-2" />
        <div className="cyber-laser-beam beam-3" />
      </div>

      <div className="profile-main-wrapper">
        <div className="hero-status-pill">
          SESSION ESTABLISHED — LINK ACTIVE
        </div>

        <section className="profile-stage-card">
          <div className="card-top-bar">
            <div className="bar-tag-group">
              <span className="step-badge" style={{ background: 'var(--ruby-core)' }}>USER</span>
              <span className="category-label">IDENTITY MATRIX</span>
            </div>
            <span className="system-code">UID: GH-{user.githubId || user.login}</span>
          </div>

          <div className="card-main-grid">
            <div className="identity-section">
              <div className="avatar-frame-wrapper">
                <div className="avatar-glow-ring" />
                <img
                  src={user.avatarUrl ?? ''}
                  alt={`${user.login} GitHub avatar`}
                  width={120}
                  height={120}
                  className="avatar-img"
                />
              </div>

              <div className="identity-text">
                <h1 className="hero-title">
                  Welcome, {user.name || user.login}
                </h1>
                <p className="handle-tag">@{user.login}</p>
                {user.email && <p className="email-tag">{user.email}</p>}
                
                <p className="auth-status-desc">
                  GitHub authentication established. Direct node access authorized for system stream.
                </p>
              </div>
            </div>

            <div className="metrics-box-frame">
              <div className="box-title-row">
                <span className="box-dot" style={{ background: 'var(--emerald-accent)' }} />
                <span className="box-label">EDUCLOUD NODE STATUS</span>
              </div>

              <div className="metrics-list">
                <div className="metric-row">
                  <span className="m-label">AUTH METHOD</span>
                  <span className="m-val" style={{ color: 'var(--cyan-accent)' }}>OAuth2 / GitHub</span>
                </div>
                <div className="metric-row">
                  <span className="m-label">CLEARANCE</span>
                  <span className="m-val" style={{ color: 'var(--emerald-accent)' }}>LEVEL 01: READY</span>
                </div>
                <div className="metric-row">
                  <span className="m-label">SYSTEM BUILD</span>
                  <span className="m-val" style={{ color: 'var(--gold-accent)' }}>v2.4-CYBER</span>
                </div>
              </div>

              <button className="cyber-download-btn">
                <span className="btn-text">DOWNLOAD EDUCloud OS</span>
              </button>

              <div className="equalizer-bars">
                <span className="eq-bar" style={{ background: 'var(--ruby-bright)', animationDelay: '0s' }} />
                <span className="eq-bar" style={{ background: 'var(--cyan-accent)', animationDelay: '0.2s' }} />
                <span className="eq-bar" style={{ background: 'var(--emerald-accent)', animationDelay: '0.4s' }} />
                <span className="eq-bar" style={{ background: 'var(--gold-accent)', animationDelay: '0.1s' }} />
                <span className="eq-bar" style={{ background: 'var(--ruby-core)', animationDelay: '0.3s' }} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};