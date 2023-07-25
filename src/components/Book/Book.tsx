import { Button } from "..";
import { addSvg } from "../../assets/images";
import cn from "classnames";
import styles from "./Book.module.css";


interface BookProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  imgUrl: string;
  title: string;
  className: "commonbook" | "audiobook";
}

function Book({ imgUrl, title, className }: BookProps) {

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <img
        className={cn(styles.book, {
          [styles.commonbook]: className === "commonbook",
          [styles.audiobook]: className === "audiobook",
        })}
        src={imgUrl}
        alt={title}
      />
      <Button
        className="bookbutton"
        fontSize={18}
        fontWeight={300}
        background="gray"
        color="black"
      >
        <img src={addSvg} alt="отложить" />
        Отложить
      </Button>
    </div>
  );
}

export default Book;
