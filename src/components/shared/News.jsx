
const News = () => {
    return (
        <div className=" flex items-center justify-around mt-14">

            <div className="flex flex-col space-y-3" >
                <div className="flex items-center justify-between space-x-5">
                    <img
                        src="/src/assets/basic.svg"
                        alt="basic"
                        className=""
                    />
                    <div>
                        <p className="text-30 text-green-90">Basic</p>
                        <p className="text-14">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Lorem lectus pulvinar massa quam mollis <br /> at luctus nunc</p>
                    </div>
                    <div className="flexCenter space-x-4 bg-gradient-to-r from-green-90 to-green-50  text-white py-5 px-4 rounded-md">
                        <p className="text-14">View Details</p>
                        <p className="text-14 font-light">Free</p>
                    </div>
                </div>

                <div className="flex items-center justify-between space-x-5">
                    <img
                        src="/src/assets/stantard.svg"
                        alt="basic"
                        className=""
                    />
                    <div>
                        <p className="text-30 text-blue-70">Standard</p>
                        <p className="text-14">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Lorem lectus pulvinar massa quam mollis <br /> at luctus nunc</p>
                    </div>
                    <div className="flexCenter space-x-4 bg-gradient-to-r from-blue-70 to-blue-50  text-white py-5 px-4 rounded-md">
                        <p className="text-14">View Details</p>
                        <p className="text-14 font-light">$ 1.500</p>
                    </div>
                </div>

            </div>

            <div className="flex flex-col space-y-3 " >

                <div className="flex items-center justify-between space-x-5">
                    <img
                        src="/src/assets/gold.svg"
                        alt="gold"
                        className=""
                    />
                    <div>
                        <p className="text-30 text-yellow-300">Gold</p>
                        <p className="text-14">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Lorem lectus pulvinar massa quam mollis <br /> at luctus nunc</p>
                    </div>

                    <div className="flexCenter space-x-4 bg-gradient-to-r from-yellow-500 to-yellow-300  text-white py-5 px-4 rounded-md">
                        <p className="text-14">View Details</p>
                        <p className="text-14 font-light">$ 2.500</p>
                    </div>
                </div>

                <div className="flex items-center justify-between space-x-5">
                    <img
                        src="/src/assets/platenium.svg"
                        alt="platenuim"
                        className=""
                    />
                    <div>
                        <p className="text-30 text-indigo-90">Platinum</p>
                        <p className="text-14">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Lorem lectus pulvinar massa quam mollis <br /> at luctus nunc</p>
                    </div>
                    <div className="flexCenter space-x-4 bg-gradient-to-r from-indigo-90 to-indigo-70  text-white py-5 px-4 rounded-md">
                        <p className="text-14">View Details</p>
                        <p className="text-14 font-light">Free</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default News