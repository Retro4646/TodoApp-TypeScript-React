import { button } from "./ui/button"
import { Input } from "./ui/input"

const  Addtodo = () => {
    return (
    <form className="flex items-center gap-5">
    <Input  type="text" placeholder="Write a new todo..." className="w-fit" />
    <button>Add Todo</button>
    </form>
    );
};

export default Addtodo;