import React from "react";
import Artist from "./Artist";
import Lyric from "./Lyric";
import Message from "./Message";

const Details = ({find, lyric, biography}) => {
  //Avoid innecesary renders
  if(!lyric || !biography) return null;
  
  //else
  return (
    <>
      {biography.artists ? <Artist /> : <Message msg="Artist not found :("/>}       
      {lyric.error || lyric.name==='AbortError' ? <Message msg={`Lyrics of "${find.song}" not found :(`} /> : <Lyric />}
    </>
  );
};

export default Details;
