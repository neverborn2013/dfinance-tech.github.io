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

    console.log("dpr: ", dpr);
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("dpr_1");
    console.log(html);
  }, []);
  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Home,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "DFinance")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_4,
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
    viewBox: "0 0 1920 1893.862",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_6,
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
    viewBox: "0 0 2245.75 1642.948",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("g", {
    id: "group_58",
    "data-name": "group 58",
    transform: "translate(119.5 -935.75)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
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
      lineNumber: 51,
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
      lineNumber: 52,
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
      lineNumber: 53,
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
      lineNumber: 54,
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
      lineNumber: 55,
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
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("feOffset", {
    dy: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "5",
    result: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("feFlood", {
    floodOpacity: "0.302",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    "in": "SourceGraphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("feOffset", {
    dy: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "5",
    result: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("feFlood", {
    floodOpacity: "0.302",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    "in": "SourceGraphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }))), __jsx("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "url(#minus_4)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.brand,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.mainTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "Unleash the power of DeFi"), __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "DFinace is building the open financial services infrastructure for the DFINITY Internet Computer.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "App is coming")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup1_accessory_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup1_accessory_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup1_box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Automated market maker decentralized exchange."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Bootstrap liquidity for your tokens, buy & sell whatever tokens you want."))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup2_accessory_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup2_accessory_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup2_box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Token Issuance"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Unified token standard."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Issue your token on Dfinity with one click of a button."))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup3_box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "DUSD Stablecoin"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Overcollateralized stablecoin."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "Mint DUSD with your ICP tokens and other cross-chain assets.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup3_accessory_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup3_accessory_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 552.34 150.397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e12b7c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#323a8d",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 137,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup4_accessory_1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup4_box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "DLend"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Decentralized money market."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "Earn passive income on your assets and borrow tokens from the lending pool.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxGroup4_accessory_2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.brand,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: {
      opacity: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, "DFINANCE")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.links,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, "Onepager")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
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
      lineNumber: 186,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 188,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e12b7c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#323a8d",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
      lineNumber: 193,
      columnNumber: 15
    }
  }))), __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.copyright,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJkcHIiLCJpc0lQaG9uZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJtYXRjaCIsImRldmljZVBpeGVsUmF0aW8iLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZXMiLCJiZyIsImJnXzEiLCJiZ18yIiwiYmdfMyIsImJnXzQiLCJiZ182IiwiYmdfNSIsImJnXzciLCJoZWFkZXIiLCJicmFuZCIsInRpdGxlcyIsIm1haW5UaXRsZSIsInN1YlRpdGxlIiwiYm9keSIsImJveEdyb3VwMSIsImJveEdyb3VwMV9hY2Nlc3NvcnlfMSIsImJveEdyb3VwMV9hY2Nlc3NvcnlfMiIsImJveEdyb3VwMV9ib3giLCJtYWluIiwiYm94R3JvdXAyIiwiYm94R3JvdXAyX2FjY2Vzc29yeV8xIiwiYm94R3JvdXAyX2FjY2Vzc29yeV8yIiwiYm94R3JvdXAyX2JveCIsImJveEdyb3VwMyIsImJveEdyb3VwM19ib3giLCJib3hHcm91cDNfYWNjZXNzb3J5XzEiLCJib3hHcm91cDNfYWNjZXNzb3J5XzIiLCJib3hHcm91cDQiLCJib3hHcm91cDRfYWNjZXNzb3J5XzEiLCJib3hHcm91cDRfYm94IiwiYm94R3JvdXA0X2FjY2Vzc29yeV8yIiwiZm9vdGVyIiwib3BhY2l0eSIsImxpbmtzIiwiaWNvbnMiLCJjb3B5cmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsUUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQUND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O0FBQThDLE1BQUUsRUFBQyxLQUFqRDtBQUF1RCxNQUFFLEVBQUMsR0FBMUQ7QUFBOEQsaUJBQWEsRUFBQyxtQkFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sVUFBTSxFQUFDLEdBQWI7QUFBaUIsYUFBUyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sVUFBTSxFQUFDLEdBQWI7QUFBaUIsYUFBUyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREYsRUFPRTtBQUFNLE1BQUUsRUFBQyxxQkFBVDtBQUErQixpQkFBVSxxQkFBekM7QUFBK0QsS0FBQyxFQUFDLDI5Q0FBakU7QUFBNmhELGFBQVMsRUFBQyxxQkFBdmlEO0FBQTZqRCxRQUFJLEVBQUMsdUJBQWxrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQXZCRixFQTZDRTtBQUFNLGFBQVMsRUFBRW5DLHdEQUFNLENBQUNvQyxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQTdDRixDQVhGLENBekhGLENBREY7QUF1TEQsQ0E5TUQ7O0dBQU1wRCxJOztLQUFBQSxJO0FBZ05TQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NzllNGRiMWY0ZTMxY2U4MDdmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGRwciA9IDE7XHJcbiAgICB2YXIgaXNJUGhvbmUgPSB3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL2lwaG9uZS9naSk7XHJcbiAgICB2YXIgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgaWYgKGlzSVBob25lKSB7XHJcbiAgICAgICAgaWYgKGRldmljZVBpeGVsUmF0aW8gPj0gMyAmJiAoIWRwciB8fCBkcHIgPj0gMykpIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRwciA9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkZXZpY2VQaXhlbFJhdGlvID49IDIgJiYgKCFkcHIgfHwgZHByID49IDIpKXtcclxuICAgICAgICAgICAgZHByID0gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkcHIgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g5YW25LuW6K6+5aSH5LiL77yM5LuN5pen5L2/55SoMeWAjeeahOaWueahiFxyXG4gICAgICAgIGRwciA9IDE7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImRwcjogXCIsIGRwcik7XHJcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdO1xyXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKFwiZHByXzFcIilcclxuICAgIGNvbnNvbGUubG9nKGh0bWwpXHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhvbWV9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+REZpbmFuY2U8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmd9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ18yfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnXzN9PlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTkyMCAxMDM4LjM1OFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBpZD1cIm1pbnVzXzJcIiBkYXRhLW5hbWU9XCJtaW51cyAyXCIgZD1cIk0xOTIwLDBIMFYxMDM4LjM1OGM2Ni42NDUtMTYuMDg5LDE0MC4yLTMwLjcwNiwyMTguNjIxLTQzLjQ0NSw3OS4xNDYtMTIuODU2LDE2My44OTUtMjMuOSwyNTEuODkzLTMyLjgzMiw4OS42MjctOS4wOTUsMTgzLjUtMTYuMDgyLDI3OS4wMTEtMjAuNzY2LDQ4LjU1Mi0yLjM4MSw5OC4yNjItNC4yLDE0Ny43NTEtNS40LDUwLjIxNy0xLjIyMiwxMDEuNDMyLTEuODQxLDE1Mi4yMjQtMS44NDEsMTU5LjQ3OSwwLDMxNi4zLDYsNDY2LjEsMTcuODQxLDE0NC44NzEsMTEuNDQ5LDI4MC45MzEsMjguMTYsNDA0LjQsNDkuNjY5VjBaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE5MjAgMTAzOC4zNTgpIHJvdGF0ZSgxODApXCIgZmlsbD1cIiNjYmNiY2JcIiBvcGFjaXR5PVwiMC4yXCIvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ180fT5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE5MjAgMTg5My44NjJcIj5cclxuICAgICAgICAgICAgPHBhdGggaWQ9XCJtaW51c18xXCIgZGF0YS1uYW1lPVwibWludXMgMVwiIGQ9XCJNMTkyMCw5OTYuODYzaDBjLTEwOC4yNDQtMjQuODk0LTIyNC43NjUtNDctMzQ2LjMyOC02NS43MTQtMTI1LjM4NC0xOS4zLTI1NS45MzUtMzQuOTQ0LTM4OC4wMjQtNDYuNS0xNzMuNDM4LTE1LjE3NC0zNDMuNzU3LTIyLjg2OC01MDYuMjI2LTIyLjg2OC0xMzQuMzg4LDAtMjYxLjE5MSw1LjI4NC0zNzYuODg3LDE1LjcwNUMxODguMDI2LDg4Ny44LDg2LjIzOCw5MDIuOTc1LDAsOTIyLjU5Vi04OTdIMTkyMFY5OTYuODYxWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOTIwIDk5Ni44NjMpIHJvdGF0ZSgxODApXCIgZmlsbD1cIiNjYmNiY2JcIi8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnXzZ9PlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMjI0NS43NSAxNjQyLjk0OFwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cImdyb3VwXzU4XCIgZGF0YS1uYW1lPVwiZ3JvdXAgNThcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTE5LjUgLTkzNS43NSlcIj5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMThcIiBkYXRhLW5hbWU9XCJyZWN0IDE4XCIgd2lkdGg9XCIxMzVcIiBoZWlnaHQ9XCIxMzVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM5IDE3MDgpXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzE5XCIgZGF0YS1uYW1lPVwicmVjdCAxOVwiIHdpZHRoPVwiNDA0XCIgaGVpZ2h0PVwiMTM1XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNjYgMTQ2MilcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjRcIiBkYXRhLW5hbWU9XCJyZWN0IDI0XCIgd2lkdGg9XCIyNDlcIiBoZWlnaHQ9XCIyMTdcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDg3MyAxMjkxKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8yMFwiIGRhdGEtbmFtZT1cInJlY3QgMjBcIiB3aWR0aD1cIjQwNFwiIGhlaWdodD1cIjg0MVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQzMCAxMDcwKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8yMVwiIGRhdGEtbmFtZT1cInJlY3QgMjFcIiB3aWR0aD1cIjIxMC41XCIgaGVpZ2h0PVwiMzE2LjVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE5NyA5MzUuNzUpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjJcIiBkYXRhLW5hbWU9XCJyZWN0IDIyXCIgd2lkdGg9XCIxNDQuNjI4XCIgaGVpZ2h0PVwiMTA5LjVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcyNC43NSAxOTA0LjY4Nikgcm90YXRlKDkwKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8yNVwiIGRhdGEtbmFtZT1cInJlY3QgMjVcIiB3aWR0aD1cIjQ2Ni42MjhcIiBoZWlnaHQ9XCI0NjMuNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAyLjUgMjExMi4wNykgcm90YXRlKDkwKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8yM1wiIGRhdGEtbmFtZT1cInJlY3QgMjNcIiB3aWR0aD1cIjM4NS4zMDZcIiBoZWlnaHQ9XCI0MjAuNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjEyNi4yNSAyMDQwLjA3KSByb3RhdGUoOTApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfNX0+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE5NDkuOTk5IDExMzguNzM2XCI+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJtaW51c18zXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmVPZmZzZXQgZHk9XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCI1XCIgcmVzdWx0PVwiYmx1clwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjAuMzAyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPVwiaW5cIiBpbjI9XCJibHVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiLz5cclxuICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsdGVyPVwidXJsKCNtaW51c18zKVwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfMy0yXCIgZGF0YS1uYW1lPVwibWludXMgM1wiIGQ9XCJNMjMxOS4yNDIsMjgyNS4yMDdoLTE5MjBWMTcxNi40N0EyMTIxLjEwNiwyMTIxLjEwNiwwLDAsMCw4MTYuOTI3LDE5OTEuNmEyMjAyLjcwNiwyMjAyLjcwNiwwLDAsMCw0OTEuNTU2LDE3Ni42NThjNDEuMjU3LDkuNTI1LDgzLjIyOSwxNy45NywxMjQuNzQ5LDI1LjEsNDEuMTQ2LDcuMDY4LDgyLjk1OSwxMy4wMzYsMTI0LjI3NywxNy43MzksNDAuOTY0LDQuNjYyLDgyLjUzNiw4LjIsMTIzLjU2MSwxMC41MjksNDAuNywyLjMwNiw4MS45NDgsMy40NzUsMTIyLjYsMy40NzVoLjE4YTIxMjIuNywyMTIyLjcsMCwwLDAsNTE1LjM5Mi02My4yMzN2NjYzLjMzM1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4NC4yNCAtMTcwNC40NylcIiBmaWxsPVwiI2ZmZlwiIG9wYWNpdHk9XCIwLjJcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnXzd9PlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxOTUwIDEwNzkuMjVcIj5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgPGZpbHRlciBpZD1cIm1pbnVzXzRcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuICAgICAgICAgICAgICAgIDxmZU9mZnNldCBkeT1cIjNcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiNVwiIHJlc3VsdD1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwLjMwMlwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj1cImluXCIgaW4yPVwiYmx1clwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIi8+XHJcbiAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgZmlsdGVyPVwidXJsKCNtaW51c180KVwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfNC0yXCIgZGF0YS1uYW1lPVwibWludXMgNFwiIGQ9XCJNMjMxOS4yNDMsMjgyNS4yMDVoLTE5MjBWMTc3NS45NTVjMzIuOSwyNS42NzUsNjcuNjQ2LDUwLjczNywxMDMuMjc5LDc0LjQ5LDM1Ljc1NywyMy44MzUsNzMuMjY3LDQ2LjkyNCwxMTEuNDg3LDY4LjYyNSwzOC40MzMsMjEuODIzLDc4LjUyMiw0Mi43NzUsMTE5LjE1Myw2Mi4yNzMsNDAuOTMsMTkuNjQzLDgzLjQxNiwzOC4yOTMsMTI2LjI3Nyw1NS40MzMsMTc3LjQ2Miw3MC45NjUsMzY3LjczMSwxMTkuMjYxLDU2NS41MjEsMTQzLjU0Nyw0Ny43NTIsNS44NjQsOTYuMTA4LDEwLjMxNywxNDMuNzIzLDEzLjIzNSw0Ny4wMzMsMi44ODMsOTQuNTc2LDQuMzQ1LDE0MS4zMDgsNC4zNDVoLjEyOGMyNi44OTQsMCw1NC4wODMtLjQ4OCw4MC44MTEtMS40NDUsMjYuNTU5LS45NTIsNTMuMzc0LTIuMzk1LDc5LjctNC4yODgsMjYuMTczLTEuODgzLDUyLjU3Ni00LjI2MSw3OC40NzUtNy4wNzEsMjUuNzU2LTIuNzk0LDUxLjcxLTYuMDksNzcuMTQtOS44LDI1LjMtMy42ODcsNTAuNzcxLTcuODgsNzUuNjk1LTEyLjQ2MSwyNC44MTMtNC41NjEsNDkuNzU3LTkuNjMxLDc0LjEzOS0xNS4wNjgsMjQuMjg4LTUuNDE3LDQ4LjY3MS0xMS4zNDMsNzIuNDcyLTE3LjYxNSwyMy43MjItNi4yNTIsNDcuNTA3LTEzLjAxNiw3MC42OTQtMjAuMVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4NC4yNCAtMTc2My45NilcIiBmaWxsPVwiI2ZmZlwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZXN9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpblRpdGxlfT5VbmxlYXNoIHRoZSBwb3dlciBvZiBEZUZpPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3ViVGl0bGV9PkRGaW5hY2UgaXMgYnVpbGRpbmcgdGhlIG9wZW4gZmluYW5jaWFsIHNlcnZpY2VzIGluZnJhc3RydWN0dXJlIGZvciB0aGUgREZJTklUWSBJbnRlcm5ldCBDb21wdXRlci48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5BcHAgaXMgY29taW5nPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwMX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwMV9hY2Nlc3NvcnlfMX0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwMV9hY2Nlc3NvcnlfMn0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwMV9ib3h9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5EU3dhcDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+QXV0b21hdGVkIG1hcmtldCBtYWtlciBkZWNlbnRyYWxpemVkIGV4Y2hhbmdlLjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+Qm9vdHN0cmFwIGxpcXVpZGl0eSBmb3IgeW91ciB0b2tlbnMsIGJ1eSAmIHNlbGwgd2hhdGV2ZXIgdG9rZW5zIHlvdSB3YW50Ljwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAyX2FjY2Vzc29yeV8xfT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAyX2FjY2Vzc29yeV8yfT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAyX2JveH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlRva2VuIElzc3VhbmNlPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5VbmlmaWVkIHRva2VuIHN0YW5kYXJkLjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+SXNzdWUgeW91ciB0b2tlbiBvbiBEZmluaXR5IHdpdGggb25lIGNsaWNrIG9mIGEgYnV0dG9uLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAzfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAzX2JveH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PkRVU0QgU3RhYmxlY29pbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+T3ZlcmNvbGxhdGVyYWxpemVkIHN0YWJsZWNvaW4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5NaW50IERVU0Qgd2l0aCB5b3VyIElDUCB0b2tlbnMgYW5kIG90aGVyIGNyb3NzLWNoYWluIGFzc2V0cy48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAzX2FjY2Vzc29yeV8xfT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXAzX2FjY2Vzc29yeV8yfT5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDU1Mi4zNCAxNTAuMzk3XCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB4MT1cIjAuMjg4XCIgeTE9XCItMC44MzRcIiB4Mj1cIjAuNzNcIiB5Mj1cIjEuNzZcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJwYXRoXzM0XCIgZGF0YS1uYW1lPVwicGF0aCAzNFwiIGQ9XCJNNTIuMjY3LDE4MjMuMTIxYzgwLjQyMi02OS41MjMsMTE5LjM0MiwxNTIuMjUxLDI3Mi4wOTIsNDIuNDY5czE4My45MjEsNDAuNzg2LDI0Ni45NDktMjAuMzkzLDE3LjIyMSwxMTQuNTQxLDE3LjIyMSwxMTQuNTQxTDYxLjM5NCwxOTUxLjc1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTIuMjY3IC0xODA5LjM0KVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDRfYWNjZXNzb3J5XzF9PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDRfYm94fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+RExlbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlY2VudHJhbGl6ZWQgbW9uZXkgbWFya2V0Ljwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+RWFybiBwYXNzaXZlIGluY29tZSBvbiB5b3VyIGFzc2V0cyBhbmQgYm9ycm93IHRva2VucyBmcm9tIHRoZSBsZW5kaW5nIHBvb2wuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwNF9hY2Nlc3NvcnlfMn0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17e29wYWNpdHk6IFwiMFwifX0+REZJTkFOQ0U8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPk9uZXBhZ2VyPC9MaW5rPlxyXG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+V2hpdGUgcGFwZXI8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlRlYW08L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkFwcDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QWJvdXQ8L0xpbms+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxyXG4gICAgICAgICAgey8qIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI0MS41NTRcIiBoZWlnaHQ9XCIzMy43NDlcIiB2aWV3Qm94PVwiMCAwIDQxLjU1NCAzMy43NDlcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtdHdpdHRlclwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS10d2l0dGVyXCIgZD1cIk0zNy4yODMsMTEuNzkyYy4wMjYuMzY5LjAyNi43MzguMDI2LDEuMTA3LDAsMTEuMjU5LTguNTY5LDI0LjIzMS0yNC4yMzEsMjQuMjMxQTI0LjA2NywyNC4wNjcsMCwwLDEsMCwzMy4zMDdhMTcuNjE4LDE3LjYxOCwwLDAsMCwyLjA1Ny4xMDVBMTcuMDU2LDE3LjA1NiwwLDAsMCwxMi42MywyOS43NzRhOC41MzEsOC41MzEsMCwwLDEtNy45NjMtNS45MDZBMTAuNzQsMTAuNzQsMCwwLDAsNi4yNzUsMjRhOS4wMDcsOS4wMDcsMCwwLDAsMi4yNDEtLjI5LDguNTE4LDguNTE4LDAsMCwxLTYuODI5LTguMzU4di0uMTA1YTguNTc3LDguNTc3LDAsMCwwLDMuODUsMS4wODFBOC41MjksOC41MjksMCwwLDEsMi45LDQuOTM2YTI0LjIwOCwyNC4yMDgsMCwwLDAsMTcuNTYsOC45MTJBOS42MTQsOS42MTQsMCwwLDEsMjAuMjUsMTEuOSw4LjUyNSw4LjUyNSwwLDAsMSwzNC45ODksNi4wN2ExNi43NjcsMTYuNzY3LDAsMCwwLDUuNDA1LTIuMDU3QTguNDkzLDguNDkzLDAsMCwxLDM2LjY1LDguNzA3YTE3LjA3MywxNy4wNzMsMCwwLDAsNC45LTEuMzE4LDE4LjMwNywxOC4zMDcsMCwwLDEtNC4yNzEsNC40WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0zLjM4MSlcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjQwLjAwOVwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCA0MC4wMDkgNDBcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtaW5zdGFncmFtXCIgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLWluc3RhZ3JhbVwiIGQ9XCJNMjAsMTEuOTgyQTEwLjI1NiwxMC4yNTYsMCwxLDAsMzAuMjU5LDIyLjIzOCwxMC4yMzksMTAuMjM5LDAsMCwwLDIwLDExLjk4MlptMCwxNi45MjNhNi42NjcsNi42NjcsMCwxLDEsNi42NjctNi42NjdBNi42OCw2LjY4LDAsMCwxLDIwLDI4LjkwNVpNMzMuMDcxLDExLjU2M2EyLjM5MiwyLjM5MiwwLDEsMS0yLjM5Mi0yLjM5MkEyLjM4NywyLjM4NywwLDAsMSwzMy4wNzEsMTEuNTYzWm02Ljc5MiwyLjQyOGMtLjE1Mi0zLjItLjg4NC02LjA0My0zLjIzMS04LjM4MXMtNS4xNzctMy4wNy04LjM4MS0zLjIzMWMtMy4zLS4xODctMTMuMi0uMTg3LTE2LjUsMC0zLjIuMTUyLTYuMDM0Ljg4NC04LjM4MSwzLjIyMlMuMywxMC43NzcuMTM1LDEzLjk4MmMtLjE4NywzLjMtLjE4NywxMy4yLDAsMTYuNS4xNTIsMy4yLjg4NCw2LjA0MywzLjIzMSw4LjM4MXM1LjE3NywzLjA3LDguMzgxLDMuMjMxYzMuMy4xODcsMTMuMi4xODcsMTYuNSwwLDMuMi0uMTUyLDYuMDQzLS44ODQsOC4zODEtMy4yMzFzMy4wNy01LjE3NywzLjIzMS04LjM4MWMuMTg3LTMuMy4xODctMTMuMTkyLDAtMTYuNDk1Wk0zNS42LDM0LjAyOGE2Ljc1LDYuNzUsMCwwLDEtMy44LDMuOGMtMi42MzMsMS4wNDQtOC44ODEuOC0xMS43OTEuOHMtOS4xNjcuMjMyLTExLjc5MS0uOGE2Ljc1LDYuNzUsMCwwLDEtMy44LTMuOGMtMS4wNDQtMi42MzMtLjgtOC44ODEtLjgtMTEuNzkxcy0uMjMyLTkuMTY3LjgtMTEuNzkxYTYuNzUsNi43NSwwLDAsMSwzLjgtMy44YzIuNjMzLTEuMDQ0LDguODgxLS44LDExLjc5MS0uOHM5LjE2Ny0uMjMyLDExLjc5MS44YTYuNzUsNi43NSwwLDAsMSwzLjgsMy44YzEuMDQ0LDIuNjMzLjgsOC44ODEuOCwxMS43OTFTMzYuNjQxLDMxLjQsMzUuNiwzNC4wMjhaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDA1IC0yLjIzOClcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RmaW5hbmNlLXRlY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjM4LjA2N1wiIGhlaWdodD1cIjM3LjExNlwiIHZpZXdCb3g9XCIwIDAgMzguMDY3IDM3LjExNlwiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeTE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UxMmI3Y1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzMjNhOGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1naXRodWJcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtZ2l0aHViXCIgZD1cIk0xMi43MzMsMzAuNDQ4YzAsLjE1My0uMTc3LjI3Ni0uNC4yNzYtLjI1My4wMjMtLjQzLS4xLS40My0uMjc2LDAtLjE1My4xNzctLjI3Ni40LS4yNzZDMTIuNTMzLDMwLjE0OSwxMi43MzMsMzAuMjcyLDEyLjczMywzMC40NDhaTTEwLjM0NiwzMC4xYy0uMDU0LjE1My4xLjMzLjMzLjM3NmEuMzYuMzYsMCwwLDAsLjQ3Ni0uMTUzYy4wNDYtLjE1My0uMS0uMzMtLjMzLS40QS4zOTQuMzk0LDAsMCwwLDEwLjM0NiwzMC4xWm0zLjM5Mi0uMTNjLS4yMjMuMDU0LS4zNzYuMi0uMzUzLjM3Ni4wMjMuMTUzLjIyMy4yNTMuNDUzLjJzLjM3Ni0uMi4zNTMtLjM1M1MxMy45NiwyOS45NDksMTMuNzM4LDI5Ljk3MlpNMTguNzg4LjU2M0ExOC40LDE4LjQsMCwwLDAsMCwxOS4yODksMTkuMjQxLDE5LjI0MSwwLDAsMCwxMy4wMDksMzcuNjQ3Yy45ODIuMTc3LDEuMzI4LS40MywxLjMyOC0uOTI5LDAtLjQ3Ni0uMDIzLTMuMS0uMDIzLTQuNzEyLDAsMC01LjM3MiwxLjE1MS02LjUtMi4yODcsMCwwLS44NzUtMi4yMzMtMi4xMzQtMi44MDksMCwwLTEuNzU4LTEuMi4xMjMtMS4xODJhNC4wNTEsNC4wNTEsMCwwLDEsMi45NjIsMS45OCw0LjA1Nyw0LjA1NywwLDAsMCw1LjU5NSwxLjYsNC4yNjYsNC4yNjYsMCwwLDEsMS4yMjgtMi41ODZjLTQuMjktLjQ3Ni04LjYxOS0xLjEtOC42MTktOC40ODFhNS44MTcsNS44MTcsMCwwLDEsMS44MTEtNC41Miw3LjI1MSw3LjI1MSwwLDAsMSwuMi01LjIxMWMxLjYtLjUsNS4zLDIuMDcyLDUuMywyLjA3MmExOC4xMzEsMTguMTMxLDAsMCwxLDkuNjQsMHMzLjY5Mi0yLjU3OSw1LjMtMi4wNzJhNy4yNDgsNy4yNDgsMCwwLDEsLjIsNS4yMTEsNS45NjYsNS45NjYsMCwwLDEsMS45OCw0LjUyYzAsNy40MDYtNC41Miw4LTguODExLDguNDgxYTQuNTM5LDQuNTM5LDAsMCwxLDEuMywzLjU2MWMwLDIuNTg2LS4wMjMsNS43ODctLjAyMyw2LjQxNiwwLC41LjM1MywxLjEwNSwxLjMyOC45MjlBMTkuMDY0LDE5LjA2NCwwLDAsMCwzOC4wNjcsMTkuMjg5QzM4LjA2Nyw4LjY0NCwyOS40MzMuNTYzLDE4Ljc4OC41NjNaTTcuNDYsMjcuMDMzYy0uMS4wNzctLjA3Ny4yNTMuMDU0LjQuMTIzLjEyMy4zLjE3Ny40LjA3Ny4xLS4wNzcuMDc3LS4yNTMtLjA1NC0uNEM3LjczNiwyNi45ODcsNy41NiwyNi45MzMsNy40NiwyNy4wMzNabS0uODI5LS42MjJjLS4wNTQuMS4wMjMuMjIzLjE3Ny4zYS4yMjguMjI4LDAsMCwwLC4zMy0uMDU0Yy4wNTQtLjEtLjAyMy0uMjIzLS4xNzctLjNDNi44MDgsMjYuMzExLDYuNjg1LDI2LjMzNSw2LjYzMSwyNi40MTFabTIuNDg3LDIuNzMyYy0uMTIzLjEtLjA3Ny4zMy4xLjQ3Ni4xNzcuMTc3LjQuMi41LjA3Ny4xLS4xLjA1NC0uMzMtLjEtLjQ3NkM5LjQ0OCwyOS4wNDQsOS4yMTcsMjkuMDIxLDkuMTE4LDI5LjE0M1ptLS44NzUtMS4xMjhjLS4xMjMuMDc3LS4xMjMuMjc2LDAsLjQ1M3MuMzMuMjUzLjQzLjE3N2EuMzUuMzUsMCwwLDAsMC0uNDc2QzguNTY1LDI3Ljk5Miw4LjM2NiwyNy45MTYsOC4yNDMsMjguMDE1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0wLjU2MylcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMzMuNzM4XCIgaGVpZ2h0PVwiMzguNTU4XCIgdmlld0JveD1cIjAgMCAzMy43MzggMzguNTU4XCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB5MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLWRpc2NvcmRcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtZGlzY29yZFwiIGQ9XCJNMjIuMzgzLDE4LjMxNWExLjk3MywxLjk3MywwLDEsMS0xLjk2Ni0yLjE0QTIuMDU0LDIuMDU0LDAsMCwxLDIyLjM4MywxOC4zMTVabS05LTIuMTRhMi4xNDgsMi4xNDgsMCwwLDAsMCw0LjI4LDIuMDU0LDIuMDU0LDAsMCwwLDEuOTY2LTIuMTRBMi4wNDIsMi4wNDIsMCwwLDAsMTMuMzgsMTYuMTc1Wm0yMC4zNTktMTIuMlYzOC41NThjLTQuODU3LTQuMjkyLTMuMy0yLjg3MS04Ljk0NS04LjExNmwxLjAyMiwzLjU2N0gzLjk1MkEzLjk2MiwzLjk2MiwwLDAsMSwwLDMwLjAzN1YzLjk3MUEzLjk2MiwzLjk2MiwwLDAsMSwzLjk1MiwwSDI5Ljc4NkEzLjk2MiwzLjk2MiwwLDAsMSwzMy43MzgsMy45NzFaTTI4LjI0NCwyMi4yNDhhMjUuODE4LDI1LjgxOCwwLDAsMC0yLjc3Ni0xMS4yNEE5LjUzNCw5LjUzNCwwLDAsMCwyMC4wNSw4Ljk4NGwtLjI3LjMwOGExMi44MzEsMTIuODMxLDAsMCwxLDQuOCwyLjQ0OCwxNi4zODEsMTYuMzgxLDAsMCwwLTE0LjQtLjU1OWMtLjcxMy4zMjgtMS4xMzcuNTU5LTEuMTM3LjU1OWExMy4wMDYsMTMuMDA2LDAsMCwxLDUuMDctMi41MjZsLS4xOTMtLjIzMUE5LjUzNCw5LjUzNCwwLDAsMCw4LjUsMTEuMDA4YTI1LjgxOCwyNS44MTgsMCwwLDAtMi43NzYsMTEuMjQsNi45OSw2Ljk5LDAsMCwwLDUuODgsMi45M3MuNzEzLS44NjgsMS4yOTItMS42QTYsNiwwLDAsMSw5LjUyNCwyMS4zYy4yODQuMi43NTEuNDU2Ljc5LjQ4MmExNC4wNTMsMTQuMDUzLDAsMCwwLDEyLjAzLjY3NSwxMS4wMzIsMTEuMDMyLDAsMCwwLDIuMjE3LTEuMTM3LDYuMDgzLDYuMDgzLDAsMCwxLTMuNDg5LDIuMjk0Yy41NzguNzMzLDEuMjcyLDEuNTYyLDEuMjcyLDEuNTYyQTcuMDQ3LDcuMDQ3LDAsMCwwLDI4LjI0NCwyMi4yNDhaXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5Db3B5cmlnaHQgwqkgMjAyMSBERmluYW5jZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9