import React from 'react';
import ReactDOM from 'react-dom';

export default class City extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li>{this.props.name}</li>
        );
    }
}