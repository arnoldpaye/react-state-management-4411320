import { forwardRef } from "react";

const Form = ({ onSubmit, setInput }, ref) => {
  return (
    <form onSubmit={onSubmit} className="mb-4 px-4">
      <input
        ref={ref}
        className="form-control mb-4"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default forwardRef(Form);
