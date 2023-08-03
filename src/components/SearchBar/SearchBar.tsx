import { useDispatch, useSelector } from "react-redux";
import search from "../../assets/images/search.svg";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.props";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { fillSearchValue } from "../../redux/searchSlice";

function SearchBar({ setDisplay, setIsButtonClicked }: SearchBarProps) {
  const dispatch = useDispatch();
  const inputValue = useSelector(
    (state: RootState) => state.search.searchInput
  );

  const [screen, setScreen] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  window.addEventListener("resize", () => setScreen(window.innerWidth));

  if (open && screen > 998) {
    setOpen(false);
  }

  const buttonHandler = () => {
    screen < 998 ? setOpen((prev) => !prev) : null;
    if (inputValue.length !== 0) {
      setIsButtonClicked((prev) => !prev);
    }
  };

  const [inputText, setInputText] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    dispatch(fillSearchValue(inputText));
  }, [inputText]);

  return (
    <div className={styles.search_bar}>
      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        className={`${styles.search_input} ${open ? styles.open_input : ""}`}
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
