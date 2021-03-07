import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "src/core/components";
import { UserProvider } from "src/core/contexts";
import { Routes } from "src/routes";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes />
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
