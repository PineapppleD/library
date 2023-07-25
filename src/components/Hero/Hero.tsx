import { useState, useEffect } from "react";
import { HeroProps } from "./Hero.props";
import { IBooks } from "../../interfaces/Books";
import { fetchData } from "../../assets";
import styles from "./Hero.module.css";
import HeroTextSection from "./HeroTextSection";
import HeroImageSection from "./HeroImageSection";

function Hero(props: HeroProps): JSX.Element {
  const [books, setBooks] = useState<IBooks[] | never[]>([]);
  const [bookIndex, setBookIndex] = useState<number>(0);

  useEffect(() => {
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/culture.json?api-key=`;
    const getData = async () => {
      const res = await fetchData(url);
      setBooks(res.results.books);
    };
    getData();
  }, []);

  const handleSlider = (point: string) => {
    if (point === "left") {
      bookIndex === 0
        ? setBookIndex(books.length - 1)
        : setBookIndex(bookIndex - 1);
    } else {
      bookIndex === books.length - 1
        ? setBookIndex(0)
        : setBookIndex(bookIndex + 1);
    }
  };

  const className = `${styles.hero} `;

  return (
    <div className={className}>
      <div className="container">
        {books.length > 0 ? (
          <>
            <HeroTextSection {...books[bookIndex]} />
            <HeroImageSection
              {...books[bookIndex]}
              handleSlider={handleSlider}
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Hero;
