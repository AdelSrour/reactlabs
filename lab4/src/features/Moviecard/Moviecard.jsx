import React from "react";
import { Link } from "react-router";

export default function Moviecard({ movieData }) {
  return (
    <>
      <div className="col-md-4 col-lg-3">
        <Link
          to={"/details/" + movieData.id}
          className="movie-card p-3 shadow-lg"
        >
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieData.poster_path}
            className="w-100 rounded-5 mb-3"
          />
          <h5 className="movie-title">{movieData.original_title}</h5>
          <p className="movie-date">{movieData.release_date}</p>
        </Link>
      </div>
    </>
  );
}
