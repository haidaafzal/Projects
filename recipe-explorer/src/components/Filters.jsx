import React from "react";

export default function Filters({ cuisines, cuisine, setCuisine, maxTime, setMaxTime, ingredientsFilter, setIngredientsFilter }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-3 items-center">
      <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="p-2 border rounded">
        {cuisines.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <div className="flex items-center gap-2">
        <label className="text-sm">Max time</label>
        <input
          type="number"
          min="0"
          value={maxTime}
          onChange={(e) => setMaxTime(Number(e.target.value))}
          className="p-2 border rounded w-24"
        />
        <span className="text-sm text-gray-500">mins</span>
      </div>

      <input
        value={ingredientsFilter}
        onChange={(e) => setIngredientsFilter(e.target.value)}
        placeholder="Ingredients (comma separated)"
        className="flex-1 p-2 border rounded"
        aria-label="Filter by ingredients"
      />
    </div>
  );
}
