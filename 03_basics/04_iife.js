//  Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()()
// (function def)(execution)

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED 2 ${name}`);
} )("sameer")
