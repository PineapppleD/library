import {BooksList, Header} from "../components";
import {useEffect, useState} from 'react';
import { IBooks } from "../interfaces/Books";
import { fetchData } from "../assets";

function BooksPage() {

    const [books, setBooks] = useState<IBooks[] | never[]>([])

    useEffect(() => {
        const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='
        const getData = async () => {
            const res = await fetchData(url);
            setBooks(res.results.books);
          };
          getData();
    }, [])

    return (
        <>
        <Header />
        <BooksList books={books}/>
        </>
    );
}

export default BooksPage;