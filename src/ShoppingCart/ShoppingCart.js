import { useState } from "react"

import CartItem from "./CartItem"
// import EmptyCart from "./EmptyCart"
// import TallyFooter from "./TallyFooter"
import UserHeader from "./UserHeader"
import AddItem from "./AddItem"

function ShoppingCart() {
    let productQuantity;
    let productPrice;
    const [item, setItem] = useState([
        // {
        //     id: 0,
        //     productName: 'Carrot',
        //     productQuantity: 1,
        //     productPrice: 1.29,
        //     productTotalPrice: productPrice * productQuantity
        // },
        // {
        //     id: 1,
        //     productName: 'Apple',
        //     productQuantity: 1,
        //     productPrice: 0.55,
        //     productTotalPrice: productPrice * productQuantity,
        //     isDonation: 1
        // },
        // {
        //     id: 2,
        //     productName: 'Steak',
        //     productQuantity: 2,
        //     productPrice: 2.25,
        //     productTotalPrice: productPrice * productQuantity
        // }
  ], {productTotalPrice: productPrice * productQuantity}
  )

//   function EmptyCartEnable() {
//     if (item.length < 1) {
//         <EmptyCart />
//     }
//   }

  const onItemAdd = (e) => {
    const newItemList = [...item, {productName:e.name, productPrice:e.price, productQuantity:e.quantity, index:item.length, isDonation:e.isDonation}]
    setItem(newItemList)
  }

    return (
        <div className="col s12">
            <UserHeader />
            {/* <EmptyCartEnable /> */}
            <CartItem item={item} />
            <AddItem handleAddItem={onItemAdd} />
            <div className='row deadSpace' />
            {/* <TallyFooter /> */}
        </div>
    )
}

export default ShoppingCart