import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={88.25}
    height={28}
    aria-label="HTML5"
    {...props}
  >
    <path fill="#e34f26" d="M0 0h88.25v28H0z" shapeRendering="crispEdges" />
    <g
      fill="#fff"
      fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
      fontSize={100}
      textAnchor="middle"
      textRendering="geometricPrecision"
    >
      <image
        xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkhUTUw1PC90aXRsZT48cGF0aCBkPSJNMS41IDBoMjFsLTEuOTEgMjEuNTYzTDExLjk3NyAyNGwtOC41NjQtMi40MzhMMS41IDB6bTcuMDMxIDkuNzVsLS4yMzItMi43MTggMTAuMDU5LjAwMy4yMy0yLjYyMkw1LjQxMiA0LjQxbC42OTggOC4wMWg5LjEyNmwtLjMyNiAzLjQyNi0yLjkxLjgwNC0yLjk1NS0uODEtLjE4OC0yLjExSDYuMjQ4bC4zMyA0LjE3MUwxMiAxOS4zNTFsNS4zNzktMS40NDMuNzQ0LTguMTU3SDguNTMxeiIvPjwvc3ZnPg=="
        width={14}
        height={14}
        x={9}
        y={7}
      />
      <text
        x={541.25}
        y={175}
        fontWeight="bold"
        textLength={442.5}
        transform="scale(.1)"
      >
        {"HTML5"}
      </text>
    </g>
  </svg>
);
export default SvgHtml;
