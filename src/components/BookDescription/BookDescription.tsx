import { Title, Text, Book, Button } from "..";
import styles from "./BookDescription.module.css";
import { BookDescriptionProps } from "./BookDescription.props";

function BookDescription({
  book,
}: BookDescriptionProps) {
  return (
    <div className={styles.book_information}>
      <Book className="minibook" book={book} />
      <div className={styles.book_description}>
        <Title
          className={styles.book_title}
          titleColor="white"
          titleSize={28}
          titleWeight="semi-bold"
        >
          {book.title}
        </Title>

        <Text textSize={18} textColor="white">
          Author: {book.author}
        </Text>

        <Text
          className={styles.description_text}
          textSize={18}
          textColor="white"
        >
          Description:
          <br /> {book.description}
        </Text>

        <Text className={styles.price} textSize={16} textColor="golden">
          Price: {book.price}
        </Text>

        <Button
          className={styles.see_more_button}
          background="gray-light"
          fontWeight={300}
          color="black"
          fontSize={16}
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
}

export default BookDescription;
