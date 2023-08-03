import { Button, Logo } from "..";
import FoundBook from "../FoundBook/FoundBook";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { IBooks } from "../../interfaces/Books";
import { searchBook, fillSearchValue } from "../../redux/searchSlice";

function Header() {
  const dispatch = useDispatch();

  const [display, setDisplay] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const books = useSelector((state: RootState) => state.books.books);
  const searchInput = useSelector(
    (state: RootState) => state.search.searchInput
  );
  const className = `${styles.header} container`;

  useEffect(() => {
    let foundBook = books.filter(
      (book: IBooks) => book.title.toLowerCase() === searchInput.toLowerCase()
    );

    foundBook = foundBook.length === 0 ? null : foundBook[0];

    isButtonClicked ? dispatch(searchBook(foundBook)) : null;
  }, [isButtonClicked]);

  return (
    <header className={className}>
      <div className={styles.first_line}>
        <div className={styles.first_column}>
          {display && <Logo className={styles.header_logo} />}
          <Navbar setDisplay={setDisplay} className={styles.header_navbar} />
        </div>
        {display && (
          <div className={styles.second_column}>
            <SearchBar
              setIsButtonClicked={setIsButtonClicked}
              setDisplay={setDisplay}
              className={styles.header_search}
            />
            <Button
              className="loginbutton"
              fontSize={16}
              fontWeight={700}
              background="black"
              color="white"
            >
              Войти
            </Button>
          </div>
        )}
      </div>
      {isButtonClicked && (
        <div className={styles.second_line}>
          <FoundBook />
          <div
            onClick={() => {
              setIsButtonClicked(prev => !prev)
              dispatch(fillSearchValue(''))
            }}
          style={{
            width: "20px",
            height: "20px"
          }}>
            <span className={styles.close}></span>
            <span className={styles.close}></span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
