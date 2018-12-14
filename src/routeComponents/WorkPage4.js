import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPage.css'
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';

const WorkPage4 = () => {
    return (
        <div>
            <NavBar />
            <section>
               <div className="container">
                    <div className="work-wrapper">
                        <header className="work-header">
                            <span className="work-title">Korean Site title</span>
                            <p className="work-teaser">의 목표는 빅데이터 등에서 간단한 한국어 처리를 통해 색인어를 추출하는 데에 있습니다</p>
                        </header>
                    </div>
                    <div className="work-image">
                        <img src="https://images.pexels.com/photos/52547/lantern-festival-seoul-cheonggyecheon-stream-lantern-52547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
               </div>

               <div className="container">
                   <div className="work-header">
                       <p className="work-description">스칼라로 쓰여진 한국어 처리기입니다. 현재 텍스트 정규화와 형태소 분석, 
                       스테밍을 지원하고 있습니다. 짧은 트윗은 물론이고 긴 글도 처리할 수 있습니다. 
                       개발에 참여하시고 싶은 분은 에 가입해 주세요. 사용법을 알고자 하시는 초보부터 
                       코드에 참여하고 싶으신 분들까지 모두 환영합니다.<a href="https://www.google.com/" target="_blank" className="work-site__link">Visit Site</a></p>
                   </div>
               </div> 

               <div className="route-links">
                   <Link to="/" className="route-return__home link-btn">
                       <span className="route-home__text">Return Home</span>
                   </Link>
                   <Link to="/work1" className="route-next__project link-btn">
                       <span className="route-project__text">Next Project</span>
                   </Link>
               </div>
            </section>
            <Footer />
        </div>
    )
}

export default WorkPage4;