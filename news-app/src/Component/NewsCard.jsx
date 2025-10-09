import React from "react";
import { FaHeart, FaRegHeart, FaExternalLinkAlt } from "react-icons/fa";

export default function NewsCard({ article, isFavorite, onToggleFavorite, dark }) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md transition hover:scale-[1.02] ${dark ? "bg-gray-800 text-white" : "bg-white"}`}>
      <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-lg font-semibold">{article.title}</h2>
          <button onClick={() => onToggleFavorite(article)} aria-label="toggle favorite">
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
          </button>
        </div>

        <p className="text-sm mt-2 mb-3">{article.description}</p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="font-medium text-indigo-500">{article.category}</span>
          <div className="flex items-center gap-3">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
            {article.url && (
              <a href={article.url} target="_blank" rel="noreferrer" title="Open article">
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
