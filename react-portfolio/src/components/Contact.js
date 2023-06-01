import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section>
            <Container>
                <h2 className="text-center" style={{ color: 'white' }}>Contact</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label style={{ color: 'white' }}>Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{ color: 'white' }}>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{ color: 'white' }}>Message:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    value={message}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            {errorMessage && <p>{errorMessage}</p>}
                            <div className="text-center mb-3">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;


