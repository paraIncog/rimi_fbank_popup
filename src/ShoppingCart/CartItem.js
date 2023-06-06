function CartItem({item}) {
    return (
        item.map((item, index) => {
            const itemTotalPrice = item.itemQuantity * item.itemPrice
            console.log('ItemName: ' + item.itemName + '\nQty: ' + item.itemQuantity + '\nIndex: ' + item.id + '\nPrice: ' + item.itemPrice + '\nTotal: ' + item.itemTotalPrice)
            console.log('CartItem', item)

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