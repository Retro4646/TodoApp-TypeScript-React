import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

type TodoListProps = {
  items: { Id: string; text: string }[];
};

const todoList: React.FC<TodoListProps> = (props) => {
  console.log(props.items);

  return (
    <div className="my-5">
      {props.items.map((todo) => (
        <Card key={todo.Id}>
          <CardHeader>
            <CardTitle>{todo.text}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default todoList;
