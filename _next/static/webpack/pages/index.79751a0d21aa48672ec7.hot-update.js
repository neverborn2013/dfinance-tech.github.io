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
    html.classList.add("dpr_".concat(dpr));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJkcHIiLCJpc0lQaG9uZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJtYXRjaCIsImRldmljZVBpeGVsUmF0aW8iLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZXMiLCJiZyIsImJnXzEiLCJiZ18yIiwiYmdfMyIsImJnXzQiLCJiZ182IiwiYmdfNSIsImJnXzciLCJoZWFkZXIiLCJicmFuZCIsInRpdGxlcyIsIm1haW5UaXRsZSIsInN1YlRpdGxlIiwiYm9keSIsImJveEdyb3VwMSIsImJveEdyb3VwMV9hY2Nlc3NvcnlfMSIsImJveEdyb3VwMV9hY2Nlc3NvcnlfMiIsImJveEdyb3VwMV9ib3giLCJtYWluIiwiYm94R3JvdXAyIiwiYm94R3JvdXAyX2FjY2Vzc29yeV8xIiwiYm94R3JvdXAyX2FjY2Vzc29yeV8yIiwiYm94R3JvdXAyX2JveCIsImJveEdyb3VwMyIsImJveEdyb3VwM19ib3giLCJib3hHcm91cDNfYWNjZXNzb3J5XzEiLCJib3hHcm91cDNfYWNjZXNzb3J5XzIiLCJib3hHcm91cDQiLCJib3hHcm91cDRfYWNjZXNzb3J5XzEiLCJib3hHcm91cDRfYm94IiwiYm94R3JvdXA0X2FjY2Vzc29yeV8yIiwiZm9vdGVyIiwib3BhY2l0eSIsImxpbmtzIiwiaWNvbnMiLCJjb3B5cmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsUUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQUND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QztBQUE4QyxNQUFFLEVBQUMsS0FBakQ7QUFBdUQsTUFBRSxFQUFDLEdBQTFEO0FBQThELGlCQUFhLEVBQUMsbUJBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFVBQU0sRUFBQyxHQUFiO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLFVBQU0sRUFBQyxHQUFiO0FBQWlCLGFBQVMsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLEVBT0U7QUFBTSxNQUFFLEVBQUMscUJBQVQ7QUFBK0IsaUJBQVUscUJBQXpDO0FBQStELEtBQUMsRUFBQywyOUNBQWpFO0FBQTZoRCxhQUFTLEVBQUMscUJBQXZpRDtBQUE2akQsUUFBSSxFQUFDLHVCQUFsa0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREYsQ0F2QkYsRUE2Q0U7QUFBTSxhQUFTLEVBQUVuQyx3REFBTSxDQUFDb0MsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREE3Q0YsQ0FYRixDQXpIRixDQURGO0FBdUxELENBOU1EOztHQUFNcEQsSTs7S0FBQUEsSTtBQWdOU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzk3NTFhMGQyMWFhNDg2NzJlYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBkcHIgPSAxO1xyXG4gICAgdmFyIGlzSVBob25lID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9pcGhvbmUvZ2kpO1xyXG4gICAgdmFyIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgIGlmIChpc0lQaG9uZSkge1xyXG4gICAgICAgIGlmIChkZXZpY2VQaXhlbFJhdGlvID49IDMgJiYgKCFkcHIgfHwgZHByID49IDMpKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkcHIgPSAzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlUGl4ZWxSYXRpbyA+PSAyICYmICghZHByIHx8IGRwciA+PSAyKSl7XHJcbiAgICAgICAgICAgIGRwciA9IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZHByID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOWFtuS7luiuvuWkh+S4i++8jOS7jeaXp+S9v+eUqDHlgI3nmoTmlrnmoYhcclxuICAgICAgICBkcHIgPSAxO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJkcHI6IFwiLCBkcHIpO1xyXG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcclxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZChgZHByXyR7ZHByfWApXHJcbiAgICBjb25zb2xlLmxvZyhodG1sKVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ib21lfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRGaW5hbmNlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnXzF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ18zfT5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE5MjAgMTAzOC4zNThcIj5cclxuICAgICAgICAgICAgPHBhdGggaWQ9XCJtaW51c18yXCIgZGF0YS1uYW1lPVwibWludXMgMlwiIGQ9XCJNMTkyMCwwSDBWMTAzOC4zNThjNjYuNjQ1LTE2LjA4OSwxNDAuMi0zMC43MDYsMjE4LjYyMS00My40NDUsNzkuMTQ2LTEyLjg1NiwxNjMuODk1LTIzLjksMjUxLjg5My0zMi44MzIsODkuNjI3LTkuMDk1LDE4My41LTE2LjA4MiwyNzkuMDExLTIwLjc2Niw0OC41NTItMi4zODEsOTguMjYyLTQuMiwxNDcuNzUxLTUuNCw1MC4yMTctMS4yMjIsMTAxLjQzMi0xLjg0MSwxNTIuMjI0LTEuODQxLDE1OS40NzksMCwzMTYuMyw2LDQ2Ni4xLDE3Ljg0MSwxNDQuODcxLDExLjQ0OSwyODAuOTMxLDI4LjE2LDQwNC40LDQ5LjY2OVYwWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOTIwIDEwMzguMzU4KSByb3RhdGUoMTgwKVwiIGZpbGw9XCIjY2JjYmNiXCIgb3BhY2l0eT1cIjAuMlwiLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfNH0+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxOTIwIDE4OTMuODYyXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfMVwiIGRhdGEtbmFtZT1cIm1pbnVzIDFcIiBkPVwiTTE5MjAsOTk2Ljg2M2gwYy0xMDguMjQ0LTI0Ljg5NC0yMjQuNzY1LTQ3LTM0Ni4zMjgtNjUuNzE0LTEyNS4zODQtMTkuMy0yNTUuOTM1LTM0Ljk0NC0zODguMDI0LTQ2LjUtMTczLjQzOC0xNS4xNzQtMzQzLjc1Ny0yMi44NjgtNTA2LjIyNi0yMi44NjgtMTM0LjM4OCwwLTI2MS4xOTEsNS4yODQtMzc2Ljg4NywxNS43MDVDMTg4LjAyNiw4ODcuOCw4Ni4yMzgsOTAyLjk3NSwwLDkyMi41OVYtODk3SDE5MjBWOTk2Ljg2MVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTkyMCA5OTYuODYzKSByb3RhdGUoMTgwKVwiIGZpbGw9XCIjY2JjYmNiXCIvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ182fT5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDIyNDUuNzUgMTY0Mi45NDhcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJncm91cF81OFwiIGRhdGEtbmFtZT1cImdyb3VwIDU4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExOS41IC05MzUuNzUpXCI+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzE4XCIgZGF0YS1uYW1lPVwicmVjdCAxOFwiIHdpZHRoPVwiMTM1XCIgaGVpZ2h0PVwiMTM1XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOSAxNzA4KVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8xOVwiIGRhdGEtbmFtZT1cInJlY3QgMTlcIiB3aWR0aD1cIjQwNFwiIGhlaWdodD1cIjEzNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjY2IDE0NjIpXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzI0XCIgZGF0YS1uYW1lPVwicmVjdCAyNFwiIHdpZHRoPVwiMjQ5XCIgaGVpZ2h0PVwiMjE3XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4NzMgMTI5MSlcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjBcIiBkYXRhLW5hbWU9XCJyZWN0IDIwXCIgd2lkdGg9XCI0MDRcIiBoZWlnaHQ9XCI4NDFcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MzAgMTA3MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjFcIiBkYXRhLW5hbWU9XCJyZWN0IDIxXCIgd2lkdGg9XCIyMTAuNVwiIGhlaWdodD1cIjMxNi41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOTcgOTM1Ljc1KSByb3RhdGUoOTApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIyXCIgZGF0YS1uYW1lPVwicmVjdCAyMlwiIHdpZHRoPVwiMTQ0LjYyOFwiIGhlaWdodD1cIjEwOS41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MjQuNzUgMTkwNC42ODYpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjVcIiBkYXRhLW5hbWU9XCJyZWN0IDI1XCIgd2lkdGg9XCI0NjYuNjI4XCIgaGVpZ2h0PVwiNDYzLjVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwMi41IDIxMTIuMDcpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjNcIiBkYXRhLW5hbWU9XCJyZWN0IDIzXCIgd2lkdGg9XCIzODUuMzA2XCIgaGVpZ2h0PVwiNDIwLjVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIxMjYuMjUgMjA0MC4wNykgcm90YXRlKDkwKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnXzV9PlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxOTQ5Ljk5OSAxMTM4LjczNlwiPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwibWludXNfM1wiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG4gICAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PVwiM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiNVwiIHJlc3VsdD1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwLjMwMlwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj1cImluXCIgaW4yPVwiYmx1clwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIi8+XHJcbiAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbHRlcj1cInVybCgjbWludXNfMylcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIm1pbnVzXzMtMlwiIGRhdGEtbmFtZT1cIm1pbnVzIDNcIiBkPVwiTTIzMTkuMjQyLDI4MjUuMjA3aC0xOTIwVjE3MTYuNDdBMjEyMS4xMDYsMjEyMS4xMDYsMCwwLDAsODE2LjkyNywxOTkxLjZhMjIwMi43MDYsMjIwMi43MDYsMCwwLDAsNDkxLjU1NiwxNzYuNjU4YzQxLjI1Nyw5LjUyNSw4My4yMjksMTcuOTcsMTI0Ljc0OSwyNS4xLDQxLjE0Niw3LjA2OCw4Mi45NTksMTMuMDM2LDEyNC4yNzcsMTcuNzM5LDQwLjk2NCw0LjY2Miw4Mi41MzYsOC4yLDEyMy41NjEsMTAuNTI5LDQwLjcsMi4zMDYsODEuOTQ4LDMuNDc1LDEyMi42LDMuNDc1aC4xOGEyMTIyLjcsMjEyMi43LDAsMCwwLDUxNS4zOTItNjMuMjMzdjY2My4zMzNaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODQuMjQgLTE3MDQuNDcpXCIgZmlsbD1cIiNmZmZcIiBvcGFjaXR5PVwiMC4yXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ183fT5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTk1MCAxMDc5LjI1XCI+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJtaW51c180XCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmVPZmZzZXQgZHk9XCIzXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjVcIiByZXN1bHQ9XCJibHVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMC4zMDJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgb3BlcmF0b3I9XCJpblwiIGluMj1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIvPlxyXG4gICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIGZpbHRlcj1cInVybCgjbWludXNfNClcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIm1pbnVzXzQtMlwiIGRhdGEtbmFtZT1cIm1pbnVzIDRcIiBkPVwiTTIzMTkuMjQzLDI4MjUuMjA1aC0xOTIwVjE3NzUuOTU1YzMyLjksMjUuNjc1LDY3LjY0Niw1MC43MzcsMTAzLjI3OSw3NC40OSwzNS43NTcsMjMuODM1LDczLjI2Nyw0Ni45MjQsMTExLjQ4Nyw2OC42MjUsMzguNDMzLDIxLjgyMyw3OC41MjIsNDIuNzc1LDExOS4xNTMsNjIuMjczLDQwLjkzLDE5LjY0Myw4My40MTYsMzguMjkzLDEyNi4yNzcsNTUuNDMzLDE3Ny40NjIsNzAuOTY1LDM2Ny43MzEsMTE5LjI2MSw1NjUuNTIxLDE0My41NDcsNDcuNzUyLDUuODY0LDk2LjEwOCwxMC4zMTcsMTQzLjcyMywxMy4yMzUsNDcuMDMzLDIuODgzLDk0LjU3Niw0LjM0NSwxNDEuMzA4LDQuMzQ1aC4xMjhjMjYuODk0LDAsNTQuMDgzLS40ODgsODAuODExLTEuNDQ1LDI2LjU1OS0uOTUyLDUzLjM3NC0yLjM5NSw3OS43LTQuMjg4LDI2LjE3My0xLjg4Myw1Mi41NzYtNC4yNjEsNzguNDc1LTcuMDcxLDI1Ljc1Ni0yLjc5NCw1MS43MS02LjA5LDc3LjE0LTkuOCwyNS4zLTMuNjg3LDUwLjc3MS03Ljg4LDc1LjY5NS0xMi40NjEsMjQuODEzLTQuNTYxLDQ5Ljc1Ny05LjYzMSw3NC4xMzktMTUuMDY4LDI0LjI4OC01LjQxNyw0OC42NzEtMTEuMzQzLDcyLjQ3Mi0xNy42MTUsMjMuNzIyLTYuMjUyLDQ3LjUwNy0xMy4wMTYsNzAuNjk0LTIwLjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODQuMjQgLTE3NjMuOTYpXCIgZmlsbD1cIiNmZmZcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmR9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVzfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW5UaXRsZX0+VW5sZWFzaCB0aGUgcG93ZXIgb2YgRGVGaTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN1YlRpdGxlfT5ERmluYWNlIGlzIGJ1aWxkaW5nIHRoZSBvcGVuIGZpbmFuY2lhbCBzZXJ2aWNlcyBpbmZyYXN0cnVjdHVyZSBmb3IgdGhlIERGSU5JVFkgSW50ZXJuZXQgQ29tcHV0ZXIuPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QXBwIGlzIGNvbWluZzwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDFfYWNjZXNzb3J5XzF9PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDFfYWNjZXNzb3J5XzJ9PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDFfYm94fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+RFN3YXA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkF1dG9tYXRlZCBtYXJrZXQgbWFrZXIgZGVjZW50cmFsaXplZCBleGNoYW5nZS48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkJvb3RzdHJhcCBsaXF1aWRpdHkgZm9yIHlvdXIgdG9rZW5zLCBidXkgJiBzZWxsIHdoYXRldmVyIHRva2VucyB5b3Ugd2FudC48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwMn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwMl9hY2Nlc3NvcnlfMX0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwMl9hY2Nlc3NvcnlfMn0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwMl9ib3h9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5Ub2tlbiBJc3N1YW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+VW5pZmllZCB0b2tlbiBzdGFuZGFyZC48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPklzc3VlIHlvdXIgdG9rZW4gb24gRGZpbml0eSB3aXRoIG9uZSBjbGljayBvZiBhIGJ1dHRvbi48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwM30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwM19ib3h9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5EVVNEIFN0YWJsZWNvaW48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPk92ZXJjb2xsYXRlcmFsaXplZCBzdGFibGVjb2luLjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+TWludCBEVVNEIHdpdGggeW91ciBJQ1AgdG9rZW5zIGFuZCBvdGhlciBjcm9zcy1jaGFpbiBhc3NldHMuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwM19hY2Nlc3NvcnlfMX0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyb3VwM19hY2Nlc3NvcnlfMn0+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCA1NTIuMzQgMTUwLjM5N1wiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeDE9XCIwLjI4OFwiIHkxPVwiLTAuODM0XCIgeDI9XCIwLjczXCIgeTI9XCIxLjc2XCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwicGF0aF8zNFwiIGRhdGEtbmFtZT1cInBhdGggMzRcIiBkPVwiTTUyLjI2NywxODIzLjEyMWM4MC40MjItNjkuNTIzLDExOS4zNDIsMTUyLjI1MSwyNzIuMDkyLDQyLjQ2OXMxODMuOTIxLDQwLjc4NiwyNDYuOTQ5LTIwLjM5MywxNy4yMjEsMTE0LjU0MSwxNy4yMjEsMTE0LjU0MUw2MS4zOTQsMTk1MS43NVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUyLjI2NyAtMTgwOS4zNClcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXA0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXA0X2FjY2Vzc29yeV8xfT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JvdXA0X2JveH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PkRMZW5kPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5EZWNlbnRyYWxpemVkIG1vbmV5IG1hcmtldC48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkVhcm4gcGFzc2l2ZSBpbmNvbWUgb24geW91ciBhc3NldHMgYW5kIGJvcnJvdyB0b2tlbnMgZnJvbSB0aGUgbGVuZGluZyBwb29sLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hHcm91cDRfYWNjZXNzb3J5XzJ9PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmR9PlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tvcGFjaXR5OiBcIjBcIn19PkRGSU5BTkNFPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5PbmVwYWdlcjwvTGluaz5cclxuICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiPldoaXRlIHBhcGVyPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5UZWFtPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5BcHA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkFib3V0PC9MaW5rPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiNDEuNTU0XCIgaGVpZ2h0PVwiMzMuNzQ5XCIgdmlld0JveD1cIjAgMCA0MS41NTQgMzMuNzQ5XCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB5MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLXR3aXR0ZXJcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtdHdpdHRlclwiIGQ9XCJNMzcuMjgzLDExLjc5MmMuMDI2LjM2OS4wMjYuNzM4LjAyNiwxLjEwNywwLDExLjI1OS04LjU2OSwyNC4yMzEtMjQuMjMxLDI0LjIzMUEyNC4wNjcsMjQuMDY3LDAsMCwxLDAsMzMuMzA3YTE3LjYxOCwxNy42MTgsMCwwLDAsMi4wNTcuMTA1QTE3LjA1NiwxNy4wNTYsMCwwLDAsMTIuNjMsMjkuNzc0YTguNTMxLDguNTMxLDAsMCwxLTcuOTYzLTUuOTA2QTEwLjc0LDEwLjc0LDAsMCwwLDYuMjc1LDI0YTkuMDA3LDkuMDA3LDAsMCwwLDIuMjQxLS4yOSw4LjUxOCw4LjUxOCwwLDAsMS02LjgyOS04LjM1OHYtLjEwNWE4LjU3Nyw4LjU3NywwLDAsMCwzLjg1LDEuMDgxQTguNTI5LDguNTI5LDAsMCwxLDIuOSw0LjkzNmEyNC4yMDgsMjQuMjA4LDAsMCwwLDE3LjU2LDguOTEyQTkuNjE0LDkuNjE0LDAsMCwxLDIwLjI1LDExLjksOC41MjUsOC41MjUsMCwwLDEsMzQuOTg5LDYuMDdhMTYuNzY3LDE2Ljc2NywwLDAsMCw1LjQwNS0yLjA1N0E4LjQ5Myw4LjQ5MywwLDAsMSwzNi42NSw4LjcwN2ExNy4wNzMsMTcuMDczLDAsMCwwLDQuOS0xLjMxOCwxOC4zMDcsMTguMzA3LDAsMCwxLTQuMjcxLDQuNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMy4zODEpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgey8qIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI0MC4wMDlcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAuMDA5IDQwXCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB5MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLWluc3RhZ3JhbVwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1pbnN0YWdyYW1cIiBkPVwiTTIwLDExLjk4MkExMC4yNTYsMTAuMjU2LDAsMSwwLDMwLjI1OSwyMi4yMzgsMTAuMjM5LDEwLjIzOSwwLDAsMCwyMCwxMS45ODJabTAsMTYuOTIzYTYuNjY3LDYuNjY3LDAsMSwxLDYuNjY3LTYuNjY3QTYuNjgsNi42OCwwLDAsMSwyMCwyOC45MDVaTTMzLjA3MSwxMS41NjNhMi4zOTIsMi4zOTIsMCwxLDEtMi4zOTItMi4zOTJBMi4zODcsMi4zODcsMCwwLDEsMzMuMDcxLDExLjU2M1ptNi43OTIsMi40MjhjLS4xNTItMy4yLS44ODQtNi4wNDMtMy4yMzEtOC4zODFzLTUuMTc3LTMuMDctOC4zODEtMy4yMzFjLTMuMy0uMTg3LTEzLjItLjE4Ny0xNi41LDAtMy4yLjE1Mi02LjAzNC44ODQtOC4zODEsMy4yMjJTLjMsMTAuNzc3LjEzNSwxMy45ODJjLS4xODcsMy4zLS4xODcsMTMuMiwwLDE2LjUuMTUyLDMuMi44ODQsNi4wNDMsMy4yMzEsOC4zODFzNS4xNzcsMy4wNyw4LjM4MSwzLjIzMWMzLjMuMTg3LDEzLjIuMTg3LDE2LjUsMCwzLjItLjE1Miw2LjA0My0uODg0LDguMzgxLTMuMjMxczMuMDctNS4xNzcsMy4yMzEtOC4zODFjLjE4Ny0zLjMuMTg3LTEzLjE5MiwwLTE2LjQ5NVpNMzUuNiwzNC4wMjhhNi43NSw2Ljc1LDAsMCwxLTMuOCwzLjhjLTIuNjMzLDEuMDQ0LTguODgxLjgtMTEuNzkxLjhzLTkuMTY3LjIzMi0xMS43OTEtLjhhNi43NSw2Ljc1LDAsMCwxLTMuOC0zLjhjLTEuMDQ0LTIuNjMzLS44LTguODgxLS44LTExLjc5MXMtLjIzMi05LjE2Ny44LTExLjc5MWE2Ljc1LDYuNzUsMCwwLDEsMy44LTMuOGMyLjYzMy0xLjA0NCw4Ljg4MS0uOCwxMS43OTEtLjhzOS4xNjctLjIzMiwxMS43OTEuOGE2Ljc1LDYuNzUsMCwwLDEsMy44LDMuOGMxLjA0NCwyLjYzMy44LDguODgxLjgsMTEuNzkxUzM2LjY0MSwzMS40LDM1LjYsMzQuMDI4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwNSAtMi4yMzgpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZmluYW5jZS10ZWNoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzOC4wNjdcIiBoZWlnaHQ9XCIzNy4xMTZcIiB2aWV3Qm94PVwiMCAwIDM4LjA2NyAzNy4xMTZcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtZ2l0aHViXCIgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLWdpdGh1YlwiIGQ9XCJNMTIuNzMzLDMwLjQ0OGMwLC4xNTMtLjE3Ny4yNzYtLjQuMjc2LS4yNTMuMDIzLS40My0uMS0uNDMtLjI3NiwwLS4xNTMuMTc3LS4yNzYuNC0uMjc2QzEyLjUzMywzMC4xNDksMTIuNzMzLDMwLjI3MiwxMi43MzMsMzAuNDQ4Wk0xMC4zNDYsMzAuMWMtLjA1NC4xNTMuMS4zMy4zMy4zNzZhLjM2LjM2LDAsMCwwLC40NzYtLjE1M2MuMDQ2LS4xNTMtLjEtLjMzLS4zMy0uNEEuMzk0LjM5NCwwLDAsMCwxMC4zNDYsMzAuMVptMy4zOTItLjEzYy0uMjIzLjA1NC0uMzc2LjItLjM1My4zNzYuMDIzLjE1My4yMjMuMjUzLjQ1My4ycy4zNzYtLjIuMzUzLS4zNTNTMTMuOTYsMjkuOTQ5LDEzLjczOCwyOS45NzJaTTE4Ljc4OC41NjNBMTguNCwxOC40LDAsMCwwLDAsMTkuMjg5LDE5LjI0MSwxOS4yNDEsMCwwLDAsMTMuMDA5LDM3LjY0N2MuOTgyLjE3NywxLjMyOC0uNDMsMS4zMjgtLjkyOSwwLS40NzYtLjAyMy0zLjEtLjAyMy00LjcxMiwwLDAtNS4zNzIsMS4xNTEtNi41LTIuMjg3LDAsMC0uODc1LTIuMjMzLTIuMTM0LTIuODA5LDAsMC0xLjc1OC0xLjIuMTIzLTEuMTgyYTQuMDUxLDQuMDUxLDAsMCwxLDIuOTYyLDEuOTgsNC4wNTcsNC4wNTcsMCwwLDAsNS41OTUsMS42LDQuMjY2LDQuMjY2LDAsMCwxLDEuMjI4LTIuNTg2Yy00LjI5LS40NzYtOC42MTktMS4xLTguNjE5LTguNDgxYTUuODE3LDUuODE3LDAsMCwxLDEuODExLTQuNTIsNy4yNTEsNy4yNTEsMCwwLDEsLjItNS4yMTFjMS42LS41LDUuMywyLjA3Miw1LjMsMi4wNzJhMTguMTMxLDE4LjEzMSwwLDAsMSw5LjY0LDBzMy42OTItMi41NzksNS4zLTIuMDcyYTcuMjQ4LDcuMjQ4LDAsMCwxLC4yLDUuMjExLDUuOTY2LDUuOTY2LDAsMCwxLDEuOTgsNC41MmMwLDcuNDA2LTQuNTIsOC04LjgxMSw4LjQ4MWE0LjUzOSw0LjUzOSwwLDAsMSwxLjMsMy41NjFjMCwyLjU4Ni0uMDIzLDUuNzg3LS4wMjMsNi40MTYsMCwuNS4zNTMsMS4xMDUsMS4zMjguOTI5QTE5LjA2NCwxOS4wNjQsMCwwLDAsMzguMDY3LDE5LjI4OUMzOC4wNjcsOC42NDQsMjkuNDMzLjU2MywxOC43ODguNTYzWk03LjQ2LDI3LjAzM2MtLjEuMDc3LS4wNzcuMjUzLjA1NC40LjEyMy4xMjMuMy4xNzcuNC4wNzcuMS0uMDc3LjA3Ny0uMjUzLS4wNTQtLjRDNy43MzYsMjYuOTg3LDcuNTYsMjYuOTMzLDcuNDYsMjcuMDMzWm0tLjgyOS0uNjIyYy0uMDU0LjEuMDIzLjIyMy4xNzcuM2EuMjI4LjIyOCwwLDAsMCwuMzMtLjA1NGMuMDU0LS4xLS4wMjMtLjIyMy0uMTc3LS4zQzYuODA4LDI2LjMxMSw2LjY4NSwyNi4zMzUsNi42MzEsMjYuNDExWm0yLjQ4NywyLjczMmMtLjEyMy4xLS4wNzcuMzMuMS40NzYuMTc3LjE3Ny40LjIuNS4wNzcuMS0uMS4wNTQtLjMzLS4xLS40NzZDOS40NDgsMjkuMDQ0LDkuMjE3LDI5LjAyMSw5LjExOCwyOS4xNDNabS0uODc1LTEuMTI4Yy0uMTIzLjA3Ny0uMTIzLjI3NiwwLC40NTNzLjMzLjI1My40My4xNzdhLjM1LjM1LDAsMCwwLDAtLjQ3NkM4LjU2NSwyNy45OTIsOC4zNjYsMjcuOTE2LDguMjQzLDI4LjAxNVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMC41NjMpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjMzLjczOFwiIGhlaWdodD1cIjM4LjU1OFwiIHZpZXdCb3g9XCIwIDAgMzMuNzM4IDM4LjU1OFwiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeTE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UxMmI3Y1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzMjNhOGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1kaXNjb3JkXCIgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLWRpc2NvcmRcIiBkPVwiTTIyLjM4MywxOC4zMTVhMS45NzMsMS45NzMsMCwxLDEtMS45NjYtMi4xNEEyLjA1NCwyLjA1NCwwLDAsMSwyMi4zODMsMTguMzE1Wm0tOS0yLjE0YTIuMTQ4LDIuMTQ4LDAsMCwwLDAsNC4yOCwyLjA1NCwyLjA1NCwwLDAsMCwxLjk2Ni0yLjE0QTIuMDQyLDIuMDQyLDAsMCwwLDEzLjM4LDE2LjE3NVptMjAuMzU5LTEyLjJWMzguNTU4Yy00Ljg1Ny00LjI5Mi0zLjMtMi44NzEtOC45NDUtOC4xMTZsMS4wMjIsMy41NjdIMy45NTJBMy45NjIsMy45NjIsMCwwLDEsMCwzMC4wMzdWMy45NzFBMy45NjIsMy45NjIsMCwwLDEsMy45NTIsMEgyOS43ODZBMy45NjIsMy45NjIsMCwwLDEsMzMuNzM4LDMuOTcxWk0yOC4yNDQsMjIuMjQ4YTI1LjgxOCwyNS44MTgsMCwwLDAtMi43NzYtMTEuMjRBOS41MzQsOS41MzQsMCwwLDAsMjAuMDUsOC45ODRsLS4yNy4zMDhhMTIuODMxLDEyLjgzMSwwLDAsMSw0LjgsMi40NDgsMTYuMzgxLDE2LjM4MSwwLDAsMC0xNC40LS41NTljLS43MTMuMzI4LTEuMTM3LjU1OS0xLjEzNy41NTlhMTMuMDA2LDEzLjAwNiwwLDAsMSw1LjA3LTIuNTI2bC0uMTkzLS4yMzFBOS41MzQsOS41MzQsMCwwLDAsOC41LDExLjAwOGEyNS44MTgsMjUuODE4LDAsMCwwLTIuNzc2LDExLjI0LDYuOTksNi45OSwwLDAsMCw1Ljg4LDIuOTNzLjcxMy0uODY4LDEuMjkyLTEuNkE2LDYsMCwwLDEsOS41MjQsMjEuM2MuMjg0LjIuNzUxLjQ1Ni43OS40ODJhMTQuMDUzLDE0LjA1MywwLDAsMCwxMi4wMy42NzUsMTEuMDMyLDExLjAzMiwwLDAsMCwyLjIxNy0xLjEzNyw2LjA4Myw2LjA4MywwLDAsMS0zLjQ4OSwyLjI5NGMuNTc4LjczMywxLjI3MiwxLjU2MiwxLjI3MiwxLjU2MkE3LjA0Nyw3LjA0NywwLDAsMCwyOC4yNDQsMjIuMjQ4WlwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+Q29weXJpZ2h0IMKpIDIwMjEgREZpbmFuY2UuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==