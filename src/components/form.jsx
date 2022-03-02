import react, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function Form(props) {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleExpand() {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    props.onAdd(Note);
    setNote((prevValue) => {
      return {
        title: "",
        content: "",
      };
    });
    setExpanded(false);
  }

  return (
    <div>
      <form className="form">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Title"
            value={Note.title}
          />
        )}
        <textarea
          onClick={handleExpand}
          onChange={handleChange}
          name="content"
          id=""
          cols="30"
          rows={isExpanded ? "3" : "1"}
          placeholder="Write Something...."
          value={Note.content}
        ></textarea>
        {isExpanded && (
          <button onClick={submitNote} className="btn btnAdd">
            {<AddIcon />}
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
