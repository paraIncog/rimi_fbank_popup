import { useState } from "react"
import M from "materialize-css"

import carrotImage from '../itemPictures/carrot_image.jpg'
import appleImage from '../itemPictures/apple_image.jpg'
import steakImage from '../itemPictures/steak_image.jpg'
import paprikaImage from '../itemPictures/paprika_image.jpg'
import PopupModal from "./PopupModal"

// const API_URL = 'https://api-production-e98e.up.railway.app/items/';
// let products = [];

// const productName = document.querySelector('#productName');
// const productPrice = document.querySelector('#productPrice');
// const productQuantity = document.querySelector('#productQuantity');
// const isDonatable = document.querySelector('#isDonatable');

// async function getProducts() {
//     try {
//         // products = await fetch(`${API_URL}detail/1`).then((response => response.json()));
//         // for (let product of products) {
//         //     console.log(`${product.id}`, `${product.productName}`)
//         // }
//         // console.log(`${API_URL}detail/1`);
//         await fetch(`${API_URL}detail/a`).then((response => response.json()))
//     } catch (e) {
//         console.log(e);
//     }
// }

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
        handleAddItem({ name: 'Canned beef "De lux"', quantity: 1, price: 4.3, totalPrice: productQuantity * productPrice })
    }

    const addCJelly = () => {
        handleAddItem({ name: 'Chicken in jelly "Villa vita"', quantity: 1, price: 1.8, totalPrice: productQuantity * productPrice })
    }

    const addPate = () => {
        handleAddItem({ name: 'Duck Pate 160g', quantity: 1, price: 4.79, totalPrice: productQuantity * productPrice })
    }

    const addMChoco = () => {
        handleAddItem({ name: 'Milk chocolate PERGALE with nuts', quantity: 1, price: 5.51, totalPrice: productQuantity * productPrice })
    }

    const addApricots = () => {
        handleAddItem({ name: 'DriedApricots', quantity: 1, price: 6.49, totalPrice: productQuantity * productPrice })
    }

    // const addGBalls = () => {
    //     handleAddItem({ name: 'Gingerballs', quantity: 1, price: 3.79, totalPrice: productQuantity * productPrice })
    // }

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
                {/* <button className="btn" onClick={getProducts}>Call Backend</button> */}
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
                        <img alt='Beef' className="itemImage row" />
                        <div className="row">
                            Add 1 Canned Beef
                        </div>
                    </div>
                </div>
                <div className="col s4">
                    <div onClick={addCJelly} className="">
                        <img alt='Chicken' className="itemImage row" />
                        <div className="row">
                            Add 1 Chicken
                        </div>
                    </div>
                </div>
                {/* <button className="btn" onClick={getProducts}>Call Backend</button> */}
            </div>
            <div className="row center-align">
                <div className="col s4">
                    <div onClick={addPate} className="">
                        <img alt='Duck Pate' className="itemImage row" />
                        <div className="row">
                            Add 1 Duck Pate
                        </div>
                    </div>
                </div>
                <div className="col s4">
                    <div onClick={addMChoco}>
                        <img alt='Chocolate' className="itemImage row" />
                        <div className="row">
                            Add 1 Milk Choco
                        </div>
                    </div>
                </div>
                <div className="col s4">
                    <div onClick={addApricots} className="">
                        <img alt='Apricot' className="itemImage row" />
                        <div className="row">
                            Add 1 Apricot pack
                        </div>
                    </div>
                </div>
                {/* <button className="btn" onClick={getProducts}>Call Backend</button> */}
            </div>
            <PopupModal yesDonation={yesDonationApple} noDonation={noDonationApple} />
        </div>
    )
}

export default AddItem