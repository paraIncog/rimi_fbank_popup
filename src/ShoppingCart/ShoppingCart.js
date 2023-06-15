import { useState } from "react"

import CartItem from "./CartItem"
import TallyFooter from "./TallyFooter"
import UserHeader from "./UserHeader"
import AddItem from "./AddItem"

function ShoppingCart() {
    let productQuantity;
    let productPrice;
    const [product, setProduct] = useState([
  ], {productTotalPrice: productPrice * productQuantity}
  )

  const onItemAdd = (e) => {
    const newItemList = [...product, {productName:e.name, productPrice:e.price, productQuantity:e.quantity, index:product.length, isDonatable:e.isDonatable}]
    setProduct(newItemList)
  }

    return (
        <div className="col s12">
            <div className="container">
            <UserHeader />
            <CartItem product={product} />
            <AddItem handleAddItem={onItemAdd} />
            <div className='row deadSpace' />
            </div>
            <TallyFooter />
        </div>
    )
}

export default ShoppingCart