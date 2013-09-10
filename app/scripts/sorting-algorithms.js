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