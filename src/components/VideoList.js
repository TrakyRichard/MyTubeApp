import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './videoItem';
const VideoList = ({videos, onVideoSelect}) =>{    
    const listOfVideos = videos.map((video, index) => <VideoItem onVideoSelect={onVideoSelect} key={index} video={video} />)
    return (
        <Grid container spacing={3}>
            {listOfVideos}
        </Grid>
        );
}

export default VideoList;