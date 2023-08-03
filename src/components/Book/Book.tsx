import { Button } from "..";
import { addSvg } from "../../assets/images";
import cn from "classnames";
import styles from "./Book.module.css";
import { IBooks } from "../../interfaces/Books";
import { RootState } from "../../redux/store";
import {
  addDeferredBook,
  removeDeferredBook,
} from "../../redux/deferredBooksSlice";
import { useSelector, useDispatch } from "react-redux";

interface BookProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  book: IBooks;
  className?: string;
}

function Book({ book, className }: BookProps) {
  const dispatch = useDispatch();
  const deferredBooks = useSelector(
    (state: RootState) => state.deferredBooks.deferredBooks
  );

  const isDeferred = deferredBooks.some(
    (deferredBook) => deferredBook.title === book.title
  );

  const handleButtonClick = () => {
    if (isDeferred) {
      dispatch(removeDeferredBook(book.title));
    } else {
      dispatch(addDeferredBook(book));
    }
  };

  return (
    <div className={styles.book_cover}>
      <div
        className={cn(styles.book, {
          [styles.commonbook]: className === "commonbook",
          [styles.audiobook]: className === "audiobook",
          [styles.minibook]: className === "minibook",
        })}
      >
        <img
          className={styles.book_image}
          src={book.book_image}
          alt={book.title}
        />
        <Button
          onClick={() => handleButtonClick()}
          className="bookbutton"
          fontSize={18}
          fontWeight={300}
          background="gray"
          color="black"
        >
          <img src={addSvg} alt="отложить" />
          {isDeferred ? "Отложено" : "Отложить"}
        </Button>
      </div>
    </div>
  );
}

export default Book;
