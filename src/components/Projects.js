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
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
    const projects = [
        {
            title: "BookSpot",
            description: "Find your favorite book",
            imgUrl: projImg1,
            Git: "https://github.com/Ahsan-Zaidi/library",
        },
        {
            title: "Weather-app",
            description: "Check the forecast for today",
            imgUrl: projImg7,
            Git: "https://github.com/Ahsan-Zaidi/weather-app", 
        },
        {
            title: "OpenAI Image-generator",
            description: "Generate an image using AI",
            imgUrl: projImg8,
            Git: "https://github.com/Ahsan-Zaidi/ai-image-generator",
        },
        {
            title: "Project Mgmt",
            description: "Managment System",
            imgUrl: projImg3,
            Git: "https://github.com/Ahsan-Zaidi/project-mgmt",
        },
        {
            title: "Gericht",
            description: "Restaurant Website",
            imgUrl: projImg2,
            Git: "https://github.com/Ahsan-Zaidi/Restaurant",
        },
        {
            title: "Code Quiz",
            description: "Test your coding skills",
            imgUrl: projImg6,
            Git: "https://github.com/Ahsan-Zaidi/code-quiz",
        },
    ];

    const games = [
        {
            title: "Snake",
            description: "Classic snake game",
            imgUrl: projImg5,
            Git: "https://github.com/Ahsan-Zaidi/snake",
        },
        {
            title: "Password Generator",
            description: "Generates unique passwords",
            imgUrl: projImg4,
            Git: "https://github.com/Ahsan-Zaidi/Password-Generator",
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry's standard dummy text.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
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
                                            games.map((game, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...game}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">Coming soon...</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg"></img> 
        </section>
    )
}