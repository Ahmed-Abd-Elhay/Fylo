import { useState } from "react";
import security_icon from "../assets/images/icon-security.svg";
import collab_icon from "../assets/images/icon-collaboration.svg";
import file_icon from "../assets/images/icon-any-file.svg";
import where_icon from "../assets/images/icon-access-anywhere.svg";


function Features() {

    const [itmes, setItems] = useState([
        {
            image: security_icon,
            title: "Security you can trust",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum porro eos labore consectetur id ipsam,"
        },
        {
            image: collab_icon,
            title: "Real-time Collaboration",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum porro eos labore consectetur id ipsam,"
        },
        {
            image: file_icon,
            title: "Store any type of file",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum porro eos labore consectetur id ipsam,"
        },
        {
            image: where_icon,
            title: "Access your files from anywhere",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum porro eos labore consectetur id ipsam,"
        },

    ]);

    return (
        <section className="bg-[#181f2b] features p-[10px_0]">
            <div className="container mb-[80px] style-grid-system response-width text-center items-end">
                {itmes.map((item) => {
                    return (
                        <div
                            key={item}
                            className="text-white center-elements flex-col">
                            <img
                                src={item.image}
                                alt="image"
                                className="w-[100px] my-[5px]"
                            />

                            <h3
                                className="my-[15px] text-2xl font-semibold"
                            >
                                {item.title}
                            </h3>

                            <p
                                className=" font-normal text-base max-w-[500px]"
                            >
                                {item.description}
                            </p>

                        </div>
                    );
                })}

            </div>
        </section>
    )
}

export default Features;
