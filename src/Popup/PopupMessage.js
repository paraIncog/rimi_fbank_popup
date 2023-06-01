import PopupModal from './PopupModal';

function PopupMessage({toode}) {
    return (
      <div>

      <div className="row goodPadding text-center center-align GoodVisText black-text">
        <p>
                You've added {toode?.tooteNimi} to your shopping list.
            </p>
            <p>
                Would you like to donate {toode?.tavaHind} to Foodbank?
                <br />
            </p>
        </div>
        <div>
          {/*  */}
          <PopupModal />
        </div>
      </div>
    )
}

export default PopupMessage