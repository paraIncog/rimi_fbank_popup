let tooteidKokku = 0;
let hindKokku = 0;

function OstukorviKoguandmed() {
    return (
        <div className='goodPadding finalTally page-footer'>
            {/* Ostukorvi Koguandmed */}
            <div className='row'>
                <div className='col text-start'>Tooted</div>
                <div className='col text-end right'>{tooteidKokku}</div>
            </div>
            <div className='row'>
                <h5 className='col text-start'>Kokku</h5>
                <div className='col text-end right'>{hindKokku} €</div>
            </div>
            <div className='row'>
                <div>
                    <button className='col-12 btn btn-danger'>
                        Eemalda
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OstukorviKoguandmed