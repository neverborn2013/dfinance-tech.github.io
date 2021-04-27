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

    var handleScroll = function handleScroll() {
      var height = window.innerHeight;
      var top = document.getElementsByClassName("content-3")[0].getBoundingClientRect().top;
      console.log("top: ", top);

      if (height >= top + 20) {
        document.getElementById("bg-1").style.opacity = "0";
      }

      if (top < 120) {
        document.getElementById("content-3").style.opacity = "1";
        document.getElementById("content-2").style.opacity = "1";
      }

      if (top > 220) {
        document.getElementById("content-3").style.opacity = "0";
        document.getElementById("content-2").style.opacity = "0";
      }

      if (height < top) {
        document.getElementById("bg-1").style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
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
    className: "header-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "ball-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, "Unleash the power of DeFi"), __jsx("div", {
    className: "header-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "DFinace is building the open financial services infrastructure for the DFINITY Internet Computer."), __jsx("label", {
    className: "label-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "- DTOKEN -"), __jsx("div", {
    className: "header-cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-card card-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Unified token standard for Dfinity"))), __jsx("div", {
    className: "header-card card-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Issue your token with one click of a button"))), __jsx("div", {
    className: "header-card card-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Manage your tokens: transfer, burn, mint")))), __jsx("label", {
    className: "label-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, "Product Structure"), __jsx("div", {
    className: "dtoken",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "bg-1",
    id: "bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "content-3",
    id: "content-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "- DSWAP -"), __jsx("div", {
    className: "structure",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Product Structure"))), __jsx("div", {
    className: "content-2",
    id: "content-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Automated Market Maker Decentralized Exchange"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Lightning Swap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Swap one token for another with lightning speed"), __jsx("div", {
    className: "svg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "svg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "API for developers to build their own application based on DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Such as liquidity farming applications"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-4",
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
  }, "0.3%"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "788.661",
    height: "232.745",
    viewBox: "0 0 788.661 232.745",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 128,
      columnNumber: 17
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, "Provide Liquidity To Earn 0.3% Transaction Fee")), __jsx("div", {
    className: "box-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "Secure Atomic Swap"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 528.027 377.633",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5a68d2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#b146d7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3dc4ed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2976ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f89e36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffab4a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      lineNumber: 153,
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
      lineNumber: 154,
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
      lineNumber: 155,
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
      lineNumber: 156,
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
      lineNumber: 157,
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
      lineNumber: 158,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "link-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "onepager",
    href: "https://drive.google.com/file/d/1rs49aMhYJdnyNX_n5Q4ohgOSPU5zSEOn/view?usp=sharing",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, "Onepager"))))), __jsx("div", {
    className: "footer-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
      lineNumber: 192,
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
      lineNumber: 193,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, "Copyright \xA9 2021 Dfinance. All rights reserved.")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwidmFsIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVTY3JvbGwiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInRvcCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb25zb2xlIiwibG9nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixVQUNFQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLEtBQ0FGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FEQSxJQUVBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFNBQTFCLENBRkEsSUFHQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUhBLElBSUFGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FKQSxJQUtBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGFBQTFCLENBTEEsSUFNQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixnQkFBMUIsQ0FQRixFQVFDO0FBQ0MsZUFBTyxJQUFQ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LFFBQTlEO0FBQXVFLFdBQU8sRUFBQyxtQkFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sTUFBRSxFQUFDLHFCQUFUO0FBQStCLGlCQUFVLHFCQUF6QztBQUErRCxLQUFDLEVBQUMsMjlDQUFqRTtBQUE2aEQsYUFBUyxFQUFDLHFCQUF2aUQ7QUFBNmpELFFBQUksRUFBQyxTQUFsa0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQVJGLENBdEJGLENBSkYsQ0E3R0YsQ0FERjtBQXNKRCxDQXZNRDs7R0FBTVosSTs7S0FBQUEsSTtBQXlNU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmJhMjI1MmYwZDM0NDM4OWMxMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmKCBcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXHJcbiAgICAgICl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHZhbCA9IGlzTW9iaWxlKCk7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF07XHJcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRlbnQtM1wiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3A6IFwiLCB0b3ApXHJcbiAgICAgICAgaWYgKGhlaWdodCA+PSB0b3AgKyAyMCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZy0xXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmICh0b3AgPCAxMjApIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC0zXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC0yXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3AgPiAyMjApIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC0zXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC0yXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjsgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGVpZ2h0IDwgdG9wKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnLTFcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ERmluYW5jZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnJhbmRcIj5cclxuICAgICAgICA8YSBocmVmPVwiL1wiPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0xXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0yXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0zXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC00XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+VW5sZWFzaCB0aGUgcG93ZXIgb2YgRGVGaTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdWJ0aXRsZVwiPkRGaW5hY2UgaXMgYnVpbGRpbmcgdGhlIG9wZW4gZmluYW5jaWFsIHNlcnZpY2VzIGluZnJhc3RydWN0dXJlIGZvciB0aGUgREZJTklUWSBJbnRlcm5ldCBDb21wdXRlci48L2Rpdj5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLTFcIj4tIERUT0tFTiAtPC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY2FyZHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPlVuaWZpZWQgdG9rZW4gc3RhbmRhcmQgZm9yIERmaW5pdHk8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPklzc3VlIHlvdXIgdG9rZW4gd2l0aCBvbmUgY2xpY2sgb2YgYSBidXR0b248L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPk1hbmFnZSB5b3VyIHRva2VuczogdHJhbnNmZXIsIGJ1cm4sIG1pbnQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC0yXCI+UHJvZHVjdCBTdHJ1Y3R1cmU8L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0b2tlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLTFcIiBpZD1cImJnLTFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LTNcIiBpZD1cImNvbnRlbnQtM1wiPlxyXG4gICAgICAgIDxsYWJlbD4tIERTV0FQIC08L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RydWN0dXJlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+UHJvZHVjdCBTdHJ1Y3R1cmU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtMlwiIGlkPVwiY29udGVudC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtMVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5BdXRvbWF0ZWQgTWFya2V0IE1ha2VyIERlY2VudHJhbGl6ZWQgRXhjaGFuZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkxpZ2h0bmluZyBTd2FwPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4+U3dhcCBvbmUgdG9rZW4gZm9yIGFub3RoZXIgd2l0aCBsaWdodG5pbmcgc3BlZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5BUEkgZm9yIGRldmVsb3BlcnMgdG8gYnVpbGQgdGhlaXIgb3duIGFwcGxpY2F0aW9uIGJhc2VkIG9uIERTd2FwPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4+U3VjaCBhcyBsaXF1aWRpdHkgZmFybWluZyBhcHBsaWNhdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD4wLjMlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiNzg4LjY2MVwiIGhlaWdodD1cIjIzMi43NDVcIiB2aWV3Qm94PVwiMCAwIDc4OC42NjEgMjMyLjc0NVwiPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIHgxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UyMWY3OVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2EwMTliYVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwi6Lev5b6EXzUwXCIgZGF0YS1uYW1lPVwi6Lev5b6EIDUwXCIgZD1cIk0zMDM4LjAzMSwyNTMyLjIxNmMtMTg0Ljc4OSwxNTAuNTA4LTE0Ni41MTgtNTMuNDA5LTMyNS41OTUsMHMtMTYyLjIyNy03MC4yNi0zMjEuODgyLDIxLjEzNS0zNy45ODYsMTk3LjkyNy0zNy45ODYsMTk3LjkyN2g3NDQuM1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTIzMDguMjA2IC0yNTE4LjUzMylcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCIvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3Bhbj5Qcm92aWRlIExpcXVpZGl0eSBUbyBFYXJuIDAuMyUgVHJhbnNhY3Rpb24gRmVlPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC01XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZWN1cmUgQXRvbWljIFN3YXA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNTI4LjAyNyAzNzcuNjMzXCI+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnQtMVwiIHgxPVwiMC4xNDZcIiB4Mj1cIjFcIiB5Mj1cIjAuODI3XCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjNWE2OGQyXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2IxNDZkN1wiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnQtMlwiIHgxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiMzZGM0ZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMjk3NmJhXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudC0zXCIgeDE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2Y4OWUzNlwiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNmZmFiNGFcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50LTRcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTIxZjc5XCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2EwMTliYVwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxlbGxpcHNlIGlkPVwib3ZhbF8xNFwiIGRhdGEtbmFtZT1cIm92YWwgMTRcIiBjeD1cIjc0LjM0NFwiIGN5PVwiMTcxLjc0NlwiIHJ4PVwiNzQuMzQ0XCIgcnk9XCIxNzEuNzQ2XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNjAyLCAtMC43OTksIDAuNzk5LCAwLjYwMiwgMTQwLjc4OCwgMTYzLjQ3OSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNlMWUxZTFcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIiBzdHJva2VXaWR0aD1cIjZcIi8+XHJcbiAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9XCJvdmFsXzE1XCIgZGF0YS1uYW1lPVwib3ZhbCAxNVwiIGN4PVwiMTM5Ljc2OVwiIGN5PVwiMTM0LjkzN1wiIHJ4PVwiMTM5Ljc2OVwiIHJ5PVwiMTM0LjkzN1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNTAuNDU1IDEzNS4yOTIpIHJvdGF0ZSgtMjgpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZTFlMWUxXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIgc3Ryb2tlV2lkdGg9XCI2XCIvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsXzExXCIgZGF0YS1uYW1lPVwib3ZhbCAxMVwiIGN4PVwiNzguMDU0XCIgY3k9XCI3OC4wNTRcIiByPVwiNzguMDU0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI2MC42NTkgMTEwLjc2MylcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtMSlcIi8+XHJcbiAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIm92YWxfMTJcIiBkYXRhLW5hbWU9XCJvdmFsIDEyXCIgY3g9XCIyNS40MjhcIiBjeT1cIjI1LjQyOFwiIHI9XCIyNS40MjhcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC45NjYsIC0wLjI1OSwgMC4yNTksIDAuOTY2LCA0MjMuNzY3LCA5Mi43ODIpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTIpXCIvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsXzEzXCIgZGF0YS1uYW1lPVwib3ZhbCAxM1wiIGN4PVwiMjUuNDI4XCIgY3k9XCIyNS40MjhcIiByPVwiMjUuNDI4XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuOTk2LCAwLjA4NywgLTAuMDg3LCAwLjk5NiwgMTg5LjQwNiwgMTc5LjkxNylcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtMylcIi8+XHJcbiAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIm92YWxfMTZcIiBkYXRhLW5hbWU9XCJvdmFsIDE2XCIgY3g9XCIxOVwiIGN5PVwiMTlcIiByPVwiMTlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAzMTIuMTk3KVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC00KVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLTFcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLTJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLTNcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1icmFuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9uZXBhZ2VyXCIgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzNDlhTWhZSmRueU5YX241UTRvaGdPU1BVNXpTRU9uL3ZpZXc/dXNwPXNoYXJpbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5PbmVwYWdlcjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRlYW1cIj5UZWFtPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcHBcIj5BcHA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFib3V0XCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RmaW5hbmNlLXRlY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzguMDY3XCIgaGVpZ2h0PVwiMzcuMTE2XCIgdmlld0JveD1cIjAgMCAzOC4wNjcgMzcuMTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvbl9hd2Vzb21lLWdpdGh1YlwiIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1naXRodWJcIiBkPVwiTTEyLjczMywzMC40NDhjMCwuMTUzLS4xNzcuMjc2LS40LjI3Ni0uMjUzLjAyMy0uNDMtLjEtLjQzLS4yNzYsMC0uMTUzLjE3Ny0uMjc2LjQtLjI3NkMxMi41MzMsMzAuMTQ5LDEyLjczMywzMC4yNzIsMTIuNzMzLDMwLjQ0OFpNMTAuMzQ2LDMwLjFjLS4wNTQuMTUzLjEuMzMuMzMuMzc2YS4zNi4zNiwwLDAsMCwuNDc2LS4xNTNjLjA0Ni0uMTUzLS4xLS4zMy0uMzMtLjRBLjM5NC4zOTQsMCwwLDAsMTAuMzQ2LDMwLjFabTMuMzkyLS4xM2MtLjIyMy4wNTQtLjM3Ni4yLS4zNTMuMzc2LjAyMy4xNTMuMjIzLjI1My40NTMuMnMuMzc2LS4yLjM1My0uMzUzUzEzLjk2LDI5Ljk0OSwxMy43MzgsMjkuOTcyWk0xOC43ODguNTYzQTE4LjQsMTguNCwwLDAsMCwwLDE5LjI4OSwxOS4yNDEsMTkuMjQxLDAsMCwwLDEzLjAwOSwzNy42NDdjLjk4Mi4xNzcsMS4zMjgtLjQzLDEuMzI4LS45MjksMC0uNDc2LS4wMjMtMy4xLS4wMjMtNC43MTIsMCwwLTUuMzcyLDEuMTUxLTYuNS0yLjI4NywwLDAtLjg3NS0yLjIzMy0yLjEzNC0yLjgwOSwwLDAtMS43NTgtMS4yLjEyMy0xLjE4MmE0LjA1MSw0LjA1MSwwLDAsMSwyLjk2MiwxLjk4LDQuMDU3LDQuMDU3LDAsMCwwLDUuNTk1LDEuNiw0LjI2Niw0LjI2NiwwLDAsMSwxLjIyOC0yLjU4NmMtNC4yOS0uNDc2LTguNjE5LTEuMS04LjYxOS04LjQ4MWE1LjgxNyw1LjgxNywwLDAsMSwxLjgxMS00LjUyLDcuMjUxLDcuMjUxLDAsMCwxLC4yLTUuMjExYzEuNi0uNSw1LjMsMi4wNzIsNS4zLDIuMDcyYTE4LjEzMSwxOC4xMzEsMCwwLDEsOS42NCwwczMuNjkyLTIuNTc5LDUuMy0yLjA3MmE3LjI0OCw3LjI0OCwwLDAsMSwuMiw1LjIxMSw1Ljk2Niw1Ljk2NiwwLDAsMSwxLjk4LDQuNTJjMCw3LjQwNi00LjUyLDgtOC44MTEsOC40ODFhNC41MzksNC41MzksMCwwLDEsMS4zLDMuNTYxYzAsMi41ODYtLjAyMyw1Ljc4Ny0uMDIzLDYuNDE2LDAsLjUuMzUzLDEuMTA1LDEuMzI4LjkyOUExOS4wNjQsMTkuMDY0LDAsMCwwLDM4LjA2NywxOS4yODlDMzguMDY3LDguNjQ0LDI5LjQzMy41NjMsMTguNzg4LjU2M1pNNy40NiwyNy4wMzNjLS4xLjA3Ny0uMDc3LjI1My4wNTQuNC4xMjMuMTIzLjMuMTc3LjQuMDc3LjEtLjA3Ny4wNzctLjI1My0uMDU0LS40QzcuNzM2LDI2Ljk4Nyw3LjU2LDI2LjkzMyw3LjQ2LDI3LjAzM1ptLS44MjktLjYyMmMtLjA1NC4xLjAyMy4yMjMuMTc3LjNhLjIyOC4yMjgsMCwwLDAsLjMzLS4wNTRjLjA1NC0uMS0uMDIzLS4yMjMtLjE3Ny0uM0M2LjgwOCwyNi4zMTEsNi42ODUsMjYuMzM1LDYuNjMxLDI2LjQxMVptMi40ODcsMi43MzJjLS4xMjMuMS0uMDc3LjMzLjEuNDc2LjE3Ny4xNzcuNC4yLjUuMDc3LjEtLjEuMDU0LS4zMy0uMS0uNDc2QzkuNDQ4LDI5LjA0NCw5LjIxNywyOS4wMjEsOS4xMTgsMjkuMTQzWm0tLjg3NS0xLjEyOGMtLjEyMy4wNzctLjEyMy4yNzYsMCwuNDUzcy4zMy4yNTMuNDMuMTc3YS4zNS4zNSwwLDAsMCwwLS40NzZDOC41NjUsMjcuOTkyLDguMzY2LDI3LjkxNiw4LjI0MywyOC4wMTVaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTAuNTYzKVwiIGZpbGw9XCIjZWZlZmVmXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgwqkgMjAyMSBEZmluYW5jZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=