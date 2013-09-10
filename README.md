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
=========
http://www.sorting-algorithms.com/ - Very cool algorithm animation. Good for visualizing how the various algorithms work and a general sense of speed for different uses.
http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/ - A nice quicksort implementation that doesn't use brutally-slow JS Array methods.
http://www.stoimen.com/blog/category/algorithms/ - Lots of interesting algorithm implementations and discussions. Note that these discussions are more about the theory than necessarily for usage in production.



