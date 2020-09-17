import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const ToDo = ({name, isDone, dueDate}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>IsDone: {(isDone ? 'true': 'false')} Due: {dueDate}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ToDo;
