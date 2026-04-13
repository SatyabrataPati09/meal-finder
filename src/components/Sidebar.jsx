function Sidebar({ isOpen, closeSidebar, onSelectCategory }) {
  if (!isOpen) return null;

  const categories = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
    "Goat",
  ];

  return (
    <>
      {/* 🔥 OVERLAY (CLICK OUTSIDE CLOSE) */}
      <div
        onClick={closeSidebar}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
          zIndex: 999,
        }}
      ></div>

      {/* 📂 SIDEBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "260px",
          height: "100%",
          background: "#fff",
          padding: "20px",
          boxShadow: "-2px 0 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          overflowY: "auto",
        }}
      >
        {/* ❌ CLOSE BUTTON */}
        <div style={{ textAlign: "right", marginBottom: "15px" }}>
  <div
    onClick={closeSidebar}
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      background: "#e67e22",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      marginLeft: "auto",
      fontSize: "18px",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#cf711f";
      e.currentTarget.style.transform = "scale(1.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#e67e22";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    ✕
  </div>
</div>

        {/* 📋 CATEGORY LIST */}
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => {
              onSelectCategory(cat);
              closeSidebar();
            }}
            style={{
              padding: "12px 5px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#e67e22";
              e.currentTarget.style.paddingLeft = "10px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.paddingLeft = "5px";
            }}
          >
            {cat}
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;