import { useState } from 'react'

import IsikuAndmed from "./IsikuAndmed";
import OstukorviKoguandmed from "./OstukorviKoguandmed";
import TooteKirjeldus from './TooteKirjeldus';
import LisaToode from './LisaToode';

function OstukorvMain() {
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

  const kaubad = [...toode]

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

    return (
        <div className='col-s12'>
            <IsikuAndmed />
            <TooteKirjeldus toode={toode} />
            <LisaToode lisaToode={lisaToode} />
            <div className='row deadSpace' />
            <OstukorviKoguandmed />
        </div>
    );
}

export default OstukorvMain