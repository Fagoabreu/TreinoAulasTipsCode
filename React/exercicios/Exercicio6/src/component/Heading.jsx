import React from "react";

function Heading() {
  const hourNow = new Date().getHours();

  let message;
  let customStyle = {
    color: "black",
  };

  if (hourNow <= 12) {
    message = "bom dia!";
    customStyle.color = "red";
  } else if (hourNow <= 18) {
    message = "Boa tarde!";
    customStyle.color = "green";
  } else {
    message = "Boa noite!";
    customStyle.color = "blue";
  }

  return (
    <h1 className="title" style={customStyle}>
      {message}
    </h1>
  );
}

export default Heading;
