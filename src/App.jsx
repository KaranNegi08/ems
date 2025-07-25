import React, { useContext, useState ,useEffect} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashborad/EmployeeDashboard'
import AdminDashboard from './components/Dashborad/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user, setUser] = useState(null)
 const [loggedInUserData, setLoggedInUserData] = useState(null)
 const [userData, setUserData]=useContext(AuthContext)
 
  useEffect(() =>{
    const loggedInUser= localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData= JSON.parse(loggedInUser)
     setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  

 const handleLogin =(email,password) =>{
  if(email == 'karannegi.agra@gmail.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    
  }//Checking data from the employees if the user data exists
  else if(userData){
    const employee= userData.find((e) => e.email == email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',data:employee}))
  
    }
        
  }

  else{
    alert("Invalid Email or Password")
  }
 }

 
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}

    


    </>
  )
}

export default App
