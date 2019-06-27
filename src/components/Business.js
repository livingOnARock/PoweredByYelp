import React from "react";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import GoldStar from "../goldStar.jpg";
class Business extends React.Component {
  onClick = () => {
    console.log(this.props.business.url);
  };
  render() {
    return (
      <Card
        style={{
          width: "25rem",
          margin: " 30px auto"
        }}
      >
        <Card.Img variant="top" src={this.props.business.imageSrc} />
        <Card.Body>
          <Card.Title as="h2">{this.props.business.name}</Card.Title>
          <Card.Text>{this.props.business.category}</Card.Text>

          <ListGroup className="list-group-flush">
            <ListGroupItem as="h3">
              {this.props.business.phone.slice(1)}
            </ListGroupItem>
            <ListGroupItem as="h5">{this.props.business.address}</ListGroupItem>
            <ListGroupItem as="h5">
              {this.props.business.city} {this.props.business.state}{" "}
              {this.props.business.zipCode}
            </ListGroupItem>
            <ListGroupItem as="h6">
              {this.props.business.rating} rating out of{" "}
              {this.props.business.reviewCount} reviews
            </ListGroupItem>
          </ListGroup>
          <Button
            variant="secondary"
            href={this.props.business.url}
            target="_blank"
            block
          >
            View on Yelp
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Business;
