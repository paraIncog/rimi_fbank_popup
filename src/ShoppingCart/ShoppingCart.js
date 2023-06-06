import { useState } from "react"

import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import TallyFooter from "./TallyFooter"
import UserHeader from "./UserHeader"
import AddItem from "./AddItem"

function ShoppingCart() {
    let itemQuantity;
    let itemPrice;
    let itemTotalPrice;
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
            itemTotalPrice: itemPrice * itemQuantity
        },
        {
            id: 2,
            itemName: 'Steak',
            itemQuantity: 2,
            itemPrice: 2.25,
            itemTotalPrice: itemPrice * itemQuantity
        }
  ], {itemTotalPrice: itemPrice * itemQuantity}, console.log(itemTotalPrice)
  )

//   function EmptyCartEnable() {
//     if (item.length < 1) {
//         <EmptyCart />
//     }
//   }

  const onItemAdd = (e) => {
    console.log('CP8', e)
    const newItemList = [...item, {itemName:e.name, itemPrice:e.price, itemQuantity:e.quantity, index:item.length}]
    console.log('CP11', newItemList)
    setItem(newItemList)
  }

  const addItem = (itemName, itemPrice, itemQuantity) => {
    const newItem = {
        index: item.length,
        itemName: itemName,
        itemPrice: itemPrice,
        itemQuantity: itemQuantity
    }
    console.log('addItem', newItem, itemPrice)
    const newItemMass = [...item, newItem]
    console.log('new item mass', newItemMass)
    setItem(newItemMass)
  }
    return (
        <div className="col s12">
            <UserHeader />
            {/* <EmptyCartEnable /> */}
            <CartItem item={item} />
            <AddItem handleAddItem={onItemAdd} />
            {/* <div className='row deadSpace' /> */}
            {/* <TallyFooter item={item} /> */}
        </div>
    )
}

export default ShoppingCart