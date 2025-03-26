//fetch('https://rickandmortyapi.com/api/character/?page=1')
//.then((result) => {
// return result.json();
//})
//.then((result) => console.log(result));
//fetch('https://rickandmortyapi.com/api/character')
//.then((result) => {
 // return result.json();
//})
//.then((result) => console.log(result))
//fetch('https://rickandmortyapi.com/api/character/1,183')
//.then((result) => {
 // return result.json();
//})
//.then((result) => console.log(result))
//const getCharacter = async () => {
 // const result = await fatch (
 //'https://rickandmortyapi.com/api/character/?name=rick&status=alive',
 //);
//const data = await result.json ()
//console.log(data);
//};

const request = (endpoint) => {

    fetch(endpoint)
.then((result) => {
 return result.json();
})
.then((result) => {
 result.results.forEach((character) => {
 console.log(`${character.name},
 Gender: ${character.gender}`);
 });
});
};
request('https://rickandmortyapi.com/api/character/?name=rick&status=alive');
request('https://rickandmortyapi.com/api/character');
request('https://rickandmortyapi.com/api/episod');