let test = {};

let addObj = (one, two) => {
  test[one] = [two];
};

let addAnotherValue = (one, three) => {
  test[one].push(three);
};

addObj(0, 1);
addAnotherValue(0, 2);

console.log(test);
