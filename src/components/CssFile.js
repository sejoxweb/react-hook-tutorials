import React from "react";
import "./myStyle.css";

function CssFile(props) {
  let className = props.primary ? "primary" : "";
  let inline = {
    textDecoration: "underline",
  };
  return (
    <div>
      <div className={`${className} font-xl`}>
        css<span style={inline}>File</span>
      </div>
      <div className="error">error</div>
      {/* <div className={styles.success}>success</div> */}
    </div>
  );
}

export default CssFile;
