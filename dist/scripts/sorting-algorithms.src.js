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
          temp,

        // This assumes that sortKey has been set, and that the object has that value
        // Otherwise it defaults to the object value
        // TODO: fix these assumptions
          thisVal = (_private.sortKey && thisObj[_private.sortKey] !== undefined) ? thisObj[_private.sortKey] : thisObj,
          nextVal = (_private.sortKey && nextObj[_private.sortKey] !== undefined) ? nextObj[_private.sortKey] : nextObj;

        if (_private.isReversed) {
          if (thisVal < nextVal) {
            temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
            isSwapped = true;
          }
        } else {
          if (thisVal > nextVal) {
            temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
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
  'use strict';

  return module;
}(SortingAlgorithms || {}));
var SortingAlgorithms = (function (module) {
  'use strict';

  return module;
}(SortingAlgorithms || {}));
var SortingAlgorithms = (function (module) {
  'use strict';

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
        leftVal = (_private.sortKey && leftObj[_private.sortKey] !== undefined) ? leftObj[_private.sortKey] : leftObj,
        rightVal = (_private.sortKey && rightObj[_private.sortKey] !== undefined) ? rightObj[_private.sortKey] : rightObj;

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


//      if (_private.isReversed) {
//        if (leftVal >= rightVal) {
//          returnData[returnData.length] = left.splice(0, 1);
//        } else {
//          returnData[returnData.length] = right.splice(0, 1);
//        }
//      } else {
//        if (leftVal <= rightVal) {
//          returnData[returnData.length] = left.splice(0, 1);
//        } else {
//          returnData[returnData.length] = right.splice(0, 1);
//        }
//      }
//
//    }
//
//    // Add the leftovers
//    while (left.length) {
////      returnData[returnData.length] = left.shift();
//      returnData[returnData.length] = left.splice(0, 1);
//    }
//
//    while (right.length) {
////      returnData[returnData.length] = right.shift();
//      returnData[returnData.length] = right.splice(0, 1);
//    }

    return returnData;
  };

  module.mergeSort = function (o) {

    this.init(o);

    return  mergeSort(o.data);
  };

  return module;
}(SortingAlgorithms || {}));
var SortingAlgorithms = (function (module) {
  'use strict';

  return module;
}(SortingAlgorithms || {}));
// http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/

var SortingAlgorithms = (function (module) {
  'use strict';

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  var swap = function (items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  };

  var partition = function (items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;


    while (i <= j) {

      while (items[i] < pivot) {
        i++;
      }

      while (items[j] > pivot) {
        j--;
      }

      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }

    return i;
  };


  var quickSortAlt = function (items, left, right) {

    var index;

    if (items.length > 1) {

      if (typeof left === 'object' && left[_private.sortKey] !== undefined) {
        left = [_private.sortKey];
      } else if (typeof left !== 'number') {
        left = 0;
      }

      if (typeof right === 'object' && right[_private.sortKey] !== undefined) {
        right = right[_private.sortKey];
      } else if (typeof right !== 'number') {
        right = items.length - 1;
      }


//      if (_private.isReversed) {
//
//      }

      index = partition(items, left, right);

      if (left < index - 1) {
        quickSortAlt(items, left, index - 1);
      }

      if (index < right) {
        quickSortAlt(items, index, right);
      }

    }

    return items;
  };

  module.quickSortAlt = function (o) {
    console.log(o.data);
    this.init(o);

    return quickSortAlt(o.data);
  };


  // This sets the module default to quickSort as that will probably be the most-used use-case
  module.sort = function (o) {
    module.quickSortAlt(o);
  };

  return module;
}(SortingAlgorithms || {}));
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

  return module;
}(SortingAlgorithms || {}));
var SortingAlgorithms = (function (module) {
  'use strict';

  return module;
}(SortingAlgorithms || {}));
var SortingAlgorithms = (function (module) {
  'use strict';

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