import React from "react";

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title text-center">Skills & Expertise</h2>

          <div className="skills-container">
            <div className="skill-category">
              <h3>
                <i className="fas fa-pencil-ruler me-2"></i>Design
              </h3>
              <div className="skill">
                <div className="skill-info">
                  <span>UI/UX Design</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>Prototyping</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>Brand Identity</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fas fa-code me-2"></i>Development
              </h3>
              <div className="skill">
                <div className="skill-info">
                  <span>HTML/CSS</span>
                  <span>98%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>JavaScript</span>
                  <span>92%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>React</span>
                  <span>88%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fas fa-tools me-2"></i>Tools
              </h3>
              <div className="skill">
                <div className="skill-info">
                  <span>Figma</span>
                  <span>97%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "97%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>VS Code</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>Git</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
