import { NavLink } from 'react-router-dom';
import { Wrapper, Paragraph, Button } from './AuthMenu.styled';

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
