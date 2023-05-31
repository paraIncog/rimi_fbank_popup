import toode from '../Ostukorv/OstukorvMain';

function PopupMessage({toode}) {
    return (
        <div className="goodPadding text-center GoodVisText">
            <p>
                You've added {toode?.tooteNimi} to your shopping list.
            </p>
            <p>
                Would you like to donate {toode?.tavaHind} to Foodbank?
            </p>
        </div>
    )
}

export default PopupMessage