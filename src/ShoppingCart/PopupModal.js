import M from "materialize-css";

function initModal() {
    console.log('Call initModal')
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, {});
}

function PopupModal({ yesDonation, noDonation }) {
    setTimeout(initModal, 200)
    return (
        <div id="modalDonation" className="modal">
            <div className="modal-content">
                <h6 className="center-align">Would You like to donate Apple (1.21 €) to Foodbank?</h6>
                <h6 className="row center-align">You will get a discount for additional Apples.</h6>
                <button onClick={yesDonation} className="green btn col s6 modal-close donation-confirm">Yes</button>
                <button onClick={noDonation} href="#!" className="red btn col s6 modal-close">No</button>
            </div>
        </div>
    )
}

export default PopupModal