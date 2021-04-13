webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "D:\\Workplace\\homepage\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Home = function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var dpr = 1;
    var isIPhone = window.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = window.devicePixelRatio;

    if (isIPhone) {
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1;
    }

    function refreshRem() {
      var width = document.getElementsByTagName("html")[0].getBoundingClientRect().width;

      if (width / dpr > 540) {
        width = 540 * dpr;
      }

      var rem = width / 10;
      document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'; // flexible.rem = window.rem = rem;
    }
  }, []);
  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Home,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "DFinance")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 1920 1038.358",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("path", {
    id: "minus_2",
    "data-name": "minus 2",
    d: "M1920,0H0V1038.358c66.645-16.089,140.2-30.706,218.621-43.445,79.146-12.856,163.895-23.9,251.893-32.832,89.627-9.095,183.5-16.082,279.011-20.766,48.552-2.381,98.262-4.2,147.751-5.4,50.217-1.222,101.432-1.841,152.224-1.841,159.479,0,316.3,6,466.1,17.841,144.871,11.449,280.931,28.16,404.4,49.669V0Z",
    transform: "translate(1920 1038.358) rotate(180)",
    fill: "#cbcbcb",
    opacity: "0.2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 1920 1893.862",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("path", {
    id: "minus_1",
    "data-name": "minus 1",
    d: "M1920,996.863h0c-108.244-24.894-224.765-47-346.328-65.714-125.384-19.3-255.935-34.944-388.024-46.5-173.438-15.174-343.757-22.868-506.226-22.868-134.388,0-261.191,5.284-376.887,15.705C188.026,887.8,86.238,902.975,0,922.59V-897H1920V996.861Z",
    transform: "translate(1920 996.863) rotate(180)",
    fill: "#cbcbcb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 2245.75 1642.948",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("g", {
    id: "group_58",
    "data-name": "group 58",
    transform: "translate(119.5 -935.75)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("rect", {
    id: "rect_18",
    "data-name": "rect 18",
    width: "135",
    height: "135",
    rx: "20",
    transform: "translate(39 1708)",
    fill: "#c2c2c2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), __jsx("rect", {
    id: "rect_19",
    "data-name": "rect 19",
    width: "404",
    height: "135",
    rx: "20",
    transform: "translate(266 1462)",
    fill: "#c2c2c2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), __jsx("rect", {
    id: "rect_24",
    "data-name": "rect 24",
    width: "249",
    height: "217",
    rx: "20",
    transform: "translate(873 1291)",
    fill: "#c2c2c2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }), __jsx("rect", {
    id: "rect_20",
    "data-name": "rect 20",
    width: "404",
    height: "841",
    rx: "20",
    transform: "translate(1430 1070)",
    fill: "#c2c2c2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }), __jsx("rect", {
    id: "rect_21",
    "data-name": "rect 21",
    width: "210.5",
    height: "316.5",
    rx: "20",
    transform: "translate(197 935.75) rotate(90)",
    fill: "#c2c2c2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), __jsx("rect", {
    id: "rect_22",
    "data-name": "rect 22",
    width: "144.628",
    height: "109.5",
    rx: "20",
    transform: "translate(724.75 1904.686) rotate(90)",
    fill: "#c2c2c2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }), __jsx("rect", {
    id: "rect_25",
    "data-name": "rect 25",
    width: "466.628",
    height: "463.5",
    rx: "20",
    transform: "translate(502.5 2112.07) rotate(90)",
    fill: "#c2c2c2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }), __jsx("rect", {
    id: "rect_23",
    "data-name": "rect 23",
    width: "385.306",
    height: "420.5",
    rx: "20",
    transform: "translate(2126.25 2040.07) rotate(90)",
    fill: "#c2c2c2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "100%",
    height: "100%",
    viewBox: "0 0 1949.999 1138.736",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("filter", {
    id: "minus_3",
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    filterUnits: "userSpaceOnUse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("feOffset", {
    dy: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "5",
    result: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("feFlood", {
    floodOpacity: "0.302",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    "in": "SourceGraphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }))), __jsx("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    width: "100%",
    height: "100%",
    filter: "url(#minus_3)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("path", {
    id: "minus_3-2",
    "data-name": "minus 3",
    d: "M2319.242,2825.207h-1920V1716.47A2121.106,2121.106,0,0,0,816.927,1991.6a2202.706,2202.706,0,0,0,491.556,176.658c41.257,9.525,83.229,17.97,124.749,25.1,41.146,7.068,82.959,13.036,124.277,17.739,40.964,4.662,82.536,8.2,123.561,10.529,40.7,2.306,81.948,3.475,122.6,3.475h.18a2122.7,2122.7,0,0,0,515.392-63.233v663.333Z",
    transform: "translate(-384.24 -1704.47)",
    fill: "#fff",
    opacity: "0.2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "100%",
    height: "100%",
    viewBox: "0 0 1950 1079.25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("filter", {
    id: "minus_4",
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    filterUnits: "userSpaceOnUse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("feOffset", {
    dy: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "5",
    result: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx("feFlood", {
    floodOpacity: "0.302",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    "in": "SourceGraphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }))), __jsx("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "url(#minus_4)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("path", {
    id: "minus_4-2",
    "data-name": "minus 4",
    d: "M2319.243,2825.205h-1920V1775.955c32.9,25.675,67.646,50.737,103.279,74.49,35.757,23.835,73.267,46.924,111.487,68.625,38.433,21.823,78.522,42.775,119.153,62.273,40.93,19.643,83.416,38.293,126.277,55.433,177.462,70.965,367.731,119.261,565.521,143.547,47.752,5.864,96.108,10.317,143.723,13.235,47.033,2.883,94.576,4.345,141.308,4.345h.128c26.894,0,54.083-.488,80.811-1.445,26.559-.952,53.374-2.395,79.7-4.288,26.173-1.883,52.576-4.261,78.475-7.071,25.756-2.794,51.71-6.09,77.14-9.8,25.3-3.687,50.771-7.88,75.695-12.461,24.813-4.561,49.757-9.631,74.139-15.068,24.288-5.417,48.671-11.343,72.472-17.615,23.722-6.252,47.507-13.016,70.694-20.1Z",
    transform: "translate(-384.24 -1763.96)",
    fill: "#fff",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.brand,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.mainTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Unleash the power of DeFi"), __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, "DFinace is building the open financial services infrastructure for the DFINITY Internet Computer.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "App is coming")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup1_accessory_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup1_accessory_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup1_box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Automated market maker decentralized exchange."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Bootstrap liquidity for your tokens, buy & sell whatever tokens you want."))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup2_accessory_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup2_accessory_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup2_box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "Token Issuance"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "Unified token standard."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Issue your token on Dfinity with one click of a button."))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup3_box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, "DUSD Stablecoin"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, "Overcollateralized stablecoin."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "Mint DUSD with your ICP tokens and other cross-chain assets.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup3_accessory_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup3_accessory_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 552.34 150.397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx("linearGradient", {
    id: "linear-gradient",
    x1: "0.288",
    y1: "-0.834",
    x2: "0.73",
    y2: "1.76",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e12b7c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#323a8d",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }))), __jsx("path", {
    id: "path_34",
    "data-name": "path 34",
    d: "M52.267,1823.121c80.422-69.523,119.342,152.251,272.092,42.469s183.921,40.786,246.949-20.393,17.221,114.541,17.221,114.541L61.394,1951.75Z",
    transform: "translate(-52.267 -1809.34)",
    fill: "url(#linear-gradient)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup4_accessory_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup4_box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "DLend"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "Decentralized money market."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "Earn passive income on your assets and borrow tokens from the lending pool.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup4_accessory_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.brand,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: {
      opacity: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, "DFINANCE")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.links,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, "Onepager")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "38.067",
    height: "37.116",
    viewBox: "0 0 38.067 37.116",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, __jsx("linearGradient", {
    id: "linear-gradient",
    y1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e12b7c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#323a8d",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  }))), __jsx("path", {
    id: "Icon_awesome-github",
    "data-name": "Icon awesome-github",
    d: "M12.733,30.448c0,.153-.177.276-.4.276-.253.023-.43-.1-.43-.276,0-.153.177-.276.4-.276C12.533,30.149,12.733,30.272,12.733,30.448ZM10.346,30.1c-.054.153.1.33.33.376a.36.36,0,0,0,.476-.153c.046-.153-.1-.33-.33-.4A.394.394,0,0,0,10.346,30.1Zm3.392-.13c-.223.054-.376.2-.353.376.023.153.223.253.453.2s.376-.2.353-.353S13.96,29.949,13.738,29.972ZM18.788.563A18.4,18.4,0,0,0,0,19.289,19.241,19.241,0,0,0,13.009,37.647c.982.177,1.328-.43,1.328-.929,0-.476-.023-3.1-.023-4.712,0,0-5.372,1.151-6.5-2.287,0,0-.875-2.233-2.134-2.809,0,0-1.758-1.2.123-1.182a4.051,4.051,0,0,1,2.962,1.98,4.057,4.057,0,0,0,5.595,1.6,4.266,4.266,0,0,1,1.228-2.586c-4.29-.476-8.619-1.1-8.619-8.481a5.817,5.817,0,0,1,1.811-4.52,7.251,7.251,0,0,1,.2-5.211c1.6-.5,5.3,2.072,5.3,2.072a18.131,18.131,0,0,1,9.64,0s3.692-2.579,5.3-2.072a7.248,7.248,0,0,1,.2,5.211,5.966,5.966,0,0,1,1.98,4.52c0,7.406-4.52,8-8.811,8.481a4.539,4.539,0,0,1,1.3,3.561c0,2.586-.023,5.787-.023,6.416,0,.5.353,1.105,1.328.929A19.064,19.064,0,0,0,38.067,19.289C38.067,8.644,29.433.563,18.788.563ZM7.46,27.033c-.1.077-.077.253.054.4.123.123.3.177.4.077.1-.077.077-.253-.054-.4C7.736,26.987,7.56,26.933,7.46,27.033Zm-.829-.622c-.054.1.023.223.177.3a.228.228,0,0,0,.33-.054c.054-.1-.023-.223-.177-.3C6.808,26.311,6.685,26.335,6.631,26.411Zm2.487,2.732c-.123.1-.077.33.1.476.177.177.4.2.5.077.1-.1.054-.33-.1-.476C9.448,29.044,9.217,29.021,9.118,29.143Zm-.875-1.128c-.123.077-.123.276,0,.453s.33.253.43.177a.35.35,0,0,0,0-.476C8.565,27.992,8.366,27.916,8.243,28.015Z",
    transform: "translate(0 -0.563)",
    fill: "url(#linear-gradient)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }))), __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.copyright,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, "Copyright \xA9 2021 DFinance. All rights reserved."))));
};

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJkcHIiLCJpc0lQaG9uZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJtYXRjaCIsImRldmljZVBpeGVsUmF0aW8iLCJyZWZyZXNoUmVtIiwid2lkdGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVtIiwic3R5bGUiLCJmb250U2l6ZSIsInN0eWxlcyIsImJnIiwiYmdfMSIsImJnXzIiLCJiZ18zIiwiYmdfNCIsImJnXzYiLCJiZ181IiwiYmdfNyIsImhlYWRlciIsImJyYW5kIiwidGl0bGVzIiwibWFpblRpdGxlIiwic3ViVGl0bGUiLCJib2R5IiwiYm94R3JvdXAxIiwiYm94R3JvdXAxX2FjY2Vzc29yeV8xIiwiYm94R3JvdXAxX2FjY2Vzc29yeV8yIiwiYm94R3JvdXAxX2JveCIsIm1haW4iLCJib3hHcm91cDIiLCJib3hHcm91cDJfYWNjZXNzb3J5XzEiLCJib3hHcm91cDJfYWNjZXNzb3J5XzIiLCJib3hHcm91cDJfYm94IiwiYm94R3JvdXAzIiwiYm94R3JvdXAzX2JveCIsImJveEdyb3VwM19hY2Nlc3NvcnlfMSIsImJveEdyb3VwM19hY2Nlc3NvcnlfMiIsImJveEdyb3VwNCIsImJveEdyb3VwNF9hY2Nlc3NvcnlfMSIsImJveEdyb3VwNF9ib3giLCJib3hHcm91cDRfYWNjZXNzb3J5XzIiLCJmb290ZXIiLCJvcGFjaXR5IiwibGlua3MiLCJpY29ucyIsImNvcHlyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsR0FBRyxHQUFHLENBQVY7QUFD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LEVBQUMsUUFBeEY7QUFBaUcsVUFBTSxFQUFDLFFBQXhHO0FBQWlILFdBQU8sRUFBQyxtQkFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFnQixNQUFFLEVBQUMsaUJBQW5CO0FBQXFDLE1BQUUsRUFBQyxLQUF4QztBQUE4QyxNQUFFLEVBQUMsS0FBakQ7QUFBdUQsTUFBRSxFQUFDLEdBQTFEO0FBQThELGlCQUFhLEVBQUMsbUJBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFVBQU0sRUFBQyxHQUFiO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLFVBQU0sRUFBQyxHQUFiO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLEVBT0U7QUFBTSxNQUFFLEVBQUMscUJBQVQ7QUFBK0IsaUJBQVUscUJBQXpDO0FBQStELEtBQUMsRUFBQywyOUNBQWpFO0FBQTZoRCxhQUFTLEVBQUMscUJBQXZpRDtBQUE2akQsUUFBSSxFQUFDLHVCQUFsa0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREYsQ0F2QkYsRUE2Q0U7QUFBTSxhQUFTLEVBQUVuQyx3REFBTSxDQUFDb0MsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREE3Q0YsQ0FYRixDQXpIRixDQURGO0FBdUxELENBbk5EOztHQUFNckQsSTs7S0FBQUEsSTtBQXFOU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWRkZmFhNTM5NDUxNjZkYWQ1NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBkcHIgPSAxO1xyXG4gICAgdmFyIGlzSVBob25lID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9pcGhvbmUvZ2kpO1xyXG4gICAgdmFyIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgIGlmIChpc0lQaG9uZSkge1xyXG4gICAgICAgIGlmIChkZXZpY2VQaXhlbFJhdGlvID49IDMgJiYgKCFkcHIgfHwgZHByID49IDMpKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkcHIgPSAzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlUGl4ZWxSYXRpbyA+PSAyICYmICghZHByIHx8IGRwciA+PSAyKSl7XHJcbiAgICAgICAgICAgIGRwciA9IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZHByID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOWFtuS7luiuvuWkh+S4i++8jOS7jeaXp+S9v+eUqDHlgI3nmoTmlrnmoYhcclxuICAgICAgICBkcHIgPSAxO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFJlbSgpe1xyXG4gICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgICBpZiAod2lkdGggLyBkcHIgPiA1NDApIHtcclxuICAgICAgICAgICAgd2lkdGggPSA1NDAgKiBkcHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZW0gPSB3aWR0aCAvIDEwO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5zdHlsZS5mb250U2l6ZSA9IHJlbSArICdweCc7XHJcbiAgICAgICAgLy8gZmxleGlibGUucmVtID0gd2luZG93LnJlbSA9IHJlbTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSG9tZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ERmluYW5jZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ18xfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnXzJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfM30+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxOTIwIDEwMzguMzU4XCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfMlwiIGRhdGEtbmFtZT1cIm1pbnVzIDJcIiBkPVwiTTE5MjAsMEgwVjEwMzguMzU4YzY2LjY0NS0xNi4wODksMTQwLjItMzAuNzA2LDIxOC42MjEtNDMuNDQ1LDc5LjE0Ni0xMi44NTYsMTYzLjg5NS0yMy45LDI1MS44OTMtMzIuODMyLDg5LjYyNy05LjA5NSwxODMuNS0xNi4wODIsMjc5LjAxMS0yMC43NjYsNDguNTUyLTIuMzgxLDk4LjI2Mi00LjIsMTQ3Ljc1MS01LjQsNTAuMjE3LTEuMjIyLDEwMS40MzItMS44NDEsMTUyLjIyNC0xLjg0MSwxNTkuNDc5LDAsMzE2LjMsNiw0NjYuMSwxNy44NDEsMTQ0Ljg3MSwxMS40NDksMjgwLjkzMSwyOC4xNiw0MDQuNCw0OS42NjlWMFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTkyMCAxMDM4LjM1OCkgcm90YXRlKDE4MClcIiBmaWxsPVwiI2NiY2JjYlwiIG9wYWNpdHk9XCIwLjJcIi8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnXzR9PlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTkyMCAxODkzLjg2MlwiPlxyXG4gICAgICAgICAgICA8cGF0aCBpZD1cIm1pbnVzXzFcIiBkYXRhLW5hbWU9XCJtaW51cyAxXCIgZD1cIk0xOTIwLDk5Ni44NjNoMGMtMTA4LjI0NC0yNC44OTQtMjI0Ljc2NS00Ny0zNDYuMzI4LTY1LjcxNC0xMjUuMzg0LTE5LjMtMjU1LjkzNS0zNC45NDQtMzg4LjAyNC00Ni41LTE3My40MzgtMTUuMTc0LTM0My43NTctMjIuODY4LTUwNi4yMjYtMjIuODY4LTEzNC4zODgsMC0yNjEuMTkxLDUuMjg0LTM3Ni44ODcsMTUuNzA1QzE4OC4wMjYsODg3LjgsODYuMjM4LDkwMi45NzUsMCw5MjIuNTlWLTg5N0gxOTIwVjk5Ni44NjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE5MjAgOTk2Ljg2Mykgcm90YXRlKDE4MClcIiBmaWxsPVwiI2NiY2JjYlwiLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfNn0+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAyMjQ1Ljc1IDE2NDIuOTQ4XCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiZ3JvdXBfNThcIiBkYXRhLW5hbWU9XCJncm91cCA1OFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMTkuNSAtOTM1Ljc1KVwiPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8xOFwiIGRhdGEtbmFtZT1cInJlY3QgMThcIiB3aWR0aD1cIjEzNVwiIGhlaWdodD1cIjEzNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzkgMTcwOClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMTlcIiBkYXRhLW5hbWU9XCJyZWN0IDE5XCIgd2lkdGg9XCI0MDRcIiBoZWlnaHQ9XCIxMzVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI2NiAxNDYyKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8yNFwiIGRhdGEtbmFtZT1cInJlY3QgMjRcIiB3aWR0aD1cIjI0OVwiIGhlaWdodD1cIjIxN1wiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODczIDEyOTEpXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIwXCIgZGF0YS1uYW1lPVwicmVjdCAyMFwiIHdpZHRoPVwiNDA0XCIgaGVpZ2h0PVwiODQxXCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDMwIDEwNzApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIxXCIgZGF0YS1uYW1lPVwicmVjdCAyMVwiIHdpZHRoPVwiMjEwLjVcIiBoZWlnaHQ9XCIzMTYuNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTk3IDkzNS43NSkgcm90YXRlKDkwKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8yMlwiIGRhdGEtbmFtZT1cInJlY3QgMjJcIiB3aWR0aD1cIjE0NC42MjhcIiBoZWlnaHQ9XCIxMDkuNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzI0Ljc1IDE5MDQuNjg2KSByb3RhdGUoOTApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzI1XCIgZGF0YS1uYW1lPVwicmVjdCAyNVwiIHdpZHRoPVwiNDY2LjYyOFwiIGhlaWdodD1cIjQ2My41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MDIuNSAyMTEyLjA3KSByb3RhdGUoOTApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIzXCIgZGF0YS1uYW1lPVwicmVjdCAyM1wiIHdpZHRoPVwiMzg1LjMwNlwiIGhlaWdodD1cIjQyMC41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMTI2LjI1IDIwNDAuMDcpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ181fT5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTk0OS45OTkgMTEzOC43MzZcIj5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgPGZpbHRlciBpZD1cIm1pbnVzXzNcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuICAgICAgICAgICAgICAgIDxmZU9mZnNldCBkeT1cIjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjVcIiByZXN1bHQ9XCJibHVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMC4zMDJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgb3BlcmF0b3I9XCJpblwiIGluMj1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIvPlxyXG4gICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWx0ZXI9XCJ1cmwoI21pbnVzXzMpXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJtaW51c18zLTJcIiBkYXRhLW5hbWU9XCJtaW51cyAzXCIgZD1cIk0yMzE5LjI0MiwyODI1LjIwN2gtMTkyMFYxNzE2LjQ3QTIxMjEuMTA2LDIxMjEuMTA2LDAsMCwwLDgxNi45MjcsMTk5MS42YTIyMDIuNzA2LDIyMDIuNzA2LDAsMCwwLDQ5MS41NTYsMTc2LjY1OGM0MS4yNTcsOS41MjUsODMuMjI5LDE3Ljk3LDEyNC43NDksMjUuMSw0MS4xNDYsNy4wNjgsODIuOTU5LDEzLjAzNiwxMjQuMjc3LDE3LjczOSw0MC45NjQsNC42NjIsODIuNTM2LDguMiwxMjMuNTYxLDEwLjUyOSw0MC43LDIuMzA2LDgxLjk0OCwzLjQ3NSwxMjIuNiwzLjQ3NWguMThhMjEyMi43LDIxMjIuNywwLDAsMCw1MTUuMzkyLTYzLjIzM3Y2NjMuMzMzWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzg0LjI0IC0xNzA0LjQ3KVwiIGZpbGw9XCIjZmZmXCIgb3BhY2l0eT1cIjAuMlwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfN30+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE5NTAgMTA3OS4yNVwiPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwibWludXNfNFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG4gICAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PVwiM1wiLz5cclxuICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCI1XCIgcmVzdWx0PVwiYmx1clwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjAuMzAyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPVwiaW5cIiBpbjI9XCJibHVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiLz5cclxuICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiBmaWx0ZXI9XCJ1cmwoI21pbnVzXzQpXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJtaW51c180LTJcIiBkYXRhLW5hbWU9XCJtaW51cyA0XCIgZD1cIk0yMzE5LjI0MywyODI1LjIwNWgtMTkyMFYxNzc1Ljk1NWMzMi45LDI1LjY3NSw2Ny42NDYsNTAuNzM3LDEwMy4yNzksNzQuNDksMzUuNzU3LDIzLjgzNSw3My4yNjcsNDYuOTI0LDExMS40ODcsNjguNjI1LDM4LjQzMywyMS44MjMsNzguNTIyLDQyLjc3NSwxMTkuMTUzLDYyLjI3Myw0MC45MywxOS42NDMsODMuNDE2LDM4LjI5MywxMjYuMjc3LDU1LjQzMywxNzcuNDYyLDcwLjk2NSwzNjcuNzMxLDExOS4yNjEsNTY1LjUyMSwxNDMuNTQ3LDQ3Ljc1Miw1Ljg2NCw5Ni4xMDgsMTAuMzE3LDE0My43MjMsMTMuMjM1LDQ3LjAzMywyLjg4Myw5NC41NzYsNC4zNDUsMTQxLjMwOCw0LjM0NWguMTI4YzI2Ljg5NCwwLDU0LjA4My0uNDg4LDgwLjgxMS0xLjQ0NSwyNi41NTktLjk1Miw1My4zNzQtMi4zOTUsNzkuNy00LjI4OCwyNi4xNzMtMS44ODMsNTIuNTc2LTQuMjYxLDc4LjQ3NS03LjA3MSwyNS43NTYtMi43OTQsNTEuNzEtNi4wOSw3Ny4xNC05LjgsMjUuMy0zLjY4Nyw1MC43NzEtNy44OCw3NS42OTUtMTIuNDYxLDI0LjgxMy00LjU2MSw0OS43NTctOS42MzEsNzQuMTM5LTE1LjA2OCwyNC4yODgtNS40MTcsNDguNjcxLTExLjM0Myw3Mi40NzItMTcuNjE1LDIzLjcyMi02LjI1Miw0Ny41MDctMTMuMDE2LDcwLjY5NC0yMC4xWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzg0LjI0IC0xNzYzLjk2KVwiIGZpbGw9XCIjZmZmXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlc30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tYWluVGl0bGV9PlVubGVhc2ggdGhlIHBvd2VyIG9mIERlRmk8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdWJUaXRsZX0+REZpbmFjZSBpcyBidWlsZGluZyB0aGUgb3BlbiBmaW5hbmNpYWwgc2VydmljZXMgaW5mcmFzdHJ1Y3R1cmUgZm9yIHRoZSBERklOSVRZIEludGVybmV0IENvbXB1dGVyLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkFwcCBpcyBjb21pbmc8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAxfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAxX2FjY2Vzc29yeV8xfT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAxX2FjY2Vzc29yeV8yfT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAxX2JveH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PkRTd2FwPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5BdXRvbWF0ZWQgbWFya2V0IG1ha2VyIGRlY2VudHJhbGl6ZWQgZXhjaGFuZ2UuPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5Cb290c3RyYXAgbGlxdWlkaXR5IGZvciB5b3VyIHRva2VucywgYnV5ICYgc2VsbCB3aGF0ZXZlciB0b2tlbnMgeW91IHdhbnQuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDJfYWNjZXNzb3J5XzF9PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDJfYWNjZXNzb3J5XzJ9PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDJfYm94fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+VG9rZW4gSXNzdWFuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPlVuaWZpZWQgdG9rZW4gc3RhbmRhcmQuPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5Jc3N1ZSB5b3VyIHRva2VuIG9uIERmaW5pdHkgd2l0aCBvbmUgY2xpY2sgb2YgYSBidXR0b24uPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDNfYm94fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+RFVTRCBTdGFibGVjb2luPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5PdmVyY29sbGF0ZXJhbGl6ZWQgc3RhYmxlY29pbi48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPk1pbnQgRFVTRCB3aXRoIHlvdXIgSUNQIHRva2VucyBhbmQgb3RoZXIgY3Jvc3MtY2hhaW4gYXNzZXRzLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDNfYWNjZXNzb3J5XzF9PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDNfYWNjZXNzb3J5XzJ9PlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNTUyLjM0IDE1MC4zOTdcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHgxPVwiMC4yODhcIiB5MT1cIi0wLjgzNFwiIHgyPVwiMC43M1wiIHkyPVwiMS43NlwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UxMmI3Y1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzMjNhOGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cInBhdGhfMzRcIiBkYXRhLW5hbWU9XCJwYXRoIDM0XCIgZD1cIk01Mi4yNjcsMTgyMy4xMjFjODAuNDIyLTY5LjUyMywxMTkuMzQyLDE1Mi4yNTEsMjcyLjA5Miw0Mi40NjlzMTgzLjkyMSw0MC43ODYsMjQ2Ljk0OS0yMC4zOTMsMTcuMjIxLDExNC41NDEsMTcuMjIxLDExNC41NDFMNjEuMzk0LDE5NTEuNzVaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01Mi4yNjcgLTE4MDkuMzQpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwNH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwNF9hY2Nlc3NvcnlfMX0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwNF9ib3h9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5ETGVuZDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+RGVjZW50cmFsaXplZCBtb25leSBtYXJrZXQuPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5FYXJuIHBhc3NpdmUgaW5jb21lIG9uIHlvdXIgYXNzZXRzIGFuZCBib3Jyb3cgdG9rZW5zIGZyb20gdGhlIGxlbmRpbmcgcG9vbC48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXA0X2FjY2Vzc29yeV8yfT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfT5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7b3BhY2l0eTogXCIwXCJ9fT5ERklOQU5DRTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+T25lcGFnZXI8L0xpbms+XHJcbiAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5XaGl0ZSBwYXBlcjwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+VGVhbTwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QXBwPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5BYm91dDwvTGluaz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjQxLjU1NFwiIGhlaWdodD1cIjMzLjc0OVwiIHZpZXdCb3g9XCIwIDAgNDEuNTU0IDMzLjc0OVwiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeTE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UxMmI3Y1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzMjNhOGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS10d2l0dGVyXCIgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLXR3aXR0ZXJcIiBkPVwiTTM3LjI4MywxMS43OTJjLjAyNi4zNjkuMDI2LjczOC4wMjYsMS4xMDcsMCwxMS4yNTktOC41NjksMjQuMjMxLTI0LjIzMSwyNC4yMzFBMjQuMDY3LDI0LjA2NywwLDAsMSwwLDMzLjMwN2ExNy42MTgsMTcuNjE4LDAsMCwwLDIuMDU3LjEwNUExNy4wNTYsMTcuMDU2LDAsMCwwLDEyLjYzLDI5Ljc3NGE4LjUzMSw4LjUzMSwwLDAsMS03Ljk2My01LjkwNkExMC43NCwxMC43NCwwLDAsMCw2LjI3NSwyNGE5LjAwNyw5LjAwNywwLDAsMCwyLjI0MS0uMjksOC41MTgsOC41MTgsMCwwLDEtNi44MjktOC4zNTh2LS4xMDVhOC41NzcsOC41NzcsMCwwLDAsMy44NSwxLjA4MUE4LjUyOSw4LjUyOSwwLDAsMSwyLjksNC45MzZhMjQuMjA4LDI0LjIwOCwwLDAsMCwxNy41Niw4LjkxMkE5LjYxNCw5LjYxNCwwLDAsMSwyMC4yNSwxMS45LDguNTI1LDguNTI1LDAsMCwxLDM0Ljk4OSw2LjA3YTE2Ljc2NywxNi43NjcsMCwwLDAsNS40MDUtMi4wNTdBOC40OTMsOC40OTMsMCwwLDEsMzYuNjUsOC43MDdhMTcuMDczLDE3LjA3MywwLDAsMCw0LjktMS4zMTgsMTguMzA3LDE4LjMwNywwLDAsMS00LjI3MSw0LjRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTMuMzgxKVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiNDAuMDA5XCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDQwLjAwOSA0MFwiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeTE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UxMmI3Y1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzMjNhOGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1pbnN0YWdyYW1cIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtaW5zdGFncmFtXCIgZD1cIk0yMCwxMS45ODJBMTAuMjU2LDEwLjI1NiwwLDEsMCwzMC4yNTksMjIuMjM4LDEwLjIzOSwxMC4yMzksMCwwLDAsMjAsMTEuOTgyWm0wLDE2LjkyM2E2LjY2Nyw2LjY2NywwLDEsMSw2LjY2Ny02LjY2N0E2LjY4LDYuNjgsMCwwLDEsMjAsMjguOTA1Wk0zMy4wNzEsMTEuNTYzYTIuMzkyLDIuMzkyLDAsMSwxLTIuMzkyLTIuMzkyQTIuMzg3LDIuMzg3LDAsMCwxLDMzLjA3MSwxMS41NjNabTYuNzkyLDIuNDI4Yy0uMTUyLTMuMi0uODg0LTYuMDQzLTMuMjMxLTguMzgxcy01LjE3Ny0zLjA3LTguMzgxLTMuMjMxYy0zLjMtLjE4Ny0xMy4yLS4xODctMTYuNSwwLTMuMi4xNTItNi4wMzQuODg0LTguMzgxLDMuMjIyUy4zLDEwLjc3Ny4xMzUsMTMuOTgyYy0uMTg3LDMuMy0uMTg3LDEzLjIsMCwxNi41LjE1MiwzLjIuODg0LDYuMDQzLDMuMjMxLDguMzgxczUuMTc3LDMuMDcsOC4zODEsMy4yMzFjMy4zLjE4NywxMy4yLjE4NywxNi41LDAsMy4yLS4xNTIsNi4wNDMtLjg4NCw4LjM4MS0zLjIzMXMzLjA3LTUuMTc3LDMuMjMxLTguMzgxYy4xODctMy4zLjE4Ny0xMy4xOTIsMC0xNi40OTVaTTM1LjYsMzQuMDI4YTYuNzUsNi43NSwwLDAsMS0zLjgsMy44Yy0yLjYzMywxLjA0NC04Ljg4MS44LTExLjc5MS44cy05LjE2Ny4yMzItMTEuNzkxLS44YTYuNzUsNi43NSwwLDAsMS0zLjgtMy44Yy0xLjA0NC0yLjYzMy0uOC04Ljg4MS0uOC0xMS43OTFzLS4yMzItOS4xNjcuOC0xMS43OTFhNi43NSw2Ljc1LDAsMCwxLDMuOC0zLjhjMi42MzMtMS4wNDQsOC44ODEtLjgsMTEuNzkxLS44czkuMTY3LS4yMzIsMTEuNzkxLjhhNi43NSw2Ljc1LDAsMCwxLDMuOCwzLjhjMS4wNDQsMi42MzMuOCw4Ljg4MS44LDExLjc5MVMzNi42NDEsMzEuNCwzNS42LDM0LjAyOFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDUgLTIuMjM4KVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGZpbmFuY2UtdGVjaFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMzguMDY3XCIgaGVpZ2h0PVwiMzcuMTE2XCIgdmlld0JveD1cIjAgMCAzOC4wNjcgMzcuMTE2XCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB5MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLWdpdGh1YlwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1naXRodWJcIiBkPVwiTTEyLjczMywzMC40NDhjMCwuMTUzLS4xNzcuMjc2LS40LjI3Ni0uMjUzLjAyMy0uNDMtLjEtLjQzLS4yNzYsMC0uMTUzLjE3Ny0uMjc2LjQtLjI3NkMxMi41MzMsMzAuMTQ5LDEyLjczMywzMC4yNzIsMTIuNzMzLDMwLjQ0OFpNMTAuMzQ2LDMwLjFjLS4wNTQuMTUzLjEuMzMuMzMuMzc2YS4zNi4zNiwwLDAsMCwuNDc2LS4xNTNjLjA0Ni0uMTUzLS4xLS4zMy0uMzMtLjRBLjM5NC4zOTQsMCwwLDAsMTAuMzQ2LDMwLjFabTMuMzkyLS4xM2MtLjIyMy4wNTQtLjM3Ni4yLS4zNTMuMzc2LjAyMy4xNTMuMjIzLjI1My40NTMuMnMuMzc2LS4yLjM1My0uMzUzUzEzLjk2LDI5Ljk0OSwxMy43MzgsMjkuOTcyWk0xOC43ODguNTYzQTE4LjQsMTguNCwwLDAsMCwwLDE5LjI4OSwxOS4yNDEsMTkuMjQxLDAsMCwwLDEzLjAwOSwzNy42NDdjLjk4Mi4xNzcsMS4zMjgtLjQzLDEuMzI4LS45MjksMC0uNDc2LS4wMjMtMy4xLS4wMjMtNC43MTIsMCwwLTUuMzcyLDEuMTUxLTYuNS0yLjI4NywwLDAtLjg3NS0yLjIzMy0yLjEzNC0yLjgwOSwwLDAtMS43NTgtMS4yLjEyMy0xLjE4MmE0LjA1MSw0LjA1MSwwLDAsMSwyLjk2MiwxLjk4LDQuMDU3LDQuMDU3LDAsMCwwLDUuNTk1LDEuNiw0LjI2Niw0LjI2NiwwLDAsMSwxLjIyOC0yLjU4NmMtNC4yOS0uNDc2LTguNjE5LTEuMS04LjYxOS04LjQ4MWE1LjgxNyw1LjgxNywwLDAsMSwxLjgxMS00LjUyLDcuMjUxLDcuMjUxLDAsMCwxLC4yLTUuMjExYzEuNi0uNSw1LjMsMi4wNzIsNS4zLDIuMDcyYTE4LjEzMSwxOC4xMzEsMCwwLDEsOS42NCwwczMuNjkyLTIuNTc5LDUuMy0yLjA3MmE3LjI0OCw3LjI0OCwwLDAsMSwuMiw1LjIxMSw1Ljk2Niw1Ljk2NiwwLDAsMSwxLjk4LDQuNTJjMCw3LjQwNi00LjUyLDgtOC44MTEsOC40ODFhNC41MzksNC41MzksMCwwLDEsMS4zLDMuNTYxYzAsMi41ODYtLjAyMyw1Ljc4Ny0uMDIzLDYuNDE2LDAsLjUuMzUzLDEuMTA1LDEuMzI4LjkyOUExOS4wNjQsMTkuMDY0LDAsMCwwLDM4LjA2NywxOS4yODlDMzguMDY3LDguNjQ0LDI5LjQzMy41NjMsMTguNzg4LjU2M1pNNy40NiwyNy4wMzNjLS4xLjA3Ny0uMDc3LjI1My4wNTQuNC4xMjMuMTIzLjMuMTc3LjQuMDc3LjEtLjA3Ny4wNzctLjI1My0uMDU0LS40QzcuNzM2LDI2Ljk4Nyw3LjU2LDI2LjkzMyw3LjQ2LDI3LjAzM1ptLS44MjktLjYyMmMtLjA1NC4xLjAyMy4yMjMuMTc3LjNhLjIyOC4yMjgsMCwwLDAsLjMzLS4wNTRjLjA1NC0uMS0uMDIzLS4yMjMtLjE3Ny0uM0M2LjgwOCwyNi4zMTEsNi42ODUsMjYuMzM1LDYuNjMxLDI2LjQxMVptMi40ODcsMi43MzJjLS4xMjMuMS0uMDc3LjMzLjEuNDc2LjE3Ny4xNzcuNC4yLjUuMDc3LjEtLjEuMDU0LS4zMy0uMS0uNDc2QzkuNDQ4LDI5LjA0NCw5LjIxNywyOS4wMjEsOS4xMTgsMjkuMTQzWm0tLjg3NS0xLjEyOGMtLjEyMy4wNzctLjEyMy4yNzYsMCwuNDUzcy4zMy4yNTMuNDMuMTc3YS4zNS4zNSwwLDAsMCwwLS40NzZDOC41NjUsMjcuOTkyLDguMzY2LDI3LjkxNiw4LjI0MywyOC4wMTVaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTAuNTYzKVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgey8qIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzMy43MzhcIiBoZWlnaHQ9XCIzOC41NThcIiB2aWV3Qm94PVwiMCAwIDMzLjczOCAzOC41NThcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtZGlzY29yZFwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1kaXNjb3JkXCIgZD1cIk0yMi4zODMsMTguMzE1YTEuOTczLDEuOTczLDAsMSwxLTEuOTY2LTIuMTRBMi4wNTQsMi4wNTQsMCwwLDEsMjIuMzgzLDE4LjMxNVptLTktMi4xNGEyLjE0OCwyLjE0OCwwLDAsMCwwLDQuMjgsMi4wNTQsMi4wNTQsMCwwLDAsMS45NjYtMi4xNEEyLjA0MiwyLjA0MiwwLDAsMCwxMy4zOCwxNi4xNzVabTIwLjM1OS0xMi4yVjM4LjU1OGMtNC44NTctNC4yOTItMy4zLTIuODcxLTguOTQ1LTguMTE2bDEuMDIyLDMuNTY3SDMuOTUyQTMuOTYyLDMuOTYyLDAsMCwxLDAsMzAuMDM3VjMuOTcxQTMuOTYyLDMuOTYyLDAsMCwxLDMuOTUyLDBIMjkuNzg2QTMuOTYyLDMuOTYyLDAsMCwxLDMzLjczOCwzLjk3MVpNMjguMjQ0LDIyLjI0OGEyNS44MTgsMjUuODE4LDAsMCwwLTIuNzc2LTExLjI0QTkuNTM0LDkuNTM0LDAsMCwwLDIwLjA1LDguOTg0bC0uMjcuMzA4YTEyLjgzMSwxMi44MzEsMCwwLDEsNC44LDIuNDQ4LDE2LjM4MSwxNi4zODEsMCwwLDAtMTQuNC0uNTU5Yy0uNzEzLjMyOC0xLjEzNy41NTktMS4xMzcuNTU5YTEzLjAwNiwxMy4wMDYsMCwwLDEsNS4wNy0yLjUyNmwtLjE5My0uMjMxQTkuNTM0LDkuNTM0LDAsMCwwLDguNSwxMS4wMDhhMjUuODE4LDI1LjgxOCwwLDAsMC0yLjc3NiwxMS4yNCw2Ljk5LDYuOTksMCwwLDAsNS44OCwyLjkzcy43MTMtLjg2OCwxLjI5Mi0xLjZBNiw2LDAsMCwxLDkuNTI0LDIxLjNjLjI4NC4yLjc1MS40NTYuNzkuNDgyYTE0LjA1MywxNC4wNTMsMCwwLDAsMTIuMDMuNjc1LDExLjAzMiwxMS4wMzIsMCwwLDAsMi4yMTctMS4xMzcsNi4wODMsNi4wODMsMCwwLDEtMy40ODksMi4yOTRjLjU3OC43MzMsMS4yNzIsMS41NjIsMS4yNzIsMS41NjJBNy4wNDcsNy4wNDcsMCwwLDAsMjguMjQ0LDIyLjI0OFpcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHR9PkNvcHlyaWdodCDCqSAyMDIxIERGaW5hbmNlLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=