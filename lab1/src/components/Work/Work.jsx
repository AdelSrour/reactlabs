import React from "react";

export default function Work() {
  return (
    <>
      <section id="work" className="work">
        <div className="container">
          <h2 className="section-title text-center">Portfolio</h2>

          <div className="projects-grid">
            <div className="project-card">
              <div
                className="project-image"
                style={{ backgroundColor: "#2a1a3a" }}
              ></div>
              <div className="project-info">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="project-card">
              <div
                className="project-image"
                style={{ backgroundColor: "#0a2a3a" }}
              ></div>
              <div className="project-info">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="project-card">
              <div
                className="project-image"
                style={{ backgroundColor: "#3a2a1a" }}
              ></div>
              <div className="project-info">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsa.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="#" className="btn btn-outline-light">
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
