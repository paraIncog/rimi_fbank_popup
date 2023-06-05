import { useState } from 'react'
import M from 'materialize-css'
import LisaToode from '../LisaToode'

let instance

function initModal() {
    console.log('Call initModal')
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, {});
}

function openModal() {
    instance.open();
}


function LisaToodePopup() {
    let tooteKogus;
    let tavaHind;
    const [toode, setToode] = useState([
      {
          index: 0,
          tooteNimi: 'Maasikamoos 400g',
          tooteKogus: 1,
          tavaHind: 1.89,
          tooteKoguHind: tooteKogus * tavaHind
      },
      {
          index: 1,
          tooteNimi: 'Kaerahelbed 1kg',
          tooteKogus: 1,
          tavaHind: 1.19,
          tooteKoguHind: tooteKogus * tavaHind
      },
      {
          index: 2,
          tooteNimi: 'Lõhefilee, kg',
          tooteKogus: 1,
          tavaHind: 23.99,
          tooteKoguHind: tooteKogus * tavaHind
      },
      {
          index: 3,
          tooteNimi: 'Broilerikoivaliha šašlõkk äädikamarinaadis Tallegg',
          tooteKogus: 2,
          tavaHind: 5.99,
          tooteKoguHind: tooteKogus * tavaHind
      }
  ])
  const lisaToode = (tooteNimi, tooteKogus, tavaHind, tooteKoguHind) => {
    const uusToode = {
        index: toode.length,
        tooteNimi: tooteNimi,
        tavaHind: tavaHind,
        tooteKogus: tooteKogus,
        tooteKoguHind: tooteKoguHind
    }

    console.log('CP3', uusToode, tavaHind)
    const uusTooteMassiiv = [...toode, uusToode]
    setToode(uusTooteMassiiv)
}
    setTimeout(initModal, 200)
    return (
        <div className='row'>
            <div id="newproductModal" class="modal">
                <div class="modal-content">
                    <div className='row Header goodPadding stickyHeader'>
                        <div className='PrimText text-center center-align GoodVisText'>
                            NewProduct
                        </div>
                    </div>
                    <LisaToode lisaToode={lisaToode} />
                </div>
            </div>
        </div>
    )
}

export default LisaToodePopup