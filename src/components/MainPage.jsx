import { useNavigate } from "react-router-dom";
import HeaderSub from "./HeaderSub";
import MainLogo from "../assets/MainLogo.svg";

export default function MainPage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/signup");
  };

  return (
    <div
      style={{
        width: "380px",
        backgroundColor: "rgba(245, 236, 213, 1)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <HeaderSub />

      <div
        style={{
          width: "380px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Main Logo */}
        <img
          src={MainLogo}
          alt="Main Logo"
          style={{
            width: "375px",
            marginBottom: "120px",
            marginTop: "100px",
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          봉사활동 성향 테스트
        </h1>

        {/* Start Button */}
        <button
          onClick={handleStartClick}
          style={{
            width: "312px",
            height: "70px",
            padding: "12px 50px",
            fontSize: "20px",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: "#fff",
            boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
            marginBottom: "10px",
          }}
        >
          시작하기
        </button>

        {/* Participant Count */}
      </div>
    </div>
  );
}
