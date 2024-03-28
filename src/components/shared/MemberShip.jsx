import { FaArrowRight } from "react-icons/fa";


const MemberShip = () => {
    return (

        <div id="membership" className="w-full flexCenter mt-10">
            <div className="w-1/2 flex flex-col justify-center items-center space-y-5">
                <p className="text-20 pt-10 uppercase">membership</p>
                <p className="text-55">PEAQOCK Membership Packages</p>
                <p className="text-16">This page will highlight the different membership packages and the benefits and costs of each package. The initial plans to be configured are as presented below. The table should be configurable to update the sections with different feature, benefits and costs from time to time.</p>
                <button className="w-1/2 btn-full flexCenter space-x-3 text-green-90 bg-green-10 text-bold-20"><p>PACKAGES DETAILS </p> <FaArrowRight /></button>
            </div>
        </div>

    )
}

export default MemberShip