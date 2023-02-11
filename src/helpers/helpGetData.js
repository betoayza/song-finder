import axios from "axios";

export const helpGetData = async (term) => {
  // console.log(term);

  let result;

  const url = `${import.meta.env.VITE_API}/api/${term}`;
  const options = {
    headers: {},
    timeout: 5000,
  };

  await axios.get(url, options).then((res) => {
    // console.log(res);
    result = res.data;
  });

  return result;
};
