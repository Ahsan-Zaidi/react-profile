import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import MessageImage from '../assets/img/icon.png';

export const Contact = () => {
    return (
        <section className='contact' id="contact">
            <Container className="align-items-center">
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt="contact us" className='contact-img' />
                    </Col>
                    <Col md={6}>
                        <h2>Contact</h2>
                            <div className='message-me'>
                                <a href="mailto:zaidiahsan.r@gmail.com" target="_blank" rel="noreferrer">
                                    <img src={MessageImage} alt='icon' className='msg-icon'/>
                                </a>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}