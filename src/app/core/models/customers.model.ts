export class Customers {
    customerId? : number;
    name: string;
    email: string;
    address: string;
    phoneNumber:string;

    constructor(name:string, email:string, address:string, phoneNumber:string, customerId?:number){
        this.customerId = customerId;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}