import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPage.css'
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';



class WorkPage extends React.Component {
    state = {
        workPageData: []
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
            workPageData: this.props.location.state.featuredWorkData
        })
        console.log(this.props.location.state.featuredWorkData)
    }

    render() {
        const { title, teaser, imgSrc, description, nextPath } = this.state.workPageData;

        return (
            <div>
                <NavBar />
                <section>
                   <div className="container">
                        <div className="work-wrapper">
                            <header className="work-header">
                                {/* <span className="work-title">{this.props.location.state.featuredWorkData.title}</span> */}
                                <span className="work-title">{title}</span>
                                <p className="work-teaser">{teaser}</p>
                            </header>
                        </div>
                        <div className="work-image">
                            <img src={imgSrc} />
                        </div>
                   </div>
    
                   <div className="container">
                       <div className="work-header">
                           <p className="work-description">{description}<a href="https://www.google.com/" target="_blank" className="work-site__link">Visit Site</a></p>
                       </div>
                   </div> 
    
                   <div className="route-links">
                       <Link to="/" className="route-return__home link-btn">
                           <span className="route-home__text">Return Home</span>
                       </Link>
                       {/* <Link to="/work2" className="route-next__project link-btn"> */}
                       {/* NEED TO FIX THIS DODGY PART BENEATH */}
                       <Link to={{pathname:`/work${nextPath}`}} className="route-next__project link-btn">
                           <span className="route-project__text">Next Project</span>
                       </Link>
                   </div>
                </section>
                <Footer />
            </div>
        )
    }
   
}

export default WorkPage;