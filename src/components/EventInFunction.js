import App from "../App";

function EventInFunction() {
  const handleClick = () => {
    console.log("hi");
  };
  return (
    <div>
      <App />
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default EventInFunction;
