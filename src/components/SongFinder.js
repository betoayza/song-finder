import React, {useState} from 'react';
import Form from './Form';
import Loader from './Loader';
import Details from './Details';

const SongFinder = () => {
    const [find, setFind] = useState(null);
    const [lyric, setLyric]=useState(null);
    const [biography, setBiography] = useState(null);
    const [loading, setLoading] = useState(null);

    const handleSearch=(data)=>{
      console.log(data);

    };

  return (
      <div>
        {loading && <Loader />}
        <Form handleSearch={handleSearch}/>
        <Details find={find} lyric={lyric} biography={biography}/>
      </div>
  )
}

export default SongFinder