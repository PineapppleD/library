import { IBooks } from "../../interfaces/Books";

export interface PaginationProps {
    books: IBooks[];
    handleClick: (where: string, event: React.MouseEvent) => void;
    length: number;
}