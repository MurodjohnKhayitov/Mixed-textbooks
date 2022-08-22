import React from "react";
import "./table.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Phone from "../assets/mob-app-img.png";
function Table() {
  const person = [
    { id: 1, name: "Aziz", age: 12 },
    { id: 2, name: "Laziz", age: 22 },
    { id: 3, name: "Begzod", age: 19 },
    { id: 4, name: "Zoir", age: 15 },
    { id: 5, name: "Toir", age: 29 },
    { id: 6, name: "Tohir", age: 32 },
    { id: 7, name: "Mahkam", age: 33 },
  ];
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Phone} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {person.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <h2></h2>
          </div>
        );
      })}
    </div>
  );
}
export default Table;
