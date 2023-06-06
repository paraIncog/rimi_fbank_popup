import globe from '../icons/globe-solid1.png'
import donateIcon from '../icons/donation_dollar.png'
import PopupModal from './PopupModal'

function UserHeader() {
    return (
        <div className="col s12 row Header stickyHeader goodVisText goodPadding">
            <h4 className="col s6 left-align">
                Märt
            </h4>
            <div className="col s6 right-align">
                <img src={globe} alt="globe" className='globeItem' />
            </div>
            {/* <PopupModal /> */}
        </div>
    )
}

export default UserHeader