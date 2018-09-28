import React from "react";
const my_image = require("./map.svg");

class SvgClick extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={my_image} />
      </div>
    );
  }
}

export default SvgClick;
