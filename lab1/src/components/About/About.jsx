import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="section-title">About Me</h2>
              <div className="about-image-container">
                <div className="about-image"></div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content">
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  eveniet, laborum commodi delectus corrupti asperiores quo
                  nemo, tempora dolorum dicta voluptatum illum maiores,
                  perferendis sequi magni placeat doloremque quod. Beatae.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  ut laborum quasi repellat et nostrum obcaecati distinctio modi
                  ratione quidem!
                </p>

                <div className="skills-matrix mt-5">
                  <div className="skill-category">
                    <h4>Lorem.</h4>
                    <ul>
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Lorem, ipsum.</h4>
                    <ul>
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>
                </div>

                <a href="#" className="btn btn-outline-light mt-4">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
