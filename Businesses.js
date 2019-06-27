import React from "react";
import Business from "./Business";

const Businesses = ({ businesses }) => {
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
      {businesses.map(function(business) {
        return <Business key={business.id} business={business} />;
      })}
    </div>
  );
};

export default Businesses;
