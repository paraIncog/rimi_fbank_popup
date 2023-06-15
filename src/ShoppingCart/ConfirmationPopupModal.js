import M from "materialize-css";

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

function ConfirmationPopupModal({ yesDonation1, yesDonation }) {
    setTimeout(initModal, 200)
    return (
        <div id="modalDonationConfirmation" className="modal goodPadding">
            <div className="modal-content">
                {/* That will be blue button */}
                <h6 className="center-align">Dont' pick it up. RIMI will send it to Foodbank</h6>
                <button onClick={yesDonation} className="blue btn modal-close choiceButton">Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmationPopupModal