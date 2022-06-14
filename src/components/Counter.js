import { useEffect, useState } from "react";
import Button from "./Button";

export default function Counter({ startValue, increase }) {
  const [number, setNumber] = useState(startValue || 0);

  useEffect(() => {
    if (startValue) {
      setNumber(startValue);
    } else {
      setNumber(0);
    }
  }, [startValue]);

  useEffect(() => {
    var interval = setInterval(() => {
      setNumber((a) => a + 1);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Counter">
      <h3>Counter</h3>
      <p>{number}</p>
      <Button
        onClick={() => setNumber(number + (increase || 5))}
        text="Increase"
      />
    </div>
  );
}
