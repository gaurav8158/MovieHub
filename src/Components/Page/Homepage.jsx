import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import { getData } from "../Function/getData";
import { motion } from "framer-motion";
import Header from "../Header/Header";

const Homepage = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieData();
  }, []);
  const getMovieData = async () => {
    await getData(setMovieList);
  };
  return (
    <>
 <Header/>
       <div className="d-flex justify-content-center homepagecontainer p-4 flex-wrap gap-3">
      {movieList.map((val, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.25 + ((i + 5) % 5) * 0.1,
          }}
        >
          <MovieCard list={val?.show} />
        </motion.div>
      ))}
    </div>
    </>
   
  );
};

export default Homepage;
