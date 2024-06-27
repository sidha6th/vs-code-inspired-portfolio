import style from "./ReadMePage.module.scss";
import wave from "../../assets/gif/wave.gif";
import { ReadMeSection } from "./components/readme_section/ReadMeSection.tsx";
import IntroSection from "./components/image_animation_section/IntroSection.tsx";

function ReadMePage() {
  return (
    <div id={style.page}>
      <IntroSection/>
      <ReadMeSection
        title={
          <h1 className={style.title}>
            Hi there{" "}
            <span>
              <img src={wave} alt="wave.gif" />
            </span>
          </h1>
        }
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
        title={<h1 className={style.title}>Skills 🔑</h1>}
        content="With 2 years of dedicated experience in Flutter development, I've
          honed my skills to deliver robust, cross-platform applications that
          seamlessly blend performance and aesthetics. My expertise extends
          beyond Flutter, as I've ventured into various technologies including
          React, React Native, and native Android development. This diversified
          skill set allows me to adapt to diverse project requirements and
          contribute effectively across different platforms. Whether it's
          crafting pixel-perfect UIs, optimizing app performance, or solving
          complex technical challenges, I bring a versatile skill set and a
          passion for innovation to every project I undertake."
      ></ReadMeSection>
      <br />
      <section className={style.section}>
        <h1>Experiance</h1>
        <hr />
      </section>
    </div>
  );
}

export default ReadMePage;
