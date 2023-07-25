import { ReactNode } from "react";

export interface BlockProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  borderRadius?: string;
  background?: "#fff" | "#969FA8";
  height: string;
  children: ReactNode;
}
