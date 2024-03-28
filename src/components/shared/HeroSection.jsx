import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HeroSection = () => {
    return (

        <div className="h-screen bg-cover bg-bg-img-1 bg-no-repeat flex flex-col justify-end">

            <div className="w-full bg-black-90 flex flex-col justify-center py-4">
                <div className="w-full flex flex-row items-center justify-between padding-container">
                    <div className="h-full flex flex-col justify-around">
                        <p className="text-50 text-white" >MANAGE <br />OPERATIONS</p>
                        <div className="flex items-center justify-between">
                            <button className="btn-full bg-white text-green-90 text-bold-20">LEARN OPERATIONS</button>
                            <img
                                src="/src/assets/play.svg"
                                alt="play"
                                className=""
                            />
                        </div>
                    </div>

                    <div className="w-1/3">
                        <div className="flexBetween">
                            <p className="text-30 text-white">01 .</p>
                            <div className="flex items-center space-x-4">
                                <button className="rounded-md border border-white text-white p-1" >
                                    <FaArrowLeft className="w-4 h-4" />
                                </button>
                                <button className="rounded-md border border-white text-white p-1" >
                                    <FaArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                        </div>
                        <hr />
                        <p className="text-white text-16 pt-8">
                            Discover market access rules, check regulatory compliance, latest customs duties, shipping requirements and other documentation. Africa-wide, harmonized, and aggregated trade and investment regulatory information i.e., Foreign Trade Regulations (e.g., Customs procedures, certification, licensing, etc.) and Market Access (trade agreements, tariffs, and non-tariff measures etc.)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection