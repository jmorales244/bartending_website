import { useNavigate } from "react-router-dom"
import { categories } from "../data/categories"
import Card from "../components/ui/Card"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-light tracking-wider">
          AJ Bartending
        </h1>

        <p className="text-[var(--color-text-secondary)] text-sm">
          Choose your spirit
        </p>

        <div className="w-16 h-[1px] bg-[var(--color-accent)] mx-auto opacity-60"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            onClick={() => navigate(`/category/${category.id}`)}
          >
            {category.name}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home