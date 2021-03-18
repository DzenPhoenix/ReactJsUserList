import React from 'react';
import Style from './UserInfoItem.module.css';

function UserInfoItem(props){
    return(
            <div className={Style.wrapper}>
                Name: {props.Name}, 
                Surname: {props.Surname},
                Age: {props.Age},
                Sex: {props.Sex},
                Profession: {props.Profession},     
                ID: {props.Id}          
            </div>
    )
}

export default UserInfoItem;