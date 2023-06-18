import { useState } from "react"
import M from "materialize-css"

import PopupModal from "./PopupModal"

import yoghurtImage from '../itemPictures/yoghurt_image.jpg'
import appleImage from '../itemPictures/apple_donatable_image.jpg'
import juiceImage from '../itemPictures/juice_image.jpg'

// const API_URL = 'http://192.168.1.198:8080/api/items';

// function getApi() {
//     console.log('Making request');
//     fetch(`${API_URL}`).then((response => console.log('response', response.json())));
// }

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

    const addJuice = () => {
        handleAddItem({ name: 'Tropical fruit juice 100%, DON SIMON, 1 L', quantity: 1, price: 3.29, totalPrice: productQuantity * productPrice })
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
                                <div onClick={addJuice} className="">
                                    <img src={juiceImage} alt='Juice' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Juice
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={getApi}>GET API</button> */}
            </div>
            <PopupModal yesDonation={yesDonationApple} noDonation={noDonationApple} />
        </div>
    )
}

export default AddItem