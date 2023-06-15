function CartItem({ product }) {
    return (
        product.map((product, index) => {
            const productTotalPrice = product.productQuantity * product.productPrice
            const totalPriceDonation = product.productPrice * 2
            if (product.isDonatable === 1) {
                return (
                    <>
                        <div
                            className='card goodPadding cartItemDonation'
                            key={product.id}
                        >
                            <div className='row col s12'>
                                <div className='col s6 goodVisText'>{product.productName}</div>
                                <div className='col s6 right-align goodVisText'>{totalPriceDonation} €</div>
                            </div>
                            <div className='row goodVisText'>
                                <div className="col s6">
                                    Donation item to Foodbank
                                </div>
                                <div className="col s6 right-align">
                                    {product.productPrice} €
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            return (
                <div
                    className='card goodPadding'
                    key={product.id}
                >
                    <div className='row col s12'>
                        <div className='col s6 goodVisText'>{product.productName}</div>
                        <div className='col s6 right-align goodVisText'>{productTotalPrice} €</div>
                    </div>
                    <div className='row goodVisText'>
                        {product.productQuantity} X {product.productPrice} €
                    </div>
                </div>
            )
        })
    )
}

export default CartItem