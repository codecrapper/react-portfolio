import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedWork.css';

// const FeaturedWork = props => {
//     const { pathTo, imgSrc, title } = props.featuredWorkData
//     return (
//         <Link to={pathTo} className="featured-work__link">
//             <div className="featured-work__wrapper">
//                 <img src={imgSrc} className="featured-work__img"/>
//                 <div className="featured-work__content">
//                     <p className="featured-work__title">{title}</p>
//                 </div>
//             </div>
//         </Link>

//     )
// }

const FeaturedWork = props => {
    const { pathTo, imgSrc, title,teaser } = props.featuredWorkData
    return (
        <Link to={{
            pathname: `/work/${pathTo}`,
            state: {featuredWorkData: props.featuredWorkData}
        }} 
        className="featured-work__link">
            <div className="featured-work__wrapper">
                <img src={imgSrc} className="featured-work__img"/>
                <div className="featured-work__content">
                    <p className="featured-work__title">{title}</p>
                </div>
            </div>
        </Link>

    )
}

export default FeaturedWork;