
const AbouUs = () => {
    return (
        <div className="w-full flex items-center justify-around">
            <div className="w-1/3 flex flex-col space-y-5">
                <p className="text-20 pt-10">About us</p>
                <p className="text-55">PEAQOCK is a member <br /> driven network</p>
                <p className="text-16">The purpose of TRADAR Club is to be a network of international businesses and executives dedicated to transforming Africa through the vehicles of trade and investment. TRADAR Club Members are global industry leaders, African corporates, intergovernmental organisations, policy makers and other influential stakeholders committed to the shared objective of unlocking growth and development for the African continent</p>
                <button className="w-1/2 btn-full text-white bg-green-90 text-bold-20">Discover Now</button>
            </div>

            <img
                src="/src/assets/Mask.svg"
                alt="dashb"
                className=""
            />
        </div>
    )
}

export default AbouUs