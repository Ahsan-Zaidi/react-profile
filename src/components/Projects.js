import { Nav, Tab, Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/project-img1.jpg';
import projImg2 from '../assets/img/project-img2.jpg';
import projImg3 from '../assets/img/project-img3.jpg';
import projImg4 from '../assets/img/project-img4.jpg';
import projImg5 from '../assets/img/project-img5.jpg';
import projImg6 from '../assets/img/project-img6.jpg';
import projImg7 from '../assets/img/project-img7.jpg';
import projImg8 from '../assets/img/project-img8.jpg';
import projImg9 from '../assets/img/project-img9.jpg';
import projImg10 from '../assets/img/project-img10.jpg';
import projImg11 from '../assets/img/project-img11.jpg';
import projImg12 from '../assets/img/project-img12.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
    const project = [
        {
            title: "BookSpot",
            description: "Find your favorite book",
            imgUrl: projImg1,
            Git: "https://github.com/Ahsan-Zaidi/library",
            demo: "https://ahsan-zaidi.github.io/library/",
        },
        {
            title: "Weather-app",
            description: "Check the forecast for today",
            imgUrl: projImg2,
            Git: "https://github.com/Ahsan-Zaidi/weather-app", 
            demo: "https://ahsan-zaidi.github.io/weather-app/",
        },
        {
            title: 'Getup-Exercise',
            description: 'Find a workout plan for you',
            imgUrl: projImg3,
            Git: "https://github.com/Ahsan-Zaidi/getup-exercise",
            demo: "https://ahsan-zaidi.github.io/getup-exercise/",
        },
        {
            title: "OpenAI Image-generator",
            description: "Generate an image using AI",
            imgUrl: projImg4,
            Git: "https://github.com/Ahsan-Zaidi/ai-image-generator",
            demo: "https://ai-imager-generator.herokuapp.com/",
        },
        {
            title: "Password Generator",
            description: "Generates unique passwords",
            imgUrl: projImg5,
            Git: "https://github.com/Ahsan-Zaidi/Password-Generator",
            demo: "https://ahsan-zaidi.github.io/Password-Generator/",
        },
        {
            title: "Code Quiz",
            description: "Test your coding skills",
            imgUrl: projImg6,
            Git: "https://github.com/Ahsan-Zaidi/code-quiz",
            demo: "https://ahsan-zaidi.github.io/code-quiz/",
        },
    ];

    const back = [
        {
            title: "Social-Network-API",
            description: "Backend for social network application",
            imgUrl: projImg7,
            Git: "https://github.com/Ahsan-Zaidi/social-network-api",
            demo: "https://drive.google.com/file/d/1ZwwHqGmNV0h2rFRgYWEclB5eyTrkMZgY/view",
        },
        {
            title: "E-commerceBackend",
            description: "Backend for E-commerce website",
            imgUrl: projImg8,
            Git: "https://github.com/Ahsan-Zaidi/E-commerceBackEnd",
            demo: "https://drive.google.com/file/d/1i6h5b16PV9I6zQcw4MDxrY1itr1n1tIz/view",
        },
        {
            title: "Employee tracker",
            description: "Create employee db and tracker",
            imgUrl: projImg9,
            Git: "https://github.com/Ahsan-Zaidi/employee-tracker",
            demo: "https://drive.google.com/file/d/1X21YXxitS_ct1jO-uGpZrInnYf5zCf98/view",
        },
        {
            title: "Team Profile Generator",
            description: "Generate a team",
            imgUrl: projImg10,
            Git: "https://github.com/Ahsan-Zaidi/Team-profile-generator",
            demo: "https://drive.google.com/file/d/1p0kVXyS-H-BAyzsLsza3SgoFIVw4tzEb/view",
        },
        {
            title: "Readme-Generator",
            description: "Generate a Readme for your app",
            imgUrl: projImg12,
            Git: "https://github.com/Ahsan-Zaidi/Readne-generator",
            demo: "https://drive.google.com/file/d/1GknSzP1lqrjLOETl662ufiwEhvzGG1QA/view",
        },
    ];

    const fullstack = [
        {
            title: "Project Mgmt",
            description: "Managment System",
            imgUrl: projImg11,
            Git: "https://github.com/Ahsan-Zaidi/project-mgmt",
            demo: "https://drive.google.com/file/d/1Bh4CPU0IiauVqCoH7DlU9Dydv5tdVp94/view",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Take a look at my applications<br/>Head over to the GitHub link to find out more!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Frontend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Backend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Fullstack</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            project.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            back.map((back, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...back}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            fullstack.map((fullstack, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...fullstack}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg"></img> 
        </section>
    )
}