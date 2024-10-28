import style from "./GlowinName.module.scss";

export default function GlowingName(arg: { name: string }) {
  return <h1 className={style.glowingName}>{arg.name}</h1>;
}
