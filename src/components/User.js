import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function User() {
    const {name,age,city,education} = useContext(UserContext)
  return (
    <div>
      <h1> My Name : {name}</h1>
      <h1> My Age : {age}</h1>
      <h1> My City : {city}</h1>
      <h1> My Education : {education}</h1>
      
    </div>
  )
}

export default User
