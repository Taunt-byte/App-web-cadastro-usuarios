import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contato from "./pages/Contato";
import Conteudo from "./pages/Conteudo";
import Comentarios from "./pages/Comentarios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Conteudo />
    <Comentarios />
    <Contato />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
