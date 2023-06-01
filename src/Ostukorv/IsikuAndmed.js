import PopupMain from "../Popup/PopupMain"

function IsikuAndmed() {
    return (
        <div className='cols12 row Header goodPadding stickyHeader'>
            <div className='col PrimText text-start GoodVisText left-align'>Maire</div>
            <button data-target="donationModal" class="btn modal-trigger">Modal</button>
            <div className='col text-end GoodVisText right'>
                <button className="btn btn-primary">
                    Add
                </button>
            </div>
            <PopupMain />
        </div>
    )
}

export default IsikuAndmed