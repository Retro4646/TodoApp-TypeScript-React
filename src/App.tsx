import { text } from "stream/consumers";
import "./App.css";
import Addtodo from "./components/addtodo";
import TodoList from "./components/todolist";

function App() {
  const todos = [{Id : "D1", text : "Do something"}];
  return (
  <main className="max-w-6xl mx-auto">
    <Addtodo/>
    <TodoList items = {todos}/>
  </main>
  );
};

export default App
