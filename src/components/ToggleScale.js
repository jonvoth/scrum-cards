import React, {Component, Fragment} from 'react';

class ToggleScale extends Component {
    render(){
        return (
            <Fragment>
                <button className="btn-toggle-scale" onClick={this.props.onClick}>{this.props.title}</button>
            </Fragment>
        )
    }
}

export default ToggleScale;