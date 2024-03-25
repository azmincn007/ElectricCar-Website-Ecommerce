import React, { useContext, useEffect, useState } from 'react'
import './adminlanding.css'
import logo from '../Landing/Logo.png'
import { CiUser } from "react-icons/ci";
import { UserContext } from '../../App';
import axios from 'axios';
import Total from '../Admin/users.png'
import Admin from '../Admin/admin.png'
import Users from '../Admin/users.png'





function AdminLanding() {
  // accountdetails
  const [totalAccounts, setTotalAccounts] = useState(0);
  const [adminAccounts, setAdminAccounts] = useState(0);
  const [userAccounts, setUserAccounts] = useState(0);
// end of account details

  const [userName, setUserName] =useContext(UserContext)
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const fetchUserName = async () => {
        try {
          const response = await axios.get('http://localhost:4000/getname', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const { name } = response.data;
          console.log(name);
          setUserName(name);
        } catch (error) {
          console.error('Error fetching user name:', error);
        }
      };

      fetchUserName();
    }
  }, [setUserName]); // Fetch user name every time the location changes
  
  
  
  useEffect(() => {
    async function fetchTotalAccounts() {
        try {
            const response = await axios.get('http://localhost:4000/TotalUsers');
            const { totalAccounts, adminAccounts, userAccounts } = response.data;
            setTotalAccounts(totalAccounts);
            setAdminAccounts(adminAccounts);
            setUserAccounts(userAccounts);
        } catch (error) {
            console.error('Error fetching total accounts:', error);
        }
    }

    fetchTotalAccounts();
}, []); // fetch account details


  return (
    <div className="admin">
   <div className='admin-landing'>

<div className="admin-nav">
    <div className="dashboard">Dashboard</div>
    <div className="admin"><div><CiUser className='icon'/> {userName}</div></div>
</div>

<div className="admin-con">
    <div className="logo-ad"><img src={logo} alt="" /></div>
    <div className="c-ad">The Future Is Bright</div>
</div>


</div>
<div className="dashboard-adm">
            <h2>Dashboard</h2>
            <div className="welcome">Hi, Samantha. Welcome back to Sedap Admin!</div>
            <div className="dash-com">
                <div className="acc-box">
                  <div className="svg"><img src={Total}alt="" /></div>
                    <div className="acc-title">
                    <div className="text">Total accounts</div>
                      <div className="count">{totalAccounts}</div>
                    </div>
                    
                </div>
                
                <div className="acc-box">
                  <div className="svg"><img src={Admin}alt="" /></div>
                    <div className="acc-title">
                      <div className="text">Total Admin Accounts</div>
                      <div className="count">{adminAccounts}</div>
                    </div>
                    
                </div>
                <div className="acc-box">
                  <div className="svg"><img src={Users}alt="" /></div>
                    <div className="acc-title"><div className="text">Total Users Accounts</div>
                      <div className="count">{userAccounts}</div></div>
                    
                </div>
            </div>
        </div>
    </div>
 
  )
}

export default AdminLanding
