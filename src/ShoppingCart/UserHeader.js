// import globe from '../icons/globe-solid1.png'
// import donation from '../icons/hand-holding-dollar-solid.png';

// import WelcomingPopupModal from './WelcomingPopupModal'

function UserHeader() {
    
    // const welcomeDonationModal = () => {
    //     console.log('Welcome Donation Ballot Initiated')
    // }

    return (
        // <div className="col s12 row Header stickyHeader goodVisText goodPadding">
        //     <h4 className="col s6 left-align">
        //         Märt
        //     </h4>
        //     <div className="col s6 right-align modal-trigger" onClick={welcomeDonationModal} data-target="modalWelcomeDonation">
        //         <img src={donation} alt="globe" className='globeItem' />
        //     </div>
        //     <WelcomingPopupModal />
        // </div>
        <div className='row'>
            <div className='col s12 m12'>
                <div className='card white black-text center-align'>
                    <div className='row'>
                        {/* <h6>
                            Märt
                        </h6> */}
                    </div>
                    <div className='row'>
                        {/* <div className='row'>
                            <h4 className='red-text'>
                                0,00
                            </h4>
                        </div> */}
                        <div className='row'>
                            <h5 className='bold'>
                                Welcome, Märt
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader