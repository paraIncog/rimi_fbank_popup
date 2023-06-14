import M from "materialize-css";

let productName = 'Apple Royal Gala sweet, 1kilo 4pc';
let productPrice = 0.55;

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
                <div>
                    <div
                        className='goodPadding'
                    // key={item.id}
                    >
                        <div className='row col s12'>
                            <div className='col s6 goodVisText'>{productName}</div>
                            <div className='col s6 right-align goodVisText'>{productPrice} €</div>
                        </div>
                    </div>
                </div>
                <button href="#!" className="green btn col s6 modal-close">Yes</button>
                <button href="#!" className="red btn col s6 modal-close">Not now</button>
            </div>
        </div>
    )
}

export default WelcomingPopupModal