import React from "react";
import Business from "./Business";

class Businesses extends React.Component {
  render() {
    return (
      <div
        className="BusinessList"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}
      >
        {this.props.businesses.map(function(business) {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}

export default Businesses;
