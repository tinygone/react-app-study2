function a (str) {
  console.log('a +' + str);
}

function b() {
  let tmp = a;
  a = function(str) {
    console.log('b');
    tmp(str);
    console.log('b end');
  }
  return a;
}

b(a)('haha');