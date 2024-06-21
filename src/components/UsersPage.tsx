import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserListResponse, User } from "../interfaces";



const loadUsers = async(): Promise<User[]> => {

    try {
        
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users');
            // fetch('https://reqres.in/api/users?page=2')
            //     .then(resp => resp.json)
            //     .then(data => console.log(data));
        return data.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}

export const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        loadUsers().then(users => setUsers(users));
        
    })

    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => (
                            <UserRow key={user.id} user={user}/>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};


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