import React from "react";
import "./Details.css";
import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

export default function Details() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  function fetchMovie() {
    setErrorMessage(null);
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=f7078bdc341259627640210003c29a20`
      )
      .then((response) => {
        setErrorMessage(null);
        setIsLoading(false);
        setMovieInfo(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className="container mt-5 p-5">
        <Link to={"/"} className=" text-decoration-none">
          <i className="fa-solid fa-backward me-2 mb-4"></i> Go Back
        </Link>
        {isLoading ? <Spinner /> : ""}
        {!isLoading & !errorMessage ? (
          <div className="row justify-content-between">
            <div className="col-4">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + movieInfo.poster_path
                }
                className="img-fluid rounded-4 shadow-lg"
                alt={movieInfo.title}
              />
            </div>

            <div className="col-8">
              <div className="p-4 bg-light bg-opacity-10 rounded-4">
                <h2 className="h4 mb-3">
                  <i className="fas fa-film text-primary me-2"></i>
                  Title: {movieInfo.title}
                </h2>

                <p className="mb-3">
                  <i className="fas fa-quote-left text-secondary me-2"></i>
                  Tagline:{" "}
                  <span className="fst-italic">{movieInfo.tagline}</span>
                </p>

                <p className="mb-0">
                  <i className="fas fa-info-circle text-info me-2"></i>
                  Status:{" "}
                  <span className="badge bg-info bg-opacity-25 text-info">
                    {movieInfo.status}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {!isLoading && errorMessage ? (
          <div className="p-4 text-center text-white bg-danger">
            An error has occured, error message: {errorMessage}
            <div className="mt-2 text-center">
              <button
                className="btn btn-primary py-2 px-4"
                onClick={fetchMovie}
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
    </>
  );
}
