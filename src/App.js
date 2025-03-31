import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import PrivateRoute from "./components/PrivateRoute";


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="w-sceen h-screen bg-richblack-900 flex flex-col overflow-hidden">
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path='/dashboard' element={
          // <PrivateRoute setisLoggedIn={setisLoggedIn}>
            <Dashboard/>
          // </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn}/>}/>
        <Route path='/signup' element={<Signup setisLoggedIn={setisLoggedIn}/>}/>
      </Routes>
    </div>
  )
}

export default App;
