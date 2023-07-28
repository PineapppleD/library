import { IBooks } from "../../interfaces/Books";

export interface BooksListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  books: IBooks[];
}
