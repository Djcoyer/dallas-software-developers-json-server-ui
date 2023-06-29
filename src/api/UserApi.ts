import User from "../model/User";

// const users: User[] = [
//     {
//         id: 1,
//         name: "John Doe",
//         age: 30
//     },
//     {
//         id: 2,
//         name: "John Smith",
//         age: 40
//     },
//     {
//         id: 3,
//         name: "Jane Doe",
//         age: 50
//     },
//     {
//         id: 4,
//         name: "Jane Smith",
//         age: 60
//     }
// ];
//
// const fetchUsers = () => {
//     return Promise.resolve(users);
// };
//
//
// export {
//     fetchUsers,
// }



import axios from 'axios';

const USER_API_URL: string = process.env.REACT_APP_USER_API_URL as string;


const fetchUsers = (): Promise<User[]> => {
    return axios.get<User[]>(USER_API_URL)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            return [];
        });
};

const fetchUser = (id: number): Promise<User> => {
    return axios.get<User>(`${USER_API_URL}/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            return {
                id: 2,
                name: 'Yo',
                age: 2,
            };
        });
};


export {
    fetchUsers,
    fetchUser,
}
