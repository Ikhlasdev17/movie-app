import React from "react";
export default class Search extends React.Component {
    state= {
        search: ''
    }

    handleKey = (e) => {
        if(this.state.search !== ''){
            if(e.key === 'Enter'){
                this.props.searchMovies(this.state.search)
            }
        }

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
            </div>
        )
    }
}