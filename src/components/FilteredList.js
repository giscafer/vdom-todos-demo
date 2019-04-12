/* eslint-disable */
import React, { Component } from 'react';
import List from './List';

export default class FilteredList extends Component {


    filterList(event) {
        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }

    constructor(props) {
        super(props);
        this.state = {
            initialItems: [
                'Apples',
                'Broccoli',
                'Chicken',
                'California1',
                'New York1',
                'Bacon',
                'Eggs',
                'Salmon',
                'Granola',
                'Bananas',
                'Beer',
                'Wine',
                'Yogurt'
            ],
            items: []
        };
        this.filterList = this.filterList.bind(this)
    }


    componentWillMount() {
        this.setState({ items: this.state.initialItems });
    }
    render() {
        return (
            <div className="filter-list todoapp" >
                <h1>todos</h1>
                <input type="text" placeholder="Search" onChange={this.filterList} class="new-todo" />
                <List items={this.state.items} />
            </div>
        );
    }
}
