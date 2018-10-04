import React from "react";

const BlrMap = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={1200}
    height={1200}
    viewBox="0 0 264.583 256.165"
    {...props}
  >
    <g>
      <rect
        x="0"
        y="0"
        width="920"
        height="920"
        fill="#ffffff"
        stroke="#000000"
      />
      <rect
        x="720"
        y="30"
        width="200"
        height="80"
        fill="#ffffff"
        stroke="#000000"
      />
    </g>
    <g>{props.children}</g>
  </svg>
);

export default BlrMap;
