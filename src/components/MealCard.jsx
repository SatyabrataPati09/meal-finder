import { useNavigate } from "react-router-dom";

function MealCard({ meal }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/meal/${meal.idMeal}`)}
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      {/* IMAGE */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>

      {/* TEXT */}
      <div style={{ padding: "15px" }}>
        <h3
          style={{
            fontSize: "16px",
            margin: 0,
          }}
        >
          {meal.strMeal}
        </h3>
      </div>
    </div>
  );
}

export default MealCard;