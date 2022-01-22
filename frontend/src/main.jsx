import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./semantic.min.css";
import App from "./App";
import All from "./components/AllPredios";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='predios' element={<All></All>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
