import { Title, Text, Button } from "..";
import { IBooks } from "../../interfaces/Books";
import styles from "./Hero.module.css";


const HeroTextSection: React.FC<IBooks> = ({ title, description }) => {
  return (
    <div className={styles.hero_text_section}>
      <>
        <Title className={styles.hero_title} titleSize={44} titleColor="golden" titleWeight="semi-bold">
          {title}
        </Title>
        <Text className={styles.hero_description} textSize={20} textColor="golden">
          {description}
        </Text>
        <Button
          className={styles.hero_btn}
          padding="4px 13px"
          color="red"
          background="golden"
          fontWeight={700}
          fontSize={16}
        >
          Подробнее
        </Button>
      </>
    </div>
  );
}

export default HeroTextSection;
