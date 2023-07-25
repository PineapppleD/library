import { TitleProps } from "./Title.props";
import styles from "./Title.module.css";
import cn from "classnames";

function Title({ titleSize, titleColor, children, titleWeight, className }: TitleProps) {
  return (
    <p
      className={cn(styles.title, {
        [styles.title_xs]: titleSize === 28,
        [styles.title_s]: titleSize === 32,
        [styles.title_m]: titleSize === 34,
        [styles.title_l]: titleSize === 36,
        [styles.title_xl]: titleSize === 44,
        [styles.bold]: titleWeight === "bold",
        [styles.semi_bold]: titleWeight === "semi-bold",
        black: titleColor === "black",
        gray: titleColor === "gray",
        white: titleColor === "white",
        milk: titleColor === "milk",
        green: titleColor === "green",
        golden: titleColor === "golden",
      }, className)}
    >
      {children}
    </p>
  );
}

export default Title;
