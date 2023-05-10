import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todos } from "./types/Type";
import { Message } from "./components/Message";

const App:React.FC  = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todos[]>([]);

  console.log(todos);
  const addMessage = () => {
    if (todo) {
      setTodos([...todos,{message: todo, id: todos.length + 1}]);
      setTodo('');
    }
  }

  const deleteMessage = (id: number) => {
    setTodos(todos.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo}/>
      <Message todos={todos} deleteMessage={deleteMessage}/>
    </div>
  );
};

export default App;
