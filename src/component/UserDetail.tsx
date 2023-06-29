import React, {useEffect, useState} from 'react';
import User from '../model/User';
import {useParams} from "react-router";
import {fetchUser} from "../api/UserApi";

const UserDetail: React.FC = () => {
    const params = useParams();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        // @ts-ignore
        const id: number = parseInt(params.id);
        fetchUser(id).then((user: User) => {
            setUser(user);
        });
    }, [params.id]);

    return user ? (
        <div className={'user-detail__container'}>
            <div className="user-detail__header">
                <span className="user-detail__title">
                    User Details
                </span>
            </div>
            <div className="user-detail__body">
                <div>
                    <div>
                        <span className="info">
                            UserId
                        </span>
                    </div>
                    <div>
                        <span className="content">
                            {user.id}
                        </span>
                    </div>

                    <div>
                        <span className="info">
                            Name
                        </span>
                    </div>
                    <div>
                        <span className="content">
                            {user.name}
                        </span>
                    </div>
                    <div>
                        <span className="info">
                            Age
                        </span>
                    </div>
                    <div>
                        <span className="content">
                            {user.age}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ) : <div>Loading...</div>
}

export {UserDetail}
