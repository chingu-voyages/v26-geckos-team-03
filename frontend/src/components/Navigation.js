import React, { useState } from 'react';
import Login from'./Login';
import Register from'./Register';
import Hero from'./Hero';
import Footer from'./Footer';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/1.png';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../actions';

function Navigation() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegShow, setModalRegShow] = useState(false);

  return (
  <>
  <Navbar fixed="top" collapseOnSelect expand="md" bg="primary" variant="dark">
    <Navbar.Brand className="text-secondary brandText">
      <img
        alt=""
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      LibraryCard
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Button className="text-secondary" variant="danger" onClick={() => setModalLoginShow(true)}>Log In</Button>{' '}
        <Button className="text-secondary" variant="warning" onClick={() => setModalRegShow(true)}>Register</Button>{' '}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Login show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
    <Register show={modalRegShow} onHide={() => setModalRegShow(false)} />
    <Hero />
    <Footer />
  {/* <h1>Counter {counter}</h1>
  <button onClick={() => dispatch(increment(5))}>+</button>
  <button onClick={() => dispatch(decrement())}>-</button>
  {isLogged ? <h3>Some Valuable Info</h3> : ''} */}
  </>
  );
}

export default Navigation;