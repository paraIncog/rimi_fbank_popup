import PopupHeader from "./PopupHeader"
import PopupMessage from "./PopupMessage"
import PopupChoice from './PopupChoice'

function PopupMain() {
    return (
        <div className='row'>
            <PopupHeader />
            <PopupMessage />
            <PopupChoice />
        </div>
    )
}

export default PopupMain