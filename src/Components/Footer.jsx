import { Link } from "react-scroll";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo_image from "../assets/images/logo.svg";
import locationIcon from "../assets/images/icon-location.svg";
import phone_icon from "../assets/images/icon-phone.svg";
import email_icon from "../assets/images/icon-email.svg";



function Footer() {
    return (
        <footer className="bg-[#0c1524] pt-[320px] md:pt[200px] pb-[50px] text-white">
            <div className="container behavior w-[90%] lg:w-[85%] xl:w-[80%]">
                <Link
                    to="page-top"
                    offset={0}
                    smooth={true}
                    spy={true}
                    duration={500}
                >
                    <img className=" cursor-pointer w-[175px] h-[66px] object-contain" src={logo_image} alt="" />
                </Link>

                <div className="container behavior flex-col center-elements flex-wrap items-start
                mt-[50px] gap-[50px] md:flex-row md:justify-between">

                    <div className="w-[340px] max-w-full flex gap-[15px] items-start">
                        <img className="icon" src={locationIcon} alt="image location" />
                        <p className="font-normal text-sm tracking-[0.8] ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Labore, consequatur vero fugit, ipsam, cupiditate tempore reprehenderit
                            omnis quam sint ut est illo.
                            Blanditiis pariatur corrupti accusamus tempore qui eius placeat?</p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-start gap-[20px] flex-col">
                        <div className="center-elements gap-[20px]">
                            <img className="icon" src={phone_icon} alt="phone" />
                            <p>+20 01234567899</p>
                        </div>
                        <div className="center-elements gap-[20px]">
                            <img className="icon" src={email_icon} alt="email" />
                            <p>example@fylo.com</p>
                        </div>
                    </div>

                    {/* Links  */}
                    <div className="flex  gap-[30px] flex-col md:flex-row">
                        <div className="flex flex-col gap-[15px] text-base">
                            <Link
                                className="cursor-pointer hover:text-mainColor behavior"
                                to=""
                                offset={0}
                                smooth={true}
                                spy={true}
                                duration={500}
                            >
                                About Us
                            </Link>
                            <Link
                                className="cursor-pointer hover:text-mainColor behavior"
                                to=""
                                offset={0}
                                smooth={true}
                                spy={true}
                                duration={500}
                            >
                                Jobs
                            </Link>
                            <Link
                                className="cursor-pointer hover:text-mainColor behavior"
                                to=""
                                offset={0}
                                smooth={true}
                                spy={true}
                                duration={500}
                            >
                                Press
                            </Link>
                            <Link
                                className="cursor-pointer hover:text-mainColor behavior"
                                to=""
                                offset={0}
                                smooth={true}
                                spy={true}
                                duration={500}
                            >
                                Blog
                            </Link>
                        </div>

                        <div className="flex flex-col gap-[15px] text-base">
                            <Link
                                className="cursor-pointer hover:text-mainColor behavior"
                                to=""
                                offset={0}
                                smooth={true}
                                spy={true}
                                duration={500}
                            >
                                Contact Us
                            </Link>
                            <Link
                                className="cursor-pointer hover:text-mainColor behavior"
                                to=""
                                offset={0}
                                smooth={true}
                                spy={true}
                                duration={500}
                            >
                                Terms
                            </Link>
                            <Link
                                className="cursor-pointer hover:text-mainColor behavior"
                                to=""
                                offset={0}
                                smooth={true}
                                spy={true}
                                duration={500}
                            >
                                Privacy
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <ul className="center-elements gap-[15px] w-full md:w-auto ">
                        <li>
                            <a href="">
                                <div className="center-elements w-[40px] h-[40px] rounded-full border-white border-solid border-[1px]">
                                    <FaFacebookF className=" hover:text-mainColor behavior" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="center-elements w-[40px] h-[40px] rounded-full border-white border-solid border-[1px]">
                                    <FaTwitter className=" hover:text-mainColor behavior" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="center-elements w-[40px] h-[40px] rounded-full border-white border-solid border-[1px]">
                                    <FaInstagram className=" hover:text-mainColor behavior" />
                                </div>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>

        </footer>
    )
}

export default Footer;
