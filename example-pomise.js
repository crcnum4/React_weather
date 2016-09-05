// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject("City not found");
//     }, 1000);
//   });
// }

// getTempPromise("Providence").then(function(temp) {
//   console.log("promise success", temp);
// }, function(err) {
//   console.log('promise error', err);
// });

// Challenge area

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject("Not valid equation.");
    }
  });
}

addPromise(2, 6).then(function(answer) {
  console.log('Sum: ', answer);
}, function(err) {
  console.log("Error: ", err);
});

addPromise(2, "hello").then(function(answer) {
  console.log('Sum: ', answer);
}, function(err) {
  console.log("Error: ", err);
});


addPromise(2).then(function(answer) {
  console.log('Sum:', answer);
}, function(err) {
  console.log("Error:", err);
});