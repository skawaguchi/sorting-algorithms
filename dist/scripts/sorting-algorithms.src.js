var SortingAlgorithms = (function (module) {

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
var SortingAlgorithms = (function (module) {

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  var mergeSort = function (data) {

    // Don't sort arrays that don't have at least 2 elements
    if (data.length < 2) {
      return data;
    }

    var middle = parseInt(data.length / 2, 10),
      left = data.slice(0, middle),
      right = data.slice(middle),
      returnData;

    returnData = merge(mergeSort(left), mergeSort(right));

    return returnData;
  };

  var merge  = function (left, right) {
    var returnData = [];

    // Execute while the two divisions are unsorted
    while (left.length && right.length) {

      var leftObj = left[0],
        rightObj = right[0],
        leftVal = (_private.sortKey && leftObj[_private.sortKey]) ? leftObj[_private.sortKey] : leftObj,
        rightVal = (_private.sortKey && rightObj[_private.sortKey]) ? rightObj[_private.sortKey] : rightObj;

      if (_private.isReversed) {
        if (leftVal >= rightVal) {
          returnData[returnData.length] = left.shift();
        } else {
          returnData[returnData.length] = right.shift();
        }
      } else {
        if (leftVal <= rightVal) {
          returnData[returnData.length] = left.shift();
        } else {
          returnData[returnData.length] = right.shift();
        }
      }

    }

    // Add the leftovers
    while (left.length) {
      returnData[returnData.length] = left.shift();
    }

    while (right.length) {
      returnData[returnData.length] = right.shift();
    }

    return returnData;
  };

  module.mergeSort = function (o) {

    this.init(o);

    return  mergeSort(o.data);
  };

  return module;
}(SortingAlgorithms || {}));
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
var SortingAlgorithms = (function (module) {

  // Private state across files
  var _private = module._private = module._private || {},
    _seal = module._seal || function () {
      delete module._private;
      delete module._seal;
      delete module._unseal;
    },
    _unseal = module._unseal || function () {
      module._private = _private;
      module._seal = _seal;
      module._unseal = _unseal;
    };

  // data, type, isReversed
  module.init = function (o) {

    // This can only sort arrays
    if (!o.data instanceof Array) {
      console.error('You must pass an array to be sorted');
      return false;
    }

    _private.sortKey = o.sortKey || null;
    _private.isReversed = o.isReversed || false;

    return true;
  };

  return module;
}(SortingAlgorithms || {}));