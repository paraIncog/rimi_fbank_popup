import { useState } from "react"
import M from "materialize-css"

import PopupModal from "./PopupModal"

import carrotImage from '../itemPictures/carrot_image.jpg'
import appleImage from '../itemPictures/apple_image.jpg'
import steakImage from '../itemPictures/steak_image.jpg'
import paprikaImage from '../itemPictures/paprika_image.jpg'
import apricotImage from '../itemPictures/apricot_image.jpg'
import cbeefImage from '../itemPictures/cannedbeef_image.jpg'
import chocoImage from '../itemPictures/choco_image.jpg'
import gingerImage from '../itemPictures/ginger_image.jpg'
import pateImage from '../itemPictures/pate_image.jpg'

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

function AddItem({ handleAddItem }) {
    setTimeout(initModal, 200)
    let [productQuantity] = useState()
    let [productPrice] = useState()

    const addCarrots = () => {
        handleAddItem({ name: 'Carrot Kadarbik 500g', quantity: 1, price: 1.21, totalPrice: productQuantity * productPrice })
    }

    const addSteak = () => {
        handleAddItem({ name: 'Broiler breast fillet insert Rimi GL 500g', quantity: 1, price: 3.86, totalPrice: productQuantity * productPrice })
    }

    const noDonationApple = () => {
        handleAddItem({ name: 'Apple Royal Gala sweet, 1kilo 4pc', quantity: 1, price: 0.55, totalPrice: productQuantity * productPrice })
    }

    const yesDonationApple = () => {
        handleAddItem({ name: 'Apple Royal Gala sweet, 1kilo 4pc', quantity: 1, price: 0.55, totalPrice: productQuantity * productPrice, isDonatable: 1 })
    }

    const addPaprika = () => {
        handleAddItem({ name: 'Paprika mix Rimi 1kl, 350g', quantity: 1, price: 3.86, totalPrice: productQuantity * productPrice })
    }

    const addCBeef = () => {
        handleAddItem({ name: 'Canned beef 240g', quantity: 1, price: 4.49, totalPrice: productQuantity * productPrice })
    }

    const addPate = () => {
        handleAddItem({ name: 'Duck Pate 160g', quantity: 1, price: 4.79, totalPrice: productQuantity * productPrice })
    }

    const addMChoco = () => {
        handleAddItem({ name: 'Milk chocolate with wild berry filling Pergale 100g', quantity: 1, price: 1.59, totalPrice: productQuantity * productPrice })
    }

    const addApricots = () => {
        handleAddItem({ name: 'Dried apricot stoneless Awake 400g', quantity: 1, price: 4.39, totalPrice: productQuantity * productPrice })
    }

    const addGBalls = () => {
        handleAddItem({ name: 'Xinxian Ginger balls 240 g', quantity: 1, price: 3.25, totalPrice: productQuantity * productPrice })
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
                                        Add 1 Apple pack
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div onClick={addSteak} className="">
                                    <img src={steakImage} alt='Steak' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Fillet
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row center-align">
                            <div className="col s4">
                                <div onClick={addPaprika} className="">
                                    <img src={paprikaImage} alt='Paprika' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Paprika pack
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div onClick={addCBeef}>
                                    <img src={cbeefImage} alt='Beef' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Canned Beef
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div onClick={addGBalls} className="">
                                    <img src={gingerImage} alt='Gingerball' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Gingerball cup
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row center-align">
                            <div className="col s4">
                                <div onClick={addPate} className="">
                                    <img src={pateImage} alt='Duck Pate' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Duck Pate
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div onClick={addMChoco}>
                                    <img src={chocoImage} alt='Chocolate' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Milk Chocolate
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div onClick={addApricots} className="">
                                    <img src={apricotImage} alt='Apricot' className="itemImage row" />
                                    <div className="row">
                                        Add 1 Apricot pack
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