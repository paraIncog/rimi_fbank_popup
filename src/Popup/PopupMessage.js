// import bootstrap from 'bootstrap'
// import sass from 'sass-loader'
//const myModal = document.getElementById('myModal')
 //const myInput = document.getElementById('myInput')

//  const myModal = new bootstrap.Modal(document.getElementById('myModal'))
 //myModal.addEventListener('shown.bs.modal', () => {
   //myInput.focus()
 //})

// or

function PopupMessage({toode}) {
    return (
        <div className="goodPadding text-center GoodVisText">
            <p>
                You've added {toode.tooteNimi} to your shopping list.
            </p>
            <p>
                Would you like to donate {toode.tavaHind} to Foodbank?
            </p>
            <div>
                <button>
                    Popup
                </button>
            </div>
        </div>
    )
}

export default PopupMessage