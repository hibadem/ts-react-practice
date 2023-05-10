import React, {Dispatch, SetStateAction } from 'react';

// propların da typeları belirlenmelidir.
type IProps = {
  todo: string,
  setTodo: Dispatch<SetStateAction<string>>,
  addMessage: () => void
}
const Input: React.FC<IProps> = ({todo, setTodo, addMessage }) => {
  return (
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Yazınız..." />
      <button onClick={addMessage} type="button">Ekle</button>
    </div>
  )
}
export default Input;