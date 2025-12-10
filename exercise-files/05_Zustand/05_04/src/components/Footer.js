const Footer = ({ archive, filter, isVisible }) => {
  return (
    <div
      className="d-flex justify-content-between p-2"
      style={{ background: "#bdc3c7" }}
    >
      <form
        className="d-flex justify-content-start align-self-center"
        style={{ height: "auto" }}
        onChange={(e) => filter(e.target.value)}
      >
        <input
          className="form-check-input"
          value="all"
          type="radio"
          name="radioFilter"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          &nbsp; all &nbsp;
        </label>

        <input
          className="form-check-input"
          value="active"
          type="radio"
          name="radioFilter"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" for="flexRadioDefault2">
          &nbsp; active &nbsp;
        </label>

        <input
          className="form-check-input"
          value="completed"
          type="radio"
          name="radioFilter"
          id="flexRadioDefault3"
        />
        <label className="form-check-label" for="flexRadioDefault2">
          &nbsp; completed &nbsp;
        </label>
      </form>
      <button
        onClick={archive}
        className="btn btn-sm btn-danger"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        clear completed
      </button>
    </div>
  );
};

export default Footer;
