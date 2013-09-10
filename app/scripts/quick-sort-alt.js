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

    var pivot   = items[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;


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

      left = typeof left !== "number" ? 0 : left;
      right = typeof right !== "number" ? items.length - 1 : right;

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
    this.init(o);

    var data = quickSortAlt(o.data);

    return data;
  };

  return module;
}(SortingAlgorithms || {}));