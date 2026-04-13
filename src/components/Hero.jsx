import { useState } from "react";

function Hero({ onSearch, showSearch = true }) {
  const [text, setText] = useState("");

  const handleSearch = () => {
    if (text.trim() && onSearch) {
      onSearch(text);
    }
  };

  return (
    <div
      style={{
        height: "380px",

        // ✅ Banner with overlay (BEST LOOK)
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://img.particlenews.com/image.php?type=thumbnail_580x000&url=1RKRjD_0yav9Kr400')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* 🔍 PREMIUM SEARCH BAR */}
      {showSearch && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Search recipes here ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              padding: "14px 25px",
              borderRadius: "30px",
              border: "none",
              outline: "none",
              width: "320px",
              fontSize: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              background: "#e67e22",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            🔍
          </button>
        </div>
      )}

      {/* TEXT */}
      <h1
        style={{
          marginTop: "25px",
          fontSize: "32px",
          fontWeight: "600",
        }}
      >
        What are your favorite cuisines?
      </h1>

      <p
        style={{
          marginTop: "10px",
          letterSpacing: "1px",
          fontSize: "14px",
        }}
      >
        PERSONALIZE YOUR EXPERIENCE
      </p>
    </div>
  );
}

export default Hero;