import UserReview from "./UserReview";

export interface Products{
    id:number;
    title:string;
    images:Array<string>;
    price:number;
    category:string;
    discountPercentage:number;
}

export interface ProductDetails extends Products{
    reviews:Array<UserReview>;
    brand:string;
    rating:number;
    description:string;
}