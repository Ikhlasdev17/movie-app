import React from "react";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
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

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=b8aa583c&s=${str}`, {
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
                <Search searchMovies={this.searchMovies}/>
                {(this.state.movies.length) ?
                    <Movies movies={this.state.movies} /> :
                    <Loader />
                }


            </div>
        );
    }
};
