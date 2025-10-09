import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./Component/Navbar";
import NewsCard from "./Component/NewsCard";
import Favorites from "./Component/Favorites";

export default function App() {
  // -----------------------
  // Local article data (no API)
  // -----------------------
  const articlesData = [
    {
      id: 1,
      title: "AI Revolution in 2025",
      description: "Artificial Intelligence continues to transform industries worldwide.",
      urlToImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      category: "Technology",
      author: "Tech Journal",
      publishedAt: "2025-10-04",
      url: "#",
    },
    {
      id: 2,
      title: "Global Markets See Major Growth",
      description:
        "Stocks are surging as investors gain confidence in global economies.",
      urlToImage:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      category: "Business",
      author: "Finance Daily",
      publishedAt: "2025-10-03",
      url: "#",
    },
    {
      id: 3,
      title: "Healthy Living: Top 10 Superfoods",
      description:
        "Discover the most nutritious foods to boost your health and energy.",
      urlToImage:
        "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1200&auto=format&fit=crop",
      category: "Health",
      author: "Health Line",
      publishedAt: "2025-10-01",
      url: "#",
    },
    {
      id: 4,
      title: "SpaceX Launches New Mission to Mars",
      description: "The new mission will test long-term human habitats.",
      urlToImage:
        "https://images.unsplash.com/photo-1581092334657-8a38eec2647d?q=80&w=1200&auto=format&fit=crop",
      category: "Science",
      author: "Space News",
      publishedAt: "2025-09-30",
      url: "#",
    },
    {
      id: 5,
      title: "Football World Cup Update",
      description: "Teams prepare for the next big match with intense training.",
      urlToImage:
        "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1200&auto=format&fit=crop",
      category: "Sports",
      author: "Sports Today",
      publishedAt: "2025-09-29",
      url: "#",
    },
    // 🌟 Entertainment Articles (New)
    {
      id: 6,
      title: "Hollywood Awards 2025: The Biggest Winners",
      description:
        "A night full of glamour and surprises as the top stars shine at the 2025 Awards.",
      urlToImage:
        "https://images.unsplash.com/photo-1583309467637-1cbf1a5d1b9d?q=80&w=1200&auto=format&fit=crop",
      category: "Entertainment",
      author: "Movie Buzz",
      publishedAt: "2025-10-02",
      url: "#",
    },
    {
      id: 7,
      title: "New Marvel Movie Breaks Box Office Records",
      description:
        "Marvel fans celebrate as the latest superhero film earns massive global success.",
      urlToImage:
        "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1200&auto=format&fit=crop",
      category: "Entertainment",
      author: "Cinema Daily",
      publishedAt: "2025-10-03",
      url: "#",
    },
    {
      id: 8,
      title: "Top 10 Netflix Shows You Must Watch in 2025",
      description:
        "From thrillers to romantic dramas, these series are trending worldwide.",
      urlToImage:
        "https://images.unsplash.com/photo-1606813907291-0b3a3b80e04f?q=80&w=1200&auto=format&fit=crop",
      category: "Entertainment",
      author: "Streamline TV",
      publishedAt: "2025-10-04",
      url: "#",
    },
  ];

  // -----------------------
  // App state
  // -----------------------
  const [category, setCategory] = useState("General");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [favoritesIds, setFavoritesIds] = useState([]); // store article ids
  const [view, setView] = useState("home"); // 'home' or 'favorites'

  // Load persisted favorites and dark mode
  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("news_favorites") || "[]");
    setFavoritesIds(fav);
    const savedDark = JSON.parse(localStorage.getItem("news_dark") || "false");
    setDark(!!savedDark);
  }, []);

  // Persist favorites and dark mode
  useEffect(() => {
    localStorage.setItem("news_favorites", JSON.stringify(favoritesIds));
  }, [favoritesIds]);

  useEffect(() => {
    localStorage.setItem("news_dark", JSON.stringify(dark));
  }, [dark]);

  // Toggle favorite by article object
  const toggleFavorite = (article) => {
    setFavoritesIds((prev) => {
      const exists = prev.includes(article.id);
      return exists ? prev.filter((id) => id !== article.id) : [...prev, article.id];
    });
  };

  // full favorite article objects
  const favorites = useMemo(
    () => articlesData.filter((a) => favoritesIds.includes(a.id)),
    [favoritesIds]
  );

  // filtered results for home view (by category and search)
  const filtered = useMemo(() => {
    const catFiltered =
      category === "General" ? articlesData : articlesData.filter((a) => a.category === category);
    if (!search.trim()) return catFiltered;
    const q = search.toLowerCase();
    return catFiltered.filter(
      (a) => a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
    );
  }, [category, search]);

  // search submit handler (keeps view on home)
  const onSearch = (e) => {
    e?.preventDefault?.();
    setView("home");
  };

  return (
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      <Navbar
        category={category}
        setCategory={(c) => { setCategory(c); setView("home"); }}
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
        dark={dark}
        setDark={setDark}
        favoritesCount={favorites.length}
        setView={setView}
      />

      <main className="max-w-6xl mx-auto p-6">
        {view === "favorites" ? (
          <Favorites favorites={favorites} onToggleFavorite={toggleFavorite} dark={dark} />
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.length > 0 ? (
                filtered.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    isFavorite={favoritesIds.includes(article.id)}
                    onToggleFavorite={toggleFavorite}
                    dark={dark}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500 mt-10">No articles found.</p>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
