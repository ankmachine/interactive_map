import React from "react";

const BlrMap = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={1000}
    height={1000}
    viewBox="0 0 264.583 256.165"
    {...props}
  >
    <g fill="gray">
      <path d="m 138.166,19.362 h 11 V 26 H 138.75 z" />
      <path d="m 158.75,19.362738 h 10.58334 V 25.97732 H 158.75 z" />
    </g>
    <g>{props.children}</g>
  </svg>
);

export default BlrMap;
