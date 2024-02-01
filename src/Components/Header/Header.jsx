import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-light shadow d-flex justify-content-between  p-3">
      <Link className="text-decoration-none text-light" to={"/"}>
        <h3
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Movie World
        </h3>
      </Link>

      <Link to="/bookingdetails" className="text-decoration-none">
        <div className="d-flex justify-content-center order-page bg-dark text-light order-element">
          Orders
        </div>
      </Link>
    </div>
  );
};

export default Header;
