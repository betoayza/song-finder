import React from "react";
import Artist from "./Artist";
import Lyric from "./Lyric";

const Details = ({find, lyric, biography}) => {
  return (
    <div>
      <h2>Details</h2>
        <Artist />
        <Lyric />
    </div>
  );
};

export default Details;
