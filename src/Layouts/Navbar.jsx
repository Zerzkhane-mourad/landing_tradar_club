import { IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";
import { NAV_LINKS } from "utils/constants";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
    
    const handleMenuClick = (sectionId) => {
    
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    
    };

    return (
        <nav id="navbar" className="text-white uppercase flex flex-col lg:flex-row w-full">
            <div className="lg:w-[87vw] py-8 bg-gray-900 flexBetween p-4">
                <Link to="/" className="flexCenter space-x-3">
                    <img src="/src/assets/logo.svg" className="h-8" alt="Logo" />
                </Link>

                <div className="hidden lg:flex space-x-8">

                    {
                        NAV_LINKS.map((link, index) => (
                            <button onClick={()=>handleMenuClick(link.href)} key={index} className="text-lg text-white flexCenter space-x-3 hover:text-green-90">
                                <p>{link.label}</p>
                                <IoChevronDownOutline className="h-6 w-6" />
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="lg:w-[13vw] bg-gradient-to-r from-green-50 to-green-10 flex flex-row justify-around items-center">
                <button className="text-lg flexCenter space-x-3">
                    <AiOutlineMessage className="h-6 w-6" />
                    <p>Let's Talk</p>
                </button>

                <button className="text-lg flexCenter space-x-3">
                    <PiUserCircle className="h-7 w-8" />
                    <IoChevronDownOutline className="h-6 w-6" />
                </button>
            </div>
        </nav>)
}

export default Navbar