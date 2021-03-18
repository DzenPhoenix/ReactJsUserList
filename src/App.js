import './App.css';
import React, { Component } from 'react'

import UserList from './components/userList/UserList.jsx';
import UserInfoList from './components/userInfoList/UserInfoList.jsx';


const dbUsers = [
  {
    Name: "John",
    Surname: "Dou",
    Age: 25,
    Sex: "male",
    Profession: "author",
    Id: 1,
  },
  {
    Name: "Ivan",
    Surname: "Petrov",
    Age: 36,
    Sex: "male",
    Profession: "worker",
    Id: 2,
  },
  {
    Name: "Anna",
    Surname: "Sidorova",
    Age: 16,
    Sex: "female",
    Profession: "student",
    Id: 3,
  },
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbUsers.map(function (item) {
        return { ...item, isChecked: false }
      })
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = function(userId,event){
      const newUsers = this.state.users;
      newUsers.forEach(function(user){
        if(user.Id===userId){
          user.isChecked=!user.isChecked;
        }
      });
      this.setState(newUsers);
  }

  render() {
    return (
      <div className="appWrapper">
        <UserList users={this.state.users} handleChange={this.handleChange}></UserList>
        <UserInfoList users={this.state.users}></UserInfoList>
      </div>
    )
  }
}