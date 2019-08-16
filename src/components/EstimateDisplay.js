import React, {Component, Fragment} from 'react';

class EstimateDisplay extends Component {
    render(){
        return (
            <Fragment>
                <p className="estimate-display-container"><span className="visually-hidden">My estimate is</span> <span className="estimate-value">{this.props.value}</span></p>
            </Fragment>
        )
    }
}

export default EstimateDisplay;