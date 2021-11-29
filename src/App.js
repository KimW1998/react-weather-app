import React from "react";
import "./styles.css";
import Weather from "./weather";
import Footer from "./footer";
import "./footer.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
    </div>
  );
}
