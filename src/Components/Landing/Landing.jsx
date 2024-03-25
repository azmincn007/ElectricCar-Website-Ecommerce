import React, { useContext, useEffect } from 'react'
import './Landing.css'
import logo from '../Landing/Logo.png'
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { UserContext } from '../../App';
import axios from 'axios';

function Landing() {
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
  return (
    <div className='landing'>
    {/* Navbar */}
      <div className="nav">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="components">
          <div className="c-elements">
            <div className="elements">Models</div>
            <div className="elements">Finance</div>
            <div className="elements">Insurance</div>
          </div>
          <div className="cart-acc">
            <div className="cart"><div><CiShoppingCart className='icon'/>cart</div></div>
            <div className="account"><div><CiUser className='icon'/> {userName}</div></div>
          </div>
        </div>

      </div>

      {/* end ofNavbar */}


      <div className="contents-L">

        <div className="contents-vehicles">
          <div className="new">NEW</div>
          <div className="name">Lexus LF-30-Electrified</div>
          <div className="releasedate">available december 24</div>
        </div>

        <div className="buttons-div">
          <div className="pre-order"><button>PRE-ORDER</button></div>
          <div className="veh-details"><button>DETAILS</button></div>
        </div>
      </div>
  



    </div>
  )
}

export default Landing
