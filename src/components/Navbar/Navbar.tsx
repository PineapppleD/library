import { NavbarProps } from "./Navbar.props";
import styles from "./Navbar.module.css";
import {useState} from "react";

function Navbar({ childrenList, setDisplay }: NavbarProps): JSX.Element {

  const [menu, setMenu] = useState(false)
  const [screen, setScreen] = useState(window.innerWidth)

  window.addEventListener("resize", () => setScreen(window.innerWidth));

  if (screen > 998) {
    setDisplay(true)
  }

  const menuHandler = () => {
    setMenu(prev => !prev)
    setDisplay(prev => !prev)
  }

  return (

    <>
    <ul className={styles.navbar}>
      {childrenList.map((e: JSX.Element) => (
        <li key={e.props.children}>{e}</li>
      ))}
    </ul>
    <div onClick={menuHandler} className={styles.burger_menu}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </>
  );
}

export default Navbar;
