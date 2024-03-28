
const Services = () => {
    return (
        <div id="services" className="h-screen  bg-cover bg-bg-img-2 bg-no-repeat flex flex-col justify-center">
            <div className="w-full flex items-center justify-around">

                <div className="w-1/3 flex flex-col space-y-5">
                    <p className="text-20">OUR SERVICES</p>
                    <p className="text-55 text-indigo-600">Trade <span className="text-55">Simple</span></p>
                    <p className="text-18">Discover a world of trade opportunities in one place with detailed information about imports, market dynamics, tariffs, regulatory requirements, potential buyers and more.</p>
                    <button className="w-1/2 btn-full text-bold-20 text-white bg-gradient-to-r from-green-70 to-green-50">Discover Now</button>
                </div>

                <img
                    src="/src/assets/dashbd.svg"
                    alt="dashb"
                    className=""
                />
            </div>
        </div>
    )
}

export default Services