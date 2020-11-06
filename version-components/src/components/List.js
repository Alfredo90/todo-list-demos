import React from 'react';
import ListItem from './ListItem';

const List = ({ todoList, editListItem, removeListItem }) => {
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

export default List;