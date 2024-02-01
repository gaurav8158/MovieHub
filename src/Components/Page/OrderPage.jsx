import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Header from "../Header/Header";

const OrderPage = () => {
  const data = JSON.parse(localStorage.getItem("booking")) || [];
  const [orderHistory, setOrderHistory] = useState(data);
  console.log(typeof orderHistory);
  return (
    <>
      <Header />
      <div className="bg-dark text-light py-5">
        <div className="container">
          <h2 className="mb-4 fw-bold">Order History</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory?.map((order, index) => (
                <tr key={index}>
                  <td>{order.date.slice(0, 10)}</td>
                  <td>{order.day}</td>
                  <td>{order.time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
