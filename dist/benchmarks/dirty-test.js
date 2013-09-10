

var testData = function () {

};

var runTest = function (name, fn) {
  var start = (new Date).getTime();

  for (var i = 0; i < 1000; i++) {
    fn();
  }

  var duration = (new Date).getTime() - start;

  console.log(name + duration + 'ms');
};

var bubbleTest = function () {
  SortingAlgorithms.bubbleSort({
    data: testData,
    sortKey: 'id'
  });
};

var quickTest = function () {
  SortingAlgorithms.quickSort({
    data: testData,
    sortKey: 'id'
  });
};

var quickAltTest = function () {
  SortingAlgorithms.quickSortAlt({
    data: testData,
    sortKey: 'id'
  });
};

var mergeTest = function () {
  SortingAlgorithms.mergeSort({
    data: testData,
    sortKey: 'id'
  });
};

runTest('Quick Sort: ', quickTest);
runTest('Merge Sort: ', mergeTest);
runTest('Bubble Sort: ', bubbleTest);
runTest('Quick Sort Alternative: ', quickAltTest);
