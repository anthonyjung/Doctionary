(function () {
  'use strict';
  // swap 대신
  let x = 10;
  let y = 20;

  [x, y] = [y, x];

  console.log('x: ' + x + ', y: ' + y);

  // parameter를 array로..
  function format(pattern, ...rest) {
    var items = rest.filter(function (x) {
      return x > 1;
    });
    return pattern.replace('%v', items);
  }

  console.log(format('scores: %v', 1, 5, 3));
})();
