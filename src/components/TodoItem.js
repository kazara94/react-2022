import Button from "./Button";

export default function TodoItem({ index, id, text, completed, onChangePassed, onDelete}) {
    return (
        <li className="lists">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onChangePassed(id)}
        />
        <span className={completed ? "done" : ""}>{text}</span>
        <Button text="Delete"  onClick={() => onDelete(id)}/>
      </li>
    )
}