import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const hamburgerClassList = [
        ["origin-right", "-rotate-45"],
        ["", "translate-x-full scale-0"],
        ["origin-right", "rotate-45"],
    ];

    const hamburger = hamburgerClassList.map(
        ([classBefore, classAfter], index) => {
            let classes = `my-2 block h-[2px] w-[29px] transition duration-300 ease-in-out bg-slate-100 mx-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-content ${classBefore} ${
                open ? classAfter : ""
            }`;
            return <span key={index} className={classes}></span>;
        }
    );

    const navData = [
        ["beranda", "#home"],
        ["about", "#about"],
    ];
    const navMenu = navData.map(([content, path], index) => {
        return (
            <li
                key={index}
                className="group bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text"
            >
                <a
                    href={path}
                    className="mx-8 flex py-2 text-base text-transparent group-hover:text-blue-500"
                >
                    {content}
                </a>
            </li>
        );
    });

    const navItemsClass =
        "text-base text-slate-200 py-2 mx-8 flex group-hover:text-teal-500";
    let classMenu = `${
        open ? navItemsClass : "hidden"
    } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-slate-800 py-2 shadow-lg xl:static xl:block xl:max-w-full xl:rounded-none xl:bg-transparent xl:shadow-none`;

    return (
        <header
            className="sticky top-0 left-0 z-20 flex w-full items-center bg-slate-900 bg-opacity-90 backdrop-blur-sm lg:fixed"
            id="header"
        >
            <div className="w-full md:container">
                <div className="relative flex items-center justify-between">
                    <div className="px-4">
                        <a
                            href="#"
                            id="title"
                            className="block cursor-text py-3 text-lg font-medium text-slate-200"
                        >
                            ~$ <span className="wrap">USERNOB</span>
                        </a>
                    </div>
                    <div className="flex items-center xl:bg-gradient-to-r xl:from-blue-500 xl:to-teal-500 xl:bg-clip-text">
                        <div
                            id="hamburger"
                            className="block xl:hidden"
                            onClick={() => setOpen(!open)}
                        >
                            {hamburger}
                        </div>
                        <nav id="nav-menu" className={classMenu}>
                            <ul className="block xl:flex">{navMenu}</ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
