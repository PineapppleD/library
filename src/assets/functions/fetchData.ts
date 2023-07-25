import axios from "axios";

export const fetchData = async (url: string) => {
  const api_key = import.meta.env.VITE_API_KEY;
  try {
    const res = await axios.get(url + api_key);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
