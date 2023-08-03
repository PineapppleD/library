import { useState, useEffect } from "react";
import { Block, Title, Text, Book } from "../../..";
import styles from "../../Main.module.css";
import { SpecialBlockProps } from "./SpecialBlock.props";
import { IBooks } from "../../../../interfaces/Books";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

function SpecialBlock({
  title,
  description,
  color,
  background = "#fff",
  borderRadius,
  booktype,
  height,
}: SpecialBlockProps) {
  const [books, setBooks] = useState<IBooks[] | never[]>([]);

  const data = useSelector((state: RootState) => state.books.books);

  useEffect(() => {
    setBooks(data);
    console.log(data)
  }, [data]);

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

          <p className={styles.p}>
            <Link to="/books">все</Link>
          </p>
        </div>
        {data.length !== 0 ? (
          <Carousel responsive={responsive}>
            {books.map((book, index) => {
              return <Book key={index} className={booktype} book={book} />;
            })}
          </Carousel>
        ) : (
          "poshel nahui"
        )}
      </div>
    </Block>
  );
}

export default SpecialBlock;
