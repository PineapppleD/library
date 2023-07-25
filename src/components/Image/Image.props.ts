export interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
    width: string,
    height: string,
    url: string,
    title : string
  }
