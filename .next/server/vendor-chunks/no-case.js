"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/no-case";
exports.ids = ["vendor-chunks/no-case"];
exports.modules = {

/***/ "(action-browser)/./node_modules/no-case/dist.es2015/index.js":
/*!***************************************************!*\
  !*** ./node_modules/no-case/dist.es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noCase: () => (/* binding */ noCase)\n/* harmony export */ });\n/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ \"(action-browser)/./node_modules/lower-case/dist.es2015/index.js\");\n\n// Support camel case (\"camelCase\" -> \"camel Case\" and \"CAMELCase\" -> \"CAMEL Case\").\nvar DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];\n// Remove all non-word characters.\nvar DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;\n/**\n * Normalize the string into something other libraries can manipulate easier.\n */\nfunction noCase(input, options) {\n    if (options === void 0) { options = {}; }\n    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? \" \" : _d;\n    var result = replace(replace(input, splitRegexp, \"$1\\0$2\"), stripRegexp, \"\\0\");\n    var start = 0;\n    var end = result.length;\n    // Trim the delimiter from around the output string.\n    while (result.charAt(start) === \"\\0\")\n        start++;\n    while (result.charAt(end - 1) === \"\\0\")\n        end--;\n    // Transform each token independently.\n    return result.slice(start, end).split(\"\\0\").map(transform).join(delimiter);\n}\n/**\n * Replace `re` in the input string with the replacement value.\n */\nfunction replace(input, re, value) {\n    if (re instanceof RegExp)\n        return input.replace(re, value);\n    return re.reduce(function (input, re) { return input.replace(re, value); }, input);\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uby1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUIsa09BQWtPLGlEQUFTO0FBQzNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0NBQWtDO0FBQzlFO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b29tLy4vbm9kZV9tb2R1bGVzL25vLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanM/YzE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb3dlckNhc2UgfSBmcm9tIFwibG93ZXItY2FzZVwiO1xuLy8gU3VwcG9ydCBjYW1lbCBjYXNlIChcImNhbWVsQ2FzZVwiIC0+IFwiY2FtZWwgQ2FzZVwiIGFuZCBcIkNBTUVMQ2FzZVwiIC0+IFwiQ0FNRUwgQ2FzZVwiKS5cbnZhciBERUZBVUxUX1NQTElUX1JFR0VYUCA9IFsvKFthLXowLTldKShbQS1aXSkvZywgLyhbQS1aXSkoW0EtWl1bYS16XSkvZ107XG4vLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnMuXG52YXIgREVGQVVMVF9TVFJJUF9SRUdFWFAgPSAvW15BLVowLTldKy9naTtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBzdHJpbmcgaW50byBzb21ldGhpbmcgb3RoZXIgbGlicmFyaWVzIGNhbiBtYW5pcHVsYXRlIGVhc2llci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zcGxpdFJlZ2V4cCwgc3BsaXRSZWdleHAgPSBfYSA9PT0gdm9pZCAwID8gREVGQVVMVF9TUExJVF9SRUdFWFAgOiBfYSwgX2IgPSBvcHRpb25zLnN0cmlwUmVnZXhwLCBzdHJpcFJlZ2V4cCA9IF9iID09PSB2b2lkIDAgPyBERUZBVUxUX1NUUklQX1JFR0VYUCA6IF9iLCBfYyA9IG9wdGlvbnMudHJhbnNmb3JtLCB0cmFuc2Zvcm0gPSBfYyA9PT0gdm9pZCAwID8gbG93ZXJDYXNlIDogX2MsIF9kID0gb3B0aW9ucy5kZWxpbWl0ZXIsIGRlbGltaXRlciA9IF9kID09PSB2b2lkIDAgPyBcIiBcIiA6IF9kO1xuICAgIHZhciByZXN1bHQgPSByZXBsYWNlKHJlcGxhY2UoaW5wdXQsIHNwbGl0UmVnZXhwLCBcIiQxXFwwJDJcIiksIHN0cmlwUmVnZXhwLCBcIlxcMFwiKTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBlbmQgPSByZXN1bHQubGVuZ3RoO1xuICAgIC8vIFRyaW0gdGhlIGRlbGltaXRlciBmcm9tIGFyb3VuZCB0aGUgb3V0cHV0IHN0cmluZy5cbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChzdGFydCkgPT09IFwiXFwwXCIpXG4gICAgICAgIHN0YXJ0Kys7XG4gICAgd2hpbGUgKHJlc3VsdC5jaGFyQXQoZW5kIC0gMSkgPT09IFwiXFwwXCIpXG4gICAgICAgIGVuZC0tO1xuICAgIC8vIFRyYW5zZm9ybSBlYWNoIHRva2VuIGluZGVwZW5kZW50bHkuXG4gICAgcmV0dXJuIHJlc3VsdC5zbGljZShzdGFydCwgZW5kKS5zcGxpdChcIlxcMFwiKS5tYXAodHJhbnNmb3JtKS5qb2luKGRlbGltaXRlcik7XG59XG4vKipcbiAqIFJlcGxhY2UgYHJlYCBpbiB0aGUgaW5wdXQgc3RyaW5nIHdpdGggdGhlIHJlcGxhY2VtZW50IHZhbHVlLlxuICovXG5mdW5jdGlvbiByZXBsYWNlKGlucHV0LCByZSwgdmFsdWUpIHtcbiAgICBpZiAocmUgaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHJlLnJlZHVjZShmdW5jdGlvbiAoaW5wdXQsIHJlKSB7IHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7IH0sIGlucHV0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/no-case/dist.es2015/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/no-case/dist.es2015/index.js":
/*!***************************************************!*\
  !*** ./node_modules/no-case/dist.es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noCase: () => (/* binding */ noCase)\n/* harmony export */ });\n/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ \"(rsc)/./node_modules/lower-case/dist.es2015/index.js\");\n\n// Support camel case (\"camelCase\" -> \"camel Case\" and \"CAMELCase\" -> \"CAMEL Case\").\nvar DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];\n// Remove all non-word characters.\nvar DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;\n/**\n * Normalize the string into something other libraries can manipulate easier.\n */\nfunction noCase(input, options) {\n    if (options === void 0) { options = {}; }\n    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? \" \" : _d;\n    var result = replace(replace(input, splitRegexp, \"$1\\0$2\"), stripRegexp, \"\\0\");\n    var start = 0;\n    var end = result.length;\n    // Trim the delimiter from around the output string.\n    while (result.charAt(start) === \"\\0\")\n        start++;\n    while (result.charAt(end - 1) === \"\\0\")\n        end--;\n    // Transform each token independently.\n    return result.slice(start, end).split(\"\\0\").map(transform).join(delimiter);\n}\n/**\n * Replace `re` in the input string with the replacement value.\n */\nfunction replace(input, re, value) {\n    if (re instanceof RegExp)\n        return input.replace(re, value);\n    return re.reduce(function (input, re) { return input.replace(re, value); }, input);\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCLGtPQUFrTyxpREFBUztBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGtDQUFrQztBQUM5RTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9vbS8uL25vZGVfbW9kdWxlcy9uby1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzPzhjNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG93ZXJDYXNlIH0gZnJvbSBcImxvd2VyLWNhc2VcIjtcbi8vIFN1cHBvcnQgY2FtZWwgY2FzZSAoXCJjYW1lbENhc2VcIiAtPiBcImNhbWVsIENhc2VcIiBhbmQgXCJDQU1FTENhc2VcIiAtPiBcIkNBTUVMIENhc2VcIikuXG52YXIgREVGQVVMVF9TUExJVF9SRUdFWFAgPSBbLyhbYS16MC05XSkoW0EtWl0pL2csIC8oW0EtWl0pKFtBLVpdW2Etel0pL2ddO1xuLy8gUmVtb3ZlIGFsbCBub24td29yZCBjaGFyYWN0ZXJzLlxudmFyIERFRkFVTFRfU1RSSVBfUkVHRVhQID0gL1teQS1aMC05XSsvZ2k7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgc3RyaW5nIGludG8gc29tZXRoaW5nIG90aGVyIGxpYnJhcmllcyBjYW4gbWFuaXB1bGF0ZSBlYXNpZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub0Nhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3BsaXRSZWdleHAsIHNwbGl0UmVnZXhwID0gX2EgPT09IHZvaWQgMCA/IERFRkFVTFRfU1BMSVRfUkVHRVhQIDogX2EsIF9iID0gb3B0aW9ucy5zdHJpcFJlZ2V4cCwgc3RyaXBSZWdleHAgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVF9TVFJJUF9SRUdFWFAgOiBfYiwgX2MgPSBvcHRpb25zLnRyYW5zZm9ybSwgdHJhbnNmb3JtID0gX2MgPT09IHZvaWQgMCA/IGxvd2VyQ2FzZSA6IF9jLCBfZCA9IG9wdGlvbnMuZGVsaW1pdGVyLCBkZWxpbWl0ZXIgPSBfZCA9PT0gdm9pZCAwID8gXCIgXCIgOiBfZDtcbiAgICB2YXIgcmVzdWx0ID0gcmVwbGFjZShyZXBsYWNlKGlucHV0LCBzcGxpdFJlZ2V4cCwgXCIkMVxcMCQyXCIpLCBzdHJpcFJlZ2V4cCwgXCJcXDBcIik7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB2YXIgZW5kID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAvLyBUcmltIHRoZSBkZWxpbWl0ZXIgZnJvbSBhcm91bmQgdGhlIG91dHB1dCBzdHJpbmcuXG4gICAgd2hpbGUgKHJlc3VsdC5jaGFyQXQoc3RhcnQpID09PSBcIlxcMFwiKVxuICAgICAgICBzdGFydCsrO1xuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KGVuZCAtIDEpID09PSBcIlxcMFwiKVxuICAgICAgICBlbmQtLTtcbiAgICAvLyBUcmFuc2Zvcm0gZWFjaCB0b2tlbiBpbmRlcGVuZGVudGx5LlxuICAgIHJldHVybiByZXN1bHQuc2xpY2Uoc3RhcnQsIGVuZCkuc3BsaXQoXCJcXDBcIikubWFwKHRyYW5zZm9ybSkuam9pbihkZWxpbWl0ZXIpO1xufVxuLyoqXG4gKiBSZXBsYWNlIGByZWAgaW4gdGhlIGlucHV0IHN0cmluZyB3aXRoIHRoZSByZXBsYWNlbWVudCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZShpbnB1dCwgcmUsIHZhbHVlKSB7XG4gICAgaWYgKHJlIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZShyZSwgdmFsdWUpO1xuICAgIHJldHVybiByZS5yZWR1Y2UoZnVuY3Rpb24gKGlucHV0LCByZSkgeyByZXR1cm4gaW5wdXQucmVwbGFjZShyZSwgdmFsdWUpOyB9LCBpbnB1dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/no-case/dist.es2015/index.js\n");

/***/ })

};
;