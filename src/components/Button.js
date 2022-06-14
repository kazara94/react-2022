export default function Button({type, text, customClass, customStyle, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`Button ${customClass ? customClass : ""}`}
      style={customStyle ? customStyle : { color: "white" }}
      type={type}
    >
      {text}
    </button>
  );
}
