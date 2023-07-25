import { BlockProps } from "./Block.props";

function Block({
  borderRadius = "0",
  height,
  background = "#fff",
  children,
  className
}: BlockProps) {
  return (
    <div
      style={{
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        height,
        background,
      }}
      className={className}
    >{children}</div>
  );
}

export default Block;
