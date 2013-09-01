var SortingAlgorithms = (function (module) {

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  var mergeSort = function (data, sortKey) {

    // Don't sort arrays that don't have at least 2 elements
    if (data.length < 2) {
      return data;
    }

    var middle = parseInt(data.length / 2),
      left = data.slice(0, middle),
      right = data.slice(middle),
      returnData;

    returnData = merge(mergeSort(left, sortKey), mergeSort(right, sortKey), sortKey);

    return returnData;
  };

  var merge  = function (left, right, sortKey) {
    var returnData = [];

    // Execute while the two divisions are unsorted
    while (left.length && right.length) {

      var leftObj = left[0],
        rightObj = right[0],
        leftVal = (sortKey && leftObj[sortKey]) ? leftObj[sortKey] : leftObj,
        rightVal = (sortKey && rightObj[sortKey]) ? rightObj[sortKey] : rightObj;

      console.log(sortKey, leftVal, rightVal);

      if (leftVal <= rightVal) {
        returnData[returnData.length] = left.shift();
      } else {
        returnData[returnData.length] = right.shift();
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

  module.mergeSort = function (data, sortKey, isReversed) {
    console.log('mergeSort');

    return  mergeSort(data, sortKey);
  };

  return module;
}(SortingAlgorithms || {}));