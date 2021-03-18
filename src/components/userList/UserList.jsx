import React from 'react';
import UserItem from '../userItem/UserItem.jsx';

function UserList(props){
    const item = props.users.map(function(user){
        return <UserItem key={user.Id} 
                         ID={user.Id}
                         Name={user.Name} 
                         Surname={user.Surname} 
                         isChecked={user.isChecked}
                         handleChange={props.handleChange}></UserItem>
    });
    return(
        <div>
            {item}
        </div>
    );
}

export default UserList;