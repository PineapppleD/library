export interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
