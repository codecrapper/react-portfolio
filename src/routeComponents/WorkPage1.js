import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPage.css'
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';

const WorkPage1 = () => {
    return (
        <div>
            <NavBar />
            <section>
               <div className="container">
                    <div className="work-wrapper">
                        <header className="work-header">
                            <span className="work-title">Japanese Site title</span>
                            <p className="work-teaser">名倍手 吾己曽座 我 許 背齒 告目 家呼毛名雄母</p>
                        </header>
                    </div>
                    <div className="work-image">
                        <img src="https://images.pexels.com/photos/1108297/pexels-photo-1108297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
               </div>

               <div className="container">
                   <div className="work-header">
                       <p className="work-description">[仮名],こもよ,みこもち,ふくしもよ,みぶくしもち,このをかに,なつますこ,いへきかな,のらさね,そらみつ,
                       やまとのくには,おしなべて,われこそをれ,しきなべて,われこそませ,われこそば,のらめ,いへをもなをも. やまとには,むらやまあれど,
                       とりよろふ,あめのかぐやま,のぼりたち,くにみをすれば,くにはらは,けぶりたちたつ,うなはらは,かまめたちたつ,うましくにぞ,
                       あきづしま,やまとのくには<a href="https://www.google.com/" target="_blank" className="work-site__link">Visit Site</a></p>
                   </div>
               </div> 

               <div className="route-links">
                   <Link to="/" className="route-return__home link-btn">
                       <span className="route-home__text">Return Home</span>
                   </Link>
                   <Link to="/work2" className="route-next__project link-btn">
                       <span className="route-project__text">Next Project</span>
                   </Link>
               </div>
            </section>
            <Footer />
        </div>
    )
}

export default WorkPage1;