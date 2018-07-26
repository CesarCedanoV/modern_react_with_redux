import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './componets/search_bar';
import VideoList from './componets/video_list';
import VideoDetail from './componets/video_detail';
const YOUTUBE_API_KEY = "AIzaSyDHRVNJwicsA2qu1G1QXXFcoE-Qq61DhKQ"

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo:null
        }
        
        YTSearch(
            {
                key:YOUTUBE_API_KEY,
                term:'Orcas'
            }, 
            (videos) => this.setState({videos,selectedVideo:videos[0]})
        );

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));