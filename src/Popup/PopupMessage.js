import PopupModal from './PopupModal';

function PopupMessage({toode}) {
    return (
      <div>

      <div className="goodPadding text-center center-align GoodVisText black-text">
        <p>
                You've added {toode?.tooteNimi} to your shopping list.
            </p>
            <p>
                Would you like to donate {toode?.tavaHind} to Foodbank?
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