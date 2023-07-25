import cn from "classnames";
import styles from "./Text.module.css";
import { TextProps } from "./Text.props";

function Text({
  textSize,
  children,
  textColor,
  className,
}: TextProps): JSX.Element {
  const textClasses = `${cn(styles.text, {
    [styles.xs]: textSize === 16,
    [styles.s]: textSize === 18,
    [styles.m]: textSize === 20,
    [styles.l]: textSize === 24,
    black: textColor === "black",
    gray: textColor === "gray",
    white: textColor === "white",
    milk: textColor === "milk",
    green: textColor === "green",
    golden: textColor === "golden",
  })}`;

  return <p className={`${textClasses} ${className}`}>{children}</p>;
}

export default Text;
