import * as React from "react";

function SvgMore(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302 52" {...props}>
      <g data-name="\u30EC\u30A4\u30E4\u30FC 2">
        <g data-name="\u30EC\u30A4\u30E4\u30FC 1">
          <path fill="#c20005" d="M0 0h302v52H0z" />
          <text
            transform="translate(23.38 36.96)"
            fontSize={36}
            fill="#fff"
            fontFamily="Nikkyou-Sans,Nikkyou Sans"
          >
            {"MORE"}
          </text>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
            d="M205.84 30h85.75l-18.37-8"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgMore;
