import { useEffect, useRef, useState } from "react";
// import { setOrGet } from "../../../../../common/helpers/storage_helper";
import style from "./AnimatedName.module.scss";
export function AnimatedName(arg: { title: string[] }) {
  const index = useRef(0);
  // const indexKey = "index";
  const isAnimationForward = useRef(true);
  const animationInProgess = useRef(false);
  const variationsIndex = useRef(0);
  const [state, setState] = useState<string>();

  useEffect(() => {
    // index.current = parseInt(setOrGet(indexKey) ?? "0");
    const animation = (): void => {
      setInterval(writeName, 300);
    };

    const dispose = () => {
      animation();
      // setOrGet(indexKey, index.current.toString());
    };

    return dispose;
  }, []);

  return (
    <div className={style.container}>
      <h1 className={`${style.name} ${style.title}`}>{state}</h1>
      <h1 className={style.title}>Developer</h1>
    </div>
  );

  function writeName(): void {
    if (animationInProgess.current) return;

    animationInProgess.current = true;
    const title = arg.title[variationsIndex.current];

    if (isAnimationForward.current && index.current > title.length) {
      isAnimationForward.current = false;
    } else if (!isAnimationForward.current && index.current < 0) {
      isAnimationForward.current = true;
      _nextTitle();
    }

    if (isAnimationForward.current) {
      setState(title.substring(0, index.current++) ?? "");
    } else {
      setState(title.substring(0, index.current--) ?? "");
    }
    animationInProgess.current = false;
  }

  function _nextTitle() {
    variationsIndex.current === arg.title.length - 1
      ? (variationsIndex.current = 0)
      : variationsIndex.current++;
  }
}
