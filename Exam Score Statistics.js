const gigosResults = [10, 50, 76, 100, 98, 230, 47, 51];




let gigosPassCount = 0;
for (let i = 0; i < gigosResults.length; i++) {
  if (gigosResults[i] >= 50) {
    gigosPassCount++;
  }
}


let gigosFailCount = 0;
for (let i = 0; i < gigosResults.length; i++) {
  if (gigosResults[i] < 50) {
    gigosFailCount++;
  }
}

let gigosMaxScore = gigosResults[0];
for (let i = 1; i < gigosResults.length; i++) {
  if (gigosResults[i] > gigosMaxScore) {
    gigosMaxScore = gigosResults[i];
  }
}


let gigosMinScore = gigosResults[0];
for (let i = 1; i < gigosResults.length; i++) {
  if (gigosResults[i] < gigosMinScore) {
    gigosMinScore = gigosResults[i];
  }
}

console.log('Gigo\'s Pass Count:', gigosPassCount);
console.log('Gigo\'s Fail Count:', gigosFailCount);
console.log('Gigo\'s Max Score:', gigosMaxScore);
console.log('Gigo\'s Min Score:', gigosMinScore);