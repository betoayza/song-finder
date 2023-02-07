import React, { useState } from "react";

const initialForm = {
  // artist: "",
  song: "",
};

export const Form = ({ handleFind }) => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.song) {
      alert("Faltan datos...");
      return;
    }

    handleFind(form);
    handleReset();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <div
      className={"container mb-3"}
      style={{ diplay: "flex", justifyContent: "center" }}
    >
      <h2>Find:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2 form-row"
          name="song"
          placeholder="Song..."
          onChange={handleChange}
          value={form.song}
          style={{ color: "#9400d3", fontStyle: "italic", fontWeight: "bold" }}
        />
        <div
          className={"w-100"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="submit" className="btn btn-success mb-2" value="Find!">
            Find
          </button>
        </div>
      </form>
    </div>
  );
};
