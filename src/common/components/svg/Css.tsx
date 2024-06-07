import * as React from "react";
import type { SVGProps } from "react";
const SvgCss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={77}
    height={28}
    aria-label="CSS3"
    {...props}
  >
    <path fill="#1572b6" d="M0 0h77v28H0z" shapeRendering="crispEdges" />
    <g
      fill="#fff"
      fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
      fontSize={100}
      textAnchor="middle"
      textRendering="geometricPrecision"
    >
      <image
        xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkNTUzM8L3RpdGxlPjxwYXRoIGQ9Ik0xLjUgMGgyMWwtMS45MSAyMS41NjNMMTEuOTc3IDI0bC04LjU2NS0yLjQzOEwxLjUgMHptMTcuMDkgNC40MTNMNS40MSA0LjQxbC4yMTMgMi42MjIgMTAuMTI1LjAwMi0uMjU1IDIuNzE2aC02LjY0bC4yNCAyLjU3M2g2LjE4MmwtLjM2NiAzLjUyMy0yLjkxLjgwNC0yLjk1Ni0uODEtLjE4OC0yLjExaC0yLjYxbC4yOSAzLjg1NUwxMiAxOS4yODhsNS4zNzMtMS41M0wxOC41OSA0LjQxNHoiLz48L3N2Zz4="
        width={14}
        height={14}
        x={9}
        y={7}
      />
      <text
        x={485}
        y={175}
        fontWeight="bold"
        textLength={330}
        transform="scale(.1)"
      >
        {"CSS3"}
      </text>
    </g>
  </svg>
);
export default SvgCss;
