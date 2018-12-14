import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedWork.css';

const FeaturedWork = props => {
    return (
        <Link to={props.pathTo} className="featured-work__link">
            <div className="featured-work__wrapper">
                <img src={props.imgSrc} className="featured-work__img" alt="placeholder"/>
                <div className="featured-work__content">
                    <p className="featured-work__title">{props.title}</p>
                </div>
            </div>
        </Link>

    )
}

export default FeaturedWork;