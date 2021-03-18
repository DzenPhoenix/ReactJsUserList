import React from 'react';
import Style from './UserItem.module.css';

function UserItem(props){
    return(
        <div className={Style.wrapper}>
            <div>{props.Name}, {props.Surname}</div>
            <input className={Style.checkbox} 
                   type="checkbox" 
                   checked = {props.isChecked} 
                   onChange={(e)=>{props.handleChange(props.ID,e)}}></input>
        </div>
    )
}

export default UserItem;