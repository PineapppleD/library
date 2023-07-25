import { Button, Logo, Text } from "..";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const navlist = [
    <Text textSize={18} textColor="black">
      Главная
    </Text>,
    <Text textSize={18} textColor="black">
      Книга
    </Text>,
    <Text textSize={18} textColor="black">
      Аудио
    </Text>,
    <Text textSize={18} textColor="black">
      О нас
    </Text>,
  ];

  const [display, setDisplay] = useState(true);
  const className = `${styles.header} container`;

  return (
    <header className={className}>
      <div className={styles.first_column}>
        {display && <Logo className={styles.header_logo} />}
        <Navbar
          setDisplay={setDisplay}
          className={styles.header_navbar}
          childrenList={navlist}
        />
      </div>
      {display && (
        <div className={styles.second_column}>
          <SearchBar className={styles.header_search} />
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
