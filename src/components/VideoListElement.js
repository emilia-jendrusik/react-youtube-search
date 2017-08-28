import React from 'react';

const VideoListItem = ({video, onVideoChange}) => {
	return (
		<li className='clearfix' onClick={() => onVideoChange(video)}>
			<img src={video.snippet.thumbnails.medium.url} />
			<h5>{video.snippet.title}</h5>
		</li>
	)
}

export default VideoListItem;