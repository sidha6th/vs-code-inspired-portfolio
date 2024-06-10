import { useEffect, useRef } from "react";
import style from "./IconStyle.module.css";
const ArrowIcon = ({ opened }: { opened?: boolean }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (opened) {
      svgRef.current?.classList.add(style.opened);
    } else {
      svgRef.current?.classList.remove(style.opened);
    }
  }, [opened]);

  return (
    <svg ref={svgRef} className={style.arrow} viewBox="0 0 20 20">
      <path
        d="M16.4196 10L9.34364 17.2725C9.10293 17.5199 9.10835 17.9156 9.35575 18.1563C9.60315 18.397 9.99884 18.3916 10.2395 18.1442L17.7395 10.4359C17.9756 10.1932 17.9756 9.80678 17.7395 9.56416L10.2395 1.85583C9.99884 1.60843 9.60315 1.60301 9.35575 1.84372C9.10835 2.08443 9.10293 2.48012 9.34364 2.72752L16.4196 10Z"
        fill="white"
      />
    </svg>
  );
};
export default ArrowIcon;
