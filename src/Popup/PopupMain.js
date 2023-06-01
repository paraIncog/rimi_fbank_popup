import PopupMessage from "./PopupMessage"
import PopupChoice from './PopupChoice'
import M from 'materialize-css'

let instance

function initModal() {
    console.log('Call initModal')
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
}

function openModal() {
    instance.open();
}

function PopupMain() {
    setTimeout(initModal, 200)
    return (
        <div className='row'>
            <div id="donationModal" class="modal">
                <div class="modal-content">
                    <div className='row Header goodPadding stickyHeader'>
                        <div className='PrimText text-center center-align GoodVisText'>
                            Donation
                        </div>
                    </div>
                    <PopupMessage />
                    <PopupChoice />
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>

            
        </div>
    )
}

export default PopupMain