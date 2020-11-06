import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';

/* -------------- App.js -------------- */
class App extends Component {
  constructor(props) {
    super(props);

    // global state of the application -- contains the list items in the array todoList, and tracks golbal currentId
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
        {/* props object for component Header is { pendingTasks: todoList.length } */}
        <Header pendingTasks={todoList.length}/>
        {/* props object for component AddItem is { addListItem: this.addListItem } */}
        <AddItem addListItem={this.addListItem}/>
        {/* props object for component List is { todoList: this.state.todoList, editListItem: this.editListItem, removeListItem: this.removeListItem } */}
        <List todoList={todoList} editListItem={this.editListItem} removeListItem={this.removeListItem}/>
      </div>
    );
  }
}

/* -------------- Header.js -------------- */

/* alternatively:

const Header = (props) => (
  const { pendingTasks } = props; // props object destructured inside Header function body
  
  // ... (the rest as below)
)

*/
const Header = ({ pendingTasks }) => ( // props object destructured directly in Header function parameters
  <header>
      <h1>My Awesome To-Do List</h1>
      <h2>Pending Tasks: {pendingTasks}</h2>
  </header>
);

/* -------------- AddItem.js -------------- */
class AddItem extends Component {
  constructor(props) {
    super(props);

    // local state of the AddItem component -- contains text input for new item to be added
    this.state = {
      inputText: ''
    }
  }

  handleAddItem = () => {
    this.props.addListItem(this.state.inputText);
    this.setState({ inputText: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputText}
          onChange={e => this.setState({ inputText: e.target.value })}
        />
        <button onClick={() => this.handleAddItem()}>Add List Item</button>
      </div>
    );
  }
}

/* -------------- List.js -------------- */

/* alternatively:

const List = (props) => {
  const { todoList, removeListItem } = props; // props object destructured inside List function body
  
  // ... (the rest as below)
}

*/

const List = ({ todoList, editListItem, removeListItem }) => { // props object destructured directly in List function parameters
  const mappedList = todoList.map(listItem => (
    <ListItem
      key={listItem.id}
      listItem={listItem}
      editListItem={editListItem}
      removeListItem={removeListItem}
    />
  ));

  return (
    <ul>
      {mappedList}
    </ul>
  );
}

/* -------------- ListItem.js -------------- */
class ListItem extends Component {
  constructor(props) {
    super(props);


     // local state of the ListItem component -- contains current text of the component and isEditing Boolean flag for conditional rendering of input field for editing
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
        {/* conditional rendering: isEditing === true renders input field and "Save" button, isEditing === false renders text only and "Edit Task" button */}
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

/* -------------- index.js -------------- */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

