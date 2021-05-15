import React from "react";
import "./Counter.css";

interface CounterProps {
  counterName?: string;
  code?: number;
}

const Counter: React.FC<CounterProps> = (props) => {
  // State changes here
  const [count, setCount] = React.useState(5);
  const [someString, setSomeString] = React.useState<string | null>(null);
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  React.useEffect(() => {
    if (count >= 10) {
      setSomeString("Bruh stop incrementing");
      setImageUrl("/Stop.gif");
    } else if (count < 0) {
      setSomeString("Bruh stop decrementing");
      setImageUrl("/Stop.gif");
    } else if (count === props.code && props.counterName !== "Third Lock") {
      setSomeString("Correct code: " + props.code);
      setImageUrl("/Arrow.gif");
    } else if (count === props.code && props.counterName === "Third Lock") {
      setSomeString("Correct code: " + props.code);
      setImageUrl("/");
      setImageUrl("/Unlocked.png");
    } else {
      setSomeString("Failed: " + count);
      setImageUrl("/x.gif");
    }
  }, [count]);

  return (
    <div className="counter-wrapper">
      <div className="counter">
        {/* Show multiple onClick examples, show mistakes*/}
        <button className="counter-btn" onClick={decrement}>
          {"<"}
        </button>
        <div className="counter-label">
          {someString ?? `${props.counterName}:  ${count}`}
        </div>
        <button className="counter-btn" onClick={increment}>
          {">"}
        </button>
      </div>
      <div className="counter-image">
        {imageUrl ? <img alt="some string" src={imageUrl} /> : null}
      </div>
    </div>
  );
};

Counter.defaultProps = {
  counterName: "N Lock",
  code: 0,
};
export default Counter;
