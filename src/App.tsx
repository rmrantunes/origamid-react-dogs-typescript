import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "src/core/components";
import { Routes } from "src/routes";

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
