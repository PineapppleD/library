import { ReactNode } from "react";

export interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  titleSize: 24 | 28 | 32 | 34 | 36 | 44;
  titleColor: "black" | "white" | "milk" | "gray" | "green" | "golden";
  children: ReactNode;
  titleWeight: "bold" | "semi-bold";
}
