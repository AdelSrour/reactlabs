import React, { useEffect, useState } from "react";
import Users from "./Users.json";
import Usercard from "../Usercard/Usercard";
import "./Home.css";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [errorMessage, setError] = useState("");
  useEffect(() => {
    setUsers(Users);
  }, []);

  function searchUsers(searchInput) {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(searchInput)) {
      setError(`${searchInput} is not a valid email!`);
      setUsers(Users);
      return;
    }
    let foundResults = Users.filter((userData) => {
      return userData.email.toLowerCase() === searchInput.toLowerCase();
    });
    if (foundResults.length > 0) {
      setError("");
      setUsers(foundResults);
    } else {
      setError(`No results for ${searchInput} Try again!`);
      setUsers(Users);
    }
  }
  return (
    <>
      <div className="container mt-5 px-5">
        <div className="search-container">
          <div className="input-group mb-3 shadow-sm">
            <input
              type="email"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                searchUsers(event.target.value);
              }}
              className="form-control search-input"
              placeholder="Search emails..."
              aria-label="Search emails"
            />
          </div>
          <div className="form-text text-danger text-start">
            {search ? errorMessage : ""}
          </div>
        </div>
        <div className="row g-4 mt-2 w-100">
          {users.map((user) => {
            return (
              <div key={user.id} className="col-12 col-md-6">
                <Usercard userData={user} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
