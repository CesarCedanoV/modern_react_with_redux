import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './componets/search_bar';

const YOUTUBE_API_KEY = "AIzaSyDHRVNJwicsA2qu1G1QXXFcoE-Qq61DhKQ"

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));