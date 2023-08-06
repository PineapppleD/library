import { ReactNode } from "react";

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  textSize: 16 | 18 | 20 | 24;
  textColor: "black" | "white" | "gray" | "milk" | "green" | "golden" | "red";
  children: ReactNode;
}
