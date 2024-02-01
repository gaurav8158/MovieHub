import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const MovieCard = ({ list }) => {
    const navigate = useNavigate();
    const handleDetails=()=>{
navigate(`/moviepage/${list.id}`)
    }
  return (
    <Card className=" bg-dark text-light shadow" style={{ width: "16rem" }}>
     <div className="card-movie-box">
     <Card.Img
      className="card-movie-img"
        style={{ height: "22rem" }}
        variant="top"
        src={list && list?.image?.original}
      />
     </div>
    
      <Card.Body>
        <Card.Title>{list.name}</Card.Title>
        <Card.Text>{`Rating : ${list.rating.average}`}</Card.Text>
        <button type="button"  onClick={handleDetails}  class="btn btn-secondary">Know More</button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
