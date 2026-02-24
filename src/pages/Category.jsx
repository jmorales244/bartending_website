import { useParams, useNavigate } from "react-router-dom"
import { drinks } from "../data/drinks"
import Card from "../components/ui/Card"

function Category() {
  const { id } = useParams()
  const navigate = useNavigate()

  const filteredDrinks = drinks.filter(
    (drink) => drink.category === id
  )

  return (
    <div className="space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-[var(--color-text-secondary)]"
      >
        ← Back
      </button>

      <h2 className="text-3xl font-light tracking-wider capitalize">
        <div className="w-12 h-[1px] bg-[var(--color-accent)] mt-2 opacity-60">
            {id}
        </div>
      </h2>

      <div className="grid gap-4">
        {filteredDrinks.map((drink) => (
          <Card
            key={drink.id}
            onClick={() => navigate(`/drink/${drink.id}`)}
          >
            {drink.name}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Category