import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import style from "./navbar.module.css";
import { Routes, Route, Link } from "react-router-dom";
import Uzbekistan from './Uzbekistan'
import Jahon from './Jahon'
import Sport from './Sport'
import Auth from '../SignIn/Auth'
import ErrorPage from './ErrorPage'
export default function NavbarItem() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className={style.content}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <div className={style.main}>
            <Link to="/">Uzbekistan</Link>
            <Link to="/jahon">Jahon</Link>
            <Link to="/sport">sport</Link>
            <Link to="/register">Register</Link>
          </div>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Uzbekistan/>} />
          <Route path="/jahon" element={<Jahon/>} />
          <Route path="/sport" element={<Sport/>} />
          <Route path="/register" element={<Auth/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
    </div>
  );
}
