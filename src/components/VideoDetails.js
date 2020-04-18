import React from 'react';

import { Paper, Typography, Grid } from '@material-ui/core'
import { sizing } from "@material-ui/system"

const VideoDetail = ({ video }) =>{
    if(!video){
        return <div>Loading...</div>
    }

    console.log(video);
    

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        
        <Grid style={{padding: '10px'}} item xs={12} sm={12} md={12} lg={12} xl={12}>
        <React.Fragment height='100%'>
            <Paper elevation = {6} style={{height: '500px'}}>
                <iframe frameBorder='0' height='100%' width='100%' title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px'}}>
                <Typography variant="h4">{video.snippet.title} - { video.snippet.channelTitle }</Typography>
                <Typography variant="Subtitle1">{ video.snippet.channelTitle }</Typography>
                <Typography variant="Subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
        </Grid>

        

    )
}


export default VideoDetail;