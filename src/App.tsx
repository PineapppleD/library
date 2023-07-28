import { MainPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
