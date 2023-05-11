import authSelectors from 'redux/auth/selectors';
import * as authOperations from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Div, P, Text } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div>
      <Div>
        <P>
          <NavLink to="/homepage">
            <Button>Homepage</Button>
          </NavLink>
        </P>
        <P>
          <NavLink to="/contacts">
            <Button>My contacts</Button>
          </NavLink>
        </P>
      </Div>
      <Text>{email}</Text>
      <Text>
        <NavLink to="/">
          <Button
            variant="outlined"
            type="submit"
            onClick={() => dispatch(authOperations.logOut())}
          >
            Sign out
          </Button>
        </NavLink>
      </Text>
    </div>
  );
}
