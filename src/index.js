
exports.min = function min (array) {
  if(!arguments.length)return 0;
  if(!array.length) return 0;

  return Math.min(...array);
}

exports.max = function max (array) {
  if(!arguments.length)return 0;
  if(!array.length) return 0;

  return Math.max(...array);
}

exports.avg = function avg (array) {
  if(!arguments.length)return 0;
  if(!array.length) return 0;

  let sum = array.reduce((ac, e, i) => {
    return ac += e;
  });

  return sum/array.length;
}
