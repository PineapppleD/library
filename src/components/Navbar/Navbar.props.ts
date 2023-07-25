export interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  childrenList: JSX.Element[];
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
