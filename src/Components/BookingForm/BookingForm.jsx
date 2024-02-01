import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-time-picker/dist/TimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import DetailsForm from "./DetailsForm";
import { BookMovie } from "../Function/booking";
import { toast } from "react-toastify";

function BookingForm({ name }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:00");
  const [selectedDay, setSelectedDay] = useState("Monday");



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleSubmit  = ()=>{
if(!selectedDate){
  toast.warning("Select the date")
  return;
}
else if(!selectedTime){
  toast.warning("select the time")
  return;
}
else if(!selectedDay){
  toast.warning("select the time")
  return;
}
const bookDetails = {
  date:selectedDate,
  time:selectedTime,
  day:selectedDay
}
BookMovie(bookDetails);
toast.success("booking successfully")
handleClose();
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book Tickets
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetailsForm   selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Book Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookingForm;
