
export const Logo = () => {
    return (
        <div >
            <div className="hover:opacity-75 transition  items-center gap-x-2 hidden md:flex ">
                {/* <img src={"/assets/logo.png"} alt="logo" height={30} width={30} /> */}
                <p className="text-lg text-neutral-700  group cursor-pointer">
                    <span className="group-hover:text-blue-400 group-hover:font-bold transition-all">Tech</span><span className="text-blue-400 font-bold group-hover:text-black group-hover:font-normal transition-all">XO</span>
                </p>
            </div>
        </div>
    );
};
