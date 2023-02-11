import axios from "axios";

export const helpGetData = async (term) => {
  console.log(term);

  let result;

  const url = `${import.meta.env.VITE_API}/api/${term}`;
  const options = {
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "*",
      // "Access-Control-Allow-Credentials": true,
      // "Content-Type": "application/json",
      // response_type: import.meta.env.VITE_ACCESS_TOKEN,
    },
    timeout: 5000,
  };

  await axios.get(url, options).then((res) => {
    console.log(res.data);
    result = res.data;
  });

  return result;
};
