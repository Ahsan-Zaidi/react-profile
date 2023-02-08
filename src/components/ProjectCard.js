import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, Git, stack }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="projects"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br/>
                    <small>{stack}</small>
                </div>
            </div>
            <div className='project-links'>
                <a href={Git} className='btn' target="__blank">GitHub</a>
                <a href='https://github.com' className='btn'>Demo</a>
            </div>
        </Col>
    )
}