import axios from "axios";

const API_INFO = "https://api.github.com/users/";
const my_token = process.env.GITHUB_AUTHORIZATION_TOCKEN;

async function getInfo(username, additional) {
  try {
    const response = await axios.get(
      API_INFO + `${username}` + (additional ? "/" + `${additional}` : ""),
      {
        headers: {
          Authorization: `token ${my_token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
}

export { getInfo };
