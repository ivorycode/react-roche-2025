import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ky from 'ky';


declare const $: any;

const isDone = false;


// $.get('https://swapi.info/api/people/1', (data) => {
//   console.log('Luke arrived', data);
//   $.get(data.films[0], ( film) => {
//     console.log('Film arrived', film);
//     $.get(film.planets[0], (planet) => {
//       console.log('Planet arrived', planet);
//     })
//   })
//   console.log('Where am I?')
// })

// function main() {
//   ky.get('https://swapi.info/api/people/1').json()
//     .then((res) => {
//       console.log('Luke', res);
//       return ky.get(res.films[0]).json()
//     })
//     .then(p => {
//       console.log('Planet', p)
//       return ky.get(p.planets[0]).json()
//     })
//     .then(p => {
//       console.log('Planet', p)
//     })
//     .then(
//       () => console.log('Done!')
//     )
//     .catch((e) => {
//       console.log('Error', e)
//     })
// }
// main();

async function main() {
  try {
    const luke = await ky.get('https://swapi.info/api/people/1').json()
    console.log('Luke', luke);
    const film = await ky.get(luke.films[0] + "/gugus").json()
    console.log('Film', film);
    const planet = await ky.get(film.planets[0]).json()
    console.log('Planet', planet);
  } catch (e) {
    console.log('Error', e)
  }
}
main();


console.log('Finished?');


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <App/>
  // </StrictMode>,
)
