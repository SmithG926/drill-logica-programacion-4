const prompt = require(`prompt-sync`)();
const num = parseInt(prompt(`Indica un número: `));

let fibonacci = 0;
let fibonacci2 = 1;
let fibonacci3 = "";
for (i=1; i<=num; i++){
    console.log(fibonacci);
    fibonacci3 = fibonacci3 + fibonacci;
    let siguiente = fibonacci + fibonacci2;
    fibonacci=fibonacci2;
    fibonacci2 = siguiente;
  
}