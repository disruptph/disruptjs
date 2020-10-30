# `@disruptph/react-auth-context`

Generic react auth context

## Usage

### Typescript/React Example

```typescript
import React, { useState } from 'react';
import { AuthProvider, AuthService, useAuth } from '@disruptph/react-auth-context';

class MyAuthService implements AuthService {
  async loginWithEmail(email: string, password: string) {
    // Handle email/password login via custom backend api, firebase, or anything you prefer
  }

  async checkAuth() {
    // Handle auth check
  }

  async logout() {
    // Handle logout
  }
}

const App = () => (
  <AuthProvider service={new MyAuthService()}>
    <Login />
  </AuthProvider>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async () => {
    await login(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
    </form>
  );
};
```
