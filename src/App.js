import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import EmploymentHistory from './components/EmploymentHistory';
import SecondaryHeader from './components/SecondaryHeader';
import FeaturedWork from './components/FeaturedWork';
import featuredWorkData from './featuredWorkData';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

class App extends Component {
  state = {
    workData: featuredWorkData
  }

  render() {
    const featuredWorkDataComponents = this.state.workData.map(data => 
      <FeaturedWork key={data.id} featuredWorkData={data} />
    )

    return (
      <div className="content-container">
        <NavBar />
        <section className="my-info">
          <div className="container">
            <p className="my-description">Hello, I am John. I am free lance <span className="fancy">developer.</span> Living in South Pole Antarctica, currently working for <span className="fancy">twitch.</span></p>
          </div>
          <div className="container">
            <EmploymentHistory 
              when="Currently:" 
              href="https://twitch.tv" 
              imgSrc="http://www.stickpng.com/assets/thumbs/580b57fcd9996e24bc43c53d.png" 
              alt="twitch" 
              className="current-employment"
            />
            <EmploymentHistory 
              when="Previously:" 
              href="https://myagi.com/" 
              imgSrc="https://myagi.com/public-content/img/myagi-logo.png" 
              alt="myagi" 
              className="previous-employment"
            />
          </div>
        </section>
        <section className="my-career" id="work"> 
          <SecondaryHeader secondaryHeader="Featured Work" />
          <div className="featured-work__container">
            {featuredWorkDataComponents}
          </div>
          <SecondaryHeader secondaryHeader="Projects" id="projects"/>
          <div className="project-container">
            <ProjectList />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
