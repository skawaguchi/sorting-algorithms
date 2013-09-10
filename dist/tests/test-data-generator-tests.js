describe('TestDataGenerator', function () {
  'use strict';

  describe('getData', function () {
    it('should have a method called getData for getting an object', function () {
      expect(TestDataGenerator.getData).toBeDefined();
    });

    it('should return an array of objects', function () {
      var objArr = TestDataGenerator.getData('object');

      expect(objArr[0].id).toBeDefined();
    });

    it('should return an array of strings', function () {
      var objArr = TestDataGenerator.getData('string');

      expect(typeof objArr[0]).toBe('string');
    });

    it('should return an array of objects', function () {
      var objArr = TestDataGenerator.getData('number');

      expect(typeof objArr[0]).toBe('number');
    });
  });

  describe('getCopy', function () {
    it('should have a method called getCopy for getting a copy of object', function () {
      expect(TestDataGenerator.getCopy).toBeDefined();
    });

    it('should return a copy of a value object', function () {
      var data = [{id: 100}, {id: 16}, {id: 47}, {id: 0}];

      var copy = TestDataGenerator.getCopy(data);

      // Check to make sure it isn't the same object
      expect(data === copy).not.toBe(true);

      // Check to make sure that the objects are the same
      expect(data.length).toEqual(copy.length);

      for (var i = 0, iLen = data.length; i < iLen; i++) {
        for (var prop in data[i]) {
          if (data[i].hasOwnProperty()) {
          expect(data[i][prop] === copy[i][prop]).toBe(true);
          }
        }

      }
    });
  });

});
