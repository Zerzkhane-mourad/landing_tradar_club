import { CiLocationOn } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {

  const scrollToTop = () => {

    const section = document.getElementById("navbar");
    section.scrollIntoView({ behavior: "smooth" });

  };


  return (
    <div id='cantact' className='bg-black-10 space-y-8 py-10'>

      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-3 mr-5">
          <button className="btn-full text-20-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-300 px-5">Support</button>
          <button onClick={scrollToTop} className="rounded-full p-4  text-20-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-300"><FaArrowUp className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="w-full flex justify-around items-center">
        <div className='flex flex-col space-y-5'>
          <p className="text-24">Contact Us</p>
          <p className='text-16'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Condimentum lectus nunc,  <br /> sagittis, eros.</p>
          <div className='flex items-center space-x-2'>
            <CiLocationOn className="text-green-90 w-6 h-6" />
            <p className="text-16"> Imm le Zenith II, Lotissement Attaoufik, Route de Nouacer, Sidi Maarouf,<br /> Casablanca, 20640, Maroc </p>
          </div>
          <div className='flex items-center space-x-2'>
            <HiOutlineEnvelope className="text-green-90 w-6 h-6" />
            <p className="text-16">nfo@peaqock.com</p>
          </div>
          <div className='flex items-center space-x-2'>
            <FiPhone className="text-green-90 w-6 h-6" />
            <p className="text-16">+20-33-263-367-13</p>
          </div>
        </div>

        <div className='flex flex-col  space-y-5'>
          <p className="text-24">About Peaqock</p>
          <p className='text-16'>Privacy Statement</p>
          <p className='text-16'>Term and condition</p>
          <p className='text-16'>Accessibility</p>
          <p className='text-16'>F.A.Q.</p>
          <div className="flex items-center justify-between text-gray-600">
            <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-green-90" />
            <FaYoutube className="w-6 h-6 cursor-pointer hover:text-green-90" />
            <FaTwitter className="w-6 h-6 cursor-pointer hover:text-green-90" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-green-90" />
            <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-green-90" />
          </div>
        </div>

        <div className='flex flex-col  space-y-5'>
          <p className="text-24">Locations</p>
          <img
            src="/src/assets/locations.svg"
            alt="locations"
            className=""
          />
        </div>
      </div>

      <div className="flexCenter">
        <p className="font-semibold"> Copyright &copy; 2022. All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer