import M from "materialize-css";


function initModal() {
    console.log('Call initModal')
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, {});
}

let donatesApples = false
console.log('Donation Modal Activated')
if (donatesApples === false) {
    console.log('Has not donated')
}



function donatesApplesYes() {
    setTimeout(200)
    donatesApples = true
    console.log('Willing to donate')
    // setItemName('Apple with Donation')
    // setItemQuantity(1 * 2)
    // setItemPrice(0.55 * 2)
    // setItemTotalPrice(itemQuantity * itemPrice)
}


function PopupModal() {
     setTimeout(initModal, 200)
    console.log()
    return (
        <div id="modalDonation" className="modal">
            <div className="modal-content">
                <h6 className="center-align">Would You like to donate Apple (1.21 €) to Foodbank?</h6>
                <h6 className="row center-align">You will get a discount for additional Apples.</h6>
                <button onClick={donatesApplesYes} className="green btn col s6 modal-close donation-confirm">Yes</button>



                <button href="#!" className="red btn col s6 modal-close">No</button>
            </div>
        </div>
    )
}

export default PopupModal