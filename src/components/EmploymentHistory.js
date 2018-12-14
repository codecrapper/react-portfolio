import React from 'react';
import './EmploymentHistory.css';

const EmploymentHistory = props => {
    return (
        <div className="my-employment">
            <p className="employer-label">{props.when}</p>
            <a href={props.href} target="_blank" rel="noopener noreferrer"><img className={props.className} src={props.imgSrc} alt={props.alt}/></a>
        </div>
    )
}

export default EmploymentHistory;