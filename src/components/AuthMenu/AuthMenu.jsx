import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { Wrapper, Paragraph } from './AuthMenu.styled';

export default function AuthMenu() {
  return (
    <Wrapper>
      <Paragraph>
        <NavLink to="/register">
          <Button variant="contained">Sign up</Button>
        </NavLink>
      </Paragraph>
      <Paragraph>
        <NavLink to="/login">
          <Button variant="contained">Sign in</Button>
        </NavLink>
      </Paragraph>
    </Wrapper>
  );
}
