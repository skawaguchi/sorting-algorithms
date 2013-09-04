var objectData =  [
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 3},
    {id: 2},
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

var mergeTest = function () {
  SortingAlgorithms.mergeSort({
    data: testData,
    sortKey: 'id'
  });
};

runTest('Quick Sort: ', quickTest);
runTest('Merge Sort: ', mergeTest);
runTest('Bubble Sort: ', bubbleTest);
