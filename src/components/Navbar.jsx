import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div
      style={{
        background: "#e64f04ee",
        color: "white",
        padding: "12px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        onClick={goHome}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "25px",
            height: "25px",
          }}
        />

        <span
  style={{
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px",
  }}
>
  MEAL FINDER
</span>
      </div>

      <div
        onClick={toggleSidebar}
        style={{
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        ☰
      </div>
    </div>
  );
}

export default Navbar;