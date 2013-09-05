var TestDataGenerator = (function (module) {

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  var clone = function (obj) {

    // Return the argument object, which will be a new version of the same value
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    // Call the prototype constructor to get a new version of the object
    var copy = obj.constructor();

    // Apply the properties to the new object
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        copy[prop] = obj[prop];
      }
    }

    return copy;
  };

  var getValue = function (type) {
    var value,
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    if (type === 'mixed') {
      var randomType = parseInt(Math.random() * 3, 10);

      if (randomType === 0) {
        type = 'object';
      } else if (randomType === 1) {
        type = 'string';
      } else {
        type = 'number';
      }
    }

    switch (type) {

      case 'object':
        value = {id: parseInt(Math.random() * 1000, 10)};
        break;

      case 'string':
        value = characters.charAt(Math.floor(Math.random() * characters.length));
        break;

      default:
        value = parseInt(Math.random() * 1000, 10);
        break;
    }

    return value;
  };


  module.getData = function (type, iterations) {
    var testData = [];

    // Default to one thousand iterations
    iterations = 1000 || iterations;

    for (var i = 0; i < iterations; i++) {
      testData[testData.length] = getValue(type);
    }

    return  testData;
  };

  module.getCopy = function (obj) {
    return clone(obj);
  };

  return module;

}(TestDataGenerator || {}));