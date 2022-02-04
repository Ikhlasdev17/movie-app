import React, {Component} from 'react';
import Movies from "../components/Movies";
import Search from "../components/Search";

class Main extends Component {
    state = {
        movies: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true})
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

    searchMovie = (str, type = 'all') => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=b8aa583c&s=${str}${(type !== "all") ? `&type=${type}` : ''} `)
            .then(res => res.json())
            .then(data => {
                return this.setState({movies: data.Search, loading: false})
            })
    }

    render() {
        return (
            <div className="main container">
                <Search searchMovie={this.searchMovie}/>
                {(this.state.loading) ?
                    <div><progress></progress> <br/></div> :
                    <Movies movies={this.state.movies} callback={this.searchMovie}/>
                }
            </div>
        );
    }
}

export default Main;