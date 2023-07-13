import React from "react";
import ReactDom from "react-dom/client";

const main = React.createElement(
  "h3",
  { id: "headingMain" },
  "This is Heading tag"
);

const Mainfunction = function(){
  return (
  <>
  <div>HD1</div>
  <div>HD2</div>
  <div>HD3</div>
  </>
  )
}

const Mainfunction2 = () => {
  return <>
    <div>HD4</div>
    <div>HD5</div>
    <div>HD6</div>
  </>;
}
const Mainfunction3 = () => {
  return( 
  <>
  <Mainfunction/>
  <Mainfunction2/>
  </>)
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Mainfunction3 />);