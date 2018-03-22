import React, { Component} from 'react'


class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {term: 'Search here'}
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    onClick={() => this.setState({term: ''})} 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar