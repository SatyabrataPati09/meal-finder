import { useEffect, useState } from "react";

function CategoryGrid({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  if (!categories.length) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          borderBottom: "3px solid #e67e22",
          display: "inline-block",
        }}
      >
        CATEGORIES
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.idCategory}
            onClick={() => onSelectCategory(cat.strCategory)}
            style={{
              position: "relative", // 🔥 IMPORTANT FOR BADGE
              background: "#fff",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 15px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 2px 8px rgba(0,0,0,0.1)";
            }}
          >
            {/* IMAGE */}
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              style={{ width: "100%", borderRadius: "8px" }}
            />

            {/* 🔥 BADGE TOP RIGHT */}
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#e67e22",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              {cat.strCategory}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;