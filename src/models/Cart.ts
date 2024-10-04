export interface CartProduct{
    id:number;
    name:string;
    image:string;
    price:number;
    totalPrice:number;
    quantity:number;
}

export interface CartItems {
    items:Array<CartProduct>;
}