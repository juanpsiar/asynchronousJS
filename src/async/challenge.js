const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    console.log(data.info.count);
    for (let i = 0; i < 5; i++) {
      const character = await fetchData(`${API}${data.results[i].id}`);
      const origin = await fetchData(character.origin.url);
      console.log(character.name);
      console.log(origin.dimension);
    }
  } catch (error) {
    console.error(error);
  }
};

console.group('--------------------------------');
anotherFunction(API);
console.groupEnd();
