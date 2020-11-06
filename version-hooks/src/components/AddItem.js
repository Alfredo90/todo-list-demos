import React, { useState } from 'react';

const AddItem = ({ addListItem }) => {
    const [ inputText, setInputText ] = useState('');

    const handleAddItem = () => {
        addListItem(inputText);
        setInputText('');
    }

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => handleAddItem()}>Add List Item</button>
        </div>
    );
}

export default AddItem;