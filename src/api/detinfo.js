import axios from "axios";

const API_INFO = "https://api.github.com/users/";

async function getInfo(login) {
  const response = await axios.get(API_INFO + `${login}`);

  return response.data;
}

export { getInfo };
