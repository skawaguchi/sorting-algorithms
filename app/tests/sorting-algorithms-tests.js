describe('SortingAlgorithms', function () {
  'use strict';

  // ==============================
  // Test data
  // ==============================

  var objectData = TestDataGenerator.getData('object'),
    stringData = TestDataGenerator.getData('string'),
    mixedData = TestDataGenerator.getData('mixed'),
    numberData = TestDataGenerator.getData('number');


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
          console.log('Error in reversed sequence', 'index: ' + i, thisVal, nextVal, data);
          return false;
        }
      } else {
        if (thisVal > nextVal) {
          console.log('Error in sequence', 'index: ' + i, thisVal, nextVal, data);
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
        data: TestDataGenerator.getCopy(objectData),
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it('sorts a list of numbers', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: TestDataGenerator.getCopy(numberData)
      });
      expect(checkValue(data)).toBe(true);
    });

    it('reverse sorts a list of numbers', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: TestDataGenerator.getCopy(numberData),
        isReversed: true
      });
      expect(checkValue(data, true)).toBe(true);
    });

    it('sorts a list of strings', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: TestDataGenerator.getCopy(stringData)
      });
      expect(checkValue(data)).toBe(true);
    });

    it('reverse sorts a list of strings', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: TestDataGenerator.getCopy(stringData),
        isReversed: true
      });
      expect(checkValue(data, true)).toBe(true);
    });

    it('sorts a list of mixed elements', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: TestDataGenerator.getCopy(mixedData),
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it('reverse sorts a list of mixed elements', function () {
      var data = SortingAlgorithms.bubbleSort({
        data: TestDataGenerator.getCopy(mixedData),
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
        data: TestDataGenerator.getCopy(objectData),
        isReversed: false,
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of value objects', function () {

      var data = SortingAlgorithms.mergeSort({
        data: TestDataGenerator.getCopy(objectData),
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of numbers', function () {

      var data = SortingAlgorithms.mergeSort({
        data: TestDataGenerator.getCopy(numberData),
        isReversed: false
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of numbers', function () {

      var data = SortingAlgorithms.mergeSort({
        data: TestDataGenerator.getCopy(numberData),
        isReversed: true
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of strings', function () {

      var data = SortingAlgorithms.mergeSort({
        data: TestDataGenerator.getCopy(stringData)
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of strings', function () {

      var data = SortingAlgorithms.mergeSort({
        data: TestDataGenerator.getCopy(stringData),
        isReversed: true
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of mixed data', function () {

      var data = SortingAlgorithms.mergeSort({
        data: TestDataGenerator.getCopy(mixedData),
        isReversed: false,
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of mixed data', function () {

      var data = SortingAlgorithms.mergeSort({
        data: TestDataGenerator.getCopy(mixedData),
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

    it('has a sort method that calls quickSort under the hood', function () {
      expect(SortingAlgorithms.sort).toBeDefined();
    });

    it ('sorts a list of value objects', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSort({
        data: TestDataGenerator.getCopy(objectData),
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of value objects', function () {

      var data = SortingAlgorithms.quickSort({
        data: TestDataGenerator.getCopy(objectData),
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of numbers', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSort({
        data: TestDataGenerator.getCopy(numberData)
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of numbers', function () {

      var data = SortingAlgorithms.quickSort({
        data: TestDataGenerator.getCopy(numberData),
        isReversed: true
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of strings', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSort({
        data: TestDataGenerator.getCopy(stringData)
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of strings', function () {

      var data = SortingAlgorithms.quickSort({
        data: TestDataGenerator.getCopy(stringData),
        isReversed: true
      });

      expect(checkValue(data, true)).toBe(true);
    });

    it ('sorts a list of mixed data', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSort({
        data: TestDataGenerator.getCopy(mixedData),
        sortKey: sortKey
      });

      expect(checkValue(data)).toBe(true);
    });

    it ('reverse sorts a list of mixed data', function () {

      var data = SortingAlgorithms.quickSort({
        data: TestDataGenerator.getCopy(mixedData),
        isReversed: true,
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });


  });

  // ==============================
  // Quick Sort - Alt
  // ==============================

  describe('Quick Sort Alt', function () {

    it('has a quickSort method', function () {
      expect(SortingAlgorithms.quickSortAlt).toBeDefined();
    });

    it ('sorts a list of value objects', function () {

      // NOTE: The default mode is quick sort so we don't need to pass type in

      var data = SortingAlgorithms.quickSortAlt({
        data: TestDataGenerator.getCopy(numberData),
        sortKey: sortKey
      });

      expect(checkValue(data, true)).toBe(true);
    });
  });

});