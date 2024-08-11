import style from "./ReadMeSection.module.scss";

export function ReadMeSection(arg: ReadmeSectionArgs) {
  return (
    <section className={style.section}>
      {arg.title}
      {arg.title == undefined ? <></> : <hr />}
      {arg.child ?? <p className={style.content}>{arg.content}</p>}
      {arg.title == undefined ? <></> : <br />}
    </section>
  );
}

export type ReadmeSectionArgs = {
  title?: JSX.Element;
  content?: string;
  child?: JSX.Element;
};
