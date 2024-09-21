import React from 'react';
import heroImage from "../../assets/hero-img.png";
import "./Home.css";
const Home = () => {
    return (
    <section id="hero" className="HomeContainer">
      <div className="">
        <div className="HomeFlex">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up" className="aos-init aos-animate">Sync '23</h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">
              17th and 18th October, 2023
            </h2>
            <div data-aos="fade-up" data-aos-delay="800" className="aos-init aos-animate">
              <h2>Disconnect 🔌 to Reconnect ✨</h2>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
            <img src={heroImage} className="img-fluid animated" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
    );
}

export default Home;
