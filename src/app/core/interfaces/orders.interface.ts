export interface Order{
    orderId? : number;
    customerId? : number;
    orderDate : Date;
    totalAmount: number;
    orderStatus: number;
    shippingAddress: string;
}