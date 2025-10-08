import React from "react";

export default function RecipeModal({ recipe, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      {/* Frosted glass container */}
      <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl
       p-6 max-w-2xl w-full relative overflow-y-auto max-h-[90vh] shadow-lg border border-white/20">

        {/* Close Button */}
     <button
  onClick={onClose}
  className="
    absolute top-4 right-4 
    w-10 h-10 flex items-center justify-center 
    text-black/80 dark:text-black
    bg-white/10 dark:bg-gray-800/20 
    backdrop-blur-sm rounded-full 
    shadow-md 
    hover:bg-black/20 hover:text-black hover:shadow-lg 
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-green-400
  "
>
  ✖
</button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-white">{recipe.title}</h2>

        {/* Description */}
        <p className="text-white/80 mb-4">{recipe.description}</p>

        {/* Nutrition Info */}
        {recipe.nutrition && (
          <div className="mb-4 text-white/80">
            <h3 className="font-semibold mb-1">Nutrition Info:</h3>
            <p>Calories: {recipe.nutrition.calories}</p>
            <p>Protein: {recipe.nutrition.protein}</p>
            <p>Carbs: {recipe.nutrition.carbs}</p>
          </div>
        )}

        {/* Ingredients */}
        <h3 className="font-semibold mb-2 text-white">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4 text-white/80">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        {/* Instructions */}
        <h3 className="font-semibold mb-2 text-white">Instructions:</h3>
        <ul className="space-y-2 mb-4 text-white/80">
          {recipe.instructions.split(". ").map((step, i) => (
            <li key={i} className="flex items-center gap-2">
              <input 
                type="checkbox" 
                className="accent-green-400 bg-white/20 rounded border border-white/30"
              />
              <span>{step}</span>
            </li>
          ))}
        </ul>



        {/* Video */}
        {recipe.video && (
          <div className="aspect-video mt-4 rounded-lg overflow-hidden border border-white/20">
            <iframe
              className="w-full h-full"
              src={recipe.video}
              title="Recipe Video"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
