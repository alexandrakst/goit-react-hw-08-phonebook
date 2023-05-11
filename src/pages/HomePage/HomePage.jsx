import React from 'react';
import authSelectors from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Div } from './HomePage.styled';

export default function HomePage() {
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <Div>
        <h1>Hi, {name}!</h1>
        <p>Welcome to your PhoneBook!</p>
      </Div>
    </div>
  );
}
