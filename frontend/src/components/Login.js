import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {signin} from '../actions';
import { useDispatch } from 'react-redux';



function Login(props) {
  const dispatch = useDispatch();

  return (
    <Modal {...props} className="modal" centered aria-labelledby="login-modal">
      <Modal.Body className="show-grid">
        <Container className="text-center">
          <Row>
            <Col xs={12} className="text-center">
              <h3 className="text-secondary">Start creating your cards today!</h3>
            </Col>
            <Col sm={{ span: 10, offset: 1 }} className="text-center">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control className="bg-danger formField" type="email" placeholder="Email address" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control className="bg-danger formField" type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Button className="text-secondary" variant="warning" onClick={props.onHide}>Close</Button>
          <Button className="text-secondary" variant="warning" onClick={() => {props.onHide(); dispatch(signin())}}>Login</Button>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Login;