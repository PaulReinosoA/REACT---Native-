import { useUsers } from '../hooks/useUsers';
import type { User } from '../interfaces';
import { UserRow } from './UserRow';


export const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers();

  return (
    <>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </>
  );
};
