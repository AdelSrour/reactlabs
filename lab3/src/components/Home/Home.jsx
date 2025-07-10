import { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Moviecard from "../Moviecard/Moviecard";
import Spinner from "../Spinner/Spinner";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  function fetchMovies() {
    setErrorMessage(null);
    setIsLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=f7078bdc341259627640210003c29a20"
      )
      .then((response) => {
        setErrorMessage(null);
        setIsLoading(false);
        setMovies(response.data.results);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="home-section bg-body-secondary">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Welcome to our movie app</h1>
          <p className="lead mb-4">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
      </div>

      <div className="container mb-5">
        <h2 className="mb-4">Popular Movies</h2>
        <div className="row">
          {isLoading ? <Spinner /> : ""}
          {!isLoading & !errorMessage
            ? movies.map((movie) => {
                return <Moviecard movieData={movie} />;
              })
            : ""}
          {!isLoading && errorMessage ? (
            <div className="p-4 text-center text-white bg-danger">
              An error has occured, error message: {errorMessage}
              <div className="mt-2 text-center">
                <button
                  className="btn btn-primary py-2 px-4"
                  onClick={fetchMovies}
                >
                  {" "}
                  <i className="fa-solid fa-arrows-rotate me-2"></i>
                  Retry
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
