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

function PopupModal() {
      setTimeout(initModal, 200)
    return (
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
    )
}

export default PopupModal