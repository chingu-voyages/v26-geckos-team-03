import React, { useState } from 'react';
import Register from './Register';
import hero from '../assets/hero.jpg';
import hero2 from '../assets/2.png';
import hero3 from '../assets/3.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero() {
	const [modalRegShow, setModalRegShow] = useState(false);

	return (
		<>
			<Jumbotron className='hero text-center'>
				<img src={hero} alt='' />
				<h2 className='text-secondary'>
					Remember Anything, Anytime , Anywhere
				</h2>
				<a id='fancyBtn' onClick={() => setModalRegShow(true)}>
					<svg>
						<rect></rect>
					</svg>
					<span>Join Today</span>
				</a>
			</Jumbotron>
			<Jumbotron className='hero2 text-center'>
				<Row>
					<Col xs={12} md={6} className='my-auto'>
						<img src={hero2} alt='' />
					</Col>
					<Col xs={12} md={6} className='my-auto'>
						<h2 className='text-secondary'>
							Create colorful Library Cards for anything!
						</h2>
					</Col>
				</Row>
			</Jumbotron>
			<Jumbotron className='hero3 text-center'>
				<Row>
					<Col xs={12} md={6} className='my-auto d-none d-md-block'>
						<h2 className='text-secondary'>
							View, Edit and Delete your Library Cards!
						</h2>
					</Col>
					<Col xs={12} md={6} className='my-auto d-none d-md-block'>
						<img src={hero3} alt='' />
					</Col>
					<Col xs={12} md={6} className='my-auto d-block d-md-none'>
						<img src={hero3} alt='' />
					</Col>
					<Col xs={12} md={6} className='my-auto d-block d-md-none'>
						<h2 className='text-secondary'>
							View, Edit and Delete your Library Cards!
						</h2>
					</Col>
				</Row>
			</Jumbotron>
			<Register show={modalRegShow} onHide={() => setModalRegShow(false)} />
		</>
	);
}

export default Hero;
