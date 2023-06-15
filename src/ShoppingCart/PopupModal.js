import M from "materialize-css";
import ConfirmationPopupModal from "./ConfirmationPopupModal";

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

function PopupModal({ yesDonation, noDonation }) {
    setTimeout(initModal, 200)
    return (
        <>
            <div id="modalDonation" className="modal goodPadding">
                <div className="modal-content">
                    <h6 className="center-align">Would You like to donate Apple Royal Gala sweet, 1kilo 4pc (0.55 €) to Foodbank?</h6>
                </div>
                    <button onClick={yesDonation} data-target="modalDonationConfirmation" className="green btn modal-close choiceButton">Yes</button>
                    <button onClick={noDonation} href="#!" className="red btn modal-close choiceButton">Not Now</button>
            </div>
            <ConfirmationPopupModal yesDonation={yesDonation} />
        </>
    )
}

export default PopupModal

