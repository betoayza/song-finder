import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

export const Form = ({ handleFind }) => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Faltan datos...");
      return; //read not more & return whatever it is in handler
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
    <div>
      <h2>Find:</h2>
      <form id="main-form" onSubmit={handleSubmit}>
        <div className="form-group w-25">
          <input
            type="text"
            className="form-control mb-2"
            name="artist"
            placeholder="Artist..."
            onChange={handleChange}
            value={form.artist}
          />
          <input
            type="text"
            className="form-control mb-2"
            name="song"
            placeholder="Song..."
            onChange={handleChange}
            value={form.song}
          />
          <input type="submit" className="btn btn-success mb-2" value="Find!" />
        </div>
      </form>
    </div>
  );
};
