import React from "react";
import ReactDOM from "react-dom";
import City from "../City";

export default class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cityVisible: false };
        this.toggleCity = this.toggleCity.bind(this);
    }
    toggleCity() {
        this.setState({ cityVisible: !this.state.cityVisible })

    }
    render() {

        const cities = this.props.cities;

        return <>
            <li onClick={this.toggleCity}>
                {this.props.name}
                {(this.state.cityVisible) ?
                    (<ol>
                        {cities.map((city) => (
                            <City name={city.name} />
                        ))}
                    </ol>) : ""}
            </li>
        </>
    }
}