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
  var sort = function (o) {

    var sortType,
      newData;

    // This can only sort arrays
    if (!o.data instanceof Array) {
      console.error('You must pass an array to be sorted');
      return false;
    }

    // Default the sortType to quick sort
    sortType = o.type || 'quick';

    switch (sortType) {
      case 'bubble':
        newData = module.bubbleSort(o.data, o.sortKey, o.isReversed);
        break;
      case 'merge':
        newData = module.mergeSort(o.data, o.sortKey, o.isReversed);
        break;
    }

    console.log(newData);

    return newData;
  };

  return {
    sort: sort
  }
}(SortingAlgorithms || {}));