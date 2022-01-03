import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Componentes/User/User";
import Rotaprotegida from "./Componentes/Helper/Rotaprotegida";

const App = () => {
  return (
    <div className=".">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Rotaprotegida path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
