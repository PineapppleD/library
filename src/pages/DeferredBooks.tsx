import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BooksList, Header, Title } from "../components";

function DeferredBooks() {
  const deferredBooks = useSelector(
    (state: RootState) => state.deferredBooks.deferredBooks
  );

  return (
    <>
      <Header />
      {deferredBooks.length !== 0 ? (
        <BooksList books={deferredBooks} />
      ) : (
        <Title titleWeight="bold" titleSize={28} titleColor="black">
          Нет отложенных книг
        </Title>
      )}
    </>
  );
}

export default DeferredBooks;
