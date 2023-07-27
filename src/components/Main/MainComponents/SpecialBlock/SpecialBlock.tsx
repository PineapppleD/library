import { useState, useEffect } from "react";
import { Block, Title, Text, Book } from "../../..";
import styles from "../../Main.module.css";
import { SpecialBlockProps } from "./SpecialBlock.props";
import { fetchData } from "../../../../assets";
import { IBooks } from "../../../../interfaces/Books";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SpecialBlock({
  title,
  description,
  color,
  endpoint,
  background = "#fff",
  borderRadius,
  booktype,
  height,
}: SpecialBlockProps) {
  const [books, setBooks] = useState<IBooks[] | never[]>([]);

  useEffect(() => {
    (async () => {
      const data = fetchData(
        `https://api.nytimes.com/svc/books/v3/lists/current/${endpoint}.json?api-key=`
      );
      const res = await data;
      setBooks(await res.results.books);
    })();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Block
      className={`${styles.special_block} container`}
      height={height}
      borderRadius={borderRadius}
      background={background}
    >
      <div>
        <div className={styles.first_line}>
          <>
            <Title titleSize={32} titleColor={color} titleWeight="semi-bold">
              {title}
            </Title>
            {description && (
              <Text textColor={color} textSize={18}>
                {description}
              </Text>
            )}
          </>

          <p className={styles.p}>все</p>
        </div>
        <Carousel responsive={responsive}>
          {books.map((book, index) => {
            return (
              <Book
                key={index}
                className={booktype}
                title={book.title}
                imgUrl={book.book_image}
              />
            );
          })}
        </Carousel>
      </div>
    </Block>
  );
}

export default SpecialBlock;
