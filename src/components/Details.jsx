import React from "react";
import Artist from "./Artist";
import Lyric from "./Lyric";
import Message from "./Message";

const Details = ({ find, lyric, biography }) => {
  //Avoid innecesary renders
  if (!lyric || !biography) return null;

  //else
  return (
    <>
      {biography.artists ? (
        <Artist artist={biography.artists[0]} />
      ) : (
        <Message msg={`"${find.artist}" not found :(`} />
      )}
      {lyric.error || lyric.name === "AbortError" ? (
        <Message msg={`Lyrics of "${find.song}" not found :(`} />
      ) : (
        <Lyric title={find.song} lyrics={lyric.lyrics} />
      )}
    </>
  );
};

export default Details;
