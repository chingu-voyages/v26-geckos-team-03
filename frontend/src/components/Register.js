import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Message from '../components/Message';
import { useDispatch } from 'react-redux';
import { register } from '../actions/registerActions';

function Register(props) {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== null) {
			setMessage('please enter a password');
		} else {
			dispatch(register(username, email, password));
		}
	};

	return (
		<Modal {...props} centered aria-labelledby='register-modal'>
			{message && <Message variant='danger'>{message}</Message>}
			<Modal.Body className='show-grid'>
				<Container className='text-center'>
					<Row>
						<Col xs={12} className='text-center'>
							<h3 className='text-secondary'>
								Start creating your cards today!
							</h3>
						</Col>
						<Col sm={{ span: 10, offset: 1 }} className='text-center'>
							<Form onSubmit={submitHandler}>
								<Form.Group controlId='formName'>
									<Form.Control
										className='bg-danger formField'
										placeholder='Username'
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</Form.Group>
								<Form.Group controlId='formEmail'>
									<Form.Control
										className='bg-danger formField'
										type='email'
										placeholder='Email address'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Form.Group>
								<Form.Group controlId='formPassword'>
									<Form.Control
										className='bg-danger formField'
										type='password'
										placeholder='Password'
										value={password}
										onChange={(e) => setPassword(e.target.password)}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Button
						className='text-secondary'
						variant='warning'
						onClick={props.onHide}
					>
						Close
					</Button>
					<Button type='submit' className='text-secondary' variant='warning' on>
						Register
					</Button>
				</Container>
			</Modal.Body>
		</Modal>
	);
}

export default Register;
