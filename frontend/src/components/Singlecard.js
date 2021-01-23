import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ramen from '../assets/4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Editcard from './Editcard';

function Singlecard() {
  const [modalCardShow, setModalCardShow] = useState(false);
  
  return (
    <>
    <Card className="libcard">
      <div className="cardpic">
        <Row className="cardbtns">
          <Col className="text-left">
            <FontAwesomeIcon icon="edit" size="2x" color="#25747D" onClick={() => setModalCardShow(true)} />
          </Col>
          <Col className="text-right">
            <FontAwesomeIcon icon="times" size="2x" color="#25747D" />
          </Col>
        </Row>
        <Card.Img src={ramen} />
      </div>
      <Card.Body className="cardbody">
        <Row>
          <Col className="text-left">
            <h6>Food</h6>
          </Col>
          <Col className="text-right">
            <h6>3 days ago</h6>
          </Col>
        </Row>
        <Card.Title>Ramen Danbo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Editcard show={modalCardShow} onHide={() => setModalCardShow(false)} />
    </>
  );
}

export default Singlecard;