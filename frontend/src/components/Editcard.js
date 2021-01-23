import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Editcard(props) {
  const handleSubmit = () => {

  }
  
  
  
  return (
    <Modal {...props} className="modal" centered aria-labelledby="login-modal">
      <Modal.Body className="show-grid">
        <Container className="text-center">
          <Row>
            <Col xs={12} className="text-center">
              <h3 className="text-secondary">Editing Card/Add Card</h3>
            </Col>
            <Col sm={{ span: 10, offset: 1 }} className="text-center">
              <Form>
                <Form.Group>
                  <Button className="text-secondary iconBtn" variant="warning">Add Icon <FontAwesomeIcon icon="plus-circle" size="lg" color="#25747D" /></Button>
                </Form.Group>
                <Form.Group controlId="formBasicCategory">
                  <Form.Control className="bg-danger formField" placeholder="Category" />
                </Form.Group>
                <Form.Group controlId="formBasicCardtitle">
                  <Form.Control className="bg-danger formField" placeholder="Card title" />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                  <Form.Control className="bg-danger formField" placeholder="Short description" as="textarea" rows={4} />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Button className="text-secondary" variant="warning" onClick={props.onHide}>Close</Button>
          <Button className="text-secondary" variant="warning" onClick={props.onHide}>Clear</Button>
          <Button className="text-secondary" variant="warning" type="submit" onSubmit={handleSubmit}>Save</Button>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Editcard;