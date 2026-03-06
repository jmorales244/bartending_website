import { useNavigate } from "react-router-dom"
import { categories } from "../data/categories"
import Card from "../components/ui/Card"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative space-y-12">

      {/* Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#d4af37] opacity-5 blur-3xl pointer-events-none"></div>

      <div className="text-center space-y-4">
        <h1 className="text-5xl font-[300] tracking-[0.15em] text-[#f3efe6]">
          AJ Bartending
        </h1>

        <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">
          Choose your spirit
        </p>

        {/* Gold Divider */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto opacity-70"></div>
      </div>

      <div className="grid gap-6">
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