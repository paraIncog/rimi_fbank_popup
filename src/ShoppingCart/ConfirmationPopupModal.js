import M from "materialize-css";

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

function ConfirmationPopupModal({ yesDonation1 }) {
    setTimeout(initModal, 200)
    return (
        <div id="modalDonation" className="modal">
            <div className="modal-content">
                {/* That will be blue */}
                <h6 className="center-align">Dont' pick it up. RIMI will send it to Foodbank</h6>
                <button onClick={yesDonation1} className="green btn col s6 modal-close donation-confirm">Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmationPopupModal