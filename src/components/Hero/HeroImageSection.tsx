import styles from "./Hero.module.css";
import { leftarrow, rightarrow } from "../../assets/images";
import { IBooks } from "../../interfaces/Books";

type SliderDirection = "right" | "left";

interface Props extends IBooks {
  handleSlider: (point: SliderDirection) => void;
}

function HeroImageSection({ book_image, title, handleSlider }: Props) {
  return (
    <div className={styles.hero_image_section}>
      <img className={styles.hero_image} src={book_image} alt={title} />
      <div className={styles.hero_arrows}>
        <img
          src={leftarrow}
          alt="swipe left"
          onClick={() => handleSlider("left")}
        />
        <img
          src={rightarrow}
          alt="swipe right"
          onClick={() => handleSlider("right")}
        />
      </div>
    </div>
  );
}

export default HeroImageSection;
