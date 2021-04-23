// Importing Dependencies
import React from "react";
// import { remote } from "electron";

// Importing Assets
import background from "../Assets/theme/login1.svg";
import google from "../Assets/icons/google.png";
import github from "../Assets/icons/github.png";

// Controller functions

// Exporting Functiom
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
          flexDirection: "column",
          height: "100vh",
          width: "100%",
          boxShadow: "10px 10px 5px black",
        }}
      >
        <div style={{ display: "flex" }}>
          {/* body */}
          <div
            style={{
              height: 410,
              width: 408,
              marginTop: 150,
              marginLeft: 35,
              display: "flex",
              flexDirection: "column",
              color: "white",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: "lighter",
              fontSize: 24,
            }}
          >
            {/* Text fields */}
            <label htmlFor=".email">Email</label>
            <input
              type="email"
              className="email"
              style={{
                height: 40,
                width: 300,
                borderRadius: "5rem",
                marginBottom: 30,
                fontFamily: '"Poppins", sans-serif',
                paddingLeft: 20,
                fontSize: 16,
                outline: "none",
              }}
            />
            <label htmlFor=".password">Password</label>
            <input
              type="password"
              className="password"
              style={{
                height: 40,
                width: 300,
                borderRadius: "5rem",
                fontFamily: '"Poppins", sans-serif',
                paddingLeft: 20,
                fontSize: 16,
                marginBottom: 50,
                outline: "none",
              }}
            />
            {/* Login Button */}
            <button
              style={{
                height: 40,
                width: 150,
                backgroundColor: "rgb(36,141,110)",
                color: "white",
                border: "none",
                fontFamily: '"Poppins", sans-serif',
                borderRadius: "3rem",
                alignSelf: "center",
                fontSize: 18,
                outline: "none",
              }}
            >
              Login
            </button>
            <a
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                alignSelf: "center",
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              Forgot Password?
            </a>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <button
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: "50%",
                  padding: 5,
                  marginRight: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                }}
              >
                <img
                  src={google}
                  alt="google"
                  style={{
                    height: 28,
                    width: 28,
                  }}
                />
              </button>
              <button
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: "50%",
                  padding: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                }}
              >
                <img
                  src={github}
                  alt="github"
                  style={{
                    height: 32,
                    width: 32,
                  }}
                />
              </button>
            </div>
            <a
              href="/"
              style={{
                alignSelf: "center",
                textDecoration: "none",
                color: "white",
                fontSize: 14,
              }}
            >
              {" "}
              Dont have an Account?
            </a>
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            {/* Window control buttons */}
            <button
              style={{
                marginTop: 7,
                marginRight: 5,
                height: 15,
                width: 15,
                backgroundColor: "rgba(61, 67, 86, 0.72)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20%",
                border: "1px inset black",
                color: "white",
                outline: "none",
              }}
            >
              -
            </button>
            <button
              style={{
                marginTop: 7,
                marginRight: 7,
                height: 15,
                width: 15,
                backgroundColor: "rgba(61, 67, 86, 0.72)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20%",
                border: "1px inset black",
                color: "white",
                fontSize: 10,
                outline: "none",
              }}
              // onClick={() => remote.getCurrentWindow().close()}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
