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

    const lisaToode = (index, tooteNimi, tooteKogus, tavaHind, tooteKoguHind) => {
    const uusToode = {
        index: index,
        tooteNimi: tooteNimi,
        tavaHind: tavaHind,
        tooteKogus: tooteKogus,
        tooteKoguHind: tooteKoguHind
    }
    const uusTooteMassiiv = [...toode, uusToode]
    setToode(uusTooteMassiiv)
    }

    return (
        <div className='container col'>
            <IsikuAndmed />
            <TooteKirjeldus toode={toode} />
            <LisaToode lisaToode={lisaToode} />
            <OstukorviKoguandmed />
        </div>
    );
}

export default OstukorvMain