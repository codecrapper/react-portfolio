import React from 'react';
import ProjectItem from './ProjectItem';

const divStyle = {
    // display: "flex",
    // flexFlow: "row wrap",
    // width: "90%",
    // maxWidth: "1400px",
    // marginRight: "auto",
    // marginLeft: "auto",
    width: "99.3%",
    padding: "0 5px",
    paddingBottom: "50px"
}

const ProjectList = () => {
    return (
        <ul style={divStyle}>
            <ProjectItem
                projectUrl="https://www.google.com/" 
                title="Google" 
                development="Development" 
                type="Freelance" 
                date="1992"
            />
            <ProjectItem 
                projectUrl="https://www.google.com/"
                title="Tetris" 
                development="Development" 
                type="Personal" 
                date="2016"
            />
            <ProjectItem
                projectUrl="https://www.google.com/" 
                title="V.R Game" 
                development="Development" 
                type="Personal" 
                date="2017"
            />
            <ProjectItem 
                projectUrl="https://www.google.com/"
                title="Portfolio" 
                development="Development" 
                type="Personal" 
                date="2018"
            />
            <ProjectItem 
                projectUrl="https://www.google.com/"    
                title="Random Shit" 
                development="Development" 
                type="Freelance" 
                date="2018"
            />
            <ProjectItem
                projectUrl="https://www.google.com/" 
                title="Porn Site" 
                development="Development" 
                type="Personal" 
                date="2018"
            />

        </ul>
    )
}

export default ProjectList;