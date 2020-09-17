import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const ToDo = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardText>IsDone: {this.props.isDone} Due: {this.props.dueDate}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ToDo;
