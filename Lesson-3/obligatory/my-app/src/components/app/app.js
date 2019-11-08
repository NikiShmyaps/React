import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const date = [
        {label: 'Going to learn React', important: true, id: 'qwe'},
        {label: 'That is s ogood', important: false, id: 'werwe'},
        {label: 'I need a break...', important: false, id: 'sdfsdf'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={date}/>
            <PostAddForm/>
        </div>
    );
    
}

export default App;