import { Title, Text } from "..";
import styles from "./Footer.module.css";
import { telegram, instagram, facebook } from "../../assets/images";

function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer_first_line}>
        <div className={styles.footer_first_column}>
          <Title
            className={styles.footer_title}
            titleWeight="semi-bold"
            titleSize={36}
            titleColor="black"
          >
            Наименование
          </Title>
          <Text
            textSize={18}
            textColor="black"
            className={styles.footer_description}
          >
            Сервис для читающих людей: книги, подкасты, аудиокниги и многое
            другое. Читайте онлайн и офлайн.
          </Text>
        </div>
        <div className={styles.footer_second_column}>
          <ul className={styles.footer_nav}>
            <li className={styles.footer_nav_item}>
              <Text textSize={18} textColor="black">
                Главная
              </Text>
            </li>
            <li className={styles.footer_nav_item}>
              <Text textSize={18} textColor="black">
                Книга
              </Text>
            </li>
            <li className={styles.footer_nav_item}>
              <Text textSize={18} textColor="black">
                Аудио
              </Text>
            </li>
            <li className={styles.footer_nav_item}>
              <Text textSize={18} textColor="black">
                О нас
              </Text>
            </li>
          </ul>
          <ul className={styles.footer_links}>
            <li className={styles.footer_links_item}>
              <Text textSize={18} textColor="black">
                Пользовательсвое соглашение
              </Text>
            </li>
            <li className={styles.footer_links_item}>
              <Text textSize={18} textColor="black">
                Поддержка
              </Text>
            </li>
            <li className={styles.footer_links_item}>
              <Text textSize={18} textColor="black">
                Связь с нами
              </Text>
            </li>
            <li className={styles.footer_links_item}>
              <Text textSize={18} textColor="black">
                Политика обработки персональных данных
              </Text>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_second_line}>
        <Title
          className={styles.footer_second_line_title}
          titleWeight="semi-bold"
          titleSize={24}
          titleColor="black"
        >
          Связь с нами
        </Title>
        <ul className={styles.footer_contacts}>
          <li className={styles.footer_contacts_item}>
            <img
              className={styles.footer_social_media_img}
              src={telegram}
              alt="telegram link"
            />
            <img
              className={styles.footer_social_media_img}
              src={facebook}
              alt="facebook link"
            />
            <img
              className={styles.footer_social_media_img}
              src={instagram}
              alt="instagram link"
            />
          </li>
          <li className={styles.footer_contacts_item}>8 800 500 25 09</li>
          <li className={styles.footer_contacts_item}>NAME@MAIL.RU</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
