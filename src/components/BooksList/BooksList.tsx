import { IBooks } from "../../interfaces/Books";
import { RootState } from "../../redux/store";
import Pagination from "../Pagination/Pagination";
import { BooksListProps } from "./BooksList.props";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function BooksList(props: BooksListProps) {
  const books = useSelector((state: RootState) => state.books.books);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const [currentBooks, setCurrentBooks] = useState<IBooks[] | never[]>([]);

  useEffect(() => {
    setCurrentBooks(books);
    console.log(books);
  }, [books]);

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
