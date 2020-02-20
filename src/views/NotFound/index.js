import React, { Component } from 'react'

export default class NotFound extends Component {
    UNSAFE_componentWillMount(){
        console.log(this);
    }

    render() {
        return (
            <div>
                404 Not Found
            </div>
        )
    }
}
