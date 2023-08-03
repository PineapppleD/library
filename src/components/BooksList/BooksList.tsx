import Pagination from "../Pagination/Pagination";
import { BooksListProps } from "./BooksList.props";
import { useEffect, useState } from "react";

function BooksList({books}: BooksListProps) {

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [books]);

  const lastBookIndex = currentPage * postsPerPage;
  const firstBookIndex = lastBookIndex - postsPerPage;

  const currentBooks = books.slice(firstBookIndex, lastBookIndex);

  const handleClick = (where: string, event: React.MouseEvent) => {
    event.preventDefault();

    if (where === "next" && lastBookIndex < books.length) {
      setCurrentPage((prev) => prev + 1);
      console.log(currentPage);
    } else if (where === "previous" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return <Pagination length={books.length} books={currentBooks} handleClick={handleClick} />;
}

export default BooksList;
