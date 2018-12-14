import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPage.css'
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';

const WorkPage2 = () => {
    return (
        <div>
            <NavBar />
            <section>
               <div className="container">
                    <div className="work-wrapper">
                        <header className="work-header">
                            <span className="work-title">Lorem Site title</span>
                            <p className="work-teaser">Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </header>
                    </div>
                    <div className="work-image">
                        <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
               </div>

               <div className="container">
                   <div className="work-header">
                       <p className="work-description">At volutpat diam ut venenatis. Gravida dictum fusce ut placerat orci nulla pellentesque. 
                       Sit amet facilisis magna etiam tempor orci eu lobortis. Nunc consequat interdum varius sit amet mattis. 
                       Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Volutpat blandit aliquam etiam erat velit. 
                       Nibh venenatis cras sed felis. Tristique senectus et netus et malesuada. Vel facilisis volutpat est velit egestas dui id ornare. 
                       Neque gravida in fermentum et. Ac auctor augue mauris augue neque gravida in fermentum et. Sit amet nisl purus in. 
                       Semper auctor neque vitae tempus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Non blandit massa enim nec dui. 
                       Nunc id cursus metus aliquam eleifend mi in. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. 
                       Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.<a href="https://www.google.com/" target="_blank" className="work-site__link">Visit Site</a></p>
                   </div>
               </div> 

               <div className="route-links">
                   <Link to="/" className="route-return__home link-btn">
                       <span className="route-home__text">Return Home</span>
                   </Link>
                   <Link to="work3" className="route-next__project link-btn">
                       <span className="route-project__text">Next Project</span>
                   </Link>
               </div>
            </section>
            <Footer />
        </div>
    )
}

export default WorkPage2;