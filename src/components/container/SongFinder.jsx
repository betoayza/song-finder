import React, { useEffect, useState } from "react";
import { Form } from "../pure/forms/Form";
import { helpGetData } from "../../helpers/helpGetData";
import { TracksList } from "./TracksList";
import Loader from "../Loader";

const SongFinder = () => {
  const [find, setFind] = useState(null);
  const [lyricsMain, setLyricsMain] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (!find) return; //exit from effect to prevent renders

    const fetchData = async () => {
      console.log(find.song);
      const result = await helpGetData(find.song);
      console.log(result);
      setTracks(result.data);
      console.log(tracks);
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
      {find && !loading && <TracksList tracksList={tracks} />}
    </div>
  );
};

export default SongFinder;
