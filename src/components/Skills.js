import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>FRONTEND</h5>
                                    <ul className='skill-item-list'>
                                        <li>Html5</li>
                                        <li>Css</li>
                                        <li>Javascript</li>
                                        <li>REACT</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>BACKEND</h5>
                                    <ul className='skill-item-list'>
                                        <li>Node JS</li>
                                        <li>Express</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>Python</li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>TECHNOLOGIES</h5>
                                    <ul className='skill-item-list'>
                                        <li>GitHub</li>
                                        <li>Heroku</li>
                                        <li>Insomnia</li>
                                        <li>Jest</li>
                                        <li>VS code</li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>INTANGIBLES</h5>
                                    <ul className='skill-item-list'>
                                        <li>Server Side API</li>
                                        <li>REST API</li>
                                        <li>OOP</li>
                                        <li>MVC</li>
                                        <li>MERN</li>
                                    </ul>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}