function TooteKirjeldus({toode}) {
    return (
        toode.map((toode, index) => {
            let tooteKoguhind = toode.tooteKogus * toode.tavaHind;
            console.log('Title: ' + toode.tooteNimi + '\nKogus: ' + toode.tooteKogus + '\nIndex: ' + toode.index + '\nÜhikuhind: ' + toode.tavaHind + '\nKoguhind: ' + toode.tooteKoguhind);
            console.log('CP', toode)
            return (
                <div
                className='goodPadding'
                key={toode.index}
                >
                    <div className='row col'>
                        <div className='col PrimText'>{toode.tooteNimi}</div>
                        <div className='col text-end right'>{tooteKoguhind} €</div>
                    </div>
                    <div className='row col text-start'>
                        {toode.tooteKogus} X {toode.tavaHind} €
                        {/* <br /> */}
                        {/* {index} */}
                    </div>
                </div>
            )
        })
        );
}

export default TooteKirjeldus