import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "panda",
            type: "all"
        }
    }

    handleSearch = (e) => {
        if(this.state.search !== ""){
            if(e.key === 'Enter'){
                this.props.searchMovie(this.state.search)
                console.log(this.state.search)
            }
        }

    }


    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
            console.log(e.target.dataset.type)
        })
    }



    render() {
        return (
            <>
                <div className="search">
                    <input type="search" name="search" placeholder="search" value={this.state.search} onChange={(e) => {
                        this.setState({search: e.target.value})
                    }} onKeyDown={this.handleSearch}/>
                </div>
                <div className="filterMovies">
                    <label>
                        <input type="radio" name="type" data-type="all" checked={this.state.type === 'all'} onChange={this.handleFilter}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input type="radio" name="type" data-type="movie" checked={this.state.type === 'movie'} onChange={this.handleFilter}/>
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input type="radio" name="type" data-type="series" checked={this.state.type === 'series'} onChange={this.handleFilter}/>
                        <span>Series only</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="episode" onChange={this.handleFilter} checked={this.state.type === 'episode'}/>
                        <span>Episode only</span>
                    </label>
                </div>
            </>

        );
    }
}

export default Search;