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
    } else {
      var handleScroll = function handleScroll() {
        var height = window.innerHeight;
        var top = document.getElementsByClassName("content-3")[0].getBoundingClientRect().top;

        if (top < height + 120) {
          document.getElementById("label-2").style.opacity = "0";
          document.getElementById("dtoken").style.opacity = "0";
          document.getElementById("cards").style.opacity = "0";
          document.getElementById("bg-1").style.opacity = "0";
        }

        if (top < 0) {
          document.getElementById("content-3").style.opacity = "1";
          document.getElementById("content-2").style.opacity = "1";
        }

        if (top > -height * 0.58) {
          document.getElementById("content-3").style.opacity = "0";
          document.getElementById("content-2").style.opacity = "0";
        }

        if (top > height - 120) {
          document.getElementById("label-2").style.opacity = "1";
          document.getElementById("dtoken").style.opacity = "1";
          document.getElementById("cards").style.opacity = "1";
          document.getElementById("bg-1").style.opacity = "1";
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
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "DFinance")), __jsx("div", {
    className: "header-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "ball-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "Unleash the power of DeFi"), __jsx("div", {
    className: "header-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, "DFinace is building the open financial services infrastructure for the DFINITY Internet Computer."), __jsx("label", {
    className: "label-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "- DTOKEN -"), __jsx("div", {
    className: "header-cards",
    id: "cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-card card-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Unified token standard for Dfinity"))), __jsx("div", {
    className: "header-card card-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Issue your token with one click of a button"))), __jsx("div", {
    className: "header-card card-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "Manage your tokens: transfer, burn, mint")))), __jsx("label", {
    className: "label-2",
    id: "label-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, "Product Structure"), __jsx("div", {
    className: "dtoken",
    id: "dtoken",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "bg-1",
    id: "bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "content-3",
    id: "content-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "- DSWAP -"), __jsx("div", {
    className: "structure",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Product Structure"))), __jsx("div", {
    className: "content-2",
    id: "content-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Automated Market Maker Decentralized Exchange"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Lightning Swap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Swap one token for another with lightning speed"), __jsx("div", {
    className: "svg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "svg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "API for developers to build their own application based on DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Such as liquidity farming applications"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
      columnNumber: 19
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 133,
      columnNumber: 17
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "Provide Liquidity To Earn 0.3% Transaction Fee")), __jsx("div", {
    className: "box-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "Secure Atomic Swap"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 528.027 377.633",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5a68d2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#b146d7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3dc4ed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2976ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f89e36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffab4a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
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
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
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
      lineNumber: 158,
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
      lineNumber: 159,
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
      lineNumber: 160,
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
      lineNumber: 161,
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
      lineNumber: 162,
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
      lineNumber: 163,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "link-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "onepager",
    href: "https://drive.google.com/file/d/1rs49aMhYJdnyNX_n5Q4ohgOSPU5zSEOn/view?usp=sharing",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  }, "Onepager"))))), __jsx("div", {
    className: "footer-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 197,
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
      lineNumber: 198,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwidmFsIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVTY3JvbGwiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInRvcCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWpCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFVBQ0VDLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsVUFBMUIsS0FDQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixRQUExQixDQURBLElBRUFGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FGQSxJQUdBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSEEsSUFJQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUpBLElBS0FGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FMQSxJQU1BRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGdCQUExQixDQVBGLEVBUUM7QUFDQyxlQUFPLElBQVA7QUFDRCxPQVZELE1BVU87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NzNjZTkzNjMxZDAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgICBpZiggXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxyXG4gICAgICApe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB2YWwgPSBpc01vYmlsZSgpO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdO1xyXG4gICAgICBodG1sLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250ZW50LTNcIilbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgIGlmICh0b3AgPCBoZWlnaHQgKyAxMjApIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtMlwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR0b2tlblwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRzXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmctMVwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAodG9wIDwgMCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LTNcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LTJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvcCA+IC1oZWlnaHQgKiAwLjU4KSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtM1wiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtMlwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7ICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvcCA+IGhlaWdodCAtIDEyMCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC0yXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHRva2VuXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZHNcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZy0xXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+REZpbmFuY2U8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJyYW5kXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9cIj48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGwtMVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGwtMlwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGwtM1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGwtNFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlVubGVhc2ggdGhlIHBvd2VyIG9mIERlRmk8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3VidGl0bGVcIj5ERmluYWNlIGlzIGJ1aWxkaW5nIHRoZSBvcGVuIGZpbmFuY2lhbCBzZXJ2aWNlcyBpbmZyYXN0cnVjdHVyZSBmb3IgdGhlIERGSU5JVFkgSW50ZXJuZXQgQ29tcHV0ZXIuPC9kaXY+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC0xXCI+LSBEVE9LRU4gLTwvbGFiZWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmRzXCIgaWQ9XCJjYXJkc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+VW5pZmllZCB0b2tlbiBzdGFuZGFyZCBmb3IgRGZpbml0eTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+SXNzdWUgeW91ciB0b2tlbiB3aXRoIG9uZSBjbGljayBvZiBhIGJ1dHRvbjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+TWFuYWdlIHlvdXIgdG9rZW5zOiB0cmFuc2ZlciwgYnVybiwgbWludDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLTJcIiBpZD1cImxhYmVsLTJcIj5Qcm9kdWN0IFN0cnVjdHVyZTwvbGFiZWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRva2VuXCIgaWQ9XCJkdG9rZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0xXCIgaWQ9XCJiZy0xXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC0zXCIgaWQ9XCJjb250ZW50LTNcIj5cclxuICAgICAgICA8bGFiZWw+LSBEU1dBUCAtPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cnVjdHVyZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj48L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPlByb2R1Y3QgU3RydWN0dXJlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LTJcIiBpZD1cImNvbnRlbnQtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTFcIj5cclxuICAgICAgICAgICAgPHNwYW4+QXV0b21hdGVkIE1hcmtldCBNYWtlciBEZWNlbnRyYWxpemVkIEV4Y2hhbmdlPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0yXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5MaWdodG5pbmcgU3dhcDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPlN3YXAgb25lIHRva2VuIGZvciBhbm90aGVyIHdpdGggbGlnaHRuaW5nIHNwZWVkPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLTJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWw+QVBJIGZvciBkZXZlbG9wZXJzIHRvIGJ1aWxkIHRoZWlyIG93biBhcHBsaWNhdGlvbiBiYXNlZCBvbiBEU3dhcDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPlN1Y2ggYXMgbGlxdWlkaXR5IGZhcm1pbmcgYXBwbGljYXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+MC4zJTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjc4OC42NjFcIiBoZWlnaHQ9XCIyMzIuNzQ1XCIgdmlld0JveD1cIjAgMCA3ODguNjYxIDIzMi43NDVcIj5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMjFmNzlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNhMDE5YmFcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIui3r+W+hF81MFwiIGRhdGEtbmFtZT1cIui3r+W+hCA1MFwiIGQ9XCJNMzAzOC4wMzEsMjUzMi4yMTZjLTE4NC43ODksMTUwLjUwOC0xNDYuNTE4LTUzLjQwOS0zMjUuNTk1LDBzLTE2Mi4yMjctNzAuMjYtMzIxLjg4MiwyMS4xMzUtMzcuOTg2LDE5Ny45MjctMzcuOTg2LDE5Ny45MjdoNzQ0LjNaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yMzA4LjIwNiAtMjUxOC41MzMpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4+UHJvdmlkZSBMaXF1aWRpdHkgVG8gRWFybiAwLjMlIFRyYW5zYWN0aW9uIEZlZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtNVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VjdXJlIEF0b21pYyBTd2FwPC9sYWJlbD5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDUyOC4wMjcgMzc3LjYzM1wiPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50LTFcIiB4MT1cIjAuMTQ2XCIgeDI9XCIxXCIgeTI9XCIwLjgyN1wiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzVhNjhkMlwiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNiMTQ2ZDdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwibGluZWFyLWdyYWRpZW50LTJcIiB4MT1cIjAuNVwiIHgyPVwiMC41XCIgeTI9XCIxXCIgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjM2RjNGVkXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzI5NzZiYVwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJsaW5lYXItZ3JhZGllbnQtM1wiIHgxPVwiMC41XCIgeDI9XCIwLjVcIiB5Mj1cIjFcIiBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmODllMzZcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZmZhYjRhXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudC00XCIgeDE9XCIwLjVcIiB4Mj1cIjAuNVwiIHkyPVwiMVwiIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UyMWY3OVwiLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNhMDE5YmFcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD1cIm92YWxfMTRcIiBkYXRhLW5hbWU9XCJvdmFsIDE0XCIgY3g9XCI3NC4zNDRcIiBjeT1cIjE3MS43NDZcIiByeD1cIjc0LjM0NFwiIHJ5PVwiMTcxLjc0NlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjYwMiwgLTAuNzk5LCAwLjc5OSwgMC42MDIsIDE0MC43ODgsIDE2My40NzkpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZTFlMWUxXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIgc3Ryb2tlV2lkdGg9XCI2XCIvPlxyXG4gICAgICAgICAgICAgIDxlbGxpcHNlIGlkPVwib3ZhbF8xNVwiIGRhdGEtbmFtZT1cIm92YWwgMTVcIiBjeD1cIjEzOS43NjlcIiBjeT1cIjEzNC45MzdcIiByeD1cIjEzOS43NjlcIiByeT1cIjEzNC45MzdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTUwLjQ1NSAxMzUuMjkyKSByb3RhdGUoLTI4KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2UxZTFlMVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZVdpZHRoPVwiNlwiLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbF8xMVwiIGRhdGEtbmFtZT1cIm92YWwgMTFcIiBjeD1cIjc4LjA1NFwiIGN5PVwiNzguMDU0XCIgcj1cIjc4LjA1NFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNjAuNjU5IDExMC43NjMpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTEpXCIvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsXzEyXCIgZGF0YS1uYW1lPVwib3ZhbCAxMlwiIGN4PVwiMjUuNDI4XCIgY3k9XCIyNS40MjhcIiByPVwiMjUuNDI4XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuOTY2LCAtMC4yNTksIDAuMjU5LCAwLjk2NiwgNDIzLjc2NywgOTIuNzgyKVwiIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKVwiLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbF8xM1wiIGRhdGEtbmFtZT1cIm92YWwgMTNcIiBjeD1cIjI1LjQyOFwiIGN5PVwiMjUuNDI4XCIgcj1cIjI1LjQyOFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk5NiwgMC4wODcsIC0wLjA4NywgMC45OTYsIDE4OS40MDYsIDE3OS45MTcpXCIgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTMpXCIvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsXzE2XCIgZGF0YS1uYW1lPVwib3ZhbCAxNlwiIGN4PVwiMTlcIiBjeT1cIjE5XCIgcj1cIjE5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMzEyLjE5NylcIiBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtNClcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0xXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0yXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0zXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYnJhbmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXdyYXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvbmVwYWdlclwiIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyczQ5YU1oWUpkbnlOWF9uNVE0b2hnT1NQVTV6U0VPbi92aWV3P3VzcD1zaGFyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+T25lcGFnZXI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZWFtXCI+VGVhbTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXBwXCI+QXBwPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZmluYW5jZS10ZWNoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjM4LjA2N1wiIGhlaWdodD1cIjM3LjExNlwiIHZpZXdCb3g9XCIwIDAgMzguMDY3IDM3LjExNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIkljb25fYXdlc29tZS1naXRodWJcIiBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtZ2l0aHViXCIgZD1cIk0xMi43MzMsMzAuNDQ4YzAsLjE1My0uMTc3LjI3Ni0uNC4yNzYtLjI1My4wMjMtLjQzLS4xLS40My0uMjc2LDAtLjE1My4xNzctLjI3Ni40LS4yNzZDMTIuNTMzLDMwLjE0OSwxMi43MzMsMzAuMjcyLDEyLjczMywzMC40NDhaTTEwLjM0NiwzMC4xYy0uMDU0LjE1My4xLjMzLjMzLjM3NmEuMzYuMzYsMCwwLDAsLjQ3Ni0uMTUzYy4wNDYtLjE1My0uMS0uMzMtLjMzLS40QS4zOTQuMzk0LDAsMCwwLDEwLjM0NiwzMC4xWm0zLjM5Mi0uMTNjLS4yMjMuMDU0LS4zNzYuMi0uMzUzLjM3Ni4wMjMuMTUzLjIyMy4yNTMuNDUzLjJzLjM3Ni0uMi4zNTMtLjM1M1MxMy45NiwyOS45NDksMTMuNzM4LDI5Ljk3MlpNMTguNzg4LjU2M0ExOC40LDE4LjQsMCwwLDAsMCwxOS4yODksMTkuMjQxLDE5LjI0MSwwLDAsMCwxMy4wMDksMzcuNjQ3Yy45ODIuMTc3LDEuMzI4LS40MywxLjMyOC0uOTI5LDAtLjQ3Ni0uMDIzLTMuMS0uMDIzLTQuNzEyLDAsMC01LjM3MiwxLjE1MS02LjUtMi4yODcsMCwwLS44NzUtMi4yMzMtMi4xMzQtMi44MDksMCwwLTEuNzU4LTEuMi4xMjMtMS4xODJhNC4wNTEsNC4wNTEsMCwwLDEsMi45NjIsMS45OCw0LjA1Nyw0LjA1NywwLDAsMCw1LjU5NSwxLjYsNC4yNjYsNC4yNjYsMCwwLDEsMS4yMjgtMi41ODZjLTQuMjktLjQ3Ni04LjYxOS0xLjEtOC42MTktOC40ODFhNS44MTcsNS44MTcsMCwwLDEsMS44MTEtNC41Miw3LjI1MSw3LjI1MSwwLDAsMSwuMi01LjIxMWMxLjYtLjUsNS4zLDIuMDcyLDUuMywyLjA3MmExOC4xMzEsMTguMTMxLDAsMCwxLDkuNjQsMHMzLjY5Mi0yLjU3OSw1LjMtMi4wNzJhNy4yNDgsNy4yNDgsMCwwLDEsLjIsNS4yMTEsNS45NjYsNS45NjYsMCwwLDEsMS45OCw0LjUyYzAsNy40MDYtNC41Miw4LTguODExLDguNDgxYTQuNTM5LDQuNTM5LDAsMCwxLDEuMywzLjU2MWMwLDIuNTg2LS4wMjMsNS43ODctLjAyMyw2LjQxNiwwLC41LjM1MywxLjEwNSwxLjMyOC45MjlBMTkuMDY0LDE5LjA2NCwwLDAsMCwzOC4wNjcsMTkuMjg5QzM4LjA2Nyw4LjY0NCwyOS40MzMuNTYzLDE4Ljc4OC41NjNaTTcuNDYsMjcuMDMzYy0uMS4wNzctLjA3Ny4yNTMuMDU0LjQuMTIzLjEyMy4zLjE3Ny40LjA3Ny4xLS4wNzcuMDc3LS4yNTMtLjA1NC0uNEM3LjczNiwyNi45ODcsNy41NiwyNi45MzMsNy40NiwyNy4wMzNabS0uODI5LS42MjJjLS4wNTQuMS4wMjMuMjIzLjE3Ny4zYS4yMjguMjI4LDAsMCwwLC4zMy0uMDU0Yy4wNTQtLjEtLjAyMy0uMjIzLS4xNzctLjNDNi44MDgsMjYuMzExLDYuNjg1LDI2LjMzNSw2LjYzMSwyNi40MTFabTIuNDg3LDIuNzMyYy0uMTIzLjEtLjA3Ny4zMy4xLjQ3Ni4xNzcuMTc3LjQuMi41LjA3Ny4xLS4xLjA1NC0uMzMtLjEtLjQ3NkM5LjQ0OCwyOS4wNDQsOS4yMTcsMjkuMDIxLDkuMTE4LDI5LjE0M1ptLS44NzUtMS4xMjhjLS4xMjMuMDc3LS4xMjMuMjc2LDAsLjQ1M3MuMzMuMjUzLjQzLjE3N2EuMzUuMzUsMCwwLDAsMC0uNDc2QzguNTY1LDI3Ljk5Miw4LjM2NiwyNy45MTYsOC4yNDMsMjguMDE1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0wLjU2MylcIiBmaWxsPVwiI2VmZWZlZlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IMKpIDIwMjEgRGZpbmFuY2UuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9