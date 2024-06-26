import { useState } from "react";
import characterImage_1 from "../assets/images/profile-1.jpg";
import characterImage_2 from "../assets/images/profile-2.jpg";
import characterImage_3 from "../assets/images/profile-3.jpg";

function Testimonials() {

    const [info, setInfo] = useState([
        {
            image: characterImage_1,
            name: "Ahmed",
        },
        {
            image: characterImage_2,
            name: "Mohamed",
        },
        {
            image: characterImage_3,
            name: "Eman",
        },
    ])

    return (
        <section className="p-[10px_0] m-[150px_0_300px] team">
            <div className="container text-white w-[95%] sm:w-[90%] md:w-[85%] relative">
                <img src="/src/assets/images/bg-quotes.png" alt="" className=" absolute top-[-40px] z-[-1]" />
                <div className="center-elements gap-10 flex-wrap">
                    {
                        info.map((itme) => {
                            return (
                                <div key={itme.name} className="box max-w-[500px] behavior shadow-[0px_0px_5px_8px_#1c202c]
                                xl:max-w-[420px]">
                                    <p className="text-[14px] sm:text-[16px]">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Unde, eveniet quod deleniti autem itaque quasi aperiam laborum,
                                        mollitia ad natus rerum error perspiciatis,
                                        asperiores reiciendis quae fuga molestias repellat quam?
                                    </p>
                                    <div className="flex items-center gap-5 mt-8">
                                        <img className=" rounded-full w-[50px]" src={itme.image} alt="" />
                                        <div>
                                            <p className=" font-semibold m-[5px_0]">{itme.name}</p>
                                            <p className=" text-[#7b7a7a]">Founder & CEO.Huddle</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
