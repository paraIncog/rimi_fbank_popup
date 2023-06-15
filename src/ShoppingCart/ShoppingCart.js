import { useState } from "react"

import CartItem from "./CartItem"
// import EmptyCart from "./EmptyCart"
import TallyFooter from "./TallyFooter"
import UserHeader from "./UserHeader"
import AddItem from "./AddItem"

function ShoppingCart() {
    let productQuantity;
    let productPrice;
    const [product, setProduct] = useState([
        // {
        //     id: 1,
        //     productName: 'Carrot Kadarbik 500g',
        //     productPrice: 1.21,
        //     productQuantity: 1,
        //     isDonatable: false
        // },
        // {
        //     id: 2,
        //     productName: 'Apple Royal Gala sweet, 1kilo 4pc',
        //     productPrice: 0.55,
        //     productQuantity: 1,
        //     isDonatable: 1
        // },
        // {
        //     id: 3,
        //     productName: 'Broiler breast fillet insert Rimi GL 500g',
        //     productPrice: 3.86,
        //     productQuantity: 2,
        //     isDonatable: 0
        // },
        // {
        //     id: 4,
        //     productName: 'Paprika mix Rimi 1kl, 350g',
        //     productPrice: 3.86,
        //     productQuantity: 1,
        //     isDonatable: false
        // },
        // {
        //     id: 5,
        //     productName: 'Duck Pate 160g',
        //     productPrice: 4.79,
        //     productQuantity: 5,
        //     isDonatable: 0
        // },
        // {
        //     id: 6,
        //     productName: 'Canned beef 240g',
        //     productPrice: 4.3,
        //     productQuantity: 1,
        //     isDonatable: false
        // },
        // {
        //     id: 7,
        //     productName: 'Chicken in jelly "Villa vita"',
        //     productPrice: 1.8,
        //     productQuantity: 1,
        //     isDonatable: false
        // },
        // {
        //     id: 8,
        //     productName: 'Milk chocolate PERGALE with nuts',
        //     productPrice: 5.51,
        //     productQuantity: 2,
        //     isDonatable: false
        // },
        // {
        //     id: 9,
        //     productName: 'Dried Apricots',
        //     productPrice: 6.49,
        //     productQuantity: 1,
        //     isDonatable: 0
        // },
        // {
        //     id: 10,
        //     productName: 'Gingerballs',
        //     productPrice: 3.79,
        //     productQuantity: 2,
        //     isDonatable: false
        // }
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
            {/* <EmptyCartEnable /> */}
            <CartItem product={product} />
            <AddItem handleAddItem={onItemAdd} />
            <div className='row deadSpace' />
            </div>
            <TallyFooter />
        </div>
    )
}

export default ShoppingCart