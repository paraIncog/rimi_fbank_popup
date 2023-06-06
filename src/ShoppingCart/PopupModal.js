import M from "materialize-css";

function initModal() {
    console.log('Call initModal')
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, {});
}

function PopupModal() {
    setTimeout(initModal, 200)
    console.log()
    return (
        <div id="modalDonation" class="modal">
            <div class="modal-content">
                <h6 className="center-align">Would You like to donate Carrots (1.21 €) to Foodbank?</h6>
                <h6 className="row center-align">You will get a discount for additional Carrots.</h6>
                <button>Yes</button>
                <button href="#!" className="modal-close">No</button>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
    )
}

export default PopupModal