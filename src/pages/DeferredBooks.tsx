import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BooksList, Header, Title } from "../components";
import { IBooks } from "../interfaces/Books";
import { useNavigate } from "react-router-dom";

function DeferredBooks() {
  const deferredBooks = useSelector(
    (state: RootState) => state.user.user?.deferredBooks as IBooks[]
  );
  const user = useSelector((state: RootState) => {
    return state.user.user;
  });

  const navigate = useNavigate();
  console.log(deferredBooks);

  return (
    <>
      {user ? (
        <>
          <Header />
          {deferredBooks && deferredBooks?.length !== 0 ? (
            <BooksList books={deferredBooks} />
          ) : (
            <Title titleWeight="bold" titleSize={28} titleColor="black">
              Нет отложенных книг
            </Title>
          )}
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default DeferredBooks;
