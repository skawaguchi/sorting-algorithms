var SortingAlgorithms = (function (module) {

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  var quickSort = function (data) {

    if (data.length === 0) {
      return [];
    }

    var left = [],
      right = [],
      pivot = data[0],
      pivotVal = _private.sortKey ? pivot[_private.sortKey] : pivot;

    for (var i = 1, iLen = data.length; i < iLen; i++) {
      var thisObj = data[i],
        thisVal = _private.sortKey ? thisObj[_private.sortKey] : thisObj;

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

  // TODO: this is bad because it changes the source data - either make a copy here or in the calling object
  module.quickSortRecursive = function (data) {
    return quickSort(data);
  };

  module.quickSort = function (o) {
    this.init(o);
    return module.quickSortRecursive(o.data);
  };

  return module;
}(SortingAlgorithms || {}));