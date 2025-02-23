import "./App.css";
import Addtodo from "./components/addtodo";
import TodoList from "./components/todolist";

function App() {
  return (
  <main className="max-w-6xl mx-auto">
    <Addtodo/>
    <TodoList/>
  </main>
  );
};

export default App
