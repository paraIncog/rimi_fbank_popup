import WelcomingPopupModal from "./WelcomingPopupModal"

function WelcomingDonations() {

    return (
        <div>
            <div>
                <p>WelcomeDonationTitle</p>
                <p>WelcomeDonationContent</p>
                <p className="WelcomeDonationChoices"></p>
            </div>
            <WelcomingPopupModal />
        </div>
    )
}

export default WelcomingDonations