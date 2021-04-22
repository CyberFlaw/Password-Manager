import React from "react";
import background from "../Assets/theme/login1.svg";

export default function Login() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      ></div>
    </React.Fragment>
  );
}
