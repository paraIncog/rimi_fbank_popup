function TallyFooter({item}) {
    return (
        <div className="col s12 grey lighten-1 goodPadding page-footer">
            <div className="black-text goodVisText">
                <div className="row">
                    <div className="left-align col s6">
                        Products
                    </div>
                    <div className="right-align col s6">
                        {/* {tallyTotalProducts} */}
                    </div>
                </div>
                <div className="row">
                    <div className="left-align col s6">
                        Total
                    </div>
                    <div className="right-align col s6">
                        {/* {tallyTotalPrice} € */}
                    </div>
                </div>
            </div>
            <div className="row">
                <button className="btn col s12" disabled>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default TallyFooter