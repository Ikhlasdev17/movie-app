import React from "react";
export default class Search extends React.Component {
    state= {
        search: 'panda',
        type: "all"
    }

    handleKey = (e) => {
        if(this.state.search !== ''){
            if(e.key === 'Enter'){
                this.props.searchMovies(this.state.search)
            }
        }

    }

    handleFilter= (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }

    render() {
        return(
            <div className="row d-flex">
                <div className="input-field col s12 row">
                    <input
                        id="email_inline"
                        placeholder="Search..."
                        type="Search"
                        className="validate col"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />

                </div>
                <div>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               data-type="all"
                               onChange={this.handleFilter}
                               checked={this.state.type === 'all'}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'}/>
                        <span>Series only</span>
                    </label>

                </div>
            </div>
        )
    }
}