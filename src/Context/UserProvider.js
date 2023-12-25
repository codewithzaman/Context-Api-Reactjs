import React,{useState} from 'react'
import UserContext from './UserContext'

function UserProvider({children}) {
    const [user, setUser] = useState({
        name : 'Nader Zaman',
        age : 35,
        city : 'Layyah',
        education : 'Masters of Computer Science'

    })
  return (
    <UserContext.Provider value={user}>
       {children} 
    </UserContext.Provider>
  )
}

export default UserProvider
