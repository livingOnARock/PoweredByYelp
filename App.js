import React from "react";
import "./App.css";
import BusinessList from "./components/Businesses";
import SearchBar from "./components/Searchbar";
import Yelp from "./api/Yelp";
import Headerimg from "./yelpHeaderBowlsBackground.jpg";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      });
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${Headerimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "noRepeat"
        }}
      >
        <h1 style={{ color: "white" }}>Powered By Yelp</h1>
        {/* <img src={HeaderPic} width="100%" /> */}
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
