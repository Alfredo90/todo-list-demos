import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listItemTask: this.props.listItem.task,
            isEditing: false
        }
    }

    handleEdit = (updatedTask) => {
        const { listItem: { id }, editListItem } = this.props;

        editListItem(id, updatedTask);
        this.setState({ listItemTask: updatedTask})
    }

    render() {
        const { listItem: { task, id }, removeListItem } = this.props;
        const { isEditing, listItemTask } = this.state;

        return (
            <li>
                {isEditing
                    ? <input
                        type="text"
                        value={listItemTask}
                        onChange={e => this.handleEdit(e.target.value)}
                        />
                    : task
                }
                {isEditing
                    ? <button onClick={() => this.setState({ isEditing: false })}>Save</button>
                    : <button onClick={() => this.setState({ isEditing: true })}>Edit Task</button>
                }        
                <button onClick={() => removeListItem(id)}>X</button>
            </li>
        );
    }
}

export default ListItem;