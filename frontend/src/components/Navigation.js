import React, { useState, useEffect } from 'react';
import Login from'./Login';
import Register from'./Register';
import Hero from'./Hero';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/1.png';
import { signin, getCards } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import Displaycards from './Displaycards';
import Editcard from './Editcard';



function Navigation() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegShow, setModalRegShow] = useState(false);
  const [modalCardShow, setModalCardShow] = useState(false);


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
        {isLogged ?
        <>
        <Button className="text-secondary" variant="danger" onClick={() => setModalCardShow(true)}>Add Card</Button>
        <Button className="text-secondary" variant="warning" onClick={() => {dispatch(signin())}}>Log Out</Button>
        </>
         : 
        <>
        <Button className="text-secondary" variant="danger" onClick={() => setModalLoginShow(true)}>Log In</Button>
        <Button className="text-secondary" variant="warning" onClick={() => setModalRegShow(true)}>Register</Button>
        </>}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Login show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
    <Register show={modalRegShow} onHide={() => setModalRegShow(false)} />
    <Editcard show={modalCardShow} onHide={() => setModalCardShow(false)} />
    {isLogged ? <Displaycards /> : <Hero />}
  </>
  );
}

export default Navigation;