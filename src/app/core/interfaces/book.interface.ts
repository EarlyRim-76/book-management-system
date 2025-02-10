export interface IBook {
    bookId? :number;
    title: string;
    author: string;
    genre: string;
    ibsn: string;
    price: number;
    stockQuantity: number;
}