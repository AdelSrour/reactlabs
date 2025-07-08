import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2025 All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
