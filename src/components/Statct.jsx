
const Statct = ({ number, label }) => {
    return (

        <div className="flex flex-col justify-center items-center">
            <p className="text-55 text-green-90">+ {number}</p>
            <p className="text-20">{label}</p>
        </div>

    )
}

export default Statct