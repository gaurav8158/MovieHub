import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { getData } from "../Function/getData";
import BookingForm from "../BookingForm/BookingForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Header/Header";
const Moviepage = () => {
  const [movieList, setMovieList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    await getData(setMovieList);
  };

  let movieData = movieList.filter((val) => val.show.id == id);
  const content = movieData[0]?.show?.summary;

  return (
    <>
     <Header/>
     <div className="bg-dark text-light container mt-4">
      <div className="row">
        {/* Left side - Movie Poster */}
        <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{
           type: "spring",
           duration: 0.9,
           delay: 0.1,
         }}
        className="col-md-4">
          <div className="card-movie-box">
            <img
              src={movieData[0] && movieData[0]?.show?.image?.original}
              alt="Movie Poster"
              className="card-movie-img img-fluid rounded"
            />
          </div>

          <Card.Text className="fs-5 shadow bg-dark text-center">
            In Cinemas
          </Card.Text>
        </motion.div>

        {/* Right side - Movie Details */}
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.9,
          delay: 0.1,
        }}
        className="col-md-8">
          <h2 className="font-weight-bold"> {movieData[0]?.show?.name}</h2>
          <p>
            <strong>Date:</strong> {movieData[0]?.show?.premiered}
          </p>
          <p>
            <strong>Genres:</strong> {movieData[0]?.show?.genres.join(", ")}
          </p>
          <p>
            <strong>Time:</strong> {movieData[0]?.show?.schedule?.time}{" "}
          </p>
          <p>
            <strong>Language:</strong> {movieData[0]?.show?.language}
          </p>
          <p>
            <strong>Day:</strong>{" "}
            {movieData[0]?.show?.schedule?.days.map((val) => val)}
          </p>
          <p>
            <strong>Type: </strong>
            {movieData[0]?.show?.type}
          </p>
          <p>
            <strong>Rating: </strong>
            {movieData[0]?.show?.rating?.average}/10
          </p>

          {/* Book Ticket Button */}
          <BookingForm name={movieData[0]?.show?.name} />
        </motion.div>
      </div>

      {/* About This Movie Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.9,
          delay: 0.1,
        }}
      className="mt-4  about shadow shadow-md p-2 mb-2">
        <h3 className="fw-bold">About This Movie</h3>

        <p
          className="about-text"
          dangerouslySetInnerHTML={{
            __html: `${content}`,
          }}
        ></p>
        <Link to={movieData[0]?.show?.url}>
          <button className="btn btn-link">Read More</button>
        </Link>
      </motion.div>
    </div>
    </>

  );
};

export default Moviepage;
