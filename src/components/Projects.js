import { Nav, Tab } from "react-bootstrap";

export const Projects = () => {
    const projects = [
        {
            title: "BookSpot",
            description: "Find your favorite book",
            imgUrl: projImg1,
        },
        {
            title: "Gericht",
            description: "Restaurant Website",
            imgUrl: projImg2,
        },
        {
            title: "Project Mgmt",
            description: "Managment System",
            imgUrl: projImg3,
        },
        {
            title: "Password Generator",
            description: "Generates unique passwords",
            imgUrl: projImg4,
        },
        {
            title: "Snake",
            description: "Classic snake game",
            imgUrl: projImg5,
        },
        {
            title: "Pizza Hunt",
            description: "Style your pizza",
            imgUrl: projimg6
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry's standard dummy text.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
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
                                                    <p>{project.title}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}