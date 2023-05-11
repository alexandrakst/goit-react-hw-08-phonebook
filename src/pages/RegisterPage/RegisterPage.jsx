import * as authOperations from '../../redux/auth/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Div, TextField, Button } from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Div>
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
          />
        </Div>
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
        <Div>
          <Button type="submit">Register</Button>
        </Div>
      </form>
    </div>
  );
}
