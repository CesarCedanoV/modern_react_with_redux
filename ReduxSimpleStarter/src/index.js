import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './componets/search_bar';
import VideoList from './componets/video_list';
const YOUTUBE_API_KEY = "AIzaSyDHRVNJwicsA2qu1G1QXXFcoE-Qq61DhKQ"

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: []
        }
        
        YTSearch(
            {
                key:YOUTUBE_API_KEY,
                term:'Orca'
            }, 
            (videos) => this.setState({videos})
        );

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));