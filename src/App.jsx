import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Page/Homepage";
import Moviepage from "./Components/Page/Moviepage";
import { Navbar } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import OrderPage from "./Components/Page/OrderPage";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/moviepage/:id" element={<Moviepage />} />
          <Route path="/bookingdetails" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
