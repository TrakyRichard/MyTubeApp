import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) =>{
    return(
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
            <Paper style={{display: 'flex', flexDirection: 'column',  width:'100%', marginBottom: '30px', alignItems: 'center', cursor : 'pointer'}} onClick={() => onVideoSelect(video)}>
                <img style={{ marginRight: '20px', width:'100%'}} alt="Thumbnails" src={video.snippet.thumbnails.medium.url}/>
                <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;