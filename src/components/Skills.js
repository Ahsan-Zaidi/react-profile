import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Meter1 from '../assets/img/meter1.png';
import Meter2 from '../assets/img/meter2.png';
import Meter3 from '../assets/img/meter3.png';
import Meter4 from '../assets/img/meter4.png';
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
                            <p>Check out what skills I have to offer!<br></br>My goal is to expand this list to include many more languages and technologies</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={Meter1} alt="meter" />
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
                                    <img src={Meter2} alt="meter" />
                                    <h5>BACKEND</h5>
                                    <ul className='skill-item-list'>
                                        <li>Node JS</li>
                                        <li>Express</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>GraphQL</li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={Meter3} alt="meter" />
                                    <h5>TECHNOLOGY</h5>
                                    <ul className='skill-item-list'>
                                        <li>GitHub</li>
                                        <li>Heroku</li>
                                        <li>Insomnia</li>
                                        <li>Jest</li>
                                        <li>VS code</li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={Meter4} alt="meter" />
                                    <h5>INTANGIBLES</h5>
                                    <ul className='skill-item-list'>
                                        <li>SS API</li>
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
            <img className="background-image-left" src={colorSharp} alt="background1" />
        </section>
    )
}