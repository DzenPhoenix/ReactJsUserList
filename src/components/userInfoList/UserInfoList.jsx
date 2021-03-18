import React from 'react';
import UserInfoItem from '../userInfoItem/UserInfoItem.jsx';
import Style from './UserInfoList.module.css';

function UserInfoList(props){

    const item = [];
    const users = props.users;

    for(let i=0;i<users.length;++i){
        if(users[i].isChecked){
            item.push(
            <UserInfoItem Name={users[i].Name} 
                Surname={users[i].Surname}
                Age= {users[i].Age}
                Sex= {users[i].Sex}
                Profession= {users[i].Profession}
                Id= {users[i].Id} 
                isChecked={users[i].isChecked}
                key={users[i].Id}></UserInfoItem>);
        }
    }

    return(
        <div className={Style.wrapper}>
            <h2>User details:</h2>
            {item}
        </div>
    );
}

export default UserInfoList;