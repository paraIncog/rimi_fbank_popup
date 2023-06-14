import M from "materialize-css";

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

function PopupModal({ yesDonation, noDonation }) {
    setTimeout(initModal, 200)
    return (
        <div id="modalDonation" className="modal">
            <div className="modal-content">
                <h6 className="center-align">Would You like to donate productName (productPrice) to Foodbank?</h6>
                <h6 className="row center-align">You will get a discount for additional productName.</h6>
                <button onClick={yesDonation} className="green btn col s6 modal-close donation-confirm">Yes</button>
                <button onClick={noDonation} href="#!" className="red btn col s6 modal-close">Not Now</button>
            </div>
        </div>
    )
}

export default PopupModal