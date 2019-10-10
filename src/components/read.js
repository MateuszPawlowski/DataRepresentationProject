import React from 'react';
import Movies from './movies';
import Axios from 'axios';

class Read extends React.Component {

    state = {
        movies: []
    };

    componentDidMount()
    {
        Axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')
        .then((response) =>{
            this.setState({movies: response.data.Search})
        })

        .catch((error) =>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h1>Hello from read Component</h1>
                <Movies myMovies={this.state.movies}></Movies>
            </div>
        );
    }
}

export default Read;
