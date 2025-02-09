export class Book {
    bookId? :number;
    title: string;
    author: string;
    genre: string;
    ibsn: string;
    price: number;
    stockQuantity: number;

    constructor(bookId : number,title:string, author: string, genre:string, ibsn:string, price:number, stockQuantity: number ){
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.ibsn = ibsn;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }

}