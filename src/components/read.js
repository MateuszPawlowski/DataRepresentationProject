import React from 'react';
import Movies from './movies';
import Axios from 'axios';

class Read extends React.Component {

    state = {
        movies: []
    };

    componentDidMount()
    {
        Axios.get('http://localhost:4000/api/movies')
        .then((response) =>{
            this.setState({movies: response.data.movies})
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
