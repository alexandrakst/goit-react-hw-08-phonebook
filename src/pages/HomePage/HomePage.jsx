import React from 'react';
import authSelectors from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Card } from '@mui/material';

export default function HomePage() {
  const name = useSelector(authSelectors.getUsername);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      {isLoggedIn ?? (
        <Card variant="outlined">
          <h1>Hi, {name}!</h1>
          <p>Welcome to your PhoneBook!</p>
        </Card>
      )}
    </div>
  );
}
