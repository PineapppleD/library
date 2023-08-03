import { Button, Logo } from "..";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {

  const [display, setDisplay] = useState(true);
  const className = `${styles.header} container`;

  return (
    <header className={className}>
      <div className={styles.first_column}>
        {display && <Logo className={styles.header_logo} />}
        <Navbar
          setDisplay={setDisplay}
          className={styles.header_navbar}
        />
      </div>
      {display && (
        <div className={styles.second_column}>
          <SearchBar setDisplay={setDisplay} className={styles.header_search} />
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
    </header>
  );
}

export default Header;
