import React from "react";
import LoadingScreen from "react-loading-screen";

export default function App() {
  return (
    <div className="App">
      <h1>Mashreq</h1>
      <LoadingScreen
        loading={true}
        bgColor="rgba(255,255,255,0.8)"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc=""
        text=""
      ></LoadingScreen>
    </div>
  );
}
