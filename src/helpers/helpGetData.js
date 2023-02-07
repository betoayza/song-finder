import axios from "axios";

export const helpGetData = async (term) => {

  let result;

  console.log(term);
  const url = `/api/search/track?q=${term}`;
  const options = {
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // 'Content-Type': 'application/json',
      response_type: import.meta.env.VITE_ACCESS_TOKEN,
    },
    timeout: 3000,
  };
  // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  await axios.get(url, options).then((res) => {
    console.log(res.data);
    result = res.data
  });
  
  return result;
};
