
function missingValues(arr) {
  let resultObj = {};
  let x, y;
  arr.forEach((el, index) => {
    if (!resultObj[el]) {
    resultObj[el] = [index];
    } else {
      resultObj[el].push(index);
    }
  });

  for (const [key, value] of Object.entries (resultObj)) {
    if (value.length === 2) y = key;
    if (value.length === 1) x = key;
  }
return x*x*y;
}

function missingValues2(arr) {
  const x = arr.find( v => arr.filter( w => v===w ).length===1 );
  const y = arr.find( v => arr.filter( w => v===w ).length===2 );
  return x*x*y;
}
console.log(missingValues2([42, 23, 45, 33, 33, 19, 42, 79, 79, 23, 95, 95, 79, 19, 42, 33, 19, 23])); //192375