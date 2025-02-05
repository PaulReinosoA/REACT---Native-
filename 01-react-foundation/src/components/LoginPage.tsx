import { useEffect } from 'react';
import { useAthStore } from '../store/auth.store';

export const LoginPage = () => {
  const authStatus = useAthStore((state) => state.status);
  const user = useAthStore((state) => state.user);
  const login = useAthStore((state) => state.login);
  const logout = useAthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authStatus === 'checking') {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <div>loginPage</div>
      {authStatus === 'Authenticated' ? (
        <div>Authenticated with:{JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No Authenticated</div>
      )}

      {authStatus === 'Authenticated' ? (
        <button onClick={() => logout()}>LogOut</button>
      ) : (
        <button onClick={() => login('paulreinosoarres463@gmail,com', '123')}>
          LogIn
        </button>
      )}
    </>
  );
};
