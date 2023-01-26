import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    return (
        <section className='contact' id="connect">
            <Container className="align-items-center">
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt="contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <small>Feel free to reach out to me at...</small>
                        <div className='email-info'>
                            <h4>zaidiahsan.r@gmail.com</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}