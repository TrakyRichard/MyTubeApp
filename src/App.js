import React from 'react';
import { Grid } from '@material-ui/core';

import  { SearchBar, VideoDetails, VideoList }  from './components';
// import { VideoList } from './components/VideoList';

import youtube from './api/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('BE YOUR BEST');
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }
    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: '5',
                key: 'AIzaSyDbf3bsvzryHv2pwqh9cr7Vfrn7wa4gstk',
                q: searchTerm
            },
            });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
        
    }
    render (){
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <VideoDetails video={ selectedVideo } />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                           <VideoList videos={videos} onVideoSelect = {this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

// const App = () =>{
//     return (<h1>Youtube Clone App</h1>);
// }

export default App;