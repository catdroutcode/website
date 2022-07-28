import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="lds-ripple"
        style={{
          boxSizing: "border-box",
          display: "inline-block",
          position: "relative",
          width: "80px",
          height: "80px",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            border: "4px solid",
            borderRadius: "50%",
            animation:
              "1s cubic-bezier(0, 0.2, 0.8, 1) 0s infinite normal none running lds-ripple",
            position: "absolute",
            opacity: 1
          }}
        />
        <div
          style={{
            boxSizing: "border-box",
            border: "4px solid",
            borderRadius: "50%",
            animation:
              "1s cubic-bezier(0, 0.2, 0.8, 1) 0s infinite normal none running lds-ripple",
            position: "absolute",
            opacity: 1,
            animationDelay: "-0.5s"
          }}
        />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  line-height: 1.15;
  font-family: Roboto, sans-serif, sans-serif;
  font-weight: 300;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  font-size: 18px;
}

body {
  box-sizing: border-box;
  line-height: 1.5;
  text-align: left;
  font-family: Roboto, sans-serif, sans-serif;
  font-weight: 300;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  background: rgb(222, 164, 120) url("https://loading.io/assets/img/c/bg/glory-low-contrast.jpg") no-repeat fixed center top / 120%;
  color: rgb(255, 255, 255);
  background-color: rgb(222, 164, 120);
  transition: all 0.3s ease-in 0s;
  position: relative;
}
`
        }}
      />
    </>
  );
}
