interface SelectOptions{
    value:string;
    content:string;
}

export const categories:SelectOptions[] = [
    { value: "", content: "Category" },
    { value: "beauty", content: "Beauty" },
    { value: "fragrances", content: "Fragrances" },
    { value: "furniture", content: "Furniture" },
    { value: "groceries", content: "Groceries" },
    { value: "home-decoration", content: "Home Decoration" },
    { value: "kitchen-accessories", content: "Kitchen Accessories" },
    { value: "laptops", content: "Laptops" },
    { value: "mens-shirts", content: "Mens Shirts" },
    { value: "mens-shoes", content: "Mens Shoes" },
    { value: "mens-watches", content: "Mens Watches" },
    { value: "mobile-accessories", content: "Mobile Accessories" },
    { value: "motorcycle", content: "Motorcycle" },
    { value: "skin-care", content: "Skin Care" },
    { value: "smartphones", content: "Smartphones" },
    { value: "sports-accessories", content: "Sports Accessories" },
    { value: "sunglasses", content: "Sunglasses" },
    { value: "tablets", content: "Tablets" },
    { value: "tops", content: "Tops" },
    { value: "vehicle", content: "Vehicle" },
    { value: "womens-bags", content: "Womens Bags" },
    { value: "womens-dresses", content: "Womens Dresses" },
    { value: "womens-jewellery", content: "Womens Jewellery" },
    { value: "womens-shoes", content: "Womens Shoes" },
    { value: "womens-watches", content: "Womens Watches" }
];

export const sortingOptions:SelectOptions[] = [
    { value: "", content: "Sorting" },
    { value: "price", content: "Price" },
    { value: "discountPercentage", content: "Discount" },
    { value: "reviews", content: "Reviews" },
    { value: "rating", content: "Rating" },
    { value: "title", content: "Name" }
];

export const orderOptions:SelectOptions[] = [
    {value:'asc',content:'Ascending'},
    {value:'desc',content:'Descending'}
]