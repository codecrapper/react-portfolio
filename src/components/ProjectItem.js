import React from 'react';
import './ProjectItem.css'

const ProjectItem = props => {
    const { projectUrl, title, development, type, date } = props

    return (
        <li className="project-item__list">
            <a href={projectUrl} target="_blank" className="project-link" rel="noopener noreferrer">
                <p className="project-title">{title}</p>
                <span className="project-development">{development}</span>
                <span className="project-type">{type}</span>
                <span className="project-date">{date}</span>
            </a>
        </li>
    )
}

export default ProjectItem;