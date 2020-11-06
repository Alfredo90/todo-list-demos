import React, { useState } from 'react';

import Header from './Header';
import AddItem from './AddItem';
import List from './List';

const App = () => {
    const [ todoList, setTodoList ] = useState([]);
    const [ currentId, setCurrentId ] = useState(0);

  // event handlers for global state changes
    const addListItem = (task) => {
        setTodoList([...todoList, { id: currentId, task }]);
        setCurrentId(currentId + 1);
    }

    const editListItem = (id, updatedTask) => {
        const editIndex = todoList.findIndex(listItem => listItem.id === id);

        setTodoList([...todoList.slice(0, editIndex), { id, task: updatedTask}, ...todoList.slice(editIndex + 1)]);
    }

    const removeListItem = (id) => {
        setTodoList(todoList.filter(task => task.id !== id));
    }

    return (
        <div>
            <Header pendingTasks={todoList.length}/>
            <AddItem addListItem={addListItem}/>
            <List todoList={todoList} editListItem={editListItem} removeListItem={removeListItem}/>
        </div>
    );
}

export default App;