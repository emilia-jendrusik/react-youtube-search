import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {inputValue: ''}
	}
	handleInputChange(term) {
		this.props.searchVideo(term);
		this.setState({inputValue: term});
	}
	render() {
		return (
			<div className='col-md-12 search-bar'>
				<input onChange={e => this.handleInputChange(e.target.value)} value={this.state.inputValue} placeholder="Type in video you're looking for" />
			</div>
		)
	}
}

export default SearchBar;