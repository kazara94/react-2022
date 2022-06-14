import Button from "./Button";

export default function TodoItem({ id, text, completed, onChangePassed}) {
    return (
        <li className="lists">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onChangePassed(id)}
        />
        <span className={completed ? "done" : ""}>{text}</span>
        <Button text="Delete" />
      </li>
    )
}