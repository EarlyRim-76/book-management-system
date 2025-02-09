export class Orders {
    orderId? : number;
    customerId? : number;
    orderDate : Date;
    totalAmount: number;
    orderStatus: number;
    shippingAddress: string;

    constructor(orderDate:Date , totalAmount:number, orderStatus:number, shippingAddress:string, orderId?:number, customerId?:number ){
        this.orderId = orderId;
        this.customerId = customerId;
        this.orderDate = orderDate;
        this.totalAmount = totalAmount;
        this.orderStatus = orderStatus;
        this.shippingAddress = shippingAddress;
    }
}