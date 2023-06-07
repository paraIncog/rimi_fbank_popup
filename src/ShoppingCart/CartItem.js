function CartItem({ item }) {
    return (
        item.map((item, index) => {
            const itemTotalPrice = item.itemQuantity * item.itemPrice
            if (item.isDonation === 1) {
                return (
                    <>
                        <div
                            className='goodPadding cartItemDonation'
                            key={item.id}
                        >
                            <div className='row col s12'>
                                <div className='col s6 goodVisText'>{item.itemName}</div>
                                <div className='col s6 right-align goodVisText'>{itemTotalPrice} €</div>
                            </div>
                            <div className='row goodVisText'>
                                Donation item to Foodbank
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