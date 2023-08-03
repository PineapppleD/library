import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Header, Title } from "../components";
import Pagination from "../components/Pagination/Pagination";

function DeferredBooks() {
  const deferredBooks = useSelector(
    (state: RootState) => state.deferredBooks.deferredBooks
  );

  return (
    <>
      <Header />
      {deferredBooks.length !== 0 ? (
        <Pagination handleClick={() => {}} books={deferredBooks}/>
      ) : (
        <Title titleWeight="bold" titleSize={28} titleColor="black">Нет отложенных книг</Title>
      )}
    </>
  );
}

export default DeferredBooks;
