import { useState } from "react"
import M from "materialize-css"

import PopupModal from "./PopupModal"

import yoghurtImage from '../itemPictures/yoghurt_image.jpg'
import appleImage from '../itemPictures/apple_donatable_image.jpg'
import oatmealImage from '../itemPictures/oatmeal_image.jpg'

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

function AddItem({ handleAddItem }) {
    setTimeout(initModal, 200)
    let [productQuantity] = useState()
    let [productPrice] = useState()

    const addYoghurt = () => {
        handleAddItem({ name: 'Yogurt with wild strawberry Alma 1kg', quantity: 1, price: 1.99, totalPrice: productQuantity * productPrice })
    }

    const addOatmeal = () => {
        handleAddItem({ name: 'Oatmeal Tartu Mill 500g', quantity: 1, price: 0.89, totalPrice: productQuantity * productPrice })
    }

    const noDonationApple = () => {
        handleAddItem({ name: 'Apple Royal Gala sweet, 1kilo 4pc', quantity: 1, price: 0.55, totalPrice: productQuantity * productPrice })
    }

    const yesDonationApple = () => {
        handleAddItem({ name: 'Apple Royal Gala sweet, 1kilo 4pc', quantity: 1, price: 0.55, totalPrice: productQuantity * productPrice, isDonatable: 1 })
    }

    const donationModal = () => {
        console.log('Donation Ballot Initiated')
    }

    return (
        <div>
            <div className='row'>
                <div className='col s12 m12'>
                    <div className='card white black-text center-align'>
                        <div className="row center-align">
                            <div className="col s4">
                                <div onClick={addYoghurt} className="">
                                    <img src={yoghurtImage} alt='Yoghurt' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Yoghurt
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div onClick={donationModal} data-target="modalDonation" className="modal-trigger">
                                    <img src={appleImage} alt='Apple' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Apple pack
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div onClick={addOatmeal} className="">
                                    <img src={oatmealImage} alt='Oatmeal' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Oatmeal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopupModal yesDonation={yesDonationApple} noDonation={noDonationApple} />
        </div>
    )
}

export default AddItem