import md5 from "md5";

const PUBLIC_KEY = "cf147e304056a973462499001286f73a";
const PRIVATE_KEY = "5c9bf3b2ec31a45d375bb4d439ee726b4286e8b2";

const ts = new Date().getTime();
const md5Hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`;

export const getCharacters = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((res) => res.data.results);
};
