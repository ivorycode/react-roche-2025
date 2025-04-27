console.log('Running example ...');
alert('Welcome to the JavaScript workshop!');

/// API:
// http://localhost:3456/todos
// https://swapi.dev/api/people/1/

// // importing Rx
// console.log('RxJS:', rxjs);
// const {of, from, throwError, fromEvent, interval, merge, zip, forkJoin} = rxjs;
// const {filter, map, delay, mergeMap, flatMap, switchMap, concatMap, tap, scan, take, skip} = rxjs.operators;
// const {ajax} = rxjs.ajax;





























// XMMLHttpRequest
// document.getElementById('go').addEventListener('click', doSend);
// function doSend() {
//     var req = new XMLHttpRequest();
//     req.addEventListener("load", done);
//     req.addEventListener("error", failed);
//     req.addEventListener("readystatechange", stateChanged);
//     req.open("POST", "http://localhost:3456/todos");
//     req.setRequestHeader("Content-Type", "application/json");
//     req.send(JSON.stringify({title: 'Learn the Fetch API', completed: false}));
//
//     function stateChanged() {
//         if (this.readyState === 4) {
//             if (this.status === 201) {
//                 console.log('success state', this.responseText)
//             }
//         } else {
//             console.log('error state', this.statusText);
//         }
//     }
//
//     function done() {
//         console.log('DONE', this.responseText);
//     }
//
//     function failed() {
//         console.log('ERROR', this.statusText);
//     }
// }


// CALLBACKS
// $.get('https://swapi.dev/api/people/1/', (response) => {
//   console.log('Person 1', response);
//   $.get(response.films[0], (response) => {
//     console.log('Film 1', response);
//     $.get(response.planets[0], (response) => {
//       console.log('Planet 1', response);
//     })
//   })
// });

// PROMISE
// axios.get('https://swapi.dev/api/people/1/')
//   .then((response) => {
//     console.log('Person 1', response.data);
//     return axios.get(response.data.films[0])
//   })
//   .then((response) => {
//     console.log('Film 1', response.data);
//     return axios.get(response.data.planets[0])
//   })
//   .then((response) => {
//     console.log('Planet 1', response.data);
//   });

// ASYNC/AWAIT
// async function doit() {
//   const personResponse = await axios.get('https://swapi.co/api/people/1/');
//   console.log('Person 1', personResponse.data);
//
//   const filmResponse = await axios.get(personResponse.data.films[0]);
//   console.log('Film 1', filmResponse.data);
//
//   const planetResponse = await axios.get(filmResponse.data.planets[0]);
//   console.log('Planet 1', planetResponse.data);
// }
//
// doit();

// // OBSERVABLES/RXJS
// ajax.get('https://swapi.dev/api/people/1/')
//   .pipe(
//     tap(result => console.log('Person 1', result.response)),
//     switchMap(result => ajax.get(result.response.films[0])),
//     tap(result => console.log('Film 1', result.response)),
//     switchMap(result => ajax.get(result.response.planets[0])),
//     tap(result => console.log('Planet 1', result.response))
//   )
//   .subscribe();
//

// VUE

// <div id="counter">
//   Counter: {{ counter }}
// </div>

// const Counter = {
//   data() {
//     return {
//       counter: 0
//     }
//   },
//   mounted() {
//     setInterval(() => {
//       this.counter++
//     }, 1000)
//   }
// }
//
// //
// // <div id="event-handling">
// //   <p>{{ message }}</p>
// //   <button v-on:click="reverseMessage">Reverse Message</button>
// // </div>
// const EventHandling = {
//   data() {
//     return {
//       message: 'Hello Vue.js!'
//     }
//   },
//   methods: {
//     reverseMessage() {
//       this.message = this.message
//         .split('')
//         .reverse()
//         .join('')
//     }
//   }
// }
//
// Vue.createApp(EventHandling).mount('#event-handling')

