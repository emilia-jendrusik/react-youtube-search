import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeApiSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoContainer from './components/VideoContainer';

const API_KEY = 'AIzaSyAxOKquSiNYVwxeDw6NZTdXigQaqmyQEYI';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			activeVideo: ''
		}
		this.changeActiveVideo = this.changeActiveVideo.bind(this);
		this.searchVideo = this.searchVideo.bind(this);
		this.searchVideo('');
	
	}
	searchVideo(term) {
		YoutubeApiSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				activeVideo: videos[0]
			});
		});
	}
	changeActiveVideo(video) {
		this.setState({activeVideo: video});
	}
	render() {
		return (
			<div>
				<SearchBar searchVideo={this.searchVideo} />
				<VideoList videos={this.state.videos} onVideoChange={this.changeActiveVideo} />
				<VideoContainer activeVideo={this.state.activeVideo} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'));
