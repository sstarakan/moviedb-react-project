import React from 'react';
import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div>
            <div className={css.UserInfoIcon}>User</div>
            <span>username</span>
        </div>
    );
};

export {UserInfo};