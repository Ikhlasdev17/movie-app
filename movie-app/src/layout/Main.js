import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
export default class Main extends React.Component{
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=b8aa583c&s=panda', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                return this.setState({movies: data.Search, loading: false}, () => {
                    console.log(this.state.movies)
                })
            })
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=b8aa583c&s=${str}${type !== 'all' ? `&type=${type}` : ''}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                return this.setState({movies: data.Search, loading: false}, () => {
                    console.log(this.state.movies)
                })
            })
    }

    render() {
        return (
            <div className="container content">
                <Search searchMovies={this.searchMovies}/>
                {(this.state.loading) ?
                    <Loader /> :
                    <Movies movies={this.state.movies} />

                }


            </div>
        );
    }
};
