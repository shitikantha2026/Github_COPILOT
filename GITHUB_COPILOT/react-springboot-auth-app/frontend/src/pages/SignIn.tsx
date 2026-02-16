// ...existing code...
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.css';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (username: string, password: string) => {
    setError(null);
    try {
      await signIn(username, password);
      history.push('/dashboard');
    } catch (err: any) {
      setError(err?.message ?? 'Sign in failed');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Welcome back</h1>
          <div className="auth-sub">Sign in to continue to your dashboard</div>
        </div>

        <AuthForm isRegister={false} onSubmit={handleSubmit} />

        {error && <div className="auth-error">{error}</div>}

        <div className="auth-footer">
          Don't have an account? <Link className="auth-link" to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
// ...existing code...