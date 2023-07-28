import styles from "./Pagination.module.css";
import { PaginationProps } from "./Pagination.props";
import { BookDescription, Button } from "..";

function Pagination({ books, handleClick }: PaginationProps) {
  return (
    <>
      <ul className={`${styles.bookslist} container`}>
        {books.map((book, index) => {
          const { title, author, book_image, price, description } = book;
          return (
            <li key={index} className={styles.book}>
              <BookDescription
                book_image={book_image}
                title={title}
                description={description}
                price={price}
                author={author}
              />
            </li>
          );
        })}
      </ul>
      <div className={styles.buttons}>
        <Button
          color="white"
          className="paginationbutton"
          background="black"
          fontWeight={700}
          fontSize={18}
          onClick={(e: React.MouseEvent) => handleClick("previous", e)}
        >
          Prev
        </Button>
        <Button
          color="white"
          className="paginationbutton"
          background="black"
          fontWeight={700}
          fontSize={18}
          onClick={(e: React.MouseEvent) => handleClick("next", e)}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Pagination;
