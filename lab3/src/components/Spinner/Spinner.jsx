import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <>
      <div className="loading-overlay">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading...</p>
        </div>
      </div>
    </>
  );
}
