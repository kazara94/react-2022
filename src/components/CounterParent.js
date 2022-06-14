import { useState } from "react";
import Counter from "./Counter";

export default function CounterParent() {
  const [inputValue, setInputValue] = useState(90);
  const [start, setStart] = useState();

  return (
    <div className="CounterParent">
      <p>{inputValue}</p>
      <input
        type="number"
        placeholder="Type Number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setStart(parseInt(inputValue))} >Change Start Value</button>
      {/* {
        start && <Counter startValue={start} increase={50} />
      } */}
      <Counter startValue={start} increase={50} />
      <Counter increase={10} />
      <Counter startValue={50} />
    </div>
  );
}
