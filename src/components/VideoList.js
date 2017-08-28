import React, {Component} from 'react';
import VideoListElement from './VideoListElement';

class VideoList extends Component {
	render() {
		const VideoElements = this.props.videos.map(video => {return <VideoListElement video={video} key={video.id.videoId} onVideoChange={this.props.onVideoChange} />});
		return (
			<div className='col-md-3 video-list'>
				<ul>
					{VideoElements}
				</ul>
			</div>
		)
	}
}

export default VideoList;