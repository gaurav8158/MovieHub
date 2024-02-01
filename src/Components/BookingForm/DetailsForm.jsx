import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { Form } from "react-bootstrap";

const DetailsForm = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <div className="container">
      <strong>Date</strong>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="form-control"
      />
      <strong>Time</strong>
      <TimePicker
        onChange={(time) => setSelectedTime(time)}
        value={selectedTime}
        className="form-control"
      />
      <strong>Day</strong>
      <Form.Control
        as="select"
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </Form.Control>
    </div>
  );
};

export default DetailsForm;
