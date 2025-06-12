const n = 10;
const pluses = 3;

let muxbe = pluses;
if (muxbe > n ) {
    muxbe = n
}
let result = '+'.repeat(muxbe) + "-".repeat(n - muxbe);
console.log(result);
    
