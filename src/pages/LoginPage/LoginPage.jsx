import * as authOperations from '../../redux/auth/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Div, Button, TextField } from './Login.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Div>
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
          />
        </Div>
        <Div>
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
          />
        </Div>
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>
    </Div>
  );
}
