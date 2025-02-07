// import axios from 'axios';
// import { useEffect, useRef, useState } from 'react';
// import type { ReqResUserListResponse, User } from '../interfaces';
import { useUsers } from '../hooks/useUsers';
import type { User } from '../interfaces';

// const loadUsers = async (page: number = 1): Promise<User[]> => {
//   fetch('https://reqres.in/api/users?page=2')
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));
//   try {
//     const { data } = await axios.get<ReqResUserListResponse>(
//       'https://reqres.in/api/users',
//       { params: { page: page } }
//     );
//     return data.data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const UsersPage = () => {
  const [users, nextPage, prevPage] = useUsers();
  // const [users, addUsers] = useState<User[]>([]);
  // const currentPageRef = useRef(1); //hook para cada vez que se llame tener el valor

  // useEffect(() => {
  //   loadUsers(currentPageRef.current).then((users) => addUsers(users));
  // }, []);

  // const nextPage = async () => {
  //   currentPageRef.current++;
  //   const users = await loadUsers(currentPageRef.current);
  //   if (users.length > 0) {
  //     addUsers(users);
  //   } else {
  //     currentPageRef.current--;
  //   }
  // };

  // const prevPage = async () => {
  //   if (currentPageRef.current < 1) return;
  //   currentPageRef.current--;
  //   const users = await loadUsers(currentPageRef.current);
  //   addUsers(users);
  // };

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

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { avatar, first_name, email } = user;

  return (
    <tr>
      <td>
        <img style={{ width: '45px', height: 'auto' }} src={avatar} alt="" />
      </td>
      <td>{first_name}</td>
      <td>{email}</td>
    </tr>
  );
};
