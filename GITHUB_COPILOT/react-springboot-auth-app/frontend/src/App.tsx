import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { AuthProvider, useAuth } from './hooks/useAuth';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Redirect to="/signin" />;
};

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" render={() => (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )} />
        <Route path="*" render={() => <Redirect to="/signin" />} />
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);

export default App;