import search from "../../assets/images/search.svg";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.props";
import { useState } from "react";

function SearchBar(props: SearchBarProps) {
  const [screen, setScreen] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  window.addEventListener("resize", () => setScreen(window.innerWidth));

  if (open && screen > 998) {
    setOpen(false)
  }

  const buttonHandler = () => {
    screen < 998 ? setOpen(prev => !prev) : null;
  };

  return (
    <div className={styles.search_bar}>
      <input
        className={`${styles.search_input} ${
          open ? styles.open_input : ''
        }`}
        type="text"
        placeholder="Найти..."
      />
      <img
        onClick={buttonHandler}
        className={styles.search_tool}
        src={search}
        alt="search foor books"
      />
    </div>
  );
}

export default SearchBar;
