import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

//AuthProvider pick data from local Storage
export const AuthContext= createContext()

//use send local storage data everywhere
const AuthProvider = ({children}) => {
  
    // localStorage.clear()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()
    setUserData(employees);
    
  },[] )
  
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
