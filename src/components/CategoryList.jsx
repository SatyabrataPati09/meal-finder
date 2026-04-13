import { useEffect, useState } from "react";

function CategoryList({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  if (!categories.length) {
    return <h3 style={{ padding: "20px" }}>Loading...</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Categories</h2>

      {categories.map((cat) => (
        <div
          key={cat.idCategory}
          onClick={() => onSelectCategory(cat.strCategory)}
          style={{
            padding: "10px",
            borderBottom: "1px solid #ddd",
            cursor: "pointer",
          }}
        >
          {cat.strCategory}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;