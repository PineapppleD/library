import { IBooks } from "../../interfaces/Books";

export interface BookDescriptionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  book: IBooks;
}
