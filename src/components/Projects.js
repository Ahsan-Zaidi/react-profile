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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}