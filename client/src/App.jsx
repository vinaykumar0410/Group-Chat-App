import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import Register from "./components/Register";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";
import LoadingPage from "./components/LoadingPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const store = createContext();
const App = () => {
  const [token, setToken] = useState(null);
  return (
    <store.Provider value={[token, setToken]}>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" Component={LoadingPage}/>
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/myprofile" Component={MyProfile} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </store.Provider>
  );
};

export default App;
