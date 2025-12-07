import { useEffect, useState } from "react";

export default function Result({ result, input }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const answer = result === parseInt(input);
    setMessage(answer ? "You guessed right!" : "Try Again :(");
    if (!result) {
      setMessage("");
    }
  }, [result, input]);

  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ width: "50%" }}
    >
      <div className="d-flex text-success justify-content-center mb-5">
        <p className="h1">{message}</p>
      </div>
    </div>
  );
}
