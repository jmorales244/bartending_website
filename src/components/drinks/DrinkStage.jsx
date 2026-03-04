import { useState } from "react"
import { drinks } from "../../data/drinks"
import DrinkAnimation from "./DrinkAnimation"
import IngredientPanel from "./IngredientPanel"

function DrinkStage({ drinkId }) {
    const drink = Object.values(drinks)
    .flat()
    .find((d) => d.id === drinkId)

    const [animationComplete, setAnimationComplete] = useState(false)

    if (!drink) {
        return <div className="text-white">Drink not found</div>
    }

    return (
        <div  className="flex flex-col item-center justify-center h-full">
            <DrinkAnimation
              drink={drink}
              onFinish={() => setAnimationComplete(true)}
            />
            {animationComplete && (
                <IngredientPanel ingredients={drink.ingredients} />
            )}

        </div>
    )
}

export default DrinkStage