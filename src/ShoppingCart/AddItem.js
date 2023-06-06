import { useState } from "react"
import M from "materialize-css"

import carrotImage from '../itemPictures/carrot_image.jpg'
import appleImage from '../itemPictures/apple_image.jpg'
import steakImage from '../itemPictures/steak_image.jpg'
import PopupModal from "./PopupModal"

function initModal() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

let donatesApples = false

function AddItem({ addItem, item }) {
    setTimeout(initModal, 200)

    let [itemName, setItemName] = useState('')
    let [itemQuantity, setItemQuantity] = useState()
    let [itemPrice, setItemPrice] = useState()
    let [itemTotalPrice, setItemTotalPrice] = useState(itemQuantity * itemPrice)

    const addProductData = (event) => {
        console.log('addProductData', itemPrice, itemQuantity)
        event.preventDefault()
        addItem(itemName, itemQuantity, itemPrice, itemTotalPrice)
        setItemName('')
        setItemQuantity(1)
        setItemPrice()
        setItemTotalPrice(itemQuantity * itemPrice)
    }

    const addCarrots = () => {
        setItemName('Carrot')
        setItemQuantity(1)
        setItemPrice(1.21)
        setItemTotalPrice(itemQuantity * itemPrice)
    }

    const addApples = () => {
        setItemName('Apple')
        setItemQuantity(1)
        setItemPrice(0.55)
        setItemTotalPrice(itemQuantity * itemPrice)
    }

    const addSteak = () => {
        setItemName('Steak')
        setItemQuantity(1)
        setItemPrice(2.29)
        setItemTotalPrice(itemQuantity * itemPrice)
    }

    
    function donationModal() {
        function donatesApplesYes() {
            donatesApples = true
            console.log('Willing to donate')
            setItemName('Apple with Donation')
            setItemQuantity(1 * 2)
            setItemPrice(0.55 * 2)
            setItemTotalPrice(itemQuantity * itemPrice)
            addItem(itemName, itemQuantity, itemPrice, itemTotalPrice)
        }
    console.log('Donation Modal Activated')
    if (donatesApples === false) {
        console.log('Has not donated')
    return (
        <div id="modalDonation" class="modal">
            <div class="modal-content">
                <h6 className="center-align">Would You like to donate Carrots (1.21 €) to Foodbank?</h6>
                <h6 className="row center-align">You'll get a discount for additional Carrots.</h6>
                <div className="row">
                    <button onClick={donatesApplesYes} className="btn col s6 green">Yes</button>
                    <button href="#!" className="modal-close btn col s6 red">No</button>
                </div>
            </div>
            {donationModal}
        </div>
    )
    }
}

    return (
        <div className="goodPadding card-panel black-text">
            <form onSubmit={addProductData}>
                <div className="row">
                    <div className="col s12">
                        <h5>Product</h5>
                        <h6
                            type="text"
                            value={itemName}
                            onChange={({ target }) => setItemName(target.value)}
                        >{itemName}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <label><h5 color="black">Quantity</h5></label>
                        <input
                            type="number"
                            value={itemQuantity}
                            onChange={setItemQuantity}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h5>Price</h5>
                        <h6
                            type="text"
                            value={itemPrice}
                            onChange={({ target }) => setItemPrice(target.value)}
                        >{itemPrice}</h6>
                    </div>
                </div>
                <input className="btn" type="submit" value='Add Product' />
                <div className="row" />
                {/* <div className="row">
                    <input className="btn modal-trigger" type="submit" value='Add Product' data-target="modalDonation" />
                </div> */}
            </form>
            <div className="row center-align">
                <div className="col s4">
                    <div onClick={addCarrots} className="">
                        <img src={carrotImage} alt='Carrot' className="itemImage row" />
                        <div className="row">
                            Add 1 Carrot
                        </div>
                    </div>
                </div>
                <div className="col s4">
                    <div onClick={addApples} className="">
                        <img src={appleImage} alt='Apple' className="itemImage row" />
                        <div className="row">
                            Add 1 Apple
                        </div>
                    </div>
                </div>
                {/* <div className="col s4">
                    <div onClick={donationModal} data-target="modalDonation" className="modal-trigger">
                        <img src={appleImage} alt='Apple' className="itemImage row" />
                        <div className="row">
                            Add 1 donation Apple
                        </div>
                    </div>
                </div> */}
                <div className="col s4">
                    <div onClick={addSteak} className="">
                        <img src={steakImage} alt='Steak' className="itemImage row" />
                        <div className="row">
                            Add 1 Steak
                        </div>
                    </div>
                </div>
            </div>
            {donationModal}
            {/* <div>
                <div className="row center-align">
                    <button>
                        Read Data
                    </button>
                </div>
            </div> */}
            {/* <PopupModal /> */}
        </div>

        // <div className="goodPadding yellow">
        //     <div className="row center-align">
        //         <div className="col s4">
        //             <div onClick={addCarrots} className="">
        //                 <img src={carrotImage} alt='Carrot' className="itemImage row" />
        //                 <div className="row">
        //                     Add 1 Carrot
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col s4">
        //             <div onClick={addApples} className="">
        //                 <img src={appleImage} alt='Apple' className="itemImage row" />
        //                 <div className="row">
        //                     Add 1 Apple
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col s4">
        //             <div onClick={addSteak} className="">
        //                 <img src={steakImage} alt='Steak' className="itemImage row" />
        //                 <div className="row">
        //                     Add 1 Steak
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        //     <div>
        //     <div className="row center-align">
        //             <button onClick={readGivenData}>
        //                 Read Data
        //             </button>
        //         </div>
        //     </div>
        // </div>
        
    )
}

export default AddItem