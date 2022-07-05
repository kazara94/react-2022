import classes from '../styles/Button.module.scss';

export default function Button({type, text, customClass, customStyle, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${classes.Button} ${customClass ? customClass : ""}`}
      style={customStyle ? customStyle : { color: "white" }}
      type={type}
    >
      {text}
    </button>
  );
}
