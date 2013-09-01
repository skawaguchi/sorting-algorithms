(function () {

  var testData = [
    {id: 1000},
    {id: 3},
    {id: 1},
    {id: 5},
    {id: 2}
  ];

//  var testData = [6, 2, 4, 1, 700, 888, 610];
//  var testData = [6, 4, 1, {id: 5}, 888, 610];

  SortingAlgorithms.sort({
    data: testData,
    isReversed: false,
    sortKey: 'id',
//    type: 'bubble'
    type: 'merge'
  });
}());