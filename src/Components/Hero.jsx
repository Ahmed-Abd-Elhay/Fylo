import heroImage from "../assets/images/illustration-intro.png";
import coverImage from "../assets/images/bg-curvy-desktop.svg";

function Hero() {
    return (
        <div className="page-top bg-[#1c2230]">
            <div className="container p-[200px_0_0px] center-elements flex-col gap-[30px]
            w-[95%] sm:w-[90%] md:w-[80%]"
            >

                <div className="w-[95%] sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[40%] mt-[50px] sm:mt-0 behavior">
                    <img src={heroImage} alt="Landing Image" />
                </div>

                <div className="text-white text-center">
                    <h1 className="text-[25px] sm:text-[40px] capitalize	mb-[15px]">
                        all your files in one secure location,
                        <br />
                        accessible anywhere.</h1>
                    <p className="text-[15px] sm:text-[18px] w-[100%] md:w-[602px] mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident sapiente
                        soluta autem, corrupti debitis iusto,
                    </p>

                    <a className="botton-effect p-[15px_40px] behavior
                    text-[20px] w-fit block rounded-[30px]">
                        Get Started
                    </a>
                </div>

            </div>
            <div className=" w-full h-[200px]">
                <img className=" w-full h-full"
                    src={coverImage} alt="" />
            </div>
        </div>
    )
}

export default Hero;
