import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./navbar/Aside";
import Test from "./pages/Test";
import MainContent from "./navbar/MainContent";
import Header from "./navbar/Header";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Aside />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route index element={<Test />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
