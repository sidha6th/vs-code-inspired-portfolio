import style from "./ReadMeSection.module.scss";

export function ReadMeSection(arg: ReadmeSectionArgs) {
  return (
    <section className={style.section}>
      {arg.title}
      <hr />
      <p className={style.content}>{arg.content}</p>
      <br />
    </section>
  );
}

export type ReadmeSectionArgs = {
  title: JSX.Element;
  gifUrl?: string;
  content: string;
};
