import React from 'react';

const Header = ({ pendingTasks }) => (
    <header>
        <h1>My Awesome To-Do List</h1>
        <h2>Pending Tasks: {pendingTasks}</h2>
    </header>
);

export default Header;