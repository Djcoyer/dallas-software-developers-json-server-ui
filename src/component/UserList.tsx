import React, {useEffect, useState, Fragment} from 'react';
import {fetchUsers} from "../api/UserApi";
import User from "../model/User";

const UserList: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers().then((res) => setUsers(res));
    }, []);

    return (
        <Fragment>
            {users.map((user: User) => (
            <div>
                {user.name}
            </div>
            ))}
    </Fragment>
    );


}

export {
    UserList
}
