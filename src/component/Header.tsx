import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const hamburgerClassList = [
        ["origin-top-left", "rotate-45"],
        ["", "-translate-x-full scale-0"],
        ["origin-bottom-left", "-rotate-45"],
    ];

    const hamburger = hamburgerClassList.map(
        ([classBefore, classAfter], index) => {
            let classes = `my-2 block h-[2px] w-[29px] bg-slate-900 transition duration-300 ease-in-out dark:bg-slate-100 ${classBefore} ${
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
            <li key={index} className="group">
                <a
                    href={path}
                    className="mx-8 flex py-2 text-base text-slate-200 group-hover:text-blue-500"
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
    } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-slate-700 py-2 shadow-lg xl:static xl:block xl:max-w-full xl:rounded-none xl:bg-transparent xl:shadow-none`;

    return (
        <header
            className="fixed top-0 left-0 z-20 flex w-full items-center bg-slate-900 bg-opacity-90 backdrop-blur-sm"
            id="header"
        >
            <div className="w-full md:container">
                <div className="flex items-center justify-between">
                    <div className="px-4">
                        <a
                            href="#"
                            id="title"
                            className="block cursor-text py-3 text-lg font-medium text-slate-200"
                        >
                            ~$ <span className="wrap">USERNOB</span>
                        </a>
                    </div>
                    <div className="flex items-center px-4">
                        <button
                            id="hamburger"
                            className="block xl:hidden"
                            onClick={() => setOpen(!open)}
                        >
                            {hamburger}
                        </button>
                        <nav id="nav-menu" className={classMenu}>
                            <ul className="block xl:flex">{navMenu}</ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
