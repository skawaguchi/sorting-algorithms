'use strict';

var objectData =  [
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2}
  ],
  stringData = ['f', 'b', 'c', 'a', 'd', 'z'],
  mixedData = [6, 4, 1, {id: 5}, 888, 610, 5],
  numberData = [6, 2, 4, 1, 700, 888, 610, 2, 4, 1, 1];


var testData = objectData;

module.exports = {
  name: 'JavaScript Sorting Algorithm Comparison',
  tests: [
    {
      name: 'Quick Sort',
      fn: function () {
        var data = SortingAlgorithms.quickSort({
          data: testData,
          sortKey: 'id'
        });

//        console.log(data);
      }
    },
    {
      name: 'Bubble Sort',
      fn: function () {
        var data = SortingAlgorithms.bubbleSort({
          data: testData,
          sortKey: 'id'
        });

//        console.log(data);

      }
    },
    {
      name: 'Merge Sort',
      fn: function () {
        var data = SortingAlgorithms.mergeSort({
          data: testData,
          sortKey: 'id'
        });

//        console.log(data);
      }
    }
  ]
};