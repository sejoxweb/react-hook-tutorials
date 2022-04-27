import React from "react";

function InlineCSS() {
  let className = {
    fontSize: "100px",
  };
  const user = "joe";
  return (
    <div style={user === "joe" ? className : null} id="john">
      InlineCSS
    </div>
  );
}

export default InlineCSS;
