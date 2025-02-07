import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import type { ReqResUserListResponse, User } from '../interfaces';

export const useUsers = () => {
  const loadUsers = async (page: number = 1): Promise<User[]> => {
    // fetch('https://reqres.in/api/users?page=2')
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));
    try {
      const { data } = await axios.get<ReqResUserListResponse>(
        'https://reqres.in/api/users',
        { params: { page: page } }
      );
      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const [users, addUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1); //hook para cada vez que se llame tener el valor

  useEffect(() => {
    loadUsers(currentPageRef.current).then((users) => addUsers(users));
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      addUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    addUsers(users);
  };

  return {
    /*variables*/
    users,
    /*metodos*/    
    nextPage,
    prevPage,
  };
};
