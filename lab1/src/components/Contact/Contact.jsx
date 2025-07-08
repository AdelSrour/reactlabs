import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Get In Touch</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="contact-info mt-5">
                <a href="mailto:test@example.com" className="contact-email">
                  Send me email
                </a>

                <div className="social-links mt-4">
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
