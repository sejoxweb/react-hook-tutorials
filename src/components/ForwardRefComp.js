import React from "react";

const ForwardRefComp = React.forwardRef((props, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
});

export default ForwardRefComp;
