import { useState } from "react"

function LisaToode({lisaToode}) {
    const [tooteNimi, setTooteNimi] = useState('')
    const [tooteKogus, setTooteKogus] = useState(1)
    const [tavaHind, setTavaHind] = useState(0)
    const [tooteKoguHind, setTootekoguHind] = useState(tooteKogus * tavaHind)

    const tooteAndmeteLisamine = (event) => {
        console.log('CP2', tavaHind, tooteKogus)
        event.preventDefault()
        lisaToode(tooteNimi, tooteKogus, tavaHind, tooteKoguHind)
        setTooteNimi('')
        setTooteKogus(1)
        setTavaHind()
        setTootekoguHind(tooteKogus * tavaHind)
    }

    return (
        <div className="goodPadding card-panel pink black-text">
            <form onSubmit={tooteAndmeteLisamine}>
                <div className="row">
                    <div className="col-10">
                        <label>Toote Nimi</label>
                        <input
                            type="text"
                            value={tooteNimi}
                            onChange={({target}) => setTooteNimi(target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <label>Toote Kogus</label>
                        <input
                            type="text"
                            value={tooteKogus}
                            onChange={({target}) => setTooteKogus(target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <label>Toote Hind</label>
                        <input
                            type="text"
                            value={tavaHind}
                            onChange={({target}) => setTavaHind(target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <input className="btn btn-link" type="submit" value='Lisa Toode' />
                </div>
            </form>
        </div>
    )
}

export default LisaToode