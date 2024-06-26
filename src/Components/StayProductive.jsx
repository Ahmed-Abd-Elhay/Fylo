import illustrationImage from "../assets/images/illustration-stay-productive.png";
import arrowImage from "../assets/images/icon-arrow.svg";


function StayProductive() {
    return (
        <section className="m-[80px_0]">
            <div className="container w-[95%] md:w-[80%] md:grid-rows-1 style-grid-system  place-items-center">
                <div className="w-[90%] sm:w-[95%] md:w-[100%] mx-auto behavior">
                    <img src={illustrationImage} alt="" />
                </div>

                <div className="text-white w-[95%] md:w-[100%]">
                    <h3 className=" font-medium text-[35px] leading-[50px]">
                        Stay Productive,
                        <br />
                        Wherever you are
                    </h3>

                    <div className="my-[15px] font-normal text-sm tracking-[.8px]">
                        <p className="mb-[15px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quo quos
                            aperiam ab maxime expedita at, enim, ullam modi dolore? Ipsum, ducimus vitae.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quo quos
                            aperiam ab maxime expedita at, enim, ullam modi dolore? Ipsum, ducimus vitae.
                        </p>
                    </div>
                    <a
                        href="/"
                        className="center-elements justify-start gap-[10px] text-mainColor pb-[5px]
                        hover:text-[#42b0d1] behavior text-[20px] w-fit
                        border-b-2 border-solid  border-mainColor hover:border-[#42b0d1]"
                    >
                        See how Fylo works
                        <img
                            src={arrowImage}
                            alt="arrow-image"
                            className="w-[20px] object-contain animate-moveToRight z-[-1]" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default StayProductive;
