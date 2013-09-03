describe('SortingAlgorithms', function () {

  // ==============================
  // Test data
  // ==============================

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


  // ==============================
  // Global
  // ==============================

  var sortKey;

  // Checks to make sure that the values that are returned are sorted in a sequence

  var checkValue = function (data, isReversed) {
    for (var i = 0, iLen = data.length - 1; i < iLen; i++) {
      var thisObj = data[i],
        nextObj = data[i + 1],
        thisVal = sortKey ? thisObj[sortKey] : thisObj,
        nextVal = sortKey ? nextObj[sortKey] : nextObj;

      if (isReversed) {
        if (thisVal < nextVal) {
          console.log(data);
          return false;
        }
      } else {
        if (thisVal > nextVal) {
          console.log(thisVal, nextVal, data);
          return false;
        }
      }
    }
    return true;
  };

  beforeEach(function () {
    sortKey = 'id';
  });

  it ('has a module called \'SortingAlgorihtms\'', function () {
    expect(SortingAlgorithms).toBeDefined();
  });



  // ==============================
  // Bubble Sort
  // ==============================

  describe('Bubble Sort', function () {

    it('has a bubbleSort method', function () {
      expect(SortingAlgorithms.bubbleSort).toBeDefined();
    });

    it('sorts a list of value objects', function () {

      var data = SortingAlgorithms.bubbleSort({
        data: objectData,
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it('reverse sorts a list of value objects', function () {

      var data = SortingAlgorithms.bubbleSort({
        data: objectData,
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it('sorts a list of numbers', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: numberData
      });
      expect(checkValue(data)).toBe(true);
    });

    it('reverse sorts a list of numbers', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: numberData,
        isReversed: true
      });
      expect(checkValue(data, true)).toBe(true);
    });

    it('sorts a list of strings', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: stringData
      });
      expect(checkValue(data)).toBe(true);
    });

    it('reverse sorts a list of strings', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: stringData,
        isReversed: true
      });
      expect(checkValue(data, true)).toBe(true);
    });

    it('sorts a list of mixed elements', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: mixedData,
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it('reverse sorts a list of mixed elements', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: mixedData,
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });


  });



  // ==============================
  // Merge Sort
  // ==============================

  describe('Merge Sort', function () {

    it('has a mergeSort method', function () {
      expect(SortingAlgorithms.mergeSort).toBeDefined();
    });

    it ('sorts a list of value objects', function () {

      var data = SortingAlgorithms.mergeSort({
        data: objectData,
        isReversed: false,
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of value objects', function () {

      var data = SortingAlgorithms.mergeSort({
        data: objectData,
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of numbers', function () {

      var data = SortingAlgorithms.mergeSort({
        data: numberData,
        isReversed: false
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of numbers', function () {

      var data = SortingAlgorithms.mergeSort({
        data: numberData,
        isReversed: true
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of strings', function () {

      var data = SortingAlgorithms.mergeSort({
        data: stringData
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of strings', function () {

      var data = SortingAlgorithms.mergeSort({
        data: stringData,
        isReversed: true
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of mixed data', function () {

      var data = SortingAlgorithms.mergeSort({
        data: mixedData,
        isReversed: false,
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of mixed data', function () {

      var data = SortingAlgorithms.mergeSort({
        data: mixedData,
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });
  });



  // ==============================
  // Quick Sort - Recursive
  // ==============================

  describe('Quick Sort Recursive', function () {

    it('has a quickSort method', function () {
      expect(SortingAlgorithms.quickSort).toBeDefined();
    });

    it ('sorts a list of value objects', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSort({
        data: objectData,
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of value objects', function () {

      var data = SortingAlgorithms.quickSort({
        data: objectData,
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of numbers', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSort({
        data: numberData
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of numbers', function () {

      var data = SortingAlgorithms.quickSort({
        data: numberData,
        isReversed: true
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of strings', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSort({
        data: stringData
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of strings', function () {

      var data = SortingAlgorithms.quickSort({
        data: stringData,
        isReversed: true
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of mixed data', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSort({
        data: mixedData,
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of mixed data', function () {

      var data = SortingAlgorithms.quickSort({
        data: mixedData,
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });


  });

});