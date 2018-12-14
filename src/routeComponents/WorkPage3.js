import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPage.css'
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';

const WorkPage3 = () => {
    return (
        <div>
            <NavBar />
            <section>
               <div className="container">
                    <div className="work-wrapper">
                        <header className="work-header">
                            <span className="work-title">Swedish Site title</span>
                            <p className="work-teaser">Undervisningen skall vara kostnadsfri, åtminstone på de elementära och grundläggande stadierna</p>
                        </header>
                    </div>
                    <div className="work-image">
                        <img src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
               </div>

               <div className="container">
                   <div className="work-header">
                       <p className="work-description">Envar har rätt att fritt taga del i samhällets kulturella liv, att njuta av konsten samt att bli delaktig av 
                       vetenskapens framsteg och dess förmåner. Envar har rätt till skydd för de moraliska och materiella intressen, 
                       som härröra från varje vetenskapligt, litterärt eller konstnärligt verk, 
                       till vilket han är upphovsman.<a href="https://www.google.com/" target="_blank" className="work-site__link">Visit Site</a></p>
                   </div>
               </div> 

               <div className="route-links">
                   <Link to="/" className="route-return__home link-btn">
                       <span className="route-home__text">Return Home</span>
                   </Link>
                   <Link to="/work4" className="route-next__project link-btn">
                       <span className="route-project__text">Next Project</span>
                   </Link>
               </div>
            </section>
            <Footer />
        </div>
    )
}

export default WorkPage3;