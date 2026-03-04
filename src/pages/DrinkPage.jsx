import { useParams } from "react-router-dom"
import DrinkStage from "../components/drinks/DrinkStage"

function DrinkPage() {
  const { drinkId } = useParams()

  return <DrinkStage drinkId={drinkId} />
}

export default DrinkPage