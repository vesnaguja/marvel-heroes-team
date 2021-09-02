import md5 from "md5";

const PUBLIC_KEY = '6e574ec635dc27e2ebb826c9e07f6bac';
const PRIVATE_KEY = '904b3bab816cd3630ebfc428abeda128b69dedf5';

const ts = new Date().getTime();
const md5Hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`;

export const getCharacters = () => {
  return fetch(url)
    .then(response => response.json())
}