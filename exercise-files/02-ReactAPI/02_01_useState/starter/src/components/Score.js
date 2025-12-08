import { useContext } from "react";
import { Context } from "../context";

function Score() {
  const {
    state: { count },
  } = useContext(Context);
  return (
    <div className="d-flex justify-content-end">
      <p className="h3 px-2">{count}</p>
    </div>
  );
}
export default Score;
