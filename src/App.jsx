import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css';
import Users from './assets/Users';
import CreateUser from './assets/CreateUser';
import UpdateUser from './assets/UpdateUser';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update' element={<UpdateUser/>}></Route>

          
          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
