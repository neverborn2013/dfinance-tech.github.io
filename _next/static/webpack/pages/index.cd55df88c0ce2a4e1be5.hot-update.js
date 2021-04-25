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
    console.log(dom);

    if (dom) {
      var top = dom.getBoundingClientRect().top;
      console.log(top);

      var handleScroll = function handleScroll() {
        console.log(document.getElementsByTagName("html")[0].scrollTop);

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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "DFinance")), __jsx("div", {
    className: "header-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Unleash the power of DeFi"), __jsx("div", {
    className: "header-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "DFinace is building the open financial services infrastructure for the DFINITY Internet Computer."), __jsx("div", {
    className: "header-cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-card card-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Unified token standard for Dfinity"))), __jsx("div", {
    className: "header-card card-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Issue your token with one click of a button"))), __jsx("div", {
    className: "header-card card-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Manage your tokens: transfer, burn, mint")))), __jsx("div", {
    ref: content_1,
    className: "content-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3dc4ed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2976ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 85,
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
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f89e36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffab4a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 94,
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
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5a68d2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#b146d7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 103,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "bg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "content-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Automated Market Maker Decentralized Exchange"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Lightning Swap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Swap one token for another with lightning speed"), __jsx("div", {
    className: "svg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "svg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "API for developers to build their own application based on DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Such as liquidity farming applications"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 130,
      columnNumber: 19
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 135,
      columnNumber: 17
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "Provide Liquidity To Earn 0.3% Transaction Fee")), __jsx("div", {
    className: "box-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "Secure Atomic Swap"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 528.027 377.633",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5a68d2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#b146d7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3dc4ed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2976ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f89e36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffab4a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 160,
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
      lineNumber: 161,
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
      lineNumber: 162,
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
      lineNumber: 163,
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
      lineNumber: 164,
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
      lineNumber: 165,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "link-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "whitepaper",
    href: "https://drive.google.com/file/d/1rs49aMhYJdnyNX_n5Q4ohgOSPU5zSEOn/view?usp=sharing",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, "White papper")), __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "team",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  }, "Team"))), __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "app",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, "App")), __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, "About"))))), __jsx("div", {
    className: "footer-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
      lineNumber: 199,
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
      lineNumber: 200,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJjb250ZW50XzEiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwidmFsIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJkb20iLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsIm9wYWNpdHkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVqQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsVUFDRUMsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixVQUExQixLQUNBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFFBQTFCLENBREEsSUFFQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixTQUExQixDQUZBLElBR0FGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FIQSxJQUlBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSkEsSUFLQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixhQUExQixDQUxBLElBTUFGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsZ0JBQTFCLENBUEYsRUFRQztBQUNDLGVBQU8sSUFBUDtBQUNELE9BVkQsTUFVTztBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0YsS0FkRDs7QUFnQkEsUUFBTUMsR0FBRyxHQUFHSixRQUFRLEVBQXBCOztBQUNBLFFBQUlJLEdBQUosRUFBUztBQUNQLFVBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFiO0FBQ0FGLFVBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO0FBQ0Q7O0FBRUQsUUFBTUMsR0FBRyxHQUFHYixTQUFTLENBQUNjLE9BQXRCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaOztBQUNBLFFBQUlBLEdBQUosRUFBUztBQUNQLFVBQU1JLEdBQUcsR0FBR0osR0FBRyxDQUFDSyxxQkFBSixHQUE0QkQsR0FBeEM7QUFDQUYsYUFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7O0FBQ0EsVUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkosZUFBTyxDQUFDQyxHQUFSLENBQVlQLFFBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNVLFNBQXJEOztBQUNBLFlBQUlYLFFBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNVLFNBQXpDLEdBQXFESCxHQUFHLEdBQUcsR0FBL0QsRUFBb0U7QUFDbEVSLGtCQUFRLENBQUNZLHNCQUFULENBQWdDLE1BQWhDLEVBQXdDLENBQXhDLEVBQTJDQyxLQUEzQyxDQUFpREMsT0FBakQsR0FBMkQsR0FBM0Q7QUFDRDtBQUNGLE9BTEQ7O0FBTUFDLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NOLFlBQWxDO0FBQ0Q7QUFFRixHQXJDUSxFQXFDTixFQXJDTSxDQUFUO0FBdUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQRixFQVFFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUdBUkYsRUFTRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUZGLENBREYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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YmU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgY29udGVudF8xID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9ICgpID0+IHtcclxuICAgICAgaWYoIFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSlcclxuICAgICAgKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsID0gaXNNb2JpbGUoKTtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcclxuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvbSA9IGNvbnRlbnRfMS5jdXJyZW50O1xyXG4gICAgY29uc29sZS5sb2coZG9tKTtcclxuICAgIGlmIChkb20pIHtcclxuICAgICAgY29uc3QgdG9wID0gZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgY29uc29sZS5sb2codG9wKTtcclxuICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5zY3JvbGxUb3ApO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uc2Nyb2xsVG9wID4gdG9wICogMC4yKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmctNFwiKVswXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ERmluYW5jZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnJhbmRcIj5cclxuICAgICAgICA8YSBocmVmPVwiL1wiPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+VW5sZWFzaCB0aGUgcG93ZXIgb2YgRGVGaTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdWJ0aXRsZVwiPkRGaW5hY2UgaXMgYnVpbGRpbmcgdGhlIG9wZW4gZmluYW5jaWFsIHNlcnZpY2VzIGluZnJhc3RydWN0dXJlIGZvciB0aGUgREZJTklUWSBJbnRlcm5ldCBDb21wdXRlci48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY2FyZHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPlVuaWZpZWQgdG9rZW4gc3RhbmRhcmQgZm9yIERmaW5pdHk8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPklzc3VlIHlvdXIgdG9rZW4gd2l0aCBvbmUgY2xpY2sgb2YgYSBidXR0b248L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPk1hbmFnZSB5b3VyIHRva2VuczogdHJhbnNmZXIsIGJ1cm4sIG1pbnQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgcmVmPXtjb250ZW50XzF9IGNsYXNzTmFtZT1cImNvbnRlbnQtMVwiPlxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiYmctMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgMjc3Mi4zOSAxMTgyLjYxOVwiPlxyXG4gICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImJnLTEtbGluZWFyLWdyYWRpZW50XCIgeDE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjM2RjNGVkXCIvPlxyXG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMjk3NmJhXCIvPlxyXG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgPHBhdGggaWQ9XCLot6/lvoRfNDNcIiBkYXRhLW5hbWU9XCLot6/lvoQgNDNcIiBkPVwiTTEzMTMuMTgzLDg3OC45YzQwMy40MjItMTY2LjM1MiwxODcyLjM3NS0xMDAuNDgsMjI0OC4wMDksOTguODM2czE0LjYyNSw3MDEuNi03NTQuMjg1LDg5NS45MzQtMTQ4MC44MTgsNzcuMDg1LTE3MjcuNjItMjc2LjZTOTA5Ljc2LDEwNDUuMjU3LDEzMTMuMTgzLDg3OC45WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTM4LjQzNSAtNzg0LjM3NylcIiBmaWxsPVwidXJsKCNiZy0xLWxpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJiZy0yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAyMzI4LjUzMiAxMDc5Ljc1M1wiPlxyXG4gICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImJnLTItbGluZWFyLWdyYWRpZW50XCIgeDE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZjg5ZTM2XCIvPlxyXG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZmZhYjRhXCIvPlxyXG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgPHBhdGggaWQ9XCLot6/lvoRfNDVcIiBkYXRhLW5hbWU9XCLot6/lvoQgNDVcIiBkPVwiTTM3OTMuMzUzLDE0NDQuMTM4QzM1NDQuMjcxLDgyMC44LDE3MDguMTU5LDEwNDQuOTMsMTUzOS4wOSwxMzc3Ljg4N3MyMzMuMiw3MDYuMjU0LDgwMy4yNDMsNzQ0LjQ3M1M0MDQyLjQzNCwyMDY3LjQ3NywzNzkzLjM1MywxNDQ0LjEzOFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE1MDAuMTQ1IC0xMDUwLjAwNylcIiBmaWxsPVwidXJsKCNiZy0yLWxpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJiZy0zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAyMjkzLjc5NiA5NTAuMTI1XCI+XHJcbiAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiYmctMy1saW5lYXItZ3JhZGllbnRcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiM1YTY4ZDJcIi8+XHJcbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNiMTQ2ZDdcIi8+XHJcbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICA8cGF0aCBpZD1cIui3r+W+hF80NFwiIGRhdGEtbmFtZT1cIui3r+W+hCA0NFwiIGQ9XCJNMTM3NC4yLDE4OTAuMDUyYzEyOS41NTUtMzk1LjE0MywxNzkyLjc3Mi00MjIuMTkyLDIxNzEuMDczLTEzNy4xNzFzLTU0MC4xMzEsODE4LjI4Mi0xMzEwLjI1Miw3NTQuN1MxMjQ0LjY0NywyMjg1LjE5NSwxMzc0LjIsMTg5MC4wNTJaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzM5LjM5NSAtMTU2Mi42NzUpXCIgZmlsbD1cInVybCgjYmctMy1saW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctNFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0xXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkF1dG9tYXRlZCBNYXJrZXQgTWFrZXIgRGVjZW50cmFsaXplZCBFeGNoYW5nZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+TGlnaHRuaW5nIFN3YXA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5Td2FwIG9uZSB0b2tlbiBmb3IgYW5vdGhlciB3aXRoIGxpZ2h0bmluZyBzcGVlZDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkFQSSBmb3IgZGV2ZWxvcGVycyB0byBidWlsZCB0aGVpciBvd24gYXBwbGljYXRpb24gYmFzZWQgb24gRFN3YXA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5TdWNoIGFzIGxpcXVpZGl0eSBmYXJtaW5nIGFwcGxpY2F0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsPjAuMyU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI3ODguNjYxXCIgaGVpZ2h0PVwiMjMyLjc0NVwiIHZpZXdCb3g9XCIwIDAgNzg4LjY2MSAyMzIuNzQ1XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeDE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTIxZjc5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjYTAxOWJhXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCLot6/lvoRfNTBcIiBkYXRhLW5hbWU9XCLot6/lvoQgNTBcIiBkPVwiTTMwMzguMDMxLDI1MzIuMjE2Yy0xODQuNzg5LDE1MC41MDgtMTQ2LjUxOC01My40MDktMzI1LjU5NSwwcy0xNjIuMjI3LTcwLjI2LTMyMS44ODIsMjEuMTM1LTM3Ljk4NiwxOTcuOTI3LTM3Ljk4NiwxOTcuOTI3aDc0NC4zWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjMwOC4yMDYgLTI1MTguNTMzKVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzcGFuPlByb3ZpZGUgTGlxdWlkaXR5IFRvIEVhcm4gMC4zJSBUcmFuc2FjdGlvbiBGZWU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTVcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlNlY3VyZSBBdG9taWMgU3dhcDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCA1MjguMDI3IDM3Ny42MzNcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudC0xXCIgeDE9XCIwLjE0NlwiIHgyPVwiMVwiIHkyPVwiMC44MjdcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiM1YTY4ZDJcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjYjE0NmQ3XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudC0yXCIgeDE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzNkYzRlZFwiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMyOTc2YmFcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50LTNcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZjg5ZTM2XCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2ZmYWI0YVwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnQtNFwiIHgxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMjFmNzlcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjYTAxOWJhXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9XCJvdmFsXzE0XCIgZGF0YS1uYW1lPVwib3ZhbCAxNFwiIGN4PVwiNzQuMzQ0XCIgY3k9XCIxNzEuNzQ2XCIgcng9XCI3NC4zNDRcIiByeT1cIjE3MS43NDZcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC42MDIsIC0wLjc5OSwgMC43OTksIDAuNjAyLCAxNDAuNzg4LCAxNjMuNDc5KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2UxZTFlMVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZVdpZHRoPVwiNlwiLz5cclxuICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD1cIm92YWxfMTVcIiBkYXRhLW5hbWU9XCJvdmFsIDE1XCIgY3g9XCIxMzkuNzY5XCIgY3k9XCIxMzQuOTM3XCIgcng9XCIxMzkuNzY5XCIgcnk9XCIxMzQuOTM3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE1MC40NTUgMTM1LjI5Mikgcm90YXRlKC0yOClcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNlMWUxZTFcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIiBzdHJva2VXaWR0aD1cIjZcIi8+XHJcbiAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIm92YWxfMTFcIiBkYXRhLW5hbWU9XCJvdmFsIDExXCIgY3g9XCI3OC4wNTRcIiBjeT1cIjc4LjA1NFwiIHI9XCI3OC4wNTRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYwLjY1OSAxMTAuNzYzKVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0xKVwiLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbF8xMlwiIGRhdGEtbmFtZT1cIm92YWwgMTJcIiBjeD1cIjI1LjQyOFwiIGN5PVwiMjUuNDI4XCIgcj1cIjI1LjQyOFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk2NiwgLTAuMjU5LCAwLjI1OSwgMC45NjYsIDQyMy43NjcsIDkyLjc4MilcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtMilcIi8+XHJcbiAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIm92YWxfMTNcIiBkYXRhLW5hbWU9XCJvdmFsIDEzXCIgY3g9XCIyNS40MjhcIiBjeT1cIjI1LjQyOFwiIHI9XCIyNS40MjhcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC45OTYsIDAuMDg3LCAtMC4wODcsIDAuOTk2LCAxODkuNDA2LCAxNzkuOTE3KVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0zKVwiLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbF8xNlwiIGRhdGEtbmFtZT1cIm92YWwgMTZcIiBjeD1cIjE5XCIgY3k9XCIxOVwiIHI9XCIxOVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDMxMi4xOTcpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctMVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctMlwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctM1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJyYW5kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay13cmFwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2hpdGVwYXBlclwiIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyczQ5YU1oWUpkbnlOWF9uNVE0b2hnT1NQVTV6U0VPbi92aWV3P3VzcD1zaGFyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V2hpdGUgcGFwcGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZWFtXCI+VGVhbTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFwcFwiPkFwcDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZmluYW5jZS10ZWNoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjM4LjA2N1wiIGhlaWdodD1cIjM3LjExNlwiIHZpZXdCb3g9XCIwIDAgMzguMDY3IDM3LjExNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1naXRodWJcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtZ2l0aHViXCIgZD1cIk0xMi43MzMsMzAuNDQ4YzAsLjE1My0uMTc3LjI3Ni0uNC4yNzYtLjI1My4wMjMtLjQzLS4xLS40My0uMjc2LDAtLjE1My4xNzctLjI3Ni40LS4yNzZDMTIuNTMzLDMwLjE0OSwxMi43MzMsMzAuMjcyLDEyLjczMywzMC40NDhaTTEwLjM0NiwzMC4xYy0uMDU0LjE1My4xLjMzLjMzLjM3NmEuMzYuMzYsMCwwLDAsLjQ3Ni0uMTUzYy4wNDYtLjE1My0uMS0uMzMtLjMzLS40QS4zOTQuMzk0LDAsMCwwLDEwLjM0NiwzMC4xWm0zLjM5Mi0uMTNjLS4yMjMuMDU0LS4zNzYuMi0uMzUzLjM3Ni4wMjMuMTUzLjIyMy4yNTMuNDUzLjJzLjM3Ni0uMi4zNTMtLjM1M1MxMy45NiwyOS45NDksMTMuNzM4LDI5Ljk3MlpNMTguNzg4LjU2M0ExOC40LDE4LjQsMCwwLDAsMCwxOS4yODksMTkuMjQxLDE5LjI0MSwwLDAsMCwxMy4wMDksMzcuNjQ3Yy45ODIuMTc3LDEuMzI4LS40MywxLjMyOC0uOTI5LDAtLjQ3Ni0uMDIzLTMuMS0uMDIzLTQuNzEyLDAsMC01LjM3MiwxLjE1MS02LjUtMi4yODcsMCwwLS44NzUtMi4yMzMtMi4xMzQtMi44MDksMCwwLTEuNzU4LTEuMi4xMjMtMS4xODJhNC4wNTEsNC4wNTEsMCwwLDEsMi45NjIsMS45OCw0LjA1Nyw0LjA1NywwLDAsMCw1LjU5NSwxLjYsNC4yNjYsNC4yNjYsMCwwLDEsMS4yMjgtMi41ODZjLTQuMjktLjQ3Ni04LjYxOS0xLjEtOC42MTktOC40ODFhNS44MTcsNS44MTcsMCwwLDEsMS44MTEtNC41Miw3LjI1MSw3LjI1MSwwLDAsMSwuMi01LjIxMWMxLjYtLjUsNS4zLDIuMDcyLDUuMywyLjA3MmExOC4xMzEsMTguMTMxLDAsMCwxLDkuNjQsMHMzLjY5Mi0yLjU3OSw1LjMtMi4wNzJhNy4yNDgsNy4yNDgsMCwwLDEsLjIsNS4yMTEsNS45NjYsNS45NjYsMCwwLDEsMS45OCw0LjUyYzAsNy40MDYtNC41Miw4LTguODExLDguNDgxYTQuNTM5LDQuNTM5LDAsMCwxLDEuMywzLjU2MWMwLDIuNTg2LS4wMjMsNS43ODctLjAyMyw2LjQxNiwwLC41LjM1MywxLjEwNSwxLjMyOC45MjlBMTkuMDY0LDE5LjA2NCwwLDAsMCwzOC4wNjcsMTkuMjg5QzM4LjA2Nyw4LjY0NCwyOS40MzMuNTYzLDE4Ljc4OC41NjNaTTcuNDYsMjcuMDMzYy0uMS4wNzctLjA3Ny4yNTMuMDU0LjQuMTIzLjEyMy4zLjE3Ny40LjA3Ny4xLS4wNzcuMDc3LS4yNTMtLjA1NC0uNEM3LjczNiwyNi45ODcsNy41NiwyNi45MzMsNy40NiwyNy4wMzNabS0uODI5LS42MjJjLS4wNTQuMS4wMjMuMjIzLjE3Ny4zYS4yMjguMjI4LDAsMCwwLC4zMy0uMDU0Yy4wNTQtLjEtLjAyMy0uMjIzLS4xNzctLjNDNi44MDgsMjYuMzExLDYuNjg1LDI2LjMzNSw2LjYzMSwyNi40MTFabTIuNDg3LDIuNzMyYy0uMTIzLjEtLjA3Ny4zMy4xLjQ3Ni4xNzcuMTc3LjQuMi41LjA3Ny4xLS4xLjA1NC0uMzMtLjEtLjQ3NkM5LjQ0OCwyOS4wNDQsOS4yMTcsMjkuMDIxLDkuMTE4LDI5LjE0M1ptLS44NzUtMS4xMjhjLS4xMjMuMDc3LS4xMjMuMjc2LDAsLjQ1M3MuMzMuMjUzLjQzLjE3N2EuMzUuMzUsMCwwLDAsMC0uNDc2QzguNTY1LDI3Ljk5Miw4LjM2NiwyNy45MTYsOC4yNDMsMjguMDE1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0wLjU2MylcIiBmaWxsPVwiI2VmZWZlZlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IMKpIDIwMjEgRGZpbmFuY2UuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ18xXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ18yXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ18zXCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE5MjAgMTAzOC4zNThcIj5cclxuICAgICAgICAgICAgPHBhdGggaWQ9XCJtaW51c18yXCIgZGF0YS1uYW1lPVwibWludXMgMlwiIGQ9XCJNMTkyMCwwSDBWMTAzOC4zNThjNjYuNjQ1LTE2LjA4OSwxNDAuMi0zMC43MDYsMjE4LjYyMS00My40NDUsNzkuMTQ2LTEyLjg1NiwxNjMuODk1LTIzLjksMjUxLjg5My0zMi44MzIsODkuNjI3LTkuMDk1LDE4My41LTE2LjA4MiwyNzkuMDExLTIwLjc2Niw0OC41NTItMi4zODEsOTguMjYyLTQuMiwxNDcuNzUxLTUuNCw1MC4yMTctMS4yMjIsMTAxLjQzMi0xLjg0MSwxNTIuMjI0LTEuODQxLDE1OS40NzksMCwzMTYuMyw2LDQ2Ni4xLDE3Ljg0MSwxNDQuODcxLDExLjQ0OSwyODAuOTMxLDI4LjE2LDQwNC40LDQ5LjY2OVYwWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOTIwIDEwMzguMzU4KSByb3RhdGUoMTgwKVwiIGZpbGw9XCIjY2JjYmNiXCIgb3BhY2l0eT1cIjAuMlwiLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdfNFwiPlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOTIwIDE4OTMuODYyXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfMVwiIGRhdGEtbmFtZT1cIm1pbnVzIDFcIiBkPVwiTTE5MjAsOTk2Ljg2M2gwYy0xMDguMjQ0LTI0Ljg5NC0yMjQuNzY1LTQ3LTM0Ni4zMjgtNjUuNzE0LTEyNS4zODQtMTkuMy0yNTUuOTM1LTM0Ljk0NC0zODguMDI0LTQ2LjUtMTczLjQzOC0xNS4xNzQtMzQzLjc1Ny0yMi44NjgtNTA2LjIyNi0yMi44NjgtMTM0LjM4OCwwLTI2MS4xOTEsNS4yODQtMzc2Ljg4NywxNS43MDVDMTg4LjAyNiw4ODcuOCw4Ni4yMzgsOTAyLjk3NSwwLDkyMi41OVYtODk3SDE5MjBWOTk2Ljg2MVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTkyMCA5OTYuODYzKSByb3RhdGUoMTgwKVwiIGZpbGw9XCIjY2JjYmNiXCIvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ182XCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIyNDUuNzUgMTY0Mi45NDhcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJncm91cF81OFwiIGRhdGEtbmFtZT1cImdyb3VwIDU4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExOS41IC05MzUuNzUpXCI+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzE4XCIgZGF0YS1uYW1lPVwicmVjdCAxOFwiIHdpZHRoPVwiMTM1XCIgaGVpZ2h0PVwiMTM1XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOSAxNzA4KVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICAgIDxyZWN0IGlkPVwicmVjdF8xOVwiIGRhdGEtbmFtZT1cInJlY3QgMTlcIiB3aWR0aD1cIjQwNFwiIGhlaWdodD1cIjEzNVwiIHJ4PVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjY2IDE0NjIpXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzI0XCIgZGF0YS1uYW1lPVwicmVjdCAyNFwiIHdpZHRoPVwiMjQ5XCIgaGVpZ2h0PVwiMjE3XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4NzMgMTI5MSlcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjBcIiBkYXRhLW5hbWU9XCJyZWN0IDIwXCIgd2lkdGg9XCI0MDRcIiBoZWlnaHQ9XCI4NDFcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MzAgMTA3MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjFcIiBkYXRhLW5hbWU9XCJyZWN0IDIxXCIgd2lkdGg9XCIyMTAuNVwiIGhlaWdodD1cIjMxNi41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOTcgOTM1Ljc1KSByb3RhdGUoOTApXCIgZmlsbD1cIiNjMmMyYzJcIi8+XHJcbiAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJyZWN0XzIyXCIgZGF0YS1uYW1lPVwicmVjdCAyMlwiIHdpZHRoPVwiMTQ0LjYyOFwiIGhlaWdodD1cIjEwOS41XCIgcng9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MjQuNzUgMTkwNC42ODYpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjVcIiBkYXRhLW5hbWU9XCJyZWN0IDI1XCIgd2lkdGg9XCI0NjYuNjI4XCIgaGVpZ2h0PVwiNDYzLjVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwMi41IDIxMTIuMDcpIHJvdGF0ZSg5MClcIiBmaWxsPVwiI2MyYzJjMlwiLz5cclxuICAgICAgICAgICAgICA8cmVjdCBpZD1cInJlY3RfMjNcIiBkYXRhLW5hbWU9XCJyZWN0IDIzXCIgd2lkdGg9XCIzODUuMzA2XCIgaGVpZ2h0PVwiNDIwLjVcIiByeD1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIxMjYuMjUgMjA0MC4wNykgcm90YXRlKDkwKVwiIGZpbGw9XCIjYzJjMmMyXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXzVcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAxOTQ5Ljk5OSAxMTM4LjczNlwiPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwibWludXNfM1wiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG4gICAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PVwiM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiNVwiIHJlc3VsdD1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwLjMwMlwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj1cImluXCIgaW4yPVwiYmx1clwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIi8+XHJcbiAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbHRlcj1cInVybCgjbWludXNfMylcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIm1pbnVzXzMtMlwiIGRhdGEtbmFtZT1cIm1pbnVzIDNcIiBkPVwiTTIzMTkuMjQyLDI4MjUuMjA3aC0xOTIwVjE3MTYuNDdBMjEyMS4xMDYsMjEyMS4xMDYsMCwwLDAsODE2LjkyNywxOTkxLjZhMjIwMi43MDYsMjIwMi43MDYsMCwwLDAsNDkxLjU1NiwxNzYuNjU4YzQxLjI1Nyw5LjUyNSw4My4yMjksMTcuOTcsMTI0Ljc0OSwyNS4xLDQxLjE0Niw3LjA2OCw4Mi45NTksMTMuMDM2LDEyNC4yNzcsMTcuNzM5LDQwLjk2NCw0LjY2Miw4Mi41MzYsOC4yLDEyMy41NjEsMTAuNTI5LDQwLjcsMi4zMDYsODEuOTQ4LDMuNDc1LDEyMi42LDMuNDc1aC4xOGEyMTIyLjcsMjEyMi43LDAsMCwwLDUxNS4zOTItNjMuMjMzdjY2My4zMzNaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODQuMjQgLTE3MDQuNDcpXCIgZmlsbD1cIiNmZmZcIiBvcGFjaXR5PVwiMC4yXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXzdcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAxOTUwIDEwNzkuMjVcIj5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgPGZpbHRlciBpZD1cIm1pbnVzXzRcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuICAgICAgICAgICAgICAgIDxmZU9mZnNldCBkeT1cIjNcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiNVwiIHJlc3VsdD1cImJsdXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwLjMwMlwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj1cImluXCIgaW4yPVwiYmx1clwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIi8+XHJcbiAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgZmlsdGVyPVwidXJsKCNtaW51c180KVwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwibWludXNfNC0yXCIgZGF0YS1uYW1lPVwibWludXMgNFwiIGQ9XCJNMjMxOS4yNDMsMjgyNS4yMDVoLTE5MjBWMTc3NS45NTVjMzIuOSwyNS42NzUsNjcuNjQ2LDUwLjczNywxMDMuMjc5LDc0LjQ5LDM1Ljc1NywyMy44MzUsNzMuMjY3LDQ2LjkyNCwxMTEuNDg3LDY4LjYyNSwzOC40MzMsMjEuODIzLDc4LjUyMiw0Mi43NzUsMTE5LjE1Myw2Mi4yNzMsNDAuOTMsMTkuNjQzLDgzLjQxNiwzOC4yOTMsMTI2LjI3Nyw1NS40MzMsMTc3LjQ2Miw3MC45NjUsMzY3LjczMSwxMTkuMjYxLDU2NS41MjEsMTQzLjU0Nyw0Ny43NTIsNS44NjQsOTYuMTA4LDEwLjMxNywxNDMuNzIzLDEzLjIzNSw0Ny4wMzMsMi44ODMsOTQuNTc2LDQuMzQ1LDE0MS4zMDgsNC4zNDVoLjEyOGMyNi44OTQsMCw1NC4wODMtLjQ4OCw4MC44MTEtMS40NDUsMjYuNTU5LS45NTIsNTMuMzc0LTIuMzk1LDc5LjctNC4yODgsMjYuMTczLTEuODgzLDUyLjU3Ni00LjI2MSw3OC40NzUtNy4wNzEsMjUuNzU2LTIuNzk0LDUxLjcxLTYuMDksNzcuMTQtOS44LDI1LjMtMy42ODcsNTAuNzcxLTcuODgsNzUuNjk1LTEyLjQ2MSwyNC44MTMtNC41NjEsNDkuNzU3LTkuNjMxLDc0LjEzOS0xNS4wNjgsMjQuMjg4LTUuNDE3LDQ4LjY3MS0xMS4zNDMsNzIuNDcyLTE3LjYxNSwyMy43MjItNi4yNTIsNDcuNTA3LTEzLjAxNiw3MC42OTQtMjAuMVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4NC4yNCAtMTc2My45NilcIiBmaWxsPVwiI2ZmZlwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpblRpdGxlXCI+VW5sZWFzaCB0aGUgcG93ZXIgb2YgRGVGaTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+REZpbmFjZSBpcyBidWlsZGluZyB0aGUgb3BlbiBmaW5hbmNpYWwgc2VydmljZXMgaW5mcmFzdHJ1Y3R1cmUgZm9yIHRoZSBERklOSVRZIEludGVybmV0IENvbXB1dGVyLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkFwcCBpcyBjb21pbmc8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDFfYWNjZXNzb3J5XzFcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAxX2FjY2Vzc29yeV8yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwMV9ib3hcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpblwiPkRTd2FwPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5BdXRvbWF0ZWQgbWFya2V0IG1ha2VyIGRlY2VudHJhbGl6ZWQgZXhjaGFuZ2UuPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5Cb290c3RyYXAgbGlxdWlkaXR5IGZvciB5b3VyIHRva2VucywgYnV5ICYgc2VsbCB3aGF0ZXZlciB0b2tlbnMgeW91IHdhbnQuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXAyX2FjY2Vzc29yeV8xXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwMl9hY2Nlc3NvcnlfMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDJfYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW5cIj5Ub2tlbiBJc3N1YW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+VW5pZmllZCB0b2tlbiBzdGFuZGFyZC48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPklzc3VlIHlvdXIgdG9rZW4gb24gRGZpbml0eSB3aXRoIG9uZSBjbGljayBvZiBhIGJ1dHRvbi48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDNfYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW5cIj5EVVNEIFN0YWJsZWNvaW48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPk92ZXJjb2xsYXRlcmFsaXplZCBzdGFibGVjb2luLjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+TWludCBEVVNEIHdpdGggeW91ciBJQ1AgdG9rZW5zIGFuZCBvdGhlciBjcm9zcy1jaGFpbiBhc3NldHMuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwM19hY2Nlc3NvcnlfMVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDNfYWNjZXNzb3J5XzJcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDU1Mi4zNCAxNTAuMzk3XCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB4MT1cIjAuMjg4XCIgeTE9XCItMC44MzRcIiB4Mj1cIjAuNzNcIiB5Mj1cIjEuNzZcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJwYXRoXzM0XCIgZGF0YS1uYW1lPVwicGF0aCAzNFwiIGQ9XCJNNTIuMjY3LDE4MjMuMTIxYzgwLjQyMi02OS41MjMsMTE5LjM0MiwxNTIuMjUxLDI3Mi4wOTIsNDIuNDY5czE4My45MjEsNDAuNzg2LDI0Ni45NDktMjAuMzkzLDE3LjIyMSwxMTQuNTQxLDE3LjIyMSwxMTQuNTQxTDYxLjM5NCwxOTUxLjc1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTIuMjY3IC0xODA5LjM0KVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94R3JvdXA0X2FjY2Vzc29yeV8xXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEdyb3VwNF9ib3hcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpblwiPkRMZW5kPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5EZWNlbnRyYWxpemVkIG1vbmV5IG1hcmtldC48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkVhcm4gcGFzc2l2ZSBpbmNvbWUgb24geW91ciBhc3NldHMgYW5kIGJvcnJvdyB0b2tlbnMgZnJvbSB0aGUgbGVuZGluZyBwb29sLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hHcm91cDRfYWNjZXNzb3J5XzJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tvcGFjaXR5OiBcIjBcIn19PkRGSU5BTkNFPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyczQ5YU1oWUpkbnlOWF9uNVE0b2hnT1NQVTV6U0VPbi92aWV3P3VzcD1zaGFyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+T25lcGFnZXI8L2E+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPldoaXRlIHBhcGVyPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5UZWFtPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5BcHA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI0MS41NTRcIiBoZWlnaHQ9XCIzMy43NDlcIiB2aWV3Qm94PVwiMCAwIDQxLjU1NCAzMy43NDlcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtdHdpdHRlclwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS10d2l0dGVyXCIgZD1cIk0zNy4yODMsMTEuNzkyYy4wMjYuMzY5LjAyNi43MzguMDI2LDEuMTA3LDAsMTEuMjU5LTguNTY5LDI0LjIzMS0yNC4yMzEsMjQuMjMxQTI0LjA2NywyNC4wNjcsMCwwLDEsMCwzMy4zMDdhMTcuNjE4LDE3LjYxOCwwLDAsMCwyLjA1Ny4xMDVBMTcuMDU2LDE3LjA1NiwwLDAsMCwxMi42MywyOS43NzRhOC41MzEsOC41MzEsMCwwLDEtNy45NjMtNS45MDZBMTAuNzQsMTAuNzQsMCwwLDAsNi4yNzUsMjRhOS4wMDcsOS4wMDcsMCwwLDAsMi4yNDEtLjI5LDguNTE4LDguNTE4LDAsMCwxLTYuODI5LTguMzU4di0uMTA1YTguNTc3LDguNTc3LDAsMCwwLDMuODUsMS4wODFBOC41MjksOC41MjksMCwwLDEsMi45LDQuOTM2YTI0LjIwOCwyNC4yMDgsMCwwLDAsMTcuNTYsOC45MTJBOS42MTQsOS42MTQsMCwwLDEsMjAuMjUsMTEuOSw4LjUyNSw4LjUyNSwwLDAsMSwzNC45ODksNi4wN2ExNi43NjcsMTYuNzY3LDAsMCwwLDUuNDA1LTIuMDU3QTguNDkzLDguNDkzLDAsMCwxLDM2LjY1LDguNzA3YTE3LjA3MywxNy4wNzMsMCwwLDAsNC45LTEuMzE4LDE4LjMwNywxOC4zMDcsMCwwLDEtNC4yNzEsNC40WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0zLjM4MSlcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI0MC4wMDlcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAuMDA5IDQwXCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB5MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTEyYjdjXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzMyM2E4ZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLWluc3RhZ3JhbVwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1pbnN0YWdyYW1cIiBkPVwiTTIwLDExLjk4MkExMC4yNTYsMTAuMjU2LDAsMSwwLDMwLjI1OSwyMi4yMzgsMTAuMjM5LDEwLjIzOSwwLDAsMCwyMCwxMS45ODJabTAsMTYuOTIzYTYuNjY3LDYuNjY3LDAsMSwxLDYuNjY3LTYuNjY3QTYuNjgsNi42OCwwLDAsMSwyMCwyOC45MDVaTTMzLjA3MSwxMS41NjNhMi4zOTIsMi4zOTIsMCwxLDEtMi4zOTItMi4zOTJBMi4zODcsMi4zODcsMCwwLDEsMzMuMDcxLDExLjU2M1ptNi43OTIsMi40MjhjLS4xNTItMy4yLS44ODQtNi4wNDMtMy4yMzEtOC4zODFzLTUuMTc3LTMuMDctOC4zODEtMy4yMzFjLTMuMy0uMTg3LTEzLjItLjE4Ny0xNi41LDAtMy4yLjE1Mi02LjAzNC44ODQtOC4zODEsMy4yMjJTLjMsMTAuNzc3LjEzNSwxMy45ODJjLS4xODcsMy4zLS4xODcsMTMuMiwwLDE2LjUuMTUyLDMuMi44ODQsNi4wNDMsMy4yMzEsOC4zODFzNS4xNzcsMy4wNyw4LjM4MSwzLjIzMWMzLjMuMTg3LDEzLjIuMTg3LDE2LjUsMCwzLjItLjE1Miw2LjA0My0uODg0LDguMzgxLTMuMjMxczMuMDctNS4xNzcsMy4yMzEtOC4zODFjLjE4Ny0zLjMuMTg3LTEzLjE5MiwwLTE2LjQ5NVpNMzUuNiwzNC4wMjhhNi43NSw2Ljc1LDAsMCwxLTMuOCwzLjhjLTIuNjMzLDEuMDQ0LTguODgxLjgtMTEuNzkxLjhzLTkuMTY3LjIzMi0xMS43OTEtLjhhNi43NSw2Ljc1LDAsMCwxLTMuOC0zLjhjLTEuMDQ0LTIuNjMzLS44LTguODgxLS44LTExLjc5MXMtLjIzMi05LjE2Ny44LTExLjc5MWE2Ljc1LDYuNzUsMCwwLDEsMy44LTMuOGMyLjYzMy0xLjA0NCw4Ljg4MS0uOCwxMS43OTEtLjhzOS4xNjctLjIzMiwxMS43OTEuOGE2Ljc1LDYuNzUsMCwwLDEsMy44LDMuOGMxLjA0NCwyLjYzMy44LDguODgxLjgsMTEuNzkxUzM2LjY0MSwzMS40LDM1LjYsMzQuMDI4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwNSAtMi4yMzgpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RmaW5hbmNlLXRlY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjM4LjA2N1wiIGhlaWdodD1cIjM3LjExNlwiIHZpZXdCb3g9XCIwIDAgMzguMDY3IDM3LjExNlwiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50XCIgeTE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UxMmI3Y1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMzMjNhOGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1naXRodWJcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtZ2l0aHViXCIgZD1cIk0xMi43MzMsMzAuNDQ4YzAsLjE1My0uMTc3LjI3Ni0uNC4yNzYtLjI1My4wMjMtLjQzLS4xLS40My0uMjc2LDAtLjE1My4xNzctLjI3Ni40LS4yNzZDMTIuNTMzLDMwLjE0OSwxMi43MzMsMzAuMjcyLDEyLjczMywzMC40NDhaTTEwLjM0NiwzMC4xYy0uMDU0LjE1My4xLjMzLjMzLjM3NmEuMzYuMzYsMCwwLDAsLjQ3Ni0uMTUzYy4wNDYtLjE1My0uMS0uMzMtLjMzLS40QS4zOTQuMzk0LDAsMCwwLDEwLjM0NiwzMC4xWm0zLjM5Mi0uMTNjLS4yMjMuMDU0LS4zNzYuMi0uMzUzLjM3Ni4wMjMuMTUzLjIyMy4yNTMuNDUzLjJzLjM3Ni0uMi4zNTMtLjM1M1MxMy45NiwyOS45NDksMTMuNzM4LDI5Ljk3MlpNMTguNzg4LjU2M0ExOC40LDE4LjQsMCwwLDAsMCwxOS4yODksMTkuMjQxLDE5LjI0MSwwLDAsMCwxMy4wMDksMzcuNjQ3Yy45ODIuMTc3LDEuMzI4LS40MywxLjMyOC0uOTI5LDAtLjQ3Ni0uMDIzLTMuMS0uMDIzLTQuNzEyLDAsMC01LjM3MiwxLjE1MS02LjUtMi4yODcsMCwwLS44NzUtMi4yMzMtMi4xMzQtMi44MDksMCwwLTEuNzU4LTEuMi4xMjMtMS4xODJhNC4wNTEsNC4wNTEsMCwwLDEsMi45NjIsMS45OCw0LjA1Nyw0LjA1NywwLDAsMCw1LjU5NSwxLjYsNC4yNjYsNC4yNjYsMCwwLDEsMS4yMjgtMi41ODZjLTQuMjktLjQ3Ni04LjYxOS0xLjEtOC42MTktOC40ODFhNS44MTcsNS44MTcsMCwwLDEsMS44MTEtNC41Miw3LjI1MSw3LjI1MSwwLDAsMSwuMi01LjIxMWMxLjYtLjUsNS4zLDIuMDcyLDUuMywyLjA3MmExOC4xMzEsMTguMTMxLDAsMCwxLDkuNjQsMHMzLjY5Mi0yLjU3OSw1LjMtMi4wNzJhNy4yNDgsNy4yNDgsMCwwLDEsLjIsNS4yMTEsNS45NjYsNS45NjYsMCwwLDEsMS45OCw0LjUyYzAsNy40MDYtNC41Miw4LTguODExLDguNDgxYTQuNTM5LDQuNTM5LDAsMCwxLDEuMywzLjU2MWMwLDIuNTg2LS4wMjMsNS43ODctLjAyMyw2LjQxNiwwLC41LjM1MywxLjEwNSwxLjMyOC45MjlBMTkuMDY0LDE5LjA2NCwwLDAsMCwzOC4wNjcsMTkuMjg5QzM4LjA2Nyw4LjY0NCwyOS40MzMuNTYzLDE4Ljc4OC41NjNaTTcuNDYsMjcuMDMzYy0uMS4wNzctLjA3Ny4yNTMuMDU0LjQuMTIzLjEyMy4zLjE3Ny40LjA3Ny4xLS4wNzcuMDc3LS4yNTMtLjA1NC0uNEM3LjczNiwyNi45ODcsNy41NiwyNi45MzMsNy40NiwyNy4wMzNabS0uODI5LS42MjJjLS4wNTQuMS4wMjMuMjIzLjE3Ny4zYS4yMjguMjI4LDAsMCwwLC4zMy0uMDU0Yy4wNTQtLjEtLjAyMy0uMjIzLS4xNzctLjNDNi44MDgsMjYuMzExLDYuNjg1LDI2LjMzNSw2LjYzMSwyNi40MTFabTIuNDg3LDIuNzMyYy0uMTIzLjEtLjA3Ny4zMy4xLjQ3Ni4xNzcuMTc3LjQuMi41LjA3Ny4xLS4xLjA1NC0uMzMtLjEtLjQ3NkM5LjQ0OCwyOS4wNDQsOS4yMTcsMjkuMDIxLDkuMTE4LDI5LjE0M1ptLS44NzUtMS4xMjhjLS4xMjMuMDc3LS4xMjMuMjc2LDAsLjQ1M3MuMzMuMjUzLjQzLjE3N2EuMzUuMzUsMCwwLDAsMC0uNDc2QzguNTY1LDI3Ljk5Miw4LjM2NiwyNy45MTYsOC4yNDMsMjguMDE1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0wLjU2MylcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzMy43MzhcIiBoZWlnaHQ9XCIzOC41NThcIiB2aWV3Qm94PVwiMCAwIDMzLjczOCAzOC41NThcIj5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHkxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMTJiN2NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMzIzYThkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGggaWQ9XCJJY29uX2F3ZXNvbWUtZGlzY29yZFwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1kaXNjb3JkXCIgZD1cIk0yMi4zODMsMTguMzE1YTEuOTczLDEuOTczLDAsMSwxLTEuOTY2LTIuMTRBMi4wNTQsMi4wNTQsMCwwLDEsMjIuMzgzLDE4LjMxNVptLTktMi4xNGEyLjE0OCwyLjE0OCwwLDAsMCwwLDQuMjgsMi4wNTQsMi4wNTQsMCwwLDAsMS45NjYtMi4xNEEyLjA0MiwyLjA0MiwwLDAsMCwxMy4zOCwxNi4xNzVabTIwLjM1OS0xMi4yVjM4LjU1OGMtNC44NTctNC4yOTItMy4zLTIuODcxLTguOTQ1LTguMTE2bDEuMDIyLDMuNTY3SDMuOTUyQTMuOTYyLDMuOTYyLDAsMCwxLDAsMzAuMDM3VjMuOTcxQTMuOTYyLDMuOTYyLDAsMCwxLDMuOTUyLDBIMjkuNzg2QTMuOTYyLDMuOTYyLDAsMCwxLDMzLjczOCwzLjk3MVpNMjguMjQ0LDIyLjI0OGEyNS44MTgsMjUuODE4LDAsMCwwLTIuNzc2LTExLjI0QTkuNTM0LDkuNTM0LDAsMCwwLDIwLjA1LDguOTg0bC0uMjcuMzA4YTEyLjgzMSwxMi44MzEsMCwwLDEsNC44LDIuNDQ4LDE2LjM4MSwxNi4zODEsMCwwLDAtMTQuNC0uNTU5Yy0uNzEzLjMyOC0xLjEzNy41NTktMS4xMzcuNTU5YTEzLjAwNiwxMy4wMDYsMCwwLDEsNS4wNy0yLjUyNmwtLjE5My0uMjMxQTkuNTM0LDkuNTM0LDAsMCwwLDguNSwxMS4wMDhhMjUuODE4LDI1LjgxOCwwLDAsMC0yLjc3NiwxMS4yNCw2Ljk5LDYuOTksMCwwLDAsNS44OCwyLjkzcy43MTMtLjg2OCwxLjI5Mi0xLjZBNiw2LDAsMCwxLDkuNTI0LDIxLjNjLjI4NC4yLjc1MS40NTYuNzkuNDgyYTE0LjA1MywxNC4wNTMsMCwwLDAsMTIuMDMuNjc1LDExLjAzMiwxMS4wMzIsMCwwLDAsMi4yMTctMS4xMzcsNi4wODMsNi4wODMsMCwwLDEtMy40ODksMi4yOTRjLjU3OC43MzMsMS4yNzIsMS41NjIsMS4yNzIsMS41NjJBNy4wNDcsNy4wNDcsMCwwLDAsMjguMjQ0LDIyLjI0OFpcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPkNvcHlyaWdodCDCqSAyMDIxIERGaW5hbmNlLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICAgKi99XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9