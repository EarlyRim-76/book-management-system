export class OrderDetails{
    orderDetailsId? : number;
    orderId? : number;
    bookId? : number;
    quantity: number;
    pricePerUnit: number;


    constructor(quantity: number, pricePerUnit: number, orderDetailsId?: number, orderId?: number, bookId?: number){
        this.orderDetailsId = orderDetailsId;
        this.orderId = orderId;
        this.bookId = bookId;
        this.quantity = quantity;
        this.pricePerUnit = pricePerUnit;
    }
}