import Statct from "@components/Statct"
import { Statis } from "utils/constants"

const Statistical = () => {
    
    return (
        <div className="bg-black-70 py-5 text-bold-20">
            <div className="flex justify-around items-center" >
                {
                    Statis.map((item, index) => (
                        <Statct key={index} number={item.number} label={item.label} />
                    ))
                }
            </div>
        </div>
    )
}

export default Statistical