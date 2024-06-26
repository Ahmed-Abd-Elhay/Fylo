import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

function Header() {

    const headerRef = useRef();

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {

                headerRef.current.style.backgroundColor = "#0c1524";
                headerRef.current.style.padding = "30px 0";

            } else {

                headerRef.current.style.backgroundColor = "transparent";
                headerRef.current.style.padding = "60px 0";

            }
        });

    }, []);

    const [links, setLinks] = useState(["Features", "Team", "Signin"]);

    return (
        <header
            ref={headerRef}
            className=" w-full fixed top-0 left-0 p-[60px_0] transition-all duration-200 z-[2000] ">
            <div className=" container flex items-center justify-between transition-all duration-200
                mx-auto w-[100%] sm:w-[90%] md:w-[80%]
                flex-col gap-3 sm:flex-row
            ">

                <Link
                    to="page-top"
                    offset={0}
                    smooth={true}
                    spy={true}
                    duration={500}
                >
                    <img className=" cursor-pointer" src="/src/assets/images/logo.svg" alt="" />
                </Link>

                <nav>
                    <ul className="flex items-center gap-3">
                        {links.map((link) => {
                            return (
                                <li key={link} className="text-white opacity-[0.8] hover:opacity-[1] hover:scale-105 duration-[.5s]  p-2 cursor-pointer text-[22px]">
                                    <Link
                                        to={link.toLocaleLowerCase()}
                                        offset={50 - 300}
                                        smooth={true}
                                        spy={true}
                                        duration={800}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
