export interface Orders {

    cartItems: [
        {
            count: number,
            price: number,
            product: {
                imageCover: string,
                title: string
            }
        }
    ]
    totalOrderPrice: number,

}
