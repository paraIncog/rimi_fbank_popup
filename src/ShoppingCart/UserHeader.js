import globe from '../icons/globe-solid1.png'

import WelcomingPopupModal from './WelcomingPopupModal'

function UserHeader() {
    
    const welcomeDonationModal = () => {
        console.log('Welcome Donation Ballot Initiated')
    }

    return (
        <div className="col s12 row Header stickyHeader goodVisText goodPadding">
            <h4 className="col s6 left-align">
                Märt
            </h4>
            <div className="col s6 right-align modal-trigger" onClick={welcomeDonationModal} data-target="modalWelcomeDonation">
                <img src={globe} alt="globe" className='globeItem' />
            </div>
            <WelcomingPopupModal />
        </div>
    )
}

export default UserHeader