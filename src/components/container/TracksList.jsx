import React from "react";
import { Track } from "../pure/Track";

export const TracksList = ({ tracksList }) => {
  console.log(tracksList);

  return (
    <div className={"row row-cols-auto"}>
      {tracksList.length ? (
        tracksList.map((track) => {
          return <Track key={track.id} track={track} />;
        })
      ) : (
        <div className={"text-center"}>
          <h3>No tracks :(</h3>
        </div>
      )}
    </div>
  );
};
