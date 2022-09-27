import logo from './logo.svg';
import './App.css';
import { signin, signup } from '../../backend/controllers/auth';
import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import  '../../backend'


function App() {
  return (
    <div> 
      <BrowserRouter>
            {/* <Routes>   */}
                  {/* <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} />
                  </Route>
                  </Routes> */}
                  </BrowserRouter>
                  <label>Username : </label>   
                  <input type="text" placeholder="Enter Username" name="username" required="true" />  
                  <label>Password : </label>   
                  <input type="password" placeholder="Enter Password" name="password" required="true" />  
                  <button type="button" onClick={signin}>Login</button> 
                  <button type="button" onClick={signup}> Signup</button>
                  <input type="checkbox" checked="checked" /> Remember me   
                  <button type="button" class="cancelbtn"> Cancel</button>   
                  
    </div>
  );
}

export default App;
