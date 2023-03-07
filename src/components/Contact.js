import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const SERVICE = process.env.REACT_APP_SERVICE;
    const TEMPLATE = process.env.REACT_APP_TEMPLATE;
    const KEY = process.env.REACT_APP_KEY;

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(SERVICE, TEMPLATE, form.current, KEY)
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            console.log("success")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section className='contact' id="contact">
            <Container className="align-items-center">
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt="contact us" className='contact-img' />
                    </Col>
                    <Col md={6}>
                        <div className='contact-form'>
                            <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}