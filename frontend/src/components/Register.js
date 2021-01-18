import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Register(props) {
  return (
    <Modal {...props} centered aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body className="show-grid">
        <Container className="text-center">
          <Row>
            <Col xs={12} className="text-center">
              <h3 className="text-secondary">Start creating your cards today!</h3>
            </Col>
            <Col xs={{ span: 10, offset: 1 }} className="text-center">
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Row>
                    <Col>
                      <Form.Control className="bg-danger formField" placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control className="bg-danger formField" placeholder="Last name" />
                    </Col>
                  </Form.Row>
                </Form.Group>
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
          <Button className="text-secondary" variant="warning">Register</Button>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Register;