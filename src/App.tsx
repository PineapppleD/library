import { MainPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import DeferredBooks from "./pages/DeferredBooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./redux/booksSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchBooks());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/deferredbooks" element={<DeferredBooks />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
