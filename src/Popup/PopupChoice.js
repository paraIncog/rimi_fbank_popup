function PopupChoice() {
    return (
        <div className="row btn-group align-items-center footer">
            <button className="btn btn-success col s6 GoodVisText btn-flat white-text">
                Yes
            </button>
            <button className="btn btn-danger col s6 GoodVisText modal-close btn-flat white-text" data-target='#!'>
                No
            </button>
        </div>
    )
}

export default PopupChoice