var SortingAlgorithms = (function (module) {

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  // TODO: this is bad because it changes the source data - either make a copy here or in the calling object
  module.bubbleSort = function (data, sortKey, isReversed) {
    console.log('bubbleSort');

    var isSwapped;

    do {
      isSwapped = false;

      for (var i = 0, iLen = data.length - 1; i < iLen; i++) {
        var thisObj = data[i],
          nextObj = data[i + 1],

        // This assumes that sortKey has been set, and that the object has that value
          // Otherwise it defaults to the object value
        // TODO: fix these assumptions
          thisVal = (sortKey && thisObj[sortKey]) ? thisObj[sortKey] : thisObj,
          nextVal = (sortKey && nextObj[sortKey]) ? nextObj[sortKey] : nextObj;

        if (thisVal > nextVal) {
          data[i] = nextObj;
          data[i + 1] = thisObj;
          isSwapped = true;
        }

      }

    } while (isSwapped);

    return data;
  };

  return module;
}(SortingAlgorithms || {}));