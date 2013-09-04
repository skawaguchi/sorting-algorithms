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