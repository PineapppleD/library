import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

function Button({
  children,
  fontSize,
  background,
  color,
  fontWeight,
  className,
  onClick,
}: ButtonProps) {
  const buttonStyles = {
    fontSize,
    fontWeight,
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyles}
      className={cn(
        styles.button,
        {
          [styles.common_book_button]: className === "bookbutton",
          [styles.login_button]: className === 'loginbutton',
          [styles.pagination_button]: className === 'paginationbutton',
          bg_golden: background === "golden",
          bg_black: background === "black",
          bg_gray: background === "gray",
          bg_gray_light: background === "gray-light",
          bg_milk: background === "milk",
          black: color === "black",
          white: color === "white",
          green: color === "green",
          primary: color === "primary",
          red: color === "red",
          gray: color === "gray",
        },
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
