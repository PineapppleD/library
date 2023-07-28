export interface SpecialBlockProps {
  title: string;
  description?: string;
  endpoint: string;
  color: 'black' | 'white' | 'gray' | 'milk' | 'green' | 'golden';
  borderRadius: string,
  background?: "#fff" | "#EE82EE";
  booktype: "commonbook" | "audiobook";
  height: string;
}
