import React from "react";
import "./Usercard.css";

export default function Usercard({ userData }) {
  return (
    <>
      <div className="user-card card shadow-sm p-4 mx-auto position-relative">
        <div className="d-flex flex-column align-items-center text-center mb-3">
          <div className="user-avatar bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-3">
            <i className="fas fa-user"></i>
          </div>
          <h4 className="mb-1">{userData?.username}</h4>
          <i
            className={
              userData?.isValid
                ? "fa-solid fa-star position-absolute fs-3 text-secondary"
                : "fa-solid fa-star position-absolute fs-3 text-warning"
            }
            style={{ top: "50px", right: "50px" }}
          ></i>
          <span className="text-muted">{userData?.phoneNumber}</span>
        </div>

        <div className="card-body p-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="fas fa-id-card me-2 text-muted"></i> User ID
              </span>
              <span className="fw-bold">{userData?.id}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="fas fa-user me-2 text-muted"></i> Name
              </span>
              <span className="fw-bold">{userData?.username}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="fas fa-envelope me-2 text-muted"></i> Email
              </span>
              <span className="text-break text-end">{userData?.email}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
