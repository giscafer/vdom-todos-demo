/* eslint-disable*/
import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='todo-list'>
                {
                    this.props.items.map(function (item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
}
