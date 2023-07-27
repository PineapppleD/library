import { ReactNode } from "react";

export interface BlockProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  borderRadius?: string;
  background?: "#fff" | "#EE82EE";
  height: string;
  children: ReactNode;
}
