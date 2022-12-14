import React from "react";

// ReactDOM.render(
//   React.createElement("input", {
//     placeholder: "help me",
//     onClick: () => console.log("clicked");
//     onMouseEnter: () => console.log("over mouse")
//   }), document.getElementById("app")
// );

class Header extends React.Component {
  render() {
    return <header className="header">{this.props.title}</header>;
  }
}

export default Header;
