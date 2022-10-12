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
            <AnimateScroll className="w-100 text-9xl text-slate-100 opacity-0 duration-300 ease-in bg-blue-600 translate-x-full delay-100" removeClass="opacity-0 translate-x-full">hi</AnimateScroll>
            <AnimateScroll className="w-100 text-9xl text-slate-100 opacity-0 duration-300 ease-in bg-blue-600 -translate-x-full delay-100" removeClass="opacity-0 -translate-x-full">hi</AnimateScroll>
            <AnimateScroll className="w-100 text-9xl text-slate-100 opacity-0 duration-300 ease-in bg-blue-600 translate-x-full delay-100" removeClass="opacity-0 translate-x-full">hi</AnimateScroll>
            <AnimateScroll className="w-100 text-9xl text-slate-100 opacity-0 duration-300 ease-in bg-blue-600 -translate-x-full delay-100" removeClass="opacity-0 -translate-x-full">hi</AnimateScroll>
            <AnimateScroll className="w-100 text-9xl text-slate-100 opacity-0 duration-300 ease-in bg-blue-600 translate-x-full delay-100" removeClass="opacity-0 translate-x-full">hi</AnimateScroll>
            <AnimateScroll className="w-100 text-9xl text-slate-100 opacity-0 duration-300 ease-in bg-blue-600 -translate-x-full delay-100" removeClass="opacity-0 -translate-x-full">hi</AnimateScroll>
            <AnimateScroll className="w-100 text-9xl text-slate-100 opacity-0 duration-300 ease-in bg-blue-600 translate-x-full delay-100" removeClass="opacity-0 translate-x-full">hi</AnimateScroll>
        </main>
        <Comp.Footer />
        <div onClick={() => {
            document.getElementById("home")?.scrollIntoView(true)
        }} className="fixed bottom-5 right-5 bg-blue-500 rounded-full p-4"></div>
    </React.StrictMode>
);
