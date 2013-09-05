
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


var testData = numberData;


var suite = new Benchmark.Suite;

var outputEl = document.getElementById('output');
var outputText = '<h1>Sorting Algorithm Benchmark</h1>';
var updateOutput = function () {
  outputEl.innerHTML = outputText;
};

suite.add('quickSort', function () {
  SortingAlgorithms.quickSort({
    data: testData,
    sortKey: 'id'
  });
});

suite.add('quickSortAlt', function () {
  SortingAlgorithms.quickSortAlt({
    data: testData,
    sortKey: 'id'
  });
});

suite.add('mergeSort', function () {
  SortingAlgorithms.mergeSort({
    data: testData,
    sortKey: 'id'
  });
});

suite.add('bubbleSort', function () {
  SortingAlgorithms.bubbleSort({
    data: testData,
    sortKey: 'id'
  });
});

suite.on('start', function () {
  outputText += '<p>Benchmark started...</p>';
  updateOutput();
});

suite.on('cycle', function (event) {
  outputText += '<p>' + (event.target.toString()) + '</p>';
  updateOutput();
});

suite.on('complete', function () {
  outputText += '<p>Fastest is ' + this.filter('fastest').pluck('name') + '</p>';
  updateOutput();
});

suite.run({async: true});