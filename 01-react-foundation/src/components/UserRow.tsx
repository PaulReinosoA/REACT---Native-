import { User } from '../interfaces';

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
