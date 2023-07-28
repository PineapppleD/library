import Pagination from "../Pagination/Pagination";
import { BooksListProps } from "./BooksList.props";
import { useState } from "react";

function BooksList({ books }: BooksListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentBooks = books.slice(firstPostIndex, lastPostIndex);

  const handleClick = (where: string, event: React.MouseEvent) => {
    event.preventDefault();

    if (where === "next" && lastPostIndex <= books.length - postsPerPage) {
      setCurrentPage((prev) => prev + 1);
    } else if (where === "previous" && firstPostIndex >= postsPerPage - 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return <Pagination books={currentBooks} handleClick={handleClick} />;
}

export default BooksList;
