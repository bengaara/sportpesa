 // n -> [a] -> [[a]]
  function combsWithRep(n, lst) {
    return n ? (
      lst.length ? combsWithRep(n - 1, lst).map(function (t) {
        return [lst[0]].concat(t);
      }).concat(combsWithRep(n, lst.slice(1))) : []
    ) : [[]];
  };
 
  // If needed, we can derive a significantly faster version of
  // the simple recursive function above by memoizing it
 
  // f -> f
  function memoized(fn) {
    m = {};
    return function (x) {
      var args = [].slice.call(arguments),
        strKey = args.join('-');
 
      v = m[strKey];
      if ('u' === (typeof v)[0])
        m[strKey] = v = fn.apply(null, args);
      return v;
    }
  }
 
  // [m..n]
  function range(m, n) {
    return Array.apply(null, Array(n - m + 1)).map(function (x, i) {
      return m + i;
    });
  }
 
 
   // console.log(  combsWithRep(1, []);
    // obtaining and applying a memoized version of the function
// console.log(   memoized(combsWithRep)(3, range(1, 10)));

 console.log(   memoized(combsWithRep)(10, "abcdefghijklmnopqrstuvwxyz0123456789ABCDFGHJKLMNPQRSTVWXYZ".split("")));