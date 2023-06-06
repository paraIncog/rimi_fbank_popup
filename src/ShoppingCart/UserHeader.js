import globe from '../icons/globe-solid1.png'
import donateIcon from '../icons/donation_dollar.png'
import PopupModal from './PopupModal'

function UserHeader() {
    return (
        <div className="col s12 row Header stickyHeader goodVisText goodPadding">
            <h4 className="col s6 left-align">
                Username
            </h4>
            <div className="col s6 right-align">
                {/* <div className='col s1'>
                    <a class="modal-trigger" href="#modalDonation">
                        <img src={donateIcon} alt='donation' className='globeItem' />
                    </a>
                </div> */}
                <img src={globe} alt="globe" className='globeItem' />
            </div>
            {/* <PopupModal /> */}
        </div>
    )
}

export default UserHeader