import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, Git, demo }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="projects"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <div className='project-links'>
                <a href={Git} className='btn' target="__blank" rel="norefferrer">GitHub</a>
                <a href={demo} className='btn' target="__blank" rel="norefferrer">Demo</a>
            </div>
        </Col>
    )
}