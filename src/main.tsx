import React from "react";
import ReactDOM from "react-dom/client";
import * as Section from "./section";
import "./index.css";
import * as Comp from "./component";

ReactDOM.createRoot(document.querySelector("body") as HTMLElement).render(
    <React.StrictMode>
        <Comp.Header />
        <main className="mx-6 md:container">
            <Section.Hero />
            <Section.About />
        </main>
        <Comp.Footer />
    </React.StrictMode>
);
