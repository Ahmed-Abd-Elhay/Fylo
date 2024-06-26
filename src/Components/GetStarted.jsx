
function GetStarted() {
    return (
        <section>
            <div className="container relative">
                <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px]
                p-[40px] text-white w-[865px] max-w-full min-h-[275px] text-center rounded-[5px] center-elements flex-col gap-5">
                    <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">Get early access today</h3>
                    <p className=" w-[620px] max-w-full mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Rem aut quae, vel maxime tenetur maiores architecto adipisci.
                    </p>
                    <form action="" className="w-full flex-wrap flex items-center justify-between gap-[30px] md:w-[85%]">
                        <input className="w-full md:flex-1 h-[50px] pl-[30px] rounded-[30px] border-none outline-none text-sm text-black"
                            type="email" placeholder="email@example.com" />
                        <button className="w-full md:w-[200px] h-[50px] bg-[#42b0d1]
                        hover:bg-[#8cdae4] behavior rounded-[30px]"
                            type="submit">Get Started For Free</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;
