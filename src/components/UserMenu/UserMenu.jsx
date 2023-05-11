import authSelectors from 'redux/auth/selectors';
import * as authOperations from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div>
      <nav>
        <p>
          <NavLink to="/homepage">
            <Button variant="outlined">Homepage</Button>
          </NavLink>
        </p>
        <p>
          <NavLink to="/contacts">
            <Button variant="outlined">My contacts</Button>
          </NavLink>
        </p>
      </nav>
      <p>{email}</p>
      <NavLink to="/">
        <Button
          variant="outlined"
          type="submit"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Sign out
        </Button>
      </NavLink>
    </div>
  );
}
