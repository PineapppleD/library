export interface SearchBarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
