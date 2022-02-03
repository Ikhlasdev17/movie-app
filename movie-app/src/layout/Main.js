import React from "react";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
export default class Main extends React.Component{
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=b8aa583c&s=panda', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                return this.setState({movies: data.Search}, () => {
                    console.log(this.state.movies)
                })
            })
    }

    render() {
        return (
            <div className="container content">
                {(this.state.movies.length) ?
                    <Movies movies={this.state.movies} /> :
                    <h1>Loading...</h1>
                }


            </div>
        );
    }
};
