import { NavbarProps } from "./Navbar.props";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Text } from "..";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Navbar({ setDisplay }: NavbarProps): JSX.Element {
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);

  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run this effect only once on mount

  useEffect(() => {
    if (screen > 998) {
      setMenu(false);
      setDisplay(true);
    }
  }, [screen, setDisplay]);

  const menuHandler = () => {
    setMenu((prev) => !prev);
    setDisplay((prev) => !prev);
  };

  return (
    <>
      {
        <ul
          style={{
            display: menu ? "flex" : "",
          }}
          className={styles.navbar}
        >
          <li>
            <NavLink to="/">
              <Text textSize={18} textColor="black">
                Главная
              </Text>
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">
              <Text textSize={18} textColor="black">
                Книга
              </Text>
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/deferredbooks">
                <Text textSize={18} textColor="black">
                  Отложенные
                </Text>
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/about">
              <Text textSize={18} textColor="black">
                О нас
              </Text>
            </NavLink>
          </li>
        </ul>
      }
      <div
        onClick={menuHandler}
        className={` ${styles.burger_menu} ${
          menu ? styles.burger_menu_open : ""
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default Navbar;
