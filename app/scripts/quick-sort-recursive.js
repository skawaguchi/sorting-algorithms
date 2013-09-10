var SortingAlgorithms = (function (module) {
  'use strict';

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  var quickSort = function (data) {

    if (data.length === 0) {
      return [];
    }

    var left = [],
      right = [],
      pivot = data[0],
      pivotVal = (_private.sortKey) ? pivot[_private.sortKey] : pivot;

    for (var i = 1, iLen = data.length; i < iLen; i++) {
      var thisObj = data[i],
        thisVal = (_private.sortKey && thisObj[_private.sortKey]) ? thisObj[_private.sortKey] : thisObj;

      if (_private.isReversed) {
        if (thisVal > pivotVal) {
          left[left.length] = data[i];
        } else {
          right[right.length] = data[i];
        }
      } else {
        if (thisVal < pivotVal) {
          left[left.length] = data[i];
        } else {
          right[right.length] = data[i];
        }
      }
    }

    return quickSort(left).concat(pivot, quickSort(right));
  };

  //
  module.quickSort = function (o) {
    this.init(o);
    return quickSort(o.data);
  };

  // This sets the module default to quickSort as that will probably be the most-used use-case
  module.sort = function (o) {
    module.quickSort(o);
  };

  return module;
}(SortingAlgorithms || {}));