import { Button } from "..";
import { addSvg } from "../../assets/images";
import cn from "classnames";
import styles from "./Book.module.css";
import { IBooks } from "../../interfaces/Books";
import { RootState } from "../../redux/store";
import { addDeferredBook, removeDeferredBook } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

interface BookProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  book: IBooks;
  className?: string;
}

function Book({ book, className }: BookProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const deferredBooks = user?.deferredBooks;
  const isDeferred = deferredBooks?.some((deferredBook) => deferredBook.title === book.title);

  const handleButtonClick = () => {
    if (isDeferred) {
      dispatch(removeDeferredBook(book.title)); // Update Redux store
    } else {
      dispatch(addDeferredBook(book)); // Update Redux store
    }
  };

  useEffect(() => {
    // Save updated user object to localStorage whenever user changes
    if (user) {
      const usersData = localStorage.getItem("users");
      const users = usersData ? JSON.parse(usersData) : [];
      const updatedUsers = users.map((u: any) => (u.name === user.name ? user : u));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [user]);

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
