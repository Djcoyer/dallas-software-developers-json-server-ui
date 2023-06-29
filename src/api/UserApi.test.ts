import axios from 'axios';
import {fetchUsers} from "./UserApi";
import User from "../model/User";

jest.mock('axios');

describe('User API', () => {
    let users: User[] = [];
    describe('Fetch Users', () => {

        beforeEach(() => {
            users = [
                {
                    id: 1,
                    name: 'John Smith',
                    age: 29,
                }
            ];
        });

        it('should call API endpoint and return user list', async () => {
            jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({
                data: users,
            }));

            const response = await fetchUsers();

            expect(response).toEqual(users);
        });
    });

});
