import React, { useState } from 'react';

const ListItem = ({ listItem: { task, id }, editListItem, removeListItem }) => {
    const [ listItemTask, setListItemTask ] = useState(task);
    const [ isEditing, setIsEditing ] = useState(false);

    const handleEdit = (updatedTask) => {
        editListItem(id, updatedTask);
        setListItemTask(updatedTask);
    }

    return (
        <li>
            {isEditing
                ? <input
                    type="text"
                    value={listItemTask}
                    onChange={e => handleEdit(e.target.value)}
                    />
                : task
            }
            {isEditing
                ? <button onClick={() => setIsEditing(false)}>Save</button>
                : <button onClick={() => setIsEditing(true)}>Edit Task</button>
            }        
            <button onClick={() => removeListItem(id)}>X</button>
        </li>
    );
}

export default ListItem;