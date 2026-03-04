function IngredientPanel({ ingredients }) {
    return ( 
        <div className="mt-10 w-full max-w-md space-y-2">

            {ingredients.map((ingredient, index) => (
                <div
                  key={ index }
                  className="flex justify-between text-sm text-gray-300 border-b border-[#222] pb-1"
                >
                    <span>{ingredient.name}</span>
                    <span>{ingredient.amount}</span>
                </div>
            ))}

        </div>
    )
}

export default IngredientPanel