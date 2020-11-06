import React, { Component } from 'react';

import Header from './Header';
import AddItem from './AddItem';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
            currentId: 0
        }
    }

  // event handlers for global state changes
    addListItem = (task) => {
        const { todoList, currentId } = this.state;

        this.setState({
            todoList: [...todoList, { id: currentId, task }],
            currentId: currentId + 1
        });
    }

    editListItem = (id, updatedTask) => {
        const { todoList } = this.state;
        const editIndex = todoList.findIndex(listItem => listItem.id === id);

        this.setState({
            todoList: [...todoList.slice(0, editIndex), { id, task: updatedTask}, ...todoList.slice(editIndex + 1)]
        });
    }

    removeListItem = (id) => {
        const { todoList } = this.state;

        this.setState({
            todoList: todoList.filter(task => task.id !== id)
        });
    }

    render() {
        const { todoList } = this.state;

        return (
            <div>
                <Header pendingTasks={todoList.length}/>
                <AddItem addListItem={this.addListItem}/>
                <List todoList={todoList} editListItem={this.editListItem} removeListItem={this.removeListItem}/>
            </div>
        );
    }
}

export default App;