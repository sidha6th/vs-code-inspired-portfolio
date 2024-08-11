import style from "./IntroSection.module.scss";
import image from "../../../../assets/images/image.jpeg";
import overlayImage from "../../../../assets/images/overlayImage.png";

function IntroSection() {
  return (
    <section className={style.introSection}>
      <div className={style.imgFrame}>
        <img src={image} alt="main-img" className={style.myImage} />
      </div>
      <h1 className={`${style.introTitle} ${style.name}`}>Sidharth</h1>
      <h1 className={`${style.introTitle} ${style.designation}`}>
        Software Engineer
      </h1>
      <div className={style.imgFrame}>
        <img
          src={overlayImage}
          alt="overlay-img"
          className={style.overlayImg}
        />
      </div>
    </section>
  );
}

export default IntroSection;
