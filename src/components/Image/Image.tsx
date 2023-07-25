import { ImageProps } from "./Image.props";

function Image({ url, width, height, title }: ImageProps): JSX.Element {
  const imgStyles = {
    width,
    height,
  };

  return <img src={url} alt={title} style={imgStyles} />;
}

export default Image;
