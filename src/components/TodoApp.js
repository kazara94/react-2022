import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import TodoItem from "./TodoItem";

const _todoItems = [
  { id: 1, text: "Text 1", completed: true },
  { id: 2, text: "Text 2", completed: false },
  { id: 3, text: "Text 3", completed: true },
  { id: 4, text: "Text 4", completed: true },
  { id: 5, text: "Text 5", completed: true },
];

export default function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState(_todoItems);
  const input = useRef();

  // console.log(input.current);

  useEffect(() => {
    input.current.focus();
  }, [todoItems]);

  function handleSubmit(e) {
    e.preventDefault();
    let todoItem = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    setInputValue("");
   if (inputValue !== '') {
      setTodoItems([todoItem, ...todoItems]);
   }
  }

  function checking(id) {
    const changedArray = todoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoItems(changedArray);
  }
  // function deleteItem(index) {
  //   let newArray = [...todoItems]
  //   newArray.splice(index, 1)

  //   // setTodoItems(deleteArray.filter(item => item.id !== id));
  //   setTodoItems(newArray);
  // }
  function deleteItem(id) {
    let newArray = [...todoItems]
    let index = newArray.findIndex(o => o.id === id)
    // let filterArray = newArray.filter(o => o.id !== id)
    if (index > -1) {
    // if (filterArray.length > 0)
      newArray.splice(index, 1)
    }
    setTodoItems(newArray);
  }
  return (
    <div className="Counter">
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
        <input
          ref={input}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" text="Add Item" />
      </form>

      <ul className="ul">
        {todoItems.map((item, index) => {
          return (
            <TodoItem
              key={index}
              index={index}
              completed={item.completed}
              id={item.id}
              text={item.text}
              onChangePassed={checking}
              onDelete={deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}
