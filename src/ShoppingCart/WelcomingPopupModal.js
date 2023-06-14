import M from "materialize-css";

function initModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
}

function WelcomingPopupModal() {
    setTimeout(initModal, 200)
    return (
        <div id="modalWelcomeDonation" className="modal">
            <div className="modal-content black-text">
                <h6 className="center-align">These are the items Foodbank wants you to donate.</h6>
            </div>
            <button href="#!" className="green btn col s6 modal-close">Yes</button>
            <button href="#!" className="red btn col s6 modal-close">Not now</button>
        </div>
    )
}

export default WelcomingPopupModal