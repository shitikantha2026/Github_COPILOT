import React, { useState } from 'react';

interface AuthFormProps {
  isRegister: boolean;
  onSubmit: (username: string, password: string) => void | Promise<void>;
  submitLabel?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegister, onSubmit, submitLabel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    try {
      await onSubmit(username.trim(), password);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="username">Username</label>
        <input id="username" value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" required />
      </div>

      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete={isRegister ? 'new-password' : 'current-password'} required />
      </div>

      <div className="auth-actions">
        <button className="btn btn-primary" type="submit" disabled={busy}>
          {busy ? 'Please wait…' : (submitLabel ?? (isRegister ? 'Create account' : 'Sign In'))}
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => { setUsername(''); setPassword(''); }}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
