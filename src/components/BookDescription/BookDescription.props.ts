export interface BookDescriptionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  description: string;
  price: string;
  author: string;
  book_image: string;
  className?: string;
}
