import axios from 'axios';
import { useEffect, useState } from 'react';
import type { ReqResUserListResponse, User } from '../interfaces';

const loadUsers = async (): Promise<User[]> => {
  // fetch('https://reqres.in/api/users?page=2')
  //   .then((resp) => resp.json())
  //   .then((data) => console.log(data));

  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      'https://reqres.in/api/users?page=2'
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UsersPage = () => {
  const [users, addUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers().then((users) => addUsers(users));
  }, []);

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.avatar}</td>
              <td>{user.first_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
