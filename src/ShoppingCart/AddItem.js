import { useState } from "react"
import M from "materialize-css"

import carrotImage from '../itemPictures/carrot_image.jpg'
import appleImage from '../itemPictures/apple_image.jpg'
import steakImage from '../itemPictures/steak_image.jpg'
import PopupModal from "./PopupModal"

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

function AddItem({ handleAddItem }) {
    setTimeout(initModal, 200)

    let [itemName, setItemName] = useState('')
    let [itemQuantity, setItemQuantity] = useState()
    let [itemPrice, setItemPrice] = useState()
    let [itemTotalPrice, setItemTotalPrice] = useState(itemQuantity * itemPrice)

    const addCarrots = () => {
        handleAddItem({name: 'Carrot', quantity: 1, price: 1.21, totalPrice: itemQuantity * itemPrice})
    }

    const addSteak = () => {
        handleAddItem({name: 'Steak', quantity: 1, price: 2.29, totalPrice: itemQuantity * itemPrice})
    }

    const noDonationApple = () => {
        handleAddItem({name: 'Apple', quantity: 1, price: 0.55, totalPrice: itemQuantity * itemPrice})
    }

    const yesDonationApple = () => {
        handleAddItem({name: 'Apple', quantity: 1, price: 0.55, totalPrice: itemQuantity * itemPrice, isDonation: 1})
    }

    const donationModal = () => {
        console.log('Donation Ballot Initiated')
    }
    return (
        <div className="goodPadding card-panel black-text">
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
                    <div onClick={donationModal} data-target="modalDonation" className="modal-trigger">
                        <img src={appleImage} alt='Apple' className="itemImage row" />
                        <div className="row">
                            Add 1 Apple
                        </div>
                    </div>
                </div>
                <div className="col s4">
                    <div onClick={addSteak} className="">
                        <img src={steakImage} alt='Steak' className="itemImage row" />
                        <div className="row">
                            Add 1 Steak
                        </div>
                    </div>
                </div>
            </div>
            <PopupModal yesDonation={yesDonationApple} noDonation={noDonationApple} />
        </div>
    )
}

export default AddItem