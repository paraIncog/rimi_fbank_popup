import { useState } from "react"

import CartItem from "./CartItem"
// import EmptyCart from "./EmptyCart"
// import TallyFooter from "./TallyFooter"
import UserHeader from "./UserHeader"
import AddItem from "./AddItem"

function ShoppingCart() {
    let itemQuantity;
    let itemPrice;
    const [item, setItem] = useState([
        {
            id: 0,
            itemName: 'Carrot',
            itemQuantity: 1,
            itemPrice: 1.29,
            itemTotalPrice: itemPrice * itemQuantity
        },
        {
            id: 1,
            itemName: 'Apple',
            itemQuantity: 1,
            itemPrice: 0.55,
            itemTotalPrice: itemPrice * itemQuantity,
            isDonation: 1
        },
        {
            id: 2,
            itemName: 'Steak',
            itemQuantity: 2,
            itemPrice: 2.25,
            itemTotalPrice: itemPrice * itemQuantity
        }
  ], {itemTotalPrice: itemPrice * itemQuantity}
  )

//   function EmptyCartEnable() {
//     if (item.length < 1) {
//         <EmptyCart />
//     }
//   }

  const onItemAdd = (e) => {
    const newItemList = [...item, {itemName:e.name, itemPrice:e.price, itemQuantity:e.quantity, index:item.length, isDonation:e.isDonation}]
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