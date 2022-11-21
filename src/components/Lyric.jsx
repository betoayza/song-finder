import React from "react";
import "./Lyric.css";

const Lyric = ({ title, lyrics }) => {
  return (
    <div id="lyrics-div">
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </div>
  );
};

export default Lyric;
