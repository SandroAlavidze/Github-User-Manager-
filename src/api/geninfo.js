import axios from "axios";

const API_URL =
  "https://api.github.com/search/users?q=followers:%3E=1000&per_page=20";

async function getUsers(pagenum) {
  const response = await axios.get(API_URL + `&page=${pagenum}`);

  return response.data.items;
}

export { getUsers };
