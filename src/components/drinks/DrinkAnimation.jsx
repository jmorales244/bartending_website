import { useEffect } from "react"
import Glass from "./Glass"

function DrinkAnimation({ drink, onFinish }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish()
        }, 3000)

        return () => clearTimeout(timer)
    }, [onFinish])

    return (
        <div className="flex flex-col items-center justify-center h-[60vh]">

            <Glass color={drink.color || "#d4af37"} />

            <p className="text-gray-400 mt-6 text-sm tracking-widest">
                Preparing {drink.name}
            </p>
            
        </div>
    )
}

export default DrinkAnimation