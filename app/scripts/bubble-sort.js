var SortingAlgorithms = (function (module) {
  'use strict';

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  var bubbleSort = function (data) {

    var isSwapped;

    do {
      isSwapped = false;

      for (var i = 0, iLen = data.length - 1; i < iLen; i++) {
        var thisObj = data[i],
          nextObj = data[i + 1],

        // This assumes that sortKey has been set, and that the object has that value
        // Otherwise it defaults to the object value
        // TODO: fix these assumptions
          thisVal = (_private.sortKey && thisObj[_private.sortKey]) ? thisObj[_private.sortKey] : thisObj,
          nextVal = (_private.sortKey && nextObj[_private.sortKey]) ? nextObj[_private.sortKey] : nextObj;

        if (_private.isReversed) {
          if (thisVal < nextVal) {
            data[i] = nextObj;
            data[i + 1] = thisObj;
            isSwapped = true;
          }
        } else {

          if (thisVal > nextVal) {
            data[i] = nextObj;
            data[i + 1] = thisObj;
            isSwapped = true;
          }
        }

      }

    } while (isSwapped);

    return data;
  };

  // TODO: this is bad because it changes the source data - either make a copy here or in the calling object
  module.bubbleSort = function (o) {

    this.init(o);

    return bubbleSort(o.data);
  };

  return module;
}(SortingAlgorithms || {}));