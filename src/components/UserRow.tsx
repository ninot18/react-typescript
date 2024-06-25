import { User } from "../interfaces";

interface Props {
    user: User;
}

export const UserRow = ({ user }: Props) => {

    return (
        <tr>
            <td><img style={{width: '50px'}} src={user.avatar} alt="User avatar"/></td>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    );
};