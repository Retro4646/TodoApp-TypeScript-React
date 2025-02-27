import React from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Delete } from "lucide-react";


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
            <button variant={'destructive'}><Delete/></button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default todoList;
