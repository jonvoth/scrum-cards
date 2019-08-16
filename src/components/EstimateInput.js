import React, {Component, Fragment} from 'react';

class EstimateInput extends Component {
    render(){
        return (
            <Fragment>
                <label 
                    htmlFor="InputEstimateRange"
                    className="input-estimate-range-label visually-hidden">
                    Estimate
                </label>
                <input 
                    className="input-estimate-range"
                    name="InputEstimateRange"
                    type="range" 
                    min="1" 
                    max={this.props.steps} 
                    step="1" 
                    value={this.props.value}
                    onChange={this.props.onChange}>
                </input>
            </Fragment>
        )
    }
}

export default EstimateInput;