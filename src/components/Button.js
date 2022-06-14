export default function Button({ text, customClass, customStyle, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`Button ${customClass ? customClass : ""}`}
      style={customStyle ? customStyle : { color: "white" }}
    >
      {text}
    </button>
  );
}
