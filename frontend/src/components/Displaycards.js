import React, { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Singlecard from'./Singlecard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';



function Displaycards() {

  const cards = useSelector((state) => state.cards);

  console.log(cards);
  
  return (
    <Jumbotron className="text-center cardsdisplay">
      <Row>
        <Col xs={12} sm={6} lg={4} xl={3}>
          <Singlecard />
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default Displaycards;