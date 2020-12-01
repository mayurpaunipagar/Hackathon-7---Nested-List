import React from 'react';
import ReactDOM from 'react-dom';
import Town from '../Town';

export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = { townVisible: false };
        this.toggleTown = this.toggleTown.bind(this);
    }
    toggleTown() {
        this.setState({ townVisible: !this.state.townVisible })
        console.log("town "+this.state.townVisible);
    }
    render() {
        const towns = this.props.towns;
        return (
            <li onClick={this.toggleTown}>
                {this.props.name}
                {(this.state.townVisible) ?
                    "yes" : ""}
            </li>
        );
    }
}