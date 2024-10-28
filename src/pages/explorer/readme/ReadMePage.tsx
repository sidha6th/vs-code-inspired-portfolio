import { AnimatedName } from "./components/animated_typing_name/AnimatedName.tsx";
import GlowingName from "./components/glowing_name/GlowingName.tsx";
import { ReadMeSection } from "./components/readme_section/ReadMeSection.tsx";
import TimeLineSection, {
  TimeLineArgs,
} from "./components/time_line/TimeLineSection.tsx";
import style from "./ReadMePage.module.scss";

function ReadMePage() {
  const timeLineArgs: TimeLineArgs[] = [
    {
      companyName: "White Rabbit Group",
      designation: "Software Engineer",
      from: "2023-Aug",
      to: "Present",
    },
    {
      companyName: "White Rabbit Group",
      designation: "Trainee Software engineer",
      from: "2022-Aug",
      to: "2023-Aug",
    },
    {
      companyName: "Brototype",
      designation: "Internship",
      from: "2021-Nov",
      to: "2022-Jun",
    },
  ];
  return (
    <div id={style.page}>
      <ReadMeSection
        child={
          <>
            <GlowingName name="Sidharth" />
            <AnimatedName title={["Flutter", "React"]} />
          </>
        }
      />
      <ReadMeSection
        title={<h1 className={style.title}>Hi there 👋</h1>}
        content={`I'm a passionate Flutter developer with a background in non-CS fields,
          who followed their love for coding into a career transition. My
          journey into tech ignited a fervent curiosity, leading me to
          constantly explore and master new technologies. With expertise in
          Flutter, HTML, CSS, JavaScript, React, and a growing proficiency in
          native Android development, I'm dedicated to creating innovative
          solutions and pushing the boundaries of what's possible in mobile and
          web development.`}
      />
      <ReadMeSection
        title={<h1 className={style.title}>Skills 🪄</h1>}
        content="With dedicated experience in Flutter development, I've
          honed my skills to deliver robust, cross-platform applications that
          seamlessly blend performance and aesthetics. My expertise extends
          beyond Flutter, as I've ventured into various technologies including
          React, React Native, and native Android development. This diversified
          skill set allows me to adapt to diverse project requirements and
          contribute effectively across different platforms. Whether it's
          crafting pixel-perfect UIs, optimizing app performance, or solving
          complex technical challenges, I bring a versatile skill set and a
          passion for innovation to every project I undertake."
      />
      <br />

      <ReadMeSection
        title={<h1 className={style.title}>Journey 🛵</h1>}
        child={<TimeLineSection experiances={timeLineArgs} />}
      />
    </div>
  );
}

export default ReadMePage;
