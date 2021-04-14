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
var _this = undefined,
    _jsxFileName = "D:\\Workplace\\homepage\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Home = function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // let dpr = 1;
    // var isIPhone = window.navigator.appVersion.match(/iphone/gi);
    // var devicePixelRatio = window.devicePixelRatio;
    // if (isIPhone) {
    //     if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
    //         dpr = 3;
    //     } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
    //         dpr = 2;
    //     } else {
    //         dpr = 1;
    //     }
    // } else {
    //     // 其他设备下，仍旧使用1倍的方案
    //     dpr = 1;
    // }
    // const html = document.getElementsByTagName("html")[0];
    // // html.classList.add(`dpr_${dpr}`);
    // console.log(window.devicePixelRatio);
    // html.classList.add(`dpr_${window.devicePixelRatio.toFixed(0)}`);
    var isMobile = function isMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    };

    var val = isMobile();
    alert(val);

    if (val) {
      var html = document.getElementsByTagName("html")[0];
      html.classList.add("mobile");
    }
  }, []);
  return __jsx("div", {
    className: "Home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "DFinance")), __jsx("div", {
    className: "bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bg_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg_2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg_3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1920 1038.358",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "bg_4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1920 1893.862",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "bg_6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2245.75 1642.948",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("g", {
    id: "group_58",
    "data-name": "group 58",
    transform: "translate(119.5 -935.75)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
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
      lineNumber: 75,
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
      lineNumber: 76,
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
      lineNumber: 77,
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
      lineNumber: 78,
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
      lineNumber: 79,
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
      lineNumber: 80,
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
      lineNumber: 81,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "bg_5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1949.999 1138.736",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("feOffset", {
    dy: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "5",
    result: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx("feFlood", {
    floodOpacity: "0.302",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    "in": "SourceGraphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "bg_7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1950 1079.25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("feOffset", {
    dy: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "5",
    result: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }), __jsx("feFlood", {
    floodOpacity: "0.302",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx("feComposite", {
    "in": "SourceGraphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }))), __jsx("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "url(#minus_4)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "titles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "mainTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, navigator.userAgent.match(/Android/i), "Unleash the power of DeFi"), __jsx("span", {
    className: "subTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "DFinace is building the open financial services infrastructure for the DFINITY Internet Computer.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, "App is coming")), __jsx("div", {
    className: "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "boxGroup1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "boxGroup1_accessory_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "boxGroup1_accessory_2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "boxGroup1_box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Automated market maker decentralized exchange."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "Bootstrap liquidity for your tokens, buy & sell whatever tokens you want."))), __jsx("div", {
    className: "boxGroup2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "boxGroup2_accessory_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "boxGroup2_accessory_2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "boxGroup2_box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "Token Issuance"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "Unified token standard."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "Issue your token on Dfinity with one click of a button."))), __jsx("div", {
    className: "boxGroup3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "boxGroup3_box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "DUSD Stablecoin"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, "Overcollateralized stablecoin."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "Mint DUSD with your ICP tokens and other cross-chain assets.")), __jsx("div", {
    className: "boxGroup3_accessory_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "boxGroup3_accessory_2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 552.34 150.397",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e12b7c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#323a8d",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 160,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "boxGroup4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "boxGroup4_accessory_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "boxGroup4_box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, "DLend"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, "Decentralized money market."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "Earn passive income on your assets and borrow tokens from the lending pool.")), __jsx("div", {
    className: "boxGroup4_accessory_2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: {
      opacity: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, "DFINANCE")), __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, "Onepager")), __jsx("div", {
    className: "icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
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
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 211,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e12b7c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#323a8d",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
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
      lineNumber: 216,
      columnNumber: 15
    }
  }))), __jsx("span", {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwidmFsIiwiYWxlcnQiLCJodG1sIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFVBQ0VDLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsVUFBMUIsS0FDQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixRQUExQixDQURBLElBRUFGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FGQSxJQUdBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSEEsSUFJQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUpBLElBS0FGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FMQSxJQU1BRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGdCQUExQixDQVBGLEVBUUM7QUFDQyxlQUFPLElBQVA7QUFDRCxPQVZELE1BVU87QUFDTCxlQUFPLEtBQVA7QUFDRDtBQUNGLEtBZEQ7O0FBZ0JB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QTtBQUFBO0FBQUEsSUFGRixDQURGLENBREYsRUFPRTtBQUFNLE1BQUUsRUFBQyxxQkFBVDtBQUErQixpQkFBVSxxQkFBekM7QUFBK0QsS0FBQyxFQUFDLDI5Q0FBakU7QUFBNmhELGFBQVMsRUFBQyxxQkFBdmlEO0FBQTZqRCxRQUFJLEVBQUMsdUJBQWxrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQXZCRixFQTZDRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQTdDRixDQVhGLENBeEhGLENBREY7QUFzTEQsQ0F0T0Q7O0dBQU1iLEk7O0tBQUFBLEk7QUF3T1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyYjQ1NjcyZWQ3ZThlNTQ2Mzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxldCBkcHIgPSAxO1xyXG4gICAgLy8gdmFyIGlzSVBob25lID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9pcGhvbmUvZ2kpO1xyXG4gICAgLy8gdmFyIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgIC8vIGlmIChpc0lQaG9uZSkge1xyXG4gICAgLy8gICAgIGlmIChkZXZpY2VQaXhlbFJhdGlvID49IDMgJiYgKCFkcHIgfHwgZHByID49IDMpKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBkcHIgPSAzO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAoZGV2aWNlUGl4ZWxSYXRpbyA+PSAyICYmICghZHByIHx8IGRwciA+PSAyKSl7XHJcbiAgICAvLyAgICAgICAgIGRwciA9IDI7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgZHByID0gMTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICAgIC8vIOWFtuS7luiuvuWkh+S4i++8jOS7jeaXp+S9v+eUqDHlgI3nmoTmlrnmoYhcclxuICAgIC8vICAgICBkcHIgPSAxO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcclxuICAgIC8vIC8vIGh0bWwuY2xhc3NMaXN0LmFkZChgZHByXyR7ZHByfWApO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxuICAgIC8vIGh0bWwuY2xhc3NMaXN0LmFkZChgZHByXyR7d2luZG93LmRldmljZVBpeGVsUmF0aW8udG9GaXhlZCgwKX1gKTtcclxuXHJcbiAgICBjb25zdCBpc01vYmlsZSA9ICgpID0+IHtcclxuICAgICAgaWYoIFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSlcclxuICAgICAgKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsID0gaXNNb2JpbGUoKTtcclxuICAgIGFsZXJ0KHZhbClcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcclxuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ERmluYW5jZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdfMVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdfMlwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdfM1wiPlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOTIwIDEwMzguMzU4XCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfMlwiIGRhdGEtbmFtZT1cIm1pbnVzIDJcIiBkPVwiTTE5MjAsMEgwVjEwMzguMzU4YzY2LjY0NS0xNi4wODksMTQwLjItMzAuNzA2LDIxOC42MjEtNDMuNDQ1LDc5LjE0Ni0xMi44NTYsMTYzLjg5NS0yMy45LDI1MS44OTMtMzIuODMyLDg5LjYyNy05LjA5NSwxODMuNS0xNi4wODIsMjc5LjAxMS0yMC43NjYsNDguNTUyLTIuMzgxLDk4LjI2Mi00LjIsMTQ3Ljc1MS01LjQsNTAuMjE3LTEuMjIyLDEwMS40MzItMS44NDEsMTUyLjIyNC0xLjg0MSwxNTkuNDc5LDAsMzE2LjMsNiw0NjYuMSwxNy44NDEsMTQ0Ljg3MSwxMS40NDksMjgwLjkzMSwyOC4xNiw0MDQuNCw0OS42NjlWMFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTkyMCAxMDM4LjM1OCkgcm90YXRlKDE4MClcIiBmaWxsPVwiI2NiY2JjYlwiIG9wYWNpdHk9XCIwLjJcIi8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXzRcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTkyMCAxODkzLjg2MlwiPlxyXG4gICAgICAgICAgICA8cGF0aCBpZD1cIm1pbnVzXzFcIiBkYXRhLW5hbWU9XCJtaW51cyAxXCIgZD1cIk0xOTIwLDk5Ni44NjNoMGMtMTA4LjI0NC0yNC44OTQtMjI0Ljc2NS00Ny0zNDYuMzI4LTY1LjcxNC0xMjUuMzg0LTE5LjMtMjU1LjkzNS0zNC45NDQtMzg4LjAyNC00Ni41LTE3My40MzgtMTUuMTc0LTM0My43NTctMjIuODY4LTUwNi4yMjYtMjIuODY4LTEzNC4zODgsMC0yNjEuMTkxLDUuMjg0LTM3Ni44ODcsMTUuNzA1QzE4OC4wMjYsODg3LjgsODYuMjM4LDkwMi45NzUsMCw5MjIuNTlWLTg5N0gxOTIwVjk5Ni44NjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE5MjAgOTk2Ljg2Mykgcm90YXRlKDE4MClcIiBmaWxsPVwiI2NiY2JjYlwiLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdfNlwiPlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMjQ1Ljc1IDE2NDIuOTQ4XCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiZ3JvdXBfNThcIiBkYXRhLW5hbWU9XCJncm91cCA1OFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMTkuNSAtOTM1Ljc1KVwiPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8xOFwiIGRhdGEtbmFtZT1cInJlY3QgMThcIiB3aWR0aD1cIjEzNVwiIGhlaWdodD1cIjEzNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzkgMTcwOClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMTlcIiBkYXRhLW5hbWU9XCJyZWN0IDE5XCIgd2lkdGg9XCI0MDRcIiBoZWlnaHQ9XCIxMzVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI2NiAxNDYyKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8yNFwiIGRhdGEtbmFtZT1cInJlY3QgMjRcIiB3aWR0aD1cIjI0OVwiIGhlaWdodD1cIjIxN1wiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODczIDEyOTEpXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIwXCIgZGF0YS1uYW1lPVwicmVjdCAyMFwiIHdpZHRoPVwiNDA0XCIgaGVpZ2h0PVwiODQxXCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDMwIDEwNzApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIxXCIgZGF0YS1uYW1lPVwicmVjdCAyMVwiIHdpZHRoPVwiMjEwLjVcIiBoZWlnaHQ9XCIzMTYuNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTk3IDkzNS43NSkgcm90YXRlKDkwKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8yMlwiIGRhdGEtbmFtZT1cInJlY3QgMjJcIiB3aWR0aD1cIjE0NC42MjhcIiBoZWlnaHQ9XCIxMDkuNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzI0Ljc1IDE5MDQuNjg2KSByb3RhdGUoOTApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzI1XCIgZGF0YS1uYW1lPVwicmVjdCAyNVwiIHdpZHRoPVwiNDY2LjYyOFwiIGhlaWdodD1cIjQ2My41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MDIuNSAyMTEyLjA3KSByb3RhdGUoOTApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIzXCIgZGF0YS1uYW1lPVwicmVjdCAyM1wiIHdpZHRoPVwiMzg1LjMwNlwiIGhlaWdodD1cIjQyMC41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMTI2LjI1IDIwNDAuMDcpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ181XCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgMTk0OS45OTkgMTEzOC43MzZcIj5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgPGZpbHRlciBpZD1cIm1pbnVzXzNcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuICAgICAgICAgICAgICAgIDxmZU9mZnNldCBkeT1cIjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjVcIiByZXN1bHQ9XCJibHVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMC4zMDJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgb3BlcmF0b3I9XCJpblwiIGluMj1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIvPlxyXG4gICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWx0ZXI9XCJ1cmwoI21pbnVzXzMpXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJtaW51c18zLTJcIiBkYXRhLW5hbWU9XCJtaW51cyAzXCIgZD1cIk0yMzE5LjI0MiwyODI1LjIwN2gtMTkyMFYxNzE2LjQ3QTIxMjEuMTA2LDIxMjEuMTA2LDAsMCwwLDgxNi45MjcsMTk5MS42YTIyMDIuNzA2LDIyMDIuNzA2LDAsMCwwLDQ5MS41NTYsMTc2LjY1OGM0MS4yNTcsOS41MjUsODMuMjI5LDE3Ljk3LDEyNC43NDksMjUuMSw0MS4xNDYsNy4wNjgsODIuOTU5LDEzLjAzNiwxMjQuMjc3LDE3LjczOSw0MC45NjQsNC42NjIsODIuNTM2LDguMiwxMjMuNTYxLDEwLjUyOSw0MC43LDIuMzA2LDgxLjk0OCwzLjQ3NSwxMjIuNiwzLjQ3NWguMThhMjEyMi43LDIxMjIuNywwLDAsMCw1MTUuMzkyLTYzLjIzM3Y2NjMuMzMzWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzg0LjI0IC0xNzA0LjQ3KVwiIGZpbGw9XCIjZmZmXCIgb3BhY2l0eT1cIjAuMlwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ183XCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgMTk1MCAxMDc5LjI1XCI+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJtaW51c180XCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmVPZmZzZXQgZHk9XCIzXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjVcIiByZXN1bHQ9XCJibHVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMC4zMDJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgb3BlcmF0b3I9XCJpblwiIGluMj1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIvPlxyXG4gICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIGZpbHRlcj1cInVybCgjbWludXNfNClcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIm1pbnVzXzQtMlwiIGRhdGEtbmFtZT1cIm1pbnVzIDRcIiBkPVwiTTIzMTkuMjQzLDI4MjUuMjA1aC0xOTIwVjE3NzUuOTU1YzMyLjksMjUuNjc1LDY3LjY0Niw1MC43MzcsMTAzLjI3OSw3NC40OSwzNS43NTcsMjMuODM1LDczLjI2Nyw0Ni45MjQsMTExLjQ4Nyw2OC42MjUsMzguNDMzLDIxLjgyMyw3OC41MjIsNDIuNzc1LDExOS4xNTMsNjIuMjczLDQwLjkzLDE5LjY0Myw4My40MTYsMzguMjkzLDEyNi4yNzcsNTUuNDMzLDE3Ny40NjIsNzAuOTY1LDM2Ny43MzEsMTE5LjI2MSw1NjUuNTIxLDE0My41NDcsNDcuNzUyLDUuODY0LDk2LjEwOCwxMC4zMTcsMTQzLjcyMywxMy4yMzUsNDcuMDMzLDIuODgzLDk0LjU3Niw0LjM0NSwxNDEuMzA4LDQuMzQ1aC4xMjhjMjYuODk0LDAsNTQuMDgzLS40ODgsODAuODExLTEuNDQ1LDI2LjU1OS0uOTUyLDUzLjM3NC0yLjM5NSw3OS43LTQuMjg4LDI2LjE3My0xLjg4Myw1Mi41NzYtNC4yNjEsNzguNDc1LTcuMDcxLDI1Ljc1Ni0yLjc5NCw1MS43MS02LjA5LDc3LjE0LTkuOCwyNS4zLTMuNjg3LDUwLjc3MS03Ljg4LDc1LjY5NS0xMi40NjEsMjQuODEzLTQuNTYxLDQ5Ljc1Ny05LjYzMSw3NC4xMzktMTUuMDY4LDI0LjI4OC01LjQxNyw0OC42NzEtMTEuMzQzLDcyLjQ3Mi0xNy42MTUsMjMuNzIyLTYuMjUyLDQ3LjUwNy0xMy4wMTYsNzAuNjk0LTIwLjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODQuMjQgLTE3NjMuOTYpXCIgZmlsbD1cIiNmZmZcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW5UaXRsZVwiPntuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpfVVubGVhc2ggdGhlIHBvd2VyIG9mIERlRmk8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPkRGaW5hY2UgaXMgYnVpbGRpbmcgdGhlIG9wZW4gZmluYW5jaWFsIHNlcnZpY2VzIGluZnJhc3RydWN0dXJlIGZvciB0aGUgREZJTklUWSBJbnRlcm5ldCBDb21wdXRlci48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5BcHAgaXMgY29taW5nPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAxX2FjY2Vzc29yeV8xXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwMV9hY2Nlc3NvcnlfMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDFfYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW5cIj5EU3dhcDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+QXV0b21hdGVkIG1hcmtldCBtYWtlciBkZWNlbnRyYWxpemVkIGV4Y2hhbmdlLjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+Qm9vdHN0cmFwIGxpcXVpZGl0eSBmb3IgeW91ciB0b2tlbnMsIGJ1eSAmIHNlbGwgd2hhdGV2ZXIgdG9rZW5zIHlvdSB3YW50Ljwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwMl9hY2Nlc3NvcnlfMVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDJfYWNjZXNzb3J5XzJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAyX2JveFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluXCI+VG9rZW4gSXNzdWFuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPlVuaWZpZWQgdG9rZW4gc3RhbmRhcmQuPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5Jc3N1ZSB5b3VyIHRva2VuIG9uIERmaW5pdHkgd2l0aCBvbmUgY2xpY2sgb2YgYSBidXR0b24uPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAzX2JveFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluXCI+RFVTRCBTdGFibGVjb2luPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5PdmVyY29sbGF0ZXJhbGl6ZWQgc3RhYmxlY29pbi48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPk1pbnQgRFVTRCB3aXRoIHlvdXIgSUNQIHRva2VucyBhbmQgb3RoZXIgY3Jvc3MtY2hhaW4gYXNzZXRzLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDNfYWNjZXNzb3J5XzFcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAzX2FjY2Vzc29yeV8yXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCA1NTIuMzQgMTUwLjM5N1wiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeDE9XCIwLjI4OFwiIHkxPVwiLTAuODM0XCIgeDI9XCIwLjczXCIgeTI9XCIxLjc2XCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwicGF0aF8zNFwiIGRhdGEtbmFtZT1cInBhdGggMzRcIiBkPVwiTTUyLjI2NywxODIzLjEyMWM4MC40MjItNjkuNTIzLDExOS4zNDIsMTUyLjI1MSwyNzIuMDkyLDQyLjQ2OXMxODMuOTIxLDQwLjc4NiwyNDYuOTQ5LTIwLjM5MywxNy4yMjEsMTE0LjU0MSwxNy4yMjEsMTE0LjU0MUw2MS4zOTQsMTk1MS43NVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUyLjI2NyAtMTgwOS4zNClcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXA0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwNF9hY2Nlc3NvcnlfMVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDRfYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW5cIj5ETGVuZDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+RGVjZW50cmFsaXplZCBtb25leSBtYXJrZXQuPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5FYXJuIHBhc3NpdmUgaW5jb21lIG9uIHlvdXIgYXNzZXRzIGFuZCBib3Jyb3cgdG9rZW5zIGZyb20gdGhlIGxlbmRpbmcgcG9vbC48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXA0X2FjY2Vzc29yeV8yXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7b3BhY2l0eTogXCIwXCJ9fT5ERklOQU5DRTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPk9uZXBhZ2VyPC9MaW5rPlxyXG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+V2hpdGUgcGFwZXI8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlRlYW08L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkFwcDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QWJvdXQ8L0xpbms+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiNDEuNTU0XCIgaGVpZ2h0PVwiMzMuNzQ5XCIgdmlld0JveD1cIjAgMCA0MS41NTQgMzMuNzQ5XCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB5MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLXR3aXR0ZXJcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtdHdpdHRlclwiIGQ9XCJNMzcuMjgzLDExLjc5MmMuMDI2LjM2OS4wMjYuNzM4LjAyNiwxLjEwNywwLDExLjI1OS04LjU2OSwyNC4yMzEtMjQuMjMxLDI0LjIzMUEyNC4wNjcsMjQuMDY3LDAsMCwxLDAsMzMuMzA3YTE3LjYxOCwxNy42MTgsMCwwLDAsMi4wNTcuMTA1QTE3LjA1NiwxNy4wNTYsMCwwLDAsMTIuNjMsMjkuNzc0YTguNTMxLDguNTMxLDAsMCwxLTcuOTYzLTUuOTA2QTEwLjc0LDEwLjc0LDAsMCwwLDYuMjc1LDI0YTkuMDA3LDkuMDA3LDAsMCwwLDIuMjQxLS4yOSw4LjUxOCw4LjUxOCwwLDAsMS02LjgyOS04LjM1OHYtLjEwNWE4LjU3Nyw4LjU3NywwLDAsMCwzLjg1LDEuMDgxQTguNTI5LDguNTI5LDAsMCwxLDIuOSw0LjkzNmEyNC4yMDgsMjQuMjA4LDAsMCwwLDE3LjU2LDguOTEyQTkuNjE0LDkuNjE0LDAsMCwxLDIwLjI1LDExLjksOC41MjUsOC41MjUsMCwwLDEsMzQuOTg5LDYuMDdhMTYuNzY3LDE2Ljc2NywwLDAsMCw1LjQwNS0yLjA1N0E4LjQ5Myw4LjQ5MywwLDAsMSwzNi42NSw4LjcwN2ExNy4wNzMsMTcuMDczLDAsMCwwLDQuOS0xLjMxOCwxOC4zMDcsMTguMzA3LDAsMCwxLTQuMjcxLDQuNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMy4zODEpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgey8qIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI0MC4wMDlcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAuMDA5IDQwXCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB5MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLWluc3RhZ3JhbVwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1pbnN0YWdyYW1cIiBkPVwiTTIwLDExLjk4MkExMC4yNTYsMTAuMjU2LDAsMSwwLDMwLjI1OSwyMi4yMzgsMTAuMjM5LDEwLjIzOSwwLDAsMCwyMCwxMS45ODJabTAsMTYuOTIzYTYuNjY3LDYuNjY3LDAsMSwxLDYuNjY3LTYuNjY3QTYuNjgsNi42OCwwLDAsMSwyMCwyOC45MDVaTTMzLjA3MSwxMS41NjNhMi4zOTIsMi4zOTIsMCwxLDEtMi4zOTItMi4zOTJBMi4zODcsMi4zODcsMCwwLDEsMzMuMDcxLDExLjU2M1ptNi43OTIsMi40MjhjLS4xNTItMy4yLS44ODQtNi4wNDMtMy4yMzEtOC4zODFzLTUuMTc3LTMuMDctOC4zODEtMy4yMzFjLTMuMy0uMTg3LTEzLjItLjE4Ny0xNi41LDAtMy4yLjE1Mi02LjAzNC44ODQtOC4zODEsMy4yMjJTLjMsMTAuNzc3LjEzNSwxMy45ODJjLS4xODcsMy4zLS4xODcsMTMuMiwwLDE2LjUuMTUyLDMuMi44ODQsNi4wNDMsMy4yMzEsOC4zODFzNS4xNzcsMy4wNyw4LjM4MSwzLjIzMWMzLjMuMTg3LDEzLjIuMTg3LDE2LjUsMCwzLjItLjE1Miw2LjA0My0uODg0LDguMzgxLTMuMjMxczMuMDctNS4xNzcsMy4yMzEtOC4zODFjLjE4Ny0zLjMuMTg3LTEzLjE5MiwwLTE2LjQ5NVpNMzUuNiwzNC4wMjhhNi43NSw2Ljc1LDAsMCwxLTMuOCwzLjhjLTIuNjMzLDEuMDQ0LTguODgxLjgtMTEuNzkxLjhzLTkuMTY3LjIzMi0xMS43OTEtLjhhNi43NSw2Ljc1LDAsMCwxLTMuOC0zLjhjLTEuMDQ0LTIuNjMzLS44LTguODgxLS44LTExLjc5MXMtLjIzMi05LjE2Ny44LTExLjc5MWE2Ljc1LDYuNzUsMCwwLDEsMy44LTMuOGMyLjYzMy0xLjA0NCw4Ljg4MS0uOCwxMS43OTEtLjhzOS4xNjctLjIzMiwxMS43OTEuOGE2Ljc1LDYuNzUsMCwwLDEsMy44LDMuOGMxLjA0NCwyLjYzMy44LDguODgxLjgsMTEuNzkxUzM2LjY0MSwzMS40LDM1LjYsMzQuMDI4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwNSAtMi4yMzgpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZmluYW5jZS10ZWNoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzOC4wNjdcIiBoZWlnaHQ9XCIzNy4xMTZcIiB2aWV3Qm94PVwiMCAwIDM4LjA2NyAzNy4xMTZcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtZ2l0aHViXCIgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLWdpdGh1YlwiIGQ9XCJNMTIuNzMzLDMwLjQ0OGMwLC4xNTMtLjE3Ny4yNzYtLjQuMjc2LS4yNTMuMDIzLS40My0uMS0uNDMtLjI3NiwwLS4xNTMuMTc3LS4yNzYuNC0uMjc2QzEyLjUzMywzMC4xNDksMTIuNzMzLDMwLjI3MiwxMi43MzMsMzAuNDQ4Wk0xMC4zNDYsMzAuMWMtLjA1NC4xNTMuMS4zMy4zMy4zNzZhLjM2LjM2LDAsMCwwLC40NzYtLjE1M2MuMDQ2LS4xNTMtLjEtLjMzLS4zMy0uNEEuMzk0LjM5NCwwLDAsMCwxMC4zNDYsMzAuMVptMy4zOTItLjEzYy0uMjIzLjA1NC0uMzc2LjItLjM1My4zNzYuMDIzLjE1My4yMjMuMjUzLjQ1My4ycy4zNzYtLjIuMzUzLS4zNTNTMTMuOTYsMjkuOTQ5LDEzLjczOCwyOS45NzJaTTE4Ljc4OC41NjNBMTguNCwxOC40LDAsMCwwLDAsMTkuMjg5LDE5LjI0MSwxOS4yNDEsMCwwLDAsMTMuMDA5LDM3LjY0N2MuOTgyLjE3NywxLjMyOC0uNDMsMS4zMjgtLjkyOSwwLS40NzYtLjAyMy0zLjEtLjAyMy00LjcxMiwwLDAtNS4zNzIsMS4xNTEtNi41LTIuMjg3LDAsMC0uODc1LTIuMjMzLTIuMTM0LTIuODA5LDAsMC0xLjc1OC0xLjIuMTIzLTEuMTgyYTQuMDUxLDQuMDUxLDAsMCwxLDIuOTYyLDEuOTgsNC4wNTcsNC4wNTcsMCwwLDAsNS41OTUsMS42LDQuMjY2LDQuMjY2LDAsMCwxLDEuMjI4LTIuNTg2Yy00LjI5LS40NzYtOC42MTktMS4xLTguNjE5LTguNDgxYTUuODE3LDUuODE3LDAsMCwxLDEuODExLTQuNTIsNy4yNTEsNy4yNTEsMCwwLDEsLjItNS4yMTFjMS42LS41LDUuMywyLjA3Miw1LjMsMi4wNzJhMTguMTMxLDE4LjEzMSwwLDAsMSw5LjY0LDBzMy42OTItMi41NzksNS4zLTIuMDcyYTcuMjQ4LDcuMjQ4LDAsMCwxLC4yLDUuMjExLDUuOTY2LDUuOTY2LDAsMCwxLDEuOTgsNC41MmMwLDcuNDA2LTQuNTIsOC04LjgxMSw4LjQ4MWE0LjUzOSw0LjUzOSwwLDAsMSwxLjMsMy41NjFjMCwyLjU4Ni0uMDIzLDUuNzg3LS4wMjMsNi40MTYsMCwuNS4zNTMsMS4xMDUsMS4zMjguOTI5QTE5LjA2NCwxOS4wNjQsMCwwLDAsMzguMDY3LDE5LjI4OUMzOC4wNjcsOC42NDQsMjkuNDMzLjU2MywxOC43ODguNTYzWk03LjQ2LDI3LjAzM2MtLjEuMDc3LS4wNzcuMjUzLjA1NC40LjEyMy4xMjMuMy4xNzcuNC4wNzcuMS0uMDc3LjA3Ny0uMjUzLS4wNTQtLjRDNy43MzYsMjYuOTg3LDcuNTYsMjYuOTMzLDcuNDYsMjcuMDMzWm0tLjgyOS0uNjIyYy0uMDU0LjEuMDIzLjIyMy4xNzcuM2EuMjI4LjIyOCwwLDAsMCwuMzMtLjA1NGMuMDU0LS4xLS4wMjMtLjIyMy0uMTc3LS4zQzYuODA4LDI2LjMxMSw2LjY4NSwyNi4zMzUsNi42MzEsMjYuNDExWm0yLjQ4NywyLjczMmMtLjEyMy4xLS4wNzcuMzMuMS40NzYuMTc3LjE3Ny40LjIuNS4wNzcuMS0uMS4wNTQtLjMzLS4xLS40NzZDOS40NDgsMjkuMDQ0LDkuMjE3LDI5LjAyMSw5LjExOCwyOS4xNDNabS0uODc1LTEuMTI4Yy0uMTIzLjA3Ny0uMTIzLjI3NiwwLC40NTNzLjMzLjI1My40My4xNzdhLjM1LjM1LDAsMCwwLDAtLjQ3NkM4LjU2NSwyNy45OTIsOC4zNjYsMjcuOTE2LDguMjQzLDI4LjAxNVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMC41NjMpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjMzLjczOFwiIGhlaWdodD1cIjM4LjU1OFwiIHZpZXdCb3g9XCIwIDAgMzMuNzM4IDM4LjU1OFwiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeTE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UxMmI3Y1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzMjNhOGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1kaXNjb3JkXCIgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLWRpc2NvcmRcIiBkPVwiTTIyLjM4MywxOC4zMTVhMS45NzMsMS45NzMsMCwxLDEtMS45NjYtMi4xNEEyLjA1NCwyLjA1NCwwLDAsMSwyMi4zODMsMTguMzE1Wm0tOS0yLjE0YTIuMTQ4LDIuMTQ4LDAsMCwwLDAsNC4yOCwyLjA1NCwyLjA1NCwwLDAsMCwxLjk2Ni0yLjE0QTIuMDQyLDIuMDQyLDAsMCwwLDEzLjM4LDE2LjE3NVptMjAuMzU5LTEyLjJWMzguNTU4Yy00Ljg1Ny00LjI5Mi0zLjMtMi44NzEtOC45NDUtOC4xMTZsMS4wMjIsMy41NjdIMy45NTJBMy45NjIsMy45NjIsMCwwLDEsMCwzMC4wMzdWMy45NzFBMy45NjIsMy45NjIsMCwwLDEsMy45NTIsMEgyOS43ODZBMy45NjIsMy45NjIsMCwwLDEsMzMuNzM4LDMuOTcxWk0yOC4yNDQsMjIuMjQ4YTI1LjgxOCwyNS44MTgsMCwwLDAtMi43NzYtMTEuMjRBOS41MzQsOS41MzQsMCwwLDAsMjAuMDUsOC45ODRsLS4yNy4zMDhhMTIuODMxLDEyLjgzMSwwLDAsMSw0LjgsMi40NDgsMTYuMzgxLDE2LjM4MSwwLDAsMC0xNC40LS41NTljLS43MTMuMzI4LTEuMTM3LjU1OS0xLjEzNy41NTlhMTMuMDA2LDEzLjAwNiwwLDAsMSw1LjA3LTIuNTI2bC0uMTkzLS4yMzFBOS41MzQsOS41MzQsMCwwLDAsOC41LDExLjAwOGEyNS44MTgsMjUuODE4LDAsMCwwLTIuNzc2LDExLjI0LDYuOTksNi45OSwwLDAsMCw1Ljg4LDIuOTNzLjcxMy0uODY4LDEuMjkyLTEuNkE2LDYsMCwwLDEsOS41MjQsMjEuM2MuMjg0LjIuNzUxLjQ1Ni43OS40ODJhMTQuMDUzLDE0LjA1MywwLDAsMCwxMi4wMy42NzUsMTEuMDMyLDExLjAzMiwwLDAsMCwyLjIxNy0xLjEzNyw2LjA4Myw2LjA4MywwLDAsMS0zLjQ4OSwyLjI5NGMuNTc4LjczMywxLjI3MiwxLjU2MiwxLjI3MiwxLjU2MkE3LjA0Nyw3LjA0NywwLDAsMCwyOC4yNDQsMjIuMjQ4WlwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPkNvcHlyaWdodCDCqSAyMDIxIERGaW5hbmNlLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=