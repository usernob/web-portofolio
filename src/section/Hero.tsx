export default function Hero() {
    return (
        <div className="lg:flex lg:flex-row-reverse lg:justify-end mb-96">
            <div className="hidden flex-1 vs:flex justify-center items-center static h-72 xs:h-[30rem]">
                <h1 className="inline-block absolute text-[15rem] xs:text-[20rem] font-bold w-fit mx-auto flat text-transparent text-stroke opacity-30">R</h1>
                <h1 className="inline-block absolute text-[15rem] xs:text-[20rem] font-bold w-fit mx-auto flat translate-x-4 -translate-y-8 text-transparent text-stroke opacity-60">R</h1>
                <h1 className="inline-block absolute text-[15rem] xs:text-[20rem] font-bold w-fit mx-auto flat translate-x-8 -translate-y-16">R</h1>
            </div>
            <div className="flex-1 self-center">
                <h1 className="text-5xl font-semibold">Hi</h1>
                <h2 className="text-2xl font-thin">I am Ramzi</h2>
            </div>
        </div>
    );
}