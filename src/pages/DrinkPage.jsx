import { useParams, useNavigate } from "react-router-dom"
import { drinks } from "../data/drinks"

function DrinkPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const drink = drinks.find((d) => d.id === id)

  if (!drink) {
    return <div>Drink not found</div>
  }

  return (
    <div className="space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-[var(--color-text-secondary)]"
      >
        ← Back
      </button>

      <h2 className="text-3xl font-light tracking-wide">
        {drink.name}
      </h2>

      <div className="space-y-2">
        {drink.ingredients.map((ingredient, index) => (
          <div key={index} className="text-sm">
            {ingredient.amount} {ingredient.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DrinkPage