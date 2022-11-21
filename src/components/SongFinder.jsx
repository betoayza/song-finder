import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import Loader from "./Loader";
import Details from "./Details";
import { helpHttp } from "../helpers/helpHttp";

const SongFinder = () => {
  const [find, setFind] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!find) return; //exit from effect to prevent renders
    const fetchData = async () => {
      const { artist, song } = find;

      let artistUri = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUri = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      console.log(artistUri, "\n\n", songUri);

      setLoading(true);
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUri),
        helpHttp().get(songUri),
      ]);
      setBiography(artistRes);
      setLyric(songRes);
      console.log("Biography: ", artistRes);
      console.log("Lyrics: ", songRes);
      setLoading(false);
    };
    fetchData();
  }, [find]);

  const handleFind = (data) => {
    console.log(data);
    setFind(data);
  };

  return (
    <div>
      {loading && <Loader />}
      <Form handleFind={handleFind} />
      {find && !loading && (
        <Details find={find} lyric={lyric} biography={biography} />
      )}
    </div>
  );
};

export default SongFinder;
