
 import M from 'materialize-css'
import PopupModal from './PopupModal';



function PopupMessage({toode}) {
    return (
      <div>

      <div className="goodPadding text-center center-align GoodVisText">
        <p>
                You've added {toode?.tooteNimi} to your shopping list.
            </p>
            <p>
                Would you like to donate {toode?.tavaHind} to Foodbank?
            </p>
            <div>
            <button data-target="modal1" class="btn modal-trigger">Modal</button>
            </div>

        </div>
        <div>
          {/*  */}
          <PopupModal />
        </div>
      </div>
    )
}

export default PopupMessage