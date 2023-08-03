import { useSelector } from "react-redux";
import { Book } from "..";
import { RootState } from "../../redux/store";
import styles from './FoundBook.module.css'

const FoundBook = () => {
  const book = useSelector((state: RootState) => state.search.foundBook);

  console.log(book)

  return <div className={styles.foundbook}>
  {book ? <Book book={book} /> : <h1>not found</h1>}
  </div>;
};

export default FoundBook;
