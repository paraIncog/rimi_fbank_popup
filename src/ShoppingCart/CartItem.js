function CartItem({ item }) {
    return (
        item.map((item, index) => {
            const itemTotalPrice = item.itemQuantity * item.itemPrice
            const totalPriceDonation = item.itemPrice * 2
            if (item.isDonation === 1) {
                return (
                    <>
                        <div
                            className='goodPadding cartItemDonation'
                            key={item.id}
                        >
                            <div className='row col s12'>
                                <div className='col s6 goodVisText'>{item.itemName}</div>
                                <div className='col s6 right-align goodVisText'>{totalPriceDonation} €</div>
                            </div>
                            <div className='row goodVisText'>
                                <div className="col s6">
                                    Donation item to Foodbank
                                </div>
                                <div className="col s6 right-align">
                                    {item.itemPrice} €
                                </div>
                            </div>
                        </div>
                        <div className="divider" />
                    </>
                )
            }

            return (
                <div
                    className='goodPadding'
                    key={item.id}
                >
                    <div className='row col s12'>
                        <div className='col s6 goodVisText'>{item.itemName}</div>
                        <div className='col s6 right-align goodVisText'>{itemTotalPrice} €</div>
                    </div>
                    <div className='row goodVisText'>
                        {item.itemQuantity} X {item.itemPrice} €
                    </div>
                    <div className="divider" />
                </div>
            )
        })
    )
}

export default CartItem