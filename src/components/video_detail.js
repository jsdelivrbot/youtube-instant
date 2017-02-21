import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&rel=0?autohide=1?cc_load_policy=1?color=white?controls=0?iv_load_policy=3?loop=1?modestbranding=1`;

	return (
		<div className="video-detail">
			<iframe className="embed-responsive-item" height="100%" width="100%" allowFullScreen="allowFullscreen" mozAllowFullscreen="mozAllowFullscreen" msAllowFullscreen="msAllowFullscreen" oAllowFullscreen="oAllowFullscreen" webkitAllowFullscreen="webkitAllowFullscreen" src={url}></iframe>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;