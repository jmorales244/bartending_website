import { useParams, useNavigate } from "react-router-dom"
import { drinks } from "../data/drinks"

function Category() {
  const { categoryId } = useParams()
  const navigate = useNavigate()

  const categoryDrinks = drinks[categoryId] || []

  return (
    <div className="space-y-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-gray-400 text-sm tracking-widest"
      >
        ← BACK
      </button>

      {/* Title */}
      <h1 className="text-4xl font-[300] tracking-[0.15em] text-[#f3efe6] capitalize">
        {categoryId}
      </h1>

      {/* Divider */}
      <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70"></div>

      {/* Drinks */}
      <div className="space-y-4">

        {categoryDrinks.map((drink) => (
          <div
            key={drink.id}
            onClick={() => navigate(`/drink/${drink.id}`)}
            className="
              bg-gradient-to-br
              from-[#141414]
              to-[#0f0f0f]
              border border-[#1f1f1f]
              rounded-2xl
              px-6 py-6
              active:scale-[0.97]
              transition-all
              duration-150
            "
          >
            {drink.name}
          </div>
        ))}

      </div>

    </div>
  )
}

export default Category