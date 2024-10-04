export interface PlaceOrder{
    name:string;
    totalPrice:number;
    image:string;
    quantity:number;
}

export interface OrderDetails{
    _id:string;
    items:PlaceOrder[];
}

export interface SendOrder{
    orders:Array<PlaceOrder>;
}