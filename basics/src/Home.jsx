import { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <>
            <h1>Home Component</h1>
            <h3>Name is: {this.props.name}</h3>
            <h3>Age is: {this.props.age} </h3>
            </>
        )
    }
}