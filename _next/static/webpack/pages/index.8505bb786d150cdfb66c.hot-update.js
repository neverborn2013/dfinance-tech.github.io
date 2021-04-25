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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\Projects\\homepage\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Home = function Home() {
  _s();

  var content_1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var isMobile = function isMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    };

    var val = isMobile();

    if (val) {
      var html = document.getElementsByTagName("html")[0];
      html.classList.add("mobile");
    }

    var dom = content_1.current;

    if (dom) {
      var top = (dom || document.getElementsByClassName("content_1")[0]).getBoundingClientRect().top;

      var handleScroll = function handleScroll() {
        if (document.getElementsByTagName("html")[0].scrollTop > top * 0.2) {
          document.getElementsByClassName("bg-4")[0].style.opacity = "1";
        }
      };

      window.addEventListener("scroll", handleScroll);
    }
  }, []);
  return __jsx("div", {
    className: "Home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "DFinance")), __jsx("div", {
    className: "header-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "Unleash the power of DeFi"), __jsx("div", {
    className: "header-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "DFinace is building the open financial services infrastructure for the DFINITY Internet Computer."), __jsx("div", {
    className: "header-cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-card card-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Unified token standard for Dfinity"))), __jsx("div", {
    className: "header-card card-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Issue your token with one click of a button"))), __jsx("div", {
    className: "header-card card-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Manage your tokens: transfer, burn, mint")))), __jsx("div", {
    ref: content_1,
    className: "content-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("svg", {
    className: "bg-1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 2772.39 1182.619",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("linearGradient", {
    id: "bg-1-linear-gradient",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3dc4ed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2976ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }))), __jsx("path", {
    id: "\u8DEF\u5F84_43",
    "data-name": "\u8DEF\u5F84 43",
    d: "M1313.183,878.9c403.422-166.352,1872.375-100.48,2248.009,98.836s14.625,701.6-754.285,895.934-1480.818,77.085-1727.62-276.6S909.76,1045.257,1313.183,878.9Z",
    transform: "translate(-938.435 -784.377)",
    fill: "url(#bg-1-linear-gradient)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  })), __jsx("svg", {
    className: "bg-2",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 2328.532 1079.753",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("linearGradient", {
    id: "bg-2-linear-gradient",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f89e36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffab4a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }))), __jsx("path", {
    id: "\u8DEF\u5F84_45",
    "data-name": "\u8DEF\u5F84 45",
    d: "M3793.353,1444.138C3544.271,820.8,1708.159,1044.93,1539.09,1377.887s233.2,706.254,803.243,744.473S4042.434,2067.477,3793.353,1444.138Z",
    transform: "translate(-1500.145 -1050.007)",
    fill: "url(#bg-2-linear-gradient)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  })), __jsx("svg", {
    className: "bg-3",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 2293.796 950.125",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("linearGradient", {
    id: "bg-3-linear-gradient",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5a68d2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#b146d7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }))), __jsx("path", {
    id: "\u8DEF\u5F84_44",
    "data-name": "\u8DEF\u5F84 44",
    d: "M1374.2,1890.052c129.555-395.143,1792.772-422.192,2171.073-137.171s-540.131,818.282-1310.252,754.7S1244.647,2285.195,1374.2,1890.052Z",
    transform: "translate(-1339.395 -1562.675)",
    fill: "url(#bg-3-linear-gradient)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "bg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "content-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "Automated Market Maker Decentralized Exchange"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Lightning Swap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Swap one token for another with lightning speed"), __jsx("div", {
    className: "svg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "svg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "API for developers to build their own application based on DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Such as liquidity farming applications"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "0.3%"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "788.661",
    height: "232.745",
    viewBox: "0 0 788.661 232.745",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("linearGradient", {
    id: "linear-gradient",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }))), __jsx("path", {
    id: "\u8DEF\u5F84_50",
    "data-name": "\u8DEF\u5F84 50",
    d: "M3038.031,2532.216c-184.789,150.508-146.518-53.409-325.595,0s-162.227-70.26-321.882,21.135-37.986,197.927-37.986,197.927h744.3Z",
    transform: "translate(-2308.206 -2518.533)",
    fill: "url(#linear-gradient)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "Provide Liquidity To Earn 0.3% Transaction Fee")), __jsx("div", {
    className: "box-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "Secure Atomic Swap"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 528.027 377.633",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx("linearGradient", {
    id: "linear-gradient-1",
    x1: "0.146",
    x2: "1",
    y2: "0.827",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5a68d2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#b146d7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  })), __jsx("linearGradient", {
    id: "linear-gradient-2",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3dc4ed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2976ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  })), __jsx("linearGradient", {
    id: "linear-gradient-3",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f89e36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffab4a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  })), __jsx("linearGradient", {
    id: "linear-gradient-4",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }))), __jsx("ellipse", {
    id: "oval_14",
    "data-name": "oval 14",
    cx: "74.344",
    cy: "171.746",
    rx: "74.344",
    ry: "171.746",
    transform: "matrix(0.602, -0.799, 0.799, 0.602, 140.788, 163.479)",
    fill: "none",
    stroke: "#e1e1e1",
    strokeMiterlimit: "10",
    strokeWidth: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }), __jsx("ellipse", {
    id: "oval_15",
    "data-name": "oval 15",
    cx: "139.769",
    cy: "134.937",
    rx: "139.769",
    ry: "134.937",
    transform: "translate(150.455 135.292) rotate(-28)",
    fill: "none",
    stroke: "#e1e1e1",
    strokeMiterlimit: "10",
    strokeWidth: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }), __jsx("circle", {
    id: "oval_11",
    "data-name": "oval 11",
    cx: "78.054",
    cy: "78.054",
    r: "78.054",
    transform: "translate(260.659 110.763)",
    fill: "url(#linear-gradient-1)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }), __jsx("circle", {
    id: "oval_12",
    "data-name": "oval 12",
    cx: "25.428",
    cy: "25.428",
    r: "25.428",
    transform: "matrix(0.966, -0.259, 0.259, 0.966, 423.767, 92.782)",
    fill: "url(#linear-gradient-2)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }), __jsx("circle", {
    id: "oval_13",
    "data-name": "oval 13",
    cx: "25.428",
    cy: "25.428",
    r: "25.428",
    transform: "matrix(0.996, 0.087, -0.087, 0.996, 189.406, 179.917)",
    fill: "url(#linear-gradient-3)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }), __jsx("circle", {
    id: "oval_16",
    "data-name": "oval 16",
    cx: "19",
    cy: "19",
    r: "19",
    transform: "translate(0 312.197)",
    fill: "url(#linear-gradient-4)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "link-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "whitepaper",
    href: "https://drive.google.com/file/d/1rs49aMhYJdnyNX_n5Q4ohgOSPU5zSEOn/view?usp=sharing",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }, "White papper"))))), __jsx("div", {
    className: "footer-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "38.067",
    height: "37.116",
    viewBox: "0 0 38.067 37.116",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx("path", {
    id: "Icon_awesome-github",
    "data-name": "Icon awesome-github",
    d: "M12.733,30.448c0,.153-.177.276-.4.276-.253.023-.43-.1-.43-.276,0-.153.177-.276.4-.276C12.533,30.149,12.733,30.272,12.733,30.448ZM10.346,30.1c-.054.153.1.33.33.376a.36.36,0,0,0,.476-.153c.046-.153-.1-.33-.33-.4A.394.394,0,0,0,10.346,30.1Zm3.392-.13c-.223.054-.376.2-.353.376.023.153.223.253.453.2s.376-.2.353-.353S13.96,29.949,13.738,29.972ZM18.788.563A18.4,18.4,0,0,0,0,19.289,19.241,19.241,0,0,0,13.009,37.647c.982.177,1.328-.43,1.328-.929,0-.476-.023-3.1-.023-4.712,0,0-5.372,1.151-6.5-2.287,0,0-.875-2.233-2.134-2.809,0,0-1.758-1.2.123-1.182a4.051,4.051,0,0,1,2.962,1.98,4.057,4.057,0,0,0,5.595,1.6,4.266,4.266,0,0,1,1.228-2.586c-4.29-.476-8.619-1.1-8.619-8.481a5.817,5.817,0,0,1,1.811-4.52,7.251,7.251,0,0,1,.2-5.211c1.6-.5,5.3,2.072,5.3,2.072a18.131,18.131,0,0,1,9.64,0s3.692-2.579,5.3-2.072a7.248,7.248,0,0,1,.2,5.211,5.966,5.966,0,0,1,1.98,4.52c0,7.406-4.52,8-8.811,8.481a4.539,4.539,0,0,1,1.3,3.561c0,2.586-.023,5.787-.023,6.416,0,.5.353,1.105,1.328.929A19.064,19.064,0,0,0,38.067,19.289C38.067,8.644,29.433.563,18.788.563ZM7.46,27.033c-.1.077-.077.253.054.4.123.123.3.177.4.077.1-.077.077-.253-.054-.4C7.736,26.987,7.56,26.933,7.46,27.033Zm-.829-.622c-.054.1.023.223.177.3a.228.228,0,0,0,.33-.054c.054-.1-.023-.223-.177-.3C6.808,26.311,6.685,26.335,6.631,26.411Zm2.487,2.732c-.123.1-.077.33.1.476.177.177.4.2.5.077.1-.1.054-.33-.1-.476C9.448,29.044,9.217,29.021,9.118,29.143Zm-.875-1.128c-.123.077-.123.276,0,.453s.33.253.43.177a.35.35,0,0,0,0-.476C8.565,27.992,8.366,27.916,8.243,28.015Z",
    transform: "translate(0 -0.563)",
    fill: "#efefef",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, "Copyright \xA9 2021 Dfinance. All rights reserved.")))));
};

_s(Home, "1PI7KUsfbMP5R6ik5HoCWNd+AbY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJjb250ZW50XzEiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwidmFsIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJkb20iLCJjdXJyZW50IiwidG9wIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsInN0eWxlIiwib3BhY2l0eSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWpCLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixVQUNFQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLEtBQ0FGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FEQSxJQUVBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFNBQTFCLENBRkEsSUFHQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUhBLElBSUFGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FKQSxJQUtBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGFBQTFCLENBTEEsSUFNQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixnQkFB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QyxxQkFBVDtBQUErQixpQkFBVSxxQkFBekM7QUFBK0QsS0FBQyxFQUFDLDI5Q0FBakU7QUFBNmhELGFBQVMsRUFBQyxxQkFBdmlEO0FBQTZqRCxRQUFJLEVBQUMsU0FBbGtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFSRixDQXRCRixDQUpGLENBMUhGLENBREY7QUFrVkQsQ0F6WEQ7O0dBQU1ELEk7O0tBQUFBLEk7QUEyWFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1MDViYjc4NmQxNTBjZGZiNjZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgY29udGVudF8xID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9ICgpID0+IHtcclxuICAgICAgaWYoIFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSlcclxuICAgICAgKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsID0gaXNNb2JpbGUoKTtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcclxuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvbSA9IGNvbnRlbnRfMS5jdXJyZW50O1xyXG4gICAgaWYgKGRvbSkge1xyXG4gICAgICBjb25zdCB0b3AgPSAoZG9tIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250ZW50XzFcIilbMF0pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uc2Nyb2xsVG9wID4gdG9wICogMC4yKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmctNFwiKVswXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRGaW5hbmNlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1icmFuZFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5VbmxlYXNoIHRoZSBwb3dlciBvZiBEZUZpPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN1YnRpdGxlXCI+REZpbmFjZSBpcyBidWlsZGluZyB0aGUgb3BlbiBmaW5hbmNpYWwgc2VydmljZXMgaW5mcmFzdHJ1Y3R1cmUgZm9yIHRoZSBERklOSVRZIEludGVybmV0IENvbXB1dGVyLjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+VW5pZmllZCB0b2tlbiBzdGFuZGFyZCBmb3IgRGZpbml0eTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+SXNzdWUgeW91ciB0b2tlbiB3aXRoIG9uZSBjbGljayBvZiBhIGJ1dHRvbjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+TWFuYWdlIHlvdXIgdG9rZW5zOiB0cmFuc2ZlciwgYnVybiwgbWludDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiByZWY9e2NvbnRlbnRfMX0gY2xhc3NOYW1lPVwiY29udGVudC0xXCI+XHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJiZy0xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAyNzcyLjM5IDExODIuNjE5XCI+XHJcbiAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiYmctMS1saW5lYXItZ3JhZGllbnRcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiMzZGM0ZWRcIi8+XHJcbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMyOTc2YmFcIi8+XHJcbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICA8cGF0aCBpZD1cIui3r+W+hF80M1wiIGRhdGEtbmFtZT1cIui3r+W+hCA0M1wiIGQ9XCJNMTMxMy4xODMsODc4LjljNDAzLjQyMi0xNjYuMzUyLDE4NzIuMzc1LTEwMC40OCwyMjQ4LjAwOSw5OC44MzZzMTQuNjI1LDcwMS42LTc1NC4yODUsODk1LjkzNC0xNDgwLjgxOCw3Ny4wODUtMTcyNy42Mi0yNzYuNlM5MDkuNzYsMTA0NS4yNTcsMTMxMy4xODMsODc4LjlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05MzguNDM1IC03ODQuMzc3KVwiIGZpbGw9XCJ1cmwoI2JnLTEtbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImJnLTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDIzMjguNTMyIDEwNzkuNzUzXCI+XHJcbiAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiYmctMi1saW5lYXItZ3JhZGllbnRcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmODllMzZcIi8+XHJcbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNmZmFiNGFcIi8+XHJcbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICA8cGF0aCBpZD1cIui3r+W+hF80NVwiIGRhdGEtbmFtZT1cIui3r+W+hCA0NVwiIGQ9XCJNMzc5My4zNTMsMTQ0NC4xMzhDMzU0NC4yNzEsODIwLjgsMTcwOC4xNTksMTA0NC45MywxNTM5LjA5LDEzNzcuODg3czIzMy4yLDcwNi4yNTQsODAzLjI0Myw3NDQuNDczUzQwNDIuNDM0LDIwNjcuNDc3LDM3OTMuMzUzLDE0NDQuMTM4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTUwMC4xNDUgLTEwNTAuMDA3KVwiIGZpbGw9XCJ1cmwoI2JnLTItbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImJnLTNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDIyOTMuNzk2IDk1MC4xMjVcIj5cclxuICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJiZy0zLWxpbmVhci1ncmFkaWVudFwiIHgxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzVhNjhkMlwiLz5cclxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2IxNDZkN1wiLz5cclxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgIDxwYXRoIGlkPVwi6Lev5b6EXzQ0XCIgZGF0YS1uYW1lPVwi6Lev5b6EIDQ0XCIgZD1cIk0xMzc0LjIsMTg5MC4wNTJjMTI5LjU1NS0zOTUuMTQzLDE3OTIuNzcyLTQyMi4xOTIsMjE3MS4wNzMtMTM3LjE3MXMtNTQwLjEzMSw4MTguMjgyLTEzMTAuMjUyLDc1NC43UzEyNDQuNjQ3LDIyODUuMTk1LDEzNzQuMiwxODkwLjA1MlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEzMzkuMzk1IC0xNTYyLjY3NSlcIiBmaWxsPVwidXJsKCNiZy0zLWxpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy00XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTFcIj5cclxuICAgICAgICAgICAgPHNwYW4+QXV0b21hdGVkIE1hcmtldCBNYWtlciBEZWNlbnRyYWxpemVkIEV4Y2hhbmdlPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0yXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5MaWdodG5pbmcgU3dhcDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPlN3YXAgb25lIHRva2VuIGZvciBhbm90aGVyIHdpdGggbGlnaHRuaW5nIHNwZWVkPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLTJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWw+QVBJIGZvciBkZXZlbG9wZXJzIHRvIGJ1aWxkIHRoZWlyIG93biBhcHBsaWNhdGlvbiBiYXNlZCBvbiBEU3dhcDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPlN1Y2ggYXMgbGlxdWlkaXR5IGZhcm1pbmcgYXBwbGljYXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+MC4zJTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjc4OC42NjFcIiBoZWlnaHQ9XCIyMzIuNzQ1XCIgdmlld0JveD1cIjAgMCA3ODguNjYxIDIzMi43NDVcIj5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMjFmNzlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNhMDE5YmFcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIui3r+W+hF81MFwiIGRhdGEtbmFtZT1cIui3r+W+hCA1MFwiIGQ9XCJNMzAzOC4wMzEsMjUzMi4yMTZjLTE4NC43ODksMTUwLjUwOC0xNDYuNTE4LTUzLjQwOS0zMjUuNTk1LDBzLTE2Mi4yMjctNzAuMjYtMzIxLjg4MiwyMS4xMzUtMzcuOTg2LDE5Ny45MjctMzcuOTg2LDE5Ny45MjdoNzQ0LjNaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yMzA4LjIwNiAtMjUxOC41MzMpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4+UHJvdmlkZSBMaXF1aWRpdHkgVG8gRWFybiAwLjMlIFRyYW5zYWN0aW9uIEZlZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtNVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VjdXJlIEF0b21pYyBTd2FwPC9sYWJlbD5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDUyOC4wMjcgMzc3LjYzM1wiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50LTFcIiB4MT1cIjAuMTQ2XCIgeDI9XCIxXCIgeTI9XCIwLjgyN1wiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzVhNjhkMlwiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNiMTQ2ZDdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50LTJcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjM2RjNGVkXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzI5NzZiYVwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnQtM1wiIHgxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmODllMzZcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZmZhYjRhXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudC00XCIgeDE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UyMWY3OVwiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNhMDE5YmFcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD1cIm92YWxfMTRcIiBkYXRhLW5hbWU9XCJvdmFsIDE0XCIgY3g9XCI3NC4zNDRcIiBjeT1cIjE3MS43NDZcIiByeD1cIjc0LjM0NFwiIHJ5PVwiMTcxLjc0NlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjYwMiwgLTAuNzk5LCAwLjc5OSwgMC42MDIsIDE0MC43ODgsIDE2My40NzkpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZTFlMWUxXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIgc3Ryb2tlV2lkdGg9XCI2XCIvPlxyXG4gICAgICAgICAgICAgIDxlbGxpcHNlIGlkPVwib3ZhbF8xNVwiIGRhdGEtbmFtZT1cIm92YWwgMTVcIiBjeD1cIjEzOS43NjlcIiBjeT1cIjEzNC45MzdcIiByeD1cIjEzOS43NjlcIiByeT1cIjEzNC45MzdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTUwLjQ1NSAxMzUuMjkyKSByb3RhdGUoLTI4KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2UxZTFlMVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZVdpZHRoPVwiNlwiLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbF8xMVwiIGRhdGEtbmFtZT1cIm92YWwgMTFcIiBjeD1cIjc4LjA1NFwiIGN5PVwiNzguMDU0XCIgcj1cIjc4LjA1NFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNjAuNjU5IDExMC43NjMpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTEpXCIvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsXzEyXCIgZGF0YS1uYW1lPVwib3ZhbCAxMlwiIGN4PVwiMjUuNDI4XCIgY3k9XCIyNS40MjhcIiByPVwiMjUuNDI4XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuOTY2LCAtMC4yNTksIDAuMjU5LCAwLjk2NiwgNDIzLjc2NywgOTIuNzgyKVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKVwiLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbF8xM1wiIGRhdGEtbmFtZT1cIm92YWwgMTNcIiBjeD1cIjI1LjQyOFwiIGN5PVwiMjUuNDI4XCIgcj1cIjI1LjQyOFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk5NiwgMC4wODcsIC0wLjA4NywgMC45OTYsIDE4OS40MDYsIDE3OS45MTcpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTMpXCIvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsXzE2XCIgZGF0YS1uYW1lPVwib3ZhbCAxNlwiIGN4PVwiMTlcIiBjeT1cIjE5XCIgcj1cIjE5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMzEyLjE5NylcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtNClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0xXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0yXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0zXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYnJhbmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXdyYXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3aGl0ZXBhcGVyXCIgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzNDlhTWhZSmRueU5YX241UTRvaGdPU1BVNXpTRU9uL3ZpZXc/dXNwPXNoYXJpbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5XaGl0ZSBwYXBwZXI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZWFtXCI+VGVhbTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXBwXCI+QXBwPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZmluYW5jZS10ZWNoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjM4LjA2N1wiIGhlaWdodD1cIjM3LjExNlwiIHZpZXdCb3g9XCIwIDAgMzguMDY3IDM3LjExNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1naXRodWJcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtZ2l0aHViXCIgZD1cIk0xMi43MzMsMzAuNDQ4YzAsLjE1My0uMTc3LjI3Ni0uNC4yNzYtLjI1My4wMjMtLjQzLS4xLS40My0uMjc2LDAtLjE1My4xNzctLjI3Ni40LS4yNzZDMTIuNTMzLDMwLjE0OSwxMi43MzMsMzAuMjcyLDEyLjczMywzMC40NDhaTTEwLjM0NiwzMC4xYy0uMDU0LjE1My4xLjMzLjMzLjM3NmEuMzYuMzYsMCwwLDAsLjQ3Ni0uMTUzYy4wNDYtLjE1My0uMS0uMzMtLjMzLS40QS4zOTQuMzk0LDAsMCwwLDEwLjM0NiwzMC4xWm0zLjM5Mi0uMTNjLS4yMjMuMDU0LS4zNzYuMi0uMzUzLjM3Ni4wMjMuMTUzLjIyMy4yNTMuNDUzLjJzLjM3Ni0uMi4zNTMtLjM1M1MxMy45NiwyOS45NDksMTMuNzM4LDI5Ljk3MlpNMTguNzg4LjU2M0ExOC40LDE4LjQsMCwwLDAsMCwxOS4yODksMTkuMjQxLDE5LjI0MSwwLDAsMCwxMy4wMDksMzcuNjQ3Yy45ODIuMTc3LDEuMzI4LS40MywxLjMyOC0uOTI5LDAtLjQ3Ni0uMDIzLTMuMS0uMDIzLTQuNzEyLDAsMC01LjM3MiwxLjE1MS02LjUtMi4yODcsMCwwLS44NzUtMi4yMzMtMi4xMzQtMi44MDksMCwwLTEuNzU4LTEuMi4xMjMtMS4xODJhNC4wNTEsNC4wNTEsMCwwLDEsMi45NjIsMS45OCw0LjA1Nyw0LjA1NywwLDAsMCw1LjU5NSwxLjYsNC4yNjYsNC4yNjYsMCwwLDEsMS4yMjgtMi41ODZjLTQuMjktLjQ3Ni04LjYxOS0xLjEtOC42MTktOC40ODFhNS44MTcsNS44MTcsMCwwLDEsMS44MTEtNC41Miw3LjI1MSw3LjI1MSwwLDAsMSwuMi01LjIxMWMxLjYtLjUsNS4zLDIuMDcyLDUuMywyLjA3MmExOC4xMzEsMTguMTMxLDAsMCwxLDkuNjQsMHMzLjY5Mi0yLjU3OSw1LjMtMi4wNzJhNy4yNDgsNy4yNDgsMCwwLDEsLjIsNS4yMTEsNS45NjYsNS45NjYsMCwwLDEsMS45OCw0LjUyYzAsNy40MDYtNC41Miw4LTguODExLDguNDgxYTQuNTM5LDQuNTM5LDAsMCwxLDEuMywzLjU2MWMwLDIuNTg2LS4wMjMsNS43ODctLjAyMyw2LjQxNiwwLC41LjM1MywxLjEwNSwxLjMyOC45MjlBMTkuMDY0LDE5LjA2NCwwLDAsMCwzOC4wNjcsMTkuMjg5QzM4LjA2Nyw4LjY0NCwyOS40MzMuNTYzLDE4Ljc4OC41NjNaTTcuNDYsMjcuMDMzYy0uMS4wNzctLjA3Ny4yNTMuMDU0LjQuMTIzLjEyMy4zLjE3Ny40LjA3Ny4xLS4wNzcuMDc3LS4yNTMtLjA1NC0uNEM3LjczNiwyNi45ODcsNy41NiwyNi45MzMsNy40NiwyNy4wMzNabS0uODI5LS42MjJjLS4wNTQuMS4wMjMuMjIzLjE3Ny4zYS4yMjguMjI4LDAsMCwwLC4zMy0uMDU0Yy4wNTQtLjEtLjAyMy0uMjIzLS4xNzctLjNDNi44MDgsMjYuMzExLDYuNjg1LDI2LjMzNSw2LjYzMSwyNi40MTFabTIuNDg3LDIuNzMyYy0uMTIzLjEtLjA3Ny4zMy4xLjQ3Ni4xNzcuMTc3LjQuMi41LjA3Ny4xLS4xLjA1NC0uMzMtLjEtLjQ3NkM5LjQ0OCwyOS4wNDQsOS4yMTcsMjkuMDIxLDkuMTE4LDI5LjE0M1ptLS44NzUtMS4xMjhjLS4xMjMuMDc3LS4xMjMuMjc2LDAsLjQ1M3MuMzMuMjUzLjQzLjE3N2EuMzUuMzUsMCwwLDAsMC0uNDc2QzguNTY1LDI3Ljk5Miw4LjM2NiwyNy45MTYsOC4yNDMsMjguMDE1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0wLjU2MylcIiBmaWxsPVwiI2VmZWZlZlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IMKpIDIwMjEgRGZpbmFuY2UuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ18xXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ18yXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ18zXCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE5MjAgMTAzOC4zNThcIj5cclxuICAgICAgICAgICAgPHBhdGggaWQ9XCJtaW51c18yXCIgZGF0YS1uYW1lPVwibWludXMgMlwiIGQ9XCJNMTkyMCwwSDBWMTAzOC4zNThjNjYuNjQ1LTE2LjA4OSwxNDAuMi0zMC43MDYsMjE4LjYyMS00My40NDUsNzkuMTQ2LTEyLjg1NiwxNjMuODk1LTIzLjksMjUxLjg5My0zMi44MzIsODkuNjI3LTkuMDk1LDE4My41LTE2LjA4MiwyNzkuMDExLTIwLjc2Niw0OC41NTItMi4zODEsOTguMjYyLTQuMiwxNDcuNzUxLTUuNCw1MC4yMTctMS4yMjIsMTAxLjQzMi0xLjg0MSwxNTIuMjI0LTEuODQxLDE1OS40NzksMCwzMTYuMyw2LDQ2Ni4xLDE3Ljg0MSwxNDQuODcxLDExLjQ0OSwyODAuOTMxLDI4LjE2LDQwNC40LDQ5LjY2OVYwWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOTIwIDEwMzguMzU4KSByb3RhdGUoMTgwKVwiIGZpbGw9XCIjY2JjYmNiXCIgb3BhY2l0eT1cIjAuMlwiLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdfNFwiPlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOTIwIDE4OTMuODYyXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfMVwiIGRhdGEtbmFtZT1cIm1pbnVzIDFcIiBkPVwiTTE5MjAsOTk2Ljg2M2gwYy0xMDguMjQ0LTI0Ljg5NC0yMjQuNzY1LTQ3LTM0Ni4zMjgtNjUuNzE0LTEyNS4zODQtMTkuMy0yNTUuOTM1LTM0Ljk0NC0zODguMDI0LTQ2LjUtMTczLjQzOC0xNS4xNzQtMzQzLjc1Ny0yMi44NjgtNTA2LjIyNi0yMi44NjgtMTM0LjM4OCwwLTI2MS4xOTEsNS4yODQtMzc2Ljg4NywxNS43MDVDMTg4LjAyNiw4ODcuOCw4Ni4yMzgsOTAyLjk3NSwwLDkyMi41OVYtODk3SDE5MjBWOTk2Ljg2MVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTkyMCA5OTYuODYzKSByb3RhdGUoMTgwKVwiIGZpbGw9XCIjY2JjYmNiXCIvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ182XCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIyNDUuNzUgMTY0Mi45NDhcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJncm91cF81OFwiIGRhdGEtbmFtZT1cImdyb3VwIDU4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExOS41IC05MzUuNzUpXCI+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzE4XCIgZGF0YS1uYW1lPVwicmVjdCAxOFwiIHdpZHRoPVwiMTM1XCIgaGVpZ2h0PVwiMTM1XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOSAxNzA4KVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8xOVwiIGRhdGEtbmFtZT1cInJlY3QgMTlcIiB3aWR0aD1cIjQwNFwiIGhlaWdodD1cIjEzNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjY2IDE0NjIpXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzI0XCIgZGF0YS1uYW1lPVwicmVjdCAyNFwiIHdpZHRoPVwiMjQ5XCIgaGVpZ2h0PVwiMjE3XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4NzMgMTI5MSlcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjBcIiBkYXRhLW5hbWU9XCJyZWN0IDIwXCIgd2lkdGg9XCI0MDRcIiBoZWlnaHQ9XCI4NDFcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MzAgMTA3MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjFcIiBkYXRhLW5hbWU9XCJyZWN0IDIxXCIgd2lkdGg9XCIyMTAuNVwiIGhlaWdodD1cIjMxNi41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOTcgOTM1Ljc1KSByb3RhdGUoOTApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIyXCIgZGF0YS1uYW1lPVwicmVjdCAyMlwiIHdpZHRoPVwiMTQ0LjYyOFwiIGhlaWdodD1cIjEwOS41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MjQuNzUgMTkwNC42ODYpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjVcIiBkYXRhLW5hbWU9XCJyZWN0IDI1XCIgd2lkdGg9XCI0NjYuNjI4XCIgaGVpZ2h0PVwiNDYzLjVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwMi41IDIxMTIuMDcpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjNcIiBkYXRhLW5hbWU9XCJyZWN0IDIzXCIgd2lkdGg9XCIzODUuMzA2XCIgaGVpZ2h0PVwiNDIwLjVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIxMjYuMjUgMjA0MC4wNykgcm90YXRlKDkwKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXzVcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAxOTQ5Ljk5OSAxMTM4LjczNlwiPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwibWludXNfM1wiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG4gICAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PVwiM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiNVwiIHJlc3VsdD1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwLjMwMlwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj1cImluXCIgaW4yPVwiYmx1clwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIi8+XHJcbiAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbHRlcj1cInVybCgjbWludXNfMylcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIm1pbnVzXzMtMlwiIGRhdGEtbmFtZT1cIm1pbnVzIDNcIiBkPVwiTTIzMTkuMjQyLDI4MjUuMjA3aC0xOTIwVjE3MTYuNDdBMjEyMS4xMDYsMjEyMS4xMDYsMCwwLDAsODE2LjkyNywxOTkxLjZhMjIwMi43MDYsMjIwMi43MDYsMCwwLDAsNDkxLjU1NiwxNzYuNjU4YzQxLjI1Nyw5LjUyNSw4My4yMjksMTcuOTcsMTI0Ljc0OSwyNS4xLDQxLjE0Niw3LjA2OCw4Mi45NTksMTMuMDM2LDEyNC4yNzcsMTcuNzM5LDQwLjk2NCw0LjY2Miw4Mi41MzYsOC4yLDEyMy41NjEsMTAuNTI5LDQwLjcsMi4zMDYsODEuOTQ4LDMuNDc1LDEyMi42LDMuNDc1aC4xOGEyMTIyLjcsMjEyMi43LDAsMCwwLDUxNS4zOTItNjMuMjMzdjY2My4zMzNaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODQuMjQgLTE3MDQuNDcpXCIgZmlsbD1cIiNmZmZcIiBvcGFjaXR5PVwiMC4yXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXzdcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAxOTUwIDEwNzkuMjVcIj5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgPGZpbHRlciBpZD1cIm1pbnVzXzRcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuICAgICAgICAgICAgICAgIDxmZU9mZnNldCBkeT1cIjNcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiNVwiIHJlc3VsdD1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwLjMwMlwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj1cImluXCIgaW4yPVwiYmx1clwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIi8+XHJcbiAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgZmlsdGVyPVwidXJsKCNtaW51c180KVwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfNC0yXCIgZGF0YS1uYW1lPVwibWludXMgNFwiIGQ9XCJNMjMxOS4yNDMsMjgyNS4yMDVoLTE5MjBWMTc3NS45NTVjMzIuOSwyNS42NzUsNjcuNjQ2LDUwLjczNywxMDMuMjc5LDc0LjQ5LDM1Ljc1NywyMy44MzUsNzMuMjY3LDQ2LjkyNCwxMTEuNDg3LDY4LjYyNSwzOC40MzMsMjEuODIzLDc4LjUyMiw0Mi43NzUsMTE5LjE1Myw2Mi4yNzMsNDAuOTMsMTkuNjQzLDgzLjQxNiwzOC4yOTMsMTI2LjI3Nyw1NS40MzMsMTc3LjQ2Miw3MC45NjUsMzY3LjczMSwxMTkuMjYxLDU2NS41MjEsMTQzLjU0Nyw0Ny43NTIsNS44NjQsOTYuMTA4LDEwLjMxNywxNDMuNzIzLDEzLjIzNSw0Ny4wMzMsMi44ODMsOTQuNTc2LDQuMzQ1LDE0MS4zMDgsNC4zNDVoLjEyOGMyNi44OTQsMCw1NC4wODMtLjQ4OCw4MC44MTEtMS40NDUsMjYuNTU5LS45NTIsNTMuMzc0LTIuMzk1LDc5LjctNC4yODgsMjYuMTczLTEuODgzLDUyLjU3Ni00LjI2MSw3OC40NzUtNy4wNzEsMjUuNzU2LTIuNzk0LDUxLjcxLTYuMDksNzcuMTQtOS44LDI1LjMtMy42ODcsNTAuNzcxLTcuODgsNzUuNjk1LTEyLjQ2MSwyNC44MTMtNC41NjEsNDkuNzU3LTkuNjMxLDc0LjEzOS0xNS4wNjgsMjQuMjg4LTUuNDE3LDQ4LjY3MS0xMS4zNDMsNzIuNDcyLTE3LjYxNSwyMy43MjItNi4yNTIsNDcuNTA3LTEzLjAxNiw3MC42OTQtMjAuMVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4NC4yNCAtMTc2My45NilcIiBmaWxsPVwiI2ZmZlwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpblRpdGxlXCI+VW5sZWFzaCB0aGUgcG93ZXIgb2YgRGVGaTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+REZpbmFjZSBpcyBidWlsZGluZyB0aGUgb3BlbiBmaW5hbmNpYWwgc2VydmljZXMgaW5mcmFzdHJ1Y3R1cmUgZm9yIHRoZSBERklOSVRZIEludGVybmV0IENvbXB1dGVyLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkFwcCBpcyBjb21pbmc8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDFfYWNjZXNzb3J5XzFcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAxX2FjY2Vzc29yeV8yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwMV9ib3hcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpblwiPkRTd2FwPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5BdXRvbWF0ZWQgbWFya2V0IG1ha2VyIGRlY2VudHJhbGl6ZWQgZXhjaGFuZ2UuPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5Cb290c3RyYXAgbGlxdWlkaXR5IGZvciB5b3VyIHRva2VucywgYnV5ICYgc2VsbCB3aGF0ZXZlciB0b2tlbnMgeW91IHdhbnQuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAyX2FjY2Vzc29yeV8xXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwMl9hY2Nlc3NvcnlfMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDJfYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW5cIj5Ub2tlbiBJc3N1YW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+VW5pZmllZCB0b2tlbiBzdGFuZGFyZC48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPklzc3VlIHlvdXIgdG9rZW4gb24gRGZpbml0eSB3aXRoIG9uZSBjbGljayBvZiBhIGJ1dHRvbi48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDNfYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW5cIj5EVVNEIFN0YWJsZWNvaW48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPk92ZXJjb2xsYXRlcmFsaXplZCBzdGFibGVjb2luLjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+TWludCBEVVNEIHdpdGggeW91ciBJQ1AgdG9rZW5zIGFuZCBvdGhlciBjcm9zcy1jaGFpbiBhc3NldHMuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwM19hY2Nlc3NvcnlfMVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDNfYWNjZXNzb3J5XzJcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDU1Mi4zNCAxNTAuMzk3XCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB4MT1cIjAuMjg4XCIgeTE9XCItMC44MzRcIiB4Mj1cIjAuNzNcIiB5Mj1cIjEuNzZcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJwYXRoXzM0XCIgZGF0YS1uYW1lPVwicGF0aCAzNFwiIGQ9XCJNNTIuMjY3LDE4MjMuMTIxYzgwLjQyMi02OS41MjMsMTE5LjM0MiwxNTIuMjUxLDI3Mi4wOTIsNDIuNDY5czE4My45MjEsNDAuNzg2LDI0Ni45NDktMjAuMzkzLDE3LjIyMSwxMTQuNTQxLDE3LjIyMSwxMTQuNTQxTDYxLjM5NCwxOTUxLjc1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTIuMjY3IC0xODA5LjM0KVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXA0X2FjY2Vzc29yeV8xXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwNF9ib3hcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpblwiPkRMZW5kPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5EZWNlbnRyYWxpemVkIG1vbmV5IG1hcmtldC48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkVhcm4gcGFzc2l2ZSBpbmNvbWUgb24geW91ciBhc3NldHMgYW5kIGJvcnJvdyB0b2tlbnMgZnJvbSB0aGUgbGVuZGluZyBwb29sLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDRfYWNjZXNzb3J5XzJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tvcGFjaXR5OiBcIjBcIn19PkRGSU5BTkNFPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyczQ5YU1oWUpkbnlOWF9uNVE0b2hnT1NQVTV6U0VPbi92aWV3P3VzcD1zaGFyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+T25lcGFnZXI8L2E+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPldoaXRlIHBhcGVyPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5UZWFtPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5BcHA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI0MS41NTRcIiBoZWlnaHQ9XCIzMy43NDlcIiB2aWV3Qm94PVwiMCAwIDQxLjU1NCAzMy43NDlcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtdHdpdHRlclwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS10d2l0dGVyXCIgZD1cIk0zNy4yODMsMTEuNzkyYy4wMjYuMzY5LjAyNi43MzguMDI2LDEuMTA3LDAsMTEuMjU5LTguNTY5LDI0LjIzMS0yNC4yMzEsMjQuMjMxQTI0LjA2NywyNC4wNjcsMCwwLDEsMCwzMy4zMDdhMTcuNjE4LDE3LjYxOCwwLDAsMCwyLjA1Ny4xMDVBMTcuMDU2LDE3LjA1NiwwLDAsMCwxMi42MywyOS43NzRhOC41MzEsOC41MzEsMCwwLDEtNy45NjMtNS45MDZBMTAuNzQsMTAuNzQsMCwwLDAsNi4yNzUsMjRhOS4wMDcsOS4wMDcsMCwwLDAsMi4yNDEtLjI5LDguNTE4LDguNTE4LDAsMCwxLTYuODI5LTguMzU4di0uMTA1YTguNTc3LDguNTc3LDAsMCwwLDMuODUsMS4wODFBOC41MjksOC41MjksMCwwLDEsMi45LDQuOTM2YTI0LjIwOCwyNC4yMDgsMCwwLDAsMTcuNTYsOC45MTJBOS42MTQsOS42MTQsMCwwLDEsMjAuMjUsMTEuOSw4LjUyNSw4LjUyNSwwLDAsMSwzNC45ODksNi4wN2ExNi43NjcsMTYuNzY3LDAsMCwwLDUuNDA1LTIuMDU3QTguNDkzLDguNDkzLDAsMCwxLDM2LjY1LDguNzA3YTE3LjA3MywxNy4wNzMsMCwwLDAsNC45LTEuMzE4LDE4LjMwNywxOC4zMDcsMCwwLDEtNC4yNzEsNC40WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0zLjM4MSlcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI0MC4wMDlcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAuMDA5IDQwXCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB5MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLWluc3RhZ3JhbVwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1pbnN0YWdyYW1cIiBkPVwiTTIwLDExLjk4MkExMC4yNTYsMTAuMjU2LDAsMSwwLDMwLjI1OSwyMi4yMzgsMTAuMjM5LDEwLjIzOSwwLDAsMCwyMCwxMS45ODJabTAsMTYuOTIzYTYuNjY3LDYuNjY3LDAsMSwxLDYuNjY3LTYuNjY3QTYuNjgsNi42OCwwLDAsMSwyMCwyOC45MDVaTTMzLjA3MSwxMS41NjNhMi4zOTIsMi4zOTIsMCwxLDEtMi4zOTItMi4zOTJBMi4zODcsMi4zODcsMCwwLDEsMzMuMDcxLDExLjU2M1ptNi43OTIsMi40MjhjLS4xNTItMy4yLS44ODQtNi4wNDMtMy4yMzEtOC4zODFzLTUuMTc3LTMuMDctOC4zODEtMy4yMzFjLTMuMy0uMTg3LTEzLjItLjE4Ny0xNi41LDAtMy4yLjE1Mi02LjAzNC44ODQtOC4zODEsMy4yMjJTLjMsMTAuNzc3LjEzNSwxMy45ODJjLS4xODcsMy4zLS4xODcsMTMuMiwwLDE2LjUuMTUyLDMuMi44ODQsNi4wNDMsMy4yMzEsOC4zODFzNS4xNzcsMy4wNyw4LjM4MSwzLjIzMWMzLjMuMTg3LDEzLjIuMTg3LDE2LjUsMCwzLjItLjE1Miw2LjA0My0uODg0LDguMzgxLTMuMjMxczMuMDctNS4xNzcsMy4yMzEtOC4zODFjLjE4Ny0zLjMuMTg3LTEzLjE5MiwwLTE2LjQ5NVpNMzUuNiwzNC4wMjhhNi43NSw2Ljc1LDAsMCwxLTMuOCwzLjhjLTIuNjMzLDEuMDQ0LTguODgxLjgtMTEuNzkxLjhzLTkuMTY3LjIzMi0xMS43OTEtLjhhNi43NSw2Ljc1LDAsMCwxLTMuOC0zLjhjLTEuMDQ0LTIuNjMzLS44LTguODgxLS44LTExLjc5MXMtLjIzMi05LjE2Ny44LTExLjc5MWE2Ljc1LDYuNzUsMCwwLDEsMy44LTMuOGMyLjYzMy0xLjA0NCw4Ljg4MS0uOCwxMS43OTEtLjhzOS4xNjctLjIzMiwxMS43OTEuOGE2Ljc1LDYuNzUsMCwwLDEsMy44LDMuOGMxLjA0NCwyLjYzMy44LDguODgxLjgsMTEuNzkxUzM2LjY0MSwzMS40LDM1LjYsMzQuMDI4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwNSAtMi4yMzgpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RmaW5hbmNlLXRlY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjM4LjA2N1wiIGhlaWdodD1cIjM3LjExNlwiIHZpZXdCb3g9XCIwIDAgMzguMDY3IDM3LjExNlwiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeTE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UxMmI3Y1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzMjNhOGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1naXRodWJcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtZ2l0aHViXCIgZD1cIk0xMi43MzMsMzAuNDQ4YzAsLjE1My0uMTc3LjI3Ni0uNC4yNzYtLjI1My4wMjMtLjQzLS4xLS40My0uMjc2LDAtLjE1My4xNzctLjI3Ni40LS4yNzZDMTIuNTMzLDMwLjE0OSwxMi43MzMsMzAuMjcyLDEyLjczMywzMC40NDhaTTEwLjM0NiwzMC4xYy0uMDU0LjE1My4xLjMzLjMzLjM3NmEuMzYuMzYsMCwwLDAsLjQ3Ni0uMTUzYy4wNDYtLjE1My0uMS0uMzMtLjMzLS40QS4zOTQuMzk0LDAsMCwwLDEwLjM0NiwzMC4xWm0zLjM5Mi0uMTNjLS4yMjMuMDU0LS4zNzYuMi0uMzUzLjM3Ni4wMjMuMTUzLjIyMy4yNTMuNDUzLjJzLjM3Ni0uMi4zNTMtLjM1M1MxMy45NiwyOS45NDksMTMuNzM4LDI5Ljk3MlpNMTguNzg4LjU2M0ExOC40LDE4LjQsMCwwLDAsMCwxOS4yODksMTkuMjQxLDE5LjI0MSwwLDAsMCwxMy4wMDksMzcuNjQ3Yy45ODIuMTc3LDEuMzI4LS40MywxLjMyOC0uOTI5LDAtLjQ3Ni0uMDIzLTMuMS0uMDIzLTQuNzEyLDAsMC01LjM3MiwxLjE1MS02LjUtMi4yODcsMCwwLS44NzUtMi4yMzMtMi4xMzQtMi44MDksMCwwLTEuNzU4LTEuMi4xMjMtMS4xODJhNC4wNTEsNC4wNTEsMCwwLDEsMi45NjIsMS45OCw0LjA1Nyw0LjA1NywwLDAsMCw1LjU5NSwxLjYsNC4yNjYsNC4yNjYsMCwwLDEsMS4yMjgtMi41ODZjLTQuMjktLjQ3Ni04LjYxOS0xLjEtOC42MTktOC40ODFhNS44MTcsNS44MTcsMCwwLDEsMS44MTEtNC41Miw3LjI1MSw3LjI1MSwwLDAsMSwuMi01LjIxMWMxLjYtLjUsNS4zLDIuMDcyLDUuMywyLjA3MmExOC4xMzEsMTguMTMxLDAsMCwxLDkuNjQsMHMzLjY5Mi0yLjU3OSw1LjMtMi4wNzJhNy4yNDgsNy4yNDgsMCwwLDEsLjIsNS4yMTEsNS45NjYsNS45NjYsMCwwLDEsMS45OCw0LjUyYzAsNy40MDYtNC41Miw4LTguODExLDguNDgxYTQuNTM5LDQuNTM5LDAsMCwxLDEuMywzLjU2MWMwLDIuNTg2LS4wMjMsNS43ODctLjAyMyw2LjQxNiwwLC41LjM1MywxLjEwNSwxLjMyOC45MjlBMTkuMDY0LDE5LjA2NCwwLDAsMCwzOC4wNjcsMTkuMjg5QzM4LjA2Nyw4LjY0NCwyOS40MzMuNTYzLDE4Ljc4OC41NjNaTTcuNDYsMjcuMDMzYy0uMS4wNzctLjA3Ny4yNTMuMDU0LjQuMTIzLjEyMy4zLjE3Ny40LjA3Ny4xLS4wNzcuMDc3LS4yNTMtLjA1NC0uNEM3LjczNiwyNi45ODcsNy41NiwyNi45MzMsNy40NiwyNy4wMzNabS0uODI5LS42MjJjLS4wNTQuMS4wMjMuMjIzLjE3Ny4zYS4yMjguMjI4LDAsMCwwLC4zMy0uMDU0Yy4wNTQtLjEtLjAyMy0uMjIzLS4xNzctLjNDNi44MDgsMjYuMzExLDYuNjg1LDI2LjMzNSw2LjYzMSwyNi40MTFabTIuNDg3LDIuNzMyYy0uMTIzLjEtLjA3Ny4zMy4xLjQ3Ni4xNzcuMTc3LjQuMi41LjA3Ny4xLS4xLjA1NC0uMzMtLjEtLjQ3NkM5LjQ0OCwyOS4wNDQsOS4yMTcsMjkuMDIxLDkuMTE4LDI5LjE0M1ptLS44NzUtMS4xMjhjLS4xMjMuMDc3LS4xMjMuMjc2LDAsLjQ1M3MuMzMuMjUzLjQzLjE3N2EuMzUuMzUsMCwwLDAsMC0uNDc2QzguNTY1LDI3Ljk5Miw4LjM2NiwyNy45MTYsOC4yNDMsMjguMDE1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0wLjU2MylcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzMy43MzhcIiBoZWlnaHQ9XCIzOC41NThcIiB2aWV3Qm94PVwiMCAwIDMzLjczOCAzOC41NThcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtZGlzY29yZFwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1kaXNjb3JkXCIgZD1cIk0yMi4zODMsMTguMzE1YTEuOTczLDEuOTczLDAsMSwxLTEuOTY2LTIuMTRBMi4wNTQsMi4wNTQsMCwwLDEsMjIuMzgzLDE4LjMxNVptLTktMi4xNGEyLjE0OCwyLjE0OCwwLDAsMCwwLDQuMjgsMi4wNTQsMi4wNTQsMCwwLDAsMS45NjYtMi4xNEEyLjA0MiwyLjA0MiwwLDAsMCwxMy4zOCwxNi4xNzVabTIwLjM1OS0xMi4yVjM4LjU1OGMtNC44NTctNC4yOTItMy4zLTIuODcxLTguOTQ1LTguMTE2bDEuMDIyLDMuNTY3SDMuOTUyQTMuOTYyLDMuOTYyLDAsMCwxLDAsMzAuMDM3VjMuOTcxQTMuOTYyLDMuOTYyLDAsMCwxLDMuOTUyLDBIMjkuNzg2QTMuOTYyLDMuOTYyLDAsMCwxLDMzLjczOCwzLjk3MVpNMjguMjQ0LDIyLjI0OGEyNS44MTgsMjUuODE4LDAsMCwwLTIuNzc2LTExLjI0QTkuNTM0LDkuNTM0LDAsMCwwLDIwLjA1LDguOTg0bC0uMjcuMzA4YTEyLjgzMSwxMi44MzEsMCwwLDEsNC44LDIuNDQ4LDE2LjM4MSwxNi4zODEsMCwwLDAtMTQuNC0uNTU5Yy0uNzEzLjMyOC0xLjEzNy41NTktMS4xMzcuNTU5YTEzLjAwNiwxMy4wMDYsMCwwLDEsNS4wNy0yLjUyNmwtLjE5My0uMjMxQTkuNTM0LDkuNTM0LDAsMCwwLDguNSwxMS4wMDhhMjUuODE4LDI1LjgxOCwwLDAsMC0yLjc3NiwxMS4yNCw2Ljk5LDYuOTksMCwwLDAsNS44OCwyLjkzcy43MTMtLjg2OCwxLjI5Mi0xLjZBNiw2LDAsMCwxLDkuNTI0LDIxLjNjLjI4NC4yLjc1MS40NTYuNzkuNDgyYTE0LjA1MywxNC4wNTMsMCwwLDAsMTIuMDMuNjc1LDExLjAzMiwxMS4wMzIsMCwwLDAsMi4yMTctMS4xMzcsNi4wODMsNi4wODMsMCwwLDEtMy40ODksMi4yOTRjLjU3OC43MzMsMS4yNzIsMS41NjIsMS4yNzIsMS41NjJBNy4wNDcsNy4wNDcsMCwwLDAsMjguMjQ0LDIyLjI0OFpcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPkNvcHlyaWdodCDCqSAyMDIxIERGaW5hbmNlLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICAgKi99XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9