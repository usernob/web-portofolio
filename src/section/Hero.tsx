export default function Hero() {
    return (
        <section className="mb-96 h-[100vh] gap-2 lg:flex lg:flex-row-reverse lg:justify-end">
            <div className="hidden h-[20rem] flex-1 items-center justify-center xs:flex lg:h-full">
                <h1 className="absolute inline-block -translate-x-2 translate-y-4 skew-x-[16deg] text-xs text-[13rem] font-bold text-transparent opacity-30 [-webkit-text-stroke:2px_#d946ef] sm:text-[17rem]">
                    R
                </h1>
                <h1 className="absolute inline-block skew-x-[16deg] text-xs text-[13rem] font-bold text-transparent opacity-60 [-webkit-text-stroke:2px_#2563eb] sm:text-[17rem]">
                    R
                </h1>
                <h1 className="absolute inline-block translate-x-2 -translate-y-4 skew-x-[16deg] text-xs text-[13rem] font-bold text-slate-300 sm:text-[17rem]">
                    R
                </h1>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3 xs:py-4">
                <h2 className="text-2xl font-semibold text-slate-300">
                    Hey there! I am
                </h2>
                <h1 className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-5xl font-semibold text-transparent">
                    Ramzi Pandu Ma'arif
                    <p className="text-2xl">a.k.a. usernob</p>
                </h1>
                <h2 className="text-xl font-light text-slate-300">
                    Interested in backend programming and low level languages,
                    working hard just to make this page look good.
                </h2>
            </div>
        </section>
    );
}
