import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import MealCard from "../components/MealCard";
import CategoryGrid from "../components/CategoryGrid";

function Home() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ NEW STATES (FOR DEMO UI)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  // 🔍 SEARCH
  const searchMeals = async (query) => {
    setSelectedCategory(""); // reset category
    setCategoryDescription("");

    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
    setLoading(false);
  };

  // 🍗 FILTER CATEGORY (UPDATED)
  const filterByCategory = async (category) => {
    setSelectedCategory(category);

    // 🔥 FETCH CATEGORY DESCRIPTION
    const res1 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data1 = await res1.json();

    const found = data1.categories.find(
      (c) => c.strCategory === category
    );

    setCategoryDescription(found?.strCategoryDescription || "");

    setLoading(true);

    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await res.json();

    setMeals(data.meals || []);
    setLoading(false);

    window.scrollTo(0, 0);
  };

  // 🔥 LISTEN FROM SIDEBAR
  useEffect(() => {
    const handler = (e) => {
      filterByCategory(e.detail);
    };

    window.addEventListener("categorySelect", handler);

    return () => {
      window.removeEventListener("categorySelect", handler);
    };
  }, []);

  return (
    <div>
      {/* HERO */}
      <Hero onSearch={searchMeals} />

      {/* ✅ CATEGORY DESCRIPTION BOX */}
      {selectedCategory && (
        <div
          style={{
            border: "2px solid #e67e22",
            padding: "15px",
            margin: "20px",
            background: "#fff",
          }}
        >
          <h3 style={{ color: "#e67e22" }}>
            {selectedCategory}
          </h3>

          <p style={{ lineHeight: "1.6" }}>
            {categoryDescription}
          </p>
        </div>
      )}

      {/* ✅ MEALS TITLE (LIKE DEMO) */}
      {meals.length > 0 && (
        <h2
          style={{
            padding: "20px",
            borderBottom: "3px solid #e67e22",
            display: "inline-block",
            marginLeft: "20px",
          }}
        >
          MEALS
        </h2>
      )}

      {/* ⏳ LOADING */}
      {loading && <h2 style={{ padding: "20px" }}>Loading...</h2>}

      {/* 🍽 MEALS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {/* ✅ CATEGORY GRID ALWAYS AT BOTTOM (LIKE DEMO) */}
      {meals.length === 0 && (
  <CategoryGrid onSelectCategory={filterByCategory} />
)}
    </div>
  );
}

export default Home;