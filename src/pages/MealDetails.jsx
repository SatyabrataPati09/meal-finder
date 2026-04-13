import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";

function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  // 🔥 CATEGORY CLICK → GO HOME + FILTER
  const handleCategoryClick = (category) => {
    navigate("/");

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("categorySelect", { detail: category })
      );
    }, 100);
  };

  return (
    <div>
      {/* HERO */}
      <Hero showSearch={false} />

      <div style={{ padding: "20px" }}>
        {/* TITLE BAR */}
        <div
          style={{
            background: "#e67e22",
            color: "white",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>🏠 {meal.strMeal}</h3>
        </div>

        <h2
          style={{
            borderBottom: "3px solid #e67e22",
            display: "inline-block",
          }}
        >
          MEAL DETAILS
        </h2>

        {/* MAIN */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            style={{ width: "350px", borderRadius: "10px" }}
          />

          <div style={{ flex: 1 }}>
            <h2>{meal.strMeal}</h2>

            <p><b>Category:</b> {meal.strCategory}</p>

            <p>
              <b>Source:</b>{" "}
              <a href={meal.strSource} target="_blank" rel="noreferrer">
                {meal.strSource}
              </a>
            </p>

            {/* INGREDIENTS */}
            <div
              style={{
                background: "#e67e22",
                color: "white",
                padding: "15px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              <h3>Ingredients</h3>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {ingredients.map((item, index) => (
                  <li key={index}>
                    🔹 {item.ingredient} - {item.measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <div style={{ marginTop: "30px" }}>
          <h3>Instructions</h3>
          <p style={{ lineHeight: "1.6" }}>
            {meal.strInstructions}
          </p>
        </div>
      </div>

      {/* 🔥 CATEGORY GRID AT BOTTOM */}
      <CategoryGrid onSelectCategory={handleCategoryClick} />
    </div>
  );
}

export default MealDetails;