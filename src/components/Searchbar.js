import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    };
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleSearch = event => {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();
  };

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          className={`sortOptions ${this.getSortByClass(sortByOptionValue)}`}
          key={sortByOptionValue}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="searchBar">
        <form className="pure-form" onSubmit={this.handleSearch}>
          <fieldset style={{ color: "white" }}>
            <legend>Search Yelp</legend>
            <div className="SearchBar-sort-options">
              <ul
                style={{
                  display: "inline-flex",
                  listStyle: "none",
                  margin: "10px",
                  color: "white"
                }}
              >
                {this.renderSortByOptions()}
              </ul>
            </div>

            <input
              onChange={this.handleTermChange}
              type="text"
              placeholder="Search"
            />
            <input
              onChange={this.handleLocationChange}
              type="text"
              placeholder="Location"
            />
            <br />
            <button type="submit" className="pure-button">
              Search Yelp
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default SearchBar;
