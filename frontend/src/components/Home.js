import React from "react";
import image10 from "../assets/image10.jpg";

const divStyle = {
  backgroundImage: `url(${image10})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "white",
  textAlign: "center",
};

const Home = () => {
  const texts = [
    { text1: "IPRIMO STORE" },
    { text1: "", text2: "Indulge your passions" },
    { text1: "", text2: "Give in it to what makes you HAPPY" },
  ];

  return (
    <div style={divStyle}>
      {texts.map((text, index) => (
        <div key={index}>
          <h1>{text.text1}</h1>
          <h4>{text.text2}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
