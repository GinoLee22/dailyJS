/**
 * shallow copy vs deep copy
 */

const obj0 = { a: 1 };
const obj1 = { b: 2 };
const obj2 = { c: 3 };

const originLst = [obj0, obj1, obj2];

// slice is shallow copy
console.log("\n******* Shallow copy *******");
const sliceLst = originLst.slice(0);
console.log('******* Before change ********');
console.log('original list', originLst);
console.log('slice list', sliceLst);
console.log('******* After change ********');
obj0.a = 100;
console.log('original list', originLst);
console.log('slice list', sliceLst);

// HOF is also shallow copy
console.log("\n******* Shallow copy *******");
const HOFLst = originLst.filter(() => true);
console.log('******* Before change ********');
console.log('original list', originLst);
console.log('hof list', HOFLst);
console.log('******* After change ********');
obj0.a = 0;
console.log('original list', originLst);
console.log('hof list', HOFLst);





