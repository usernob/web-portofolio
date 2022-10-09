import AnimateScroll from "../lib/AnimateScroll";

export default function About() {
    return (
        <section className="flex h-[100vh] items-center justify-center">
            <AnimateScroll
                className="flex h-full -translate-x-40 w-full flex-1 items-center justify-center bg-blue-500 opacity-5 duration-1000 ease-out"
                removeClass="-translate-x-40 opacity-5"
            >
                <h1 className="text-5xl">Test Animasi Slide Scroll kiri</h1>
            </AnimateScroll>
            <AnimateScroll
                className="flex h-full translate-x-40 w-full flex-1 items-center justify-center bg-red-500 opacity-5 duration-1000 ease-out"
                removeClass="translate-x-40 opacity-5"
            >
                <h1 className="text-5xl">Test Animasi Slide Scroll kanan</h1>
            </AnimateScroll>
        </section>
    );
}
