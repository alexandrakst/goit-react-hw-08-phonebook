import UserMenu from '../UserMenu/UserMenu';
import AuthMenu from '../AuthMenu/AuthMenu';
import authSelectors from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Div } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Div>
      <h1>Phonebook</h1>
      <Div>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</Div>
    </Div>
  );
}
