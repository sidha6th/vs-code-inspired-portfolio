import style from "./TimeLine.module.scss";

export type TimeLineArgs = {
  companyName: string;
  designation: string;
  from: string;
  to: string;
};

function TimeLineSection(arg: { experiances?: TimeLineArgs[] }) {
  return (
    <>
      <div className={style.timeLine}>
        {arg.experiances?.map((value) => {
          return (
            <>
              <div className={style.pair}>
                <div>
                  <div className={style.circle} />
                  <div className={style.line} />
                </div>
                <div className={style.timeLineCard}>
                  <section className={style.title}>
                    <p className={style.designation}>{value.designation}</p>
                    <p className={style.duration}>
                      {value.from}
                      {" - "}
                      {value.to}
                    </p>
                  </section>
                  <p className={style.org}>{value.companyName}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TimeLineSection;
