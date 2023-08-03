import { BooksList, Header } from "../components";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";


function BooksPage() {

  const books = useSelector((state: RootState) => state.books.books);

  return (
    <>
      <Header />
      <BooksList books={books}/>
    </>
  );
}

export default BooksPage;
