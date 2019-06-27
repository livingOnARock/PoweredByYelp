import React from "react";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Business = ({ business }) => {
  return (
    <Card
      style={{
        width: "25rem",
        margin: " 30px auto"
      }}
    >
      <Card.Img variant="top" src={business.imageSrc} />
      <Card.Body>
        <Card.Title as="h2">{business.name}</Card.Title>
        <Card.Text>{business.category}</Card.Text>

        <ListGroup className="list-group-flush">
          <ListGroupItem as="h3">{business.phone.slice(1)}</ListGroupItem>
          <ListGroupItem as="h5">{business.address}</ListGroupItem>
          <ListGroupItem as="h5">
            {business.city} {business.state} {business.zipCode}
          </ListGroupItem>
          <ListGroupItem as="h6">
            {business.rating} rating out of {business.reviewCount} reviews
          </ListGroupItem>
        </ListGroup>
        <Button variant="secondary" href={business.url} target="_blank" block>
          View on Yelp
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Business;
