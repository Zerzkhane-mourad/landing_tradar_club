import { FaArrowRight } from "react-icons/fa";


const FormSubscribe = () => {
    return (

        <div className="flex items-center justify-around my-9">
            <p className="uppercase text-40">newsletter</p>
            <div className="relative w-full max-w-lg">
                <input className="block p-2.5 w-full focus:normal-case z-20 text-sm py-6 bg-black-70 rounded-full" placeholder="Your email adress" />
                <button className="absolute btn-full text-white flexCenter space-x-3 top-0 flex h-full -end-2 rounded-full bg-gradient-to-r from-green-90 to-green-70">
                    <p>Subscribe</p> <FaArrowRight />
                </button>
            </div>
        </div>)
}

export default FormSubscribe