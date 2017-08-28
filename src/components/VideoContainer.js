import React from 'react';

const VideoContainer = ({activeVideo}) => {
		if (!activeVideo) {
			return <h3>Loading ... </h3>
		} else {
			const url = `http://www.youtube.com/embed/${activeVideo.id.videoId}`;
			return (
				<div className='col-md-9 video-container'>
					<iframe src={url}></iframe>
					<h1>{activeVideo.snippet.title}</h1>
					<p>{activeVideo.snippet.description}</p>
				</div>
			)
		}
}

export default VideoContainer;