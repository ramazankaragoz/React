var React=require("react");
var ReactDOM=require("react-dom");
var Hello=require("Hello");

var firstName="Ramazan";

ReactDOM.render(
    <Hello name={firstName}/>,
    document.getElementById("app")
);