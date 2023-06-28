import React from "react";
import ReactDOM from "react-dom/client";
import * as Section from "./section";
import "./index.css";
import * as Comp from "./component";
import AnimateScroll from "./lib/AnimateScroll";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <Comp.Header />
    <main className="mx-6 md:container pb-96 overflow-x-hidden">
      <Section.Hero />
      <Section.About />
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <div className="my-4">
        <AnimateScroll className="bg-slate-800 m-4 rounded-lg shadow-lg border border-slate-200 p-4" offset={100}>hi</AnimateScroll>
      </div>
      <Section.About />
    </main>
    <Comp.Footer />
    <div
      onClick={() => {
        document.getElementById("home")?.scrollIntoView(true);
      }}
      className="fixed bottom-5 right-5 bg-blue-500 rounded-full p-4"
    >
    </div>
  </React.StrictMode>,
);
