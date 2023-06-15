import M from "materialize-css";

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}
const goodToast = () => {
    M.toast({html: 'Thank you. No need to take additional product to checkout.'})
}

function PopupModal({ yesDonation, noDonation }) {
    setTimeout(initModal, 200)
    return (
        <>
            <div id="modalDonation" className="modal goodPadding">
                <div className="modal-content">
                    <h6 className="center-align">Would You like to donate Apple Royal Gala sweet, 1kilo 4pc (0.55 €) to Foodbank?</h6>
                </div>
                    <button onClick={yesDonation} className="green btn modal-close choiceButton">
                        <div onClick={goodToast}>
                            Yes
                        </div>
                    </button>
                    <button onClick={noDonation} href="#!" className="red btn modal-close choiceButton">Not Now</button>
            </div>
        </>
    )
}

export default PopupModal

