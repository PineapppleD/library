import { ReactNode } from "react";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  fontSize: 16 | 18 | 20 | 32;
  fontWeight: 300 | 700;
  background: "black" | "gray" | "gray-light" | "milk" | "golden";
  color: 'white' | 'black' | 'green' | 'primary' | 'red' | 'gray';
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
