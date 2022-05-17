import React from "react";

function Title() {
  console.log("Render title");
  return <h2>Todos</h2>;
}
//export default Title;
export default React.memo(Title);
