import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      {/* Main content sections */}
      <main>
        <About />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
