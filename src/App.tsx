import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "src/core/components";
import { Routes } from "src/routes";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
