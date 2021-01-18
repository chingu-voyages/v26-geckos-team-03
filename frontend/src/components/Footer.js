import React from 'react';
import logo from '../assets/1.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div className="footer text-center"> 
      <img
        alt=""
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      <hr />
      <p>© LibraryCard, Inc. 2021. We love our users!</p>
    </div>
  );
}

export default Footer;