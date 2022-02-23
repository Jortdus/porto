import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Project3D from "./components/Project3D";
import ProjectNaturalis from "./components/ProjectNaturalis";
import Footer from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Project3D />
        <ProjectNaturalis />
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
