sorting-algorithms
=============================

A collection of sorting algorithms in JavaScript. Uses Jasmine to run tests out of index.html.

The point of this is to investigate how different implementations of these algorithms can have significant impacts on performance.


How to Run
-----------

To use the following Grunt scripts, make sure you've installed the appropriate node modules by running npm install from the project root.

For building a minified production version, run grunt dist. You really only need /dist/scripts/sorting-algorithms.min.js. The rest is just Jasmine tests.


Interesting Notes
-----------------

Because mergeSort and quickSort use arrays, they're far SLOWER than bubbleSort!

Resources
http://www.stoimen.com/blog/category/algorithms/


