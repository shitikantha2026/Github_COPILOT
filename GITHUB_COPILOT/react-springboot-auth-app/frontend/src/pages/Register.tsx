import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { register } from '../services/api';
import '../styles/auth.css';

const Register: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (username: string, password: string) => {
    setError(null);
    try {
      await register({ username, password });
      history.push('/signin');
    } catch (err: any) {
      setError(err.message ?? 'Registration failed');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Create account</h1>
          <div className="auth-sub">Get started — it only takes a minute</div>
        </div>

        <AuthForm isRegister={true} onSubmit={handleSubmit} submitLabel="Create account" />

        {error && <div className="auth-error">{error}</div>}

        <div className="auth-footer">
          Already have an account? <Link className="auth-link" to="/signin">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;