import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Signup from './Components/Authorisation/Signup';
import LoginPage from './Components/Authorisation/LoginPage.jsx';
import AdminLanding from './Components/Admin/AdminLanding.jsx';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Inventory from './Components/Landing/Inventory.jsx';
import cards from './Components/Landing/Cards.js';

const UserContext = createContext(); //usersdatas
const CardContext=createContext()

function App() {
  const [userName, setUserName] = useState('');
  const [CarCards]=useState(cards)




  return (
    <div>
      <CardContext.Provider value={[cards]}>
      <UserContext.Provider value={[userName,setUserName]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<> <Landing /> <Inventory/></>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/admin-landing' element={<AdminLanding />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      </CardContext.Provider>
     
    </div>
  );
}

export default App;
export { UserContext ,CardContext};
