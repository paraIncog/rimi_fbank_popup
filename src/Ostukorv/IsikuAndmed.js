import PopupDonationMain from "../Popup/PopupDonationMain"
import LisaToodePopup from "./lisaToode/LisaToodePopup"

function IsikuAndmed() {
    return (
        <div className='cols12 row Header goodPadding stickyHeader'>
            <div className='col PrimText text-start GoodVisText left-align'>
                Maire
            </div>
            <button data-target="donationModal" class="btn modal-trigger">
                Modal
            </button>
            <div className='col text-end GoodVisText right'>
                <button className="btn modal-trigger" data-target='newproductModal'>
                    Add
                </button>
            </div>
            <PopupDonationMain />
            <LisaToodePopup />
        </div>
    )
}

export default IsikuAndmed