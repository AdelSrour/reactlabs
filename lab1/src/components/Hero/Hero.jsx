import React from "react";

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">
                I'm <span className="text-highlight">Adel</span>
              </h1>
              <h2 className="hero-subtitle">Lorem ipsum dolor sit amet.</h2>
              <div className="hero-line"></div>
              <p className="hero-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
                facilis!
              </p>
              <a href="#work" className="btn btn-outline-light btn-lg">
                View Work
              </a>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <div className="hero-image"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
