import { jsx as jsx$1, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import cn from 'classnames';
import * as React from 'react';
import React__default, { useState, useCallback, useLayoutEffect, createContext, forwardRef, useContext, createElement, Fragment, useRef, useMemo, Component, useEffect, useReducer, useImperativeHandle } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';
import Modal from 'react-modal';
import ReactDOM$1 from 'react-dom/client';
import Calendar$1 from 'react-calendar';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$_ = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.title {\n  line-height: 20px;\n}\n.title h4 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.title_size_10 {\n  font: normal 400 10px e_Ukraine_Regular, sans-serif;\n}\n.title_size_12 {\n  font: normal 400 12px e_Ukraine_Regular, sans-serif;\n}\n.title_size_14 {\n  font: normal 400 14px e_Ukraine_Regular, sans-serif;\n}\n.title_size_16 {\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n.title_size_18 {\n  font: normal 400 18px e_Ukraine_Regular, sans-serif;\n}\n.title_size_20 {\n  font: normal 400 20px e_Ukraine_Regular, sans-serif;\n}\n.title_size_24 {\n  font: normal 400 24px e_Ukraine_Regular, sans-serif;\n}\n.title_size_32 {\n  font: normal 400 32px e_Ukraine_Regular, sans-serif;\n}\n.title_size_36 {\n  font: normal 400 36px e_Ukraine_Regular, sans-serif;\n}\n.title_size_48 {\n  font: normal 400 48px e_Ukraine_Regular, sans-serif;\n}\n.title_weight_700 {\n  font-weight: 700;\n}";
styleInject(css_248z$_);

var Title = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 16 : _b, _c = _a.weight, weight = _c === void 0 ? 400 : _c, _d = _a.className, className = _d === void 0 ? "" : _d, children = _a.children;
    return (jsx$1("h4", __assign({ className: cn("title", className, "title_size_".concat(size), "title_weight_".concat(weight)), "data-testid": "title" }, { children: children })));
};

var css_248z$Z = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.expand h1,\n.expand p {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.expand.expand_last {\n  border-bottom: 2px solid #000000;\n}\n.expand .expand__header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 44px 100px 44px 0;\n  font: normal 400 24px e_Ukraine_Regular, sans-serif;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #000000;\n  transition: padding 0.4s, background 0.4s;\n  cursor: pointer;\n}\n.expand .expand__header.expand_static {\n  padding: 20px;\n  font: normal 400 20px e_Ukraine_Regular, sans-serif;\n}\n.expand .expand__header.expand_static:hover:not(.expand_active) {\n  padding-left: 20px;\n  font: normal 400 20px e_Ukraine_Regular, sans-serif;\n  background: #ffffff;\n  color: #000000;\n}\n.expand .expand__header.expand_static:before {\n  right: 20px;\n}\n.expand .expand__header.expand_static:hover:not(.expand_active):before {\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_18_134)'%3E%3Cline x1='12' y1='3' x2='12' y2='21' stroke='black' stroke-width='2'/%3E%3Cline x1='3' y1='12' x2='21' y2='12' stroke='black' stroke-width='2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_18_134'%3E%3Crect width='18' height='18' fill='white' transform='translate(3 3)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");\n}\n.expand .expand__header:hover:not(.expand_active) {\n  padding-left: 35px;\n  background: #000000;\n  color: #ffffff;\n}\n.expand .expand__header:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -12px;\n  right: 3px;\n  width: 24px;\n  height: 24px;\n  transition: 0.2s ease-in-out;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_18_134)'%3E%3Cline x1='12' y1='3' x2='12' y2='21' stroke='black' stroke-width='2'/%3E%3Cline x1='3' y1='12' x2='21' y2='12' stroke='black' stroke-width='2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_18_134'%3E%3Crect width='18' height='18' fill='white' transform='translate(3 3)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");\n}\n.expand .expand__header:hover:not(.expand_active):before {\n  right: 35px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0001 3H11.0001V11L3 11V13H11.0001V21H13.0001V13H21V11L13.0001 11V3Z' fill='white'/%3E%3C/svg%3E\");\n}\n.expand .expand__header.expand_active:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='3' y1='12' x2='21' y2='12' stroke='black' stroke-width='2'/%3E%3C/svg%3E\");\n}\n.expand .expand__header:not(.expand_active) + .expand__content {\n  display: none;\n}\n.expand .expand__content {\n  font: normal 400 14px e_Ukraine_Regular, sans-serif;\n  padding-bottom: 44px;\n  max-width: 875px;\n}\n.expand .expand_static-content {\n  max-width: 100%;\n  padding: 0px 20px 20px 20px;\n}\n\n@media (max-width: 992px) {\n  .expand .expand__header {\n    font: normal 400 16px e_Ukraine_Regular, sans-serif;\n    line-height: 28px;\n    padding: 15px 25px 15px 0;\n    min-height: auto;\n  }\n  .expand .expand__header:hover:not(.expand_active) {\n    padding-left: 10px;\n  }\n  .expand .expand__header:hover:not(.expand_active):before {\n    right: 3px;\n  }\n}";
styleInject(css_248z$Z);

var Expand = function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children, title = _a.title, _f = _a.open, open = _f === void 0 ? false : _f, _g = _a.isLast, isLast = _g === void 0 ? false : _g, titleClassName = _a.titleClassName, _h = _a.isStatic, isStatic = _h === void 0 ? false : _h, className = _a.className;
    var _j = useState(open), isOpen = _j[0], setOpen = _j[1];
    var handleToggle = function () {
        setOpen(function (prevState) { return !prevState; });
    };
    return (jsxs("section", __assign({ "data-testid": "expand", className: cn("expand", (_b = {},
            _b["expand_last"] = isLast,
            _b), className) }, { children: [jsx$1("h2", __assign({ className: cn("expand__header", (_c = {},
                    _c["expand_active"] = isOpen,
                    _c), (_d = {}, _d["expand_static"] = isStatic, _d), titleClassName), onClick: handleToggle }, { children: title })), jsx$1("div", __assign({ className: cn("expand__content", (_e = {},
                    _e["expand_static-content"] = isStatic,
                    _e)) }, { children: children }))] })));
};

var css_248z$Y = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.status {\n  display: none;\n  min-height: 18px;\n  height: -moz-max-content;\n  height: max-content;\n  padding: 2px 4px;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  font: normal 400 12px e_Ukraine_Regular, sans-serif;\n  color: #ffffff;\n  text-transform: uppercase;\n  word-break: keep-all;\n}\n.status h3 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.status_received {\n  display: inline-block;\n  background: #19be6f;\n}\n.status_canceled {\n  display: inline-block;\n  background: #f44336;\n}\n.status_ordered {\n  display: inline-block;\n  background: #ffd600;\n  color: #000000;\n}\n.status_draft {\n  display: inline-block;\n  color: #000000;\n  background: #dadada;\n}\n.status_annul {\n  display: inline-block;\n  background: #464849;\n}\n.status_passed {\n  display: inline-block;\n  color: #000000;\n  background: #badaec;\n}\n.status_not-passed {\n  display: inline-block;\n  color: #000000;\n  background: #feeceb;\n}";
styleInject(css_248z$Y);

var Status = function (_a) {
    var _b;
    var type = _a.type, _c = _a.className, className = _c === void 0 ? "" : _c, children = _a.children;
    return (jsx$1("h3", __assign({ className: cn("status", className, (_b = {},
            _b["status_received"] = type === "RECEIVED",
            _b["status_canceled"] = type === "CANCELED",
            _b["status_ordered"] = type === "ORDERED",
            _b["status_annul"] = type === "ANNUL",
            _b["status_draft"] = type === "DRAFT",
            _b["status_passed"] = type === "PASSED",
            _b["status_not-passed"] = type === "NOT-PASSED",
            _b)), "data-testid": "status" }, { children: children })));
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$2(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var _excluded$5 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref) {
  var _ref$defaultInputValu = _ref.defaultInputValue,
    defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
    _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
    defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
    propsInputValue = _ref.inputValue,
    propsMenuIsOpen = _ref.menuIsOpen,
    propsOnChange = _ref.onChange,
    propsOnInputChange = _ref.onInputChange,
    propsOnMenuClose = _ref.onMenuClose,
    propsOnMenuOpen = _ref.onMenuOpen,
    propsValue = _ref.value,
    restSelectProps = _objectWithoutProperties$1(_ref, _excluded$5);
  var _useState = useState(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
    _useState2 = _slicedToArray$2(_useState, 2),
    stateInputValue = _useState2[0],
    setStateInputValue = _useState2[1];
  var _useState3 = useState(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
    _useState4 = _slicedToArray$2(_useState3, 2),
    stateMenuIsOpen = _useState4[0],
    setStateMenuIsOpen = _useState4[1];
  var _useState5 = useState(propsValue !== undefined ? propsValue : defaultValue),
    _useState6 = _slicedToArray$2(_useState5, 2),
    stateValue = _useState6[0],
    setStateValue = _useState6[1];
  var onChange = useCallback(function (value, actionMeta) {
    if (typeof propsOnChange === 'function') {
      propsOnChange(value, actionMeta);
    }
    setStateValue(value);
  }, [propsOnChange]);
  var onInputChange = useCallback(function (value, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === 'function') {
      newValue = propsOnInputChange(value, actionMeta);
    }
    setStateInputValue(newValue !== undefined ? newValue : value);
  }, [propsOnInputChange]);
  var onMenuOpen = useCallback(function () {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = useCallback(function () {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== undefined ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue: inputValue,
    menuIsOpen: menuIsOpen,
    onChange: onChange,
    onInputChange: onInputChange,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen,
    value: value
  });
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _iterableToArray$2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray$2(arr) {
  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2();
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset:
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? children[0].children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (process.env.NODE_ENV !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (process.env.NODE_ENV !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stringify, process.env.NODE_ENV !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactIs_production_min();
	} else {
	  module.exports = requireReactIs_development();
	}
} (reactIs$1));

var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$1 = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$1 === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback =  useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || useLayoutEffect;

var hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

if (process.env.NODE_ENV !== 'production') {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */createContext({});

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (process.env.NODE_ENV !== 'production' && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (process.env.NODE_ENV !== 'production' && !!props.css && (typeof props.css !== 'object' || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label) newProps[labelPropName] = label;
  }

  return newProps;
};

var Insertion$1 = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, useContext(ThemeContext));

  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Insertion$1, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/createElement(WrappedComponent, newProps));
});

if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}

var pkg = {
	name: "@emotion/react",
	version: "11.10.5",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				worker: "./dist/emotion-react.worker.esm.js",
				browser: "./dist/emotion-react.browser.esm.js",
				"default": "./dist/emotion-react.esm.js"
			},
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			module: {
				worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
				browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
			},
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			module: {
				worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
				browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
			},
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			module: {
				worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
				browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
			},
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": "./macro.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.10.5",
		"@emotion/cache": "^11.10.5",
		"@emotion/serialize": "^1.1.1",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
		"@emotion/utils": "^1.2.0",
		"@emotion/weak-memoize": "^0.3.0",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.18.5",
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.10.5",
		"@emotion/css-prettifier": "1.1.1",
		"@emotion/server": "11.10.0",
		"@emotion/styled": "11.10.5",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^4.5.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact",
		exports: {
			envConditions: [
				"browser",
				"worker"
			],
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": "./macro.js"
			}
		}
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {
  if (process.env.NODE_ENV !== 'production' && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, useContext(ThemeContext));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = useRef();
  useInsertionEffectWithLayoutFallback(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (process.env.NODE_ENV !== 'production') {
  Global.displayName = 'EmotionGlobal';
}

function css$2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css$2.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (process.env.NODE_ENV !== 'production' && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      insertStyles(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

if (process.env.NODE_ENV !== 'production') {
  ClassNames.displayName = 'EmotionClassNames';
}

if (process.env.NODE_ENV !== 'production') {
  var isBrowser = "object" !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked

  var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';

  if (isBrowser && !isTestEnv) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function n(t){var e;return (null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function o(t){return n(t).getComputedStyle(t)}function i$1(t){return f(t)?(t.nodeName||"").toLowerCase():""}let r;function l(){if(r)return r;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(r=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),r):navigator.userAgent}function c(t){return t instanceof n(t).HTMLElement}function s(t){return t instanceof n(t).Element}function f(t){return t instanceof n(t).Node}function u(t){if("undefined"==typeof ShadowRoot)return !1;return t instanceof n(t).ShadowRoot||t instanceof ShadowRoot}function a(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=o(t);return /auto|scroll|overlay|hidden/.test(e+i+n)&&!["inline","contents"].includes(r)}function g(){return !/^((?!chrome|android).)*safari/i.test(l())}function m(t){return ["html","body","#document"].includes(i$1(t))}const p={x:1,y:1};function y(t){const e=!s(t)&&t.contextElement?t.contextElement:s(t)?t:null;if(!e)return p;const n=e.getBoundingClientRect(),i=o(e);let r=n.width/parseFloat(i.width),l=n.height/parseFloat(i.height);return r&&Number.isFinite(r)||(r=1),l&&Number.isFinite(l)||(l=1),{x:r,y:l}}function w$1(t,e,o,i){var r,l,c,f;void 0===e&&(e=!1),void 0===o&&(o=!1);const u=t.getBoundingClientRect();let a=p;e&&(i?s(i)&&(a=y(i)):a=y(t));const d=s(t)?n(t):window,h=!g()&&o,m=(u.left+(h&&null!=(r=null==(l=d.visualViewport)?void 0:l.offsetLeft)?r:0))/a.x,w=(u.top+(h&&null!=(c=null==(f=d.visualViewport)?void 0:f.offsetTop)?c:0))/a.y,x=u.width/a.x,v=u.height/a.y;return {width:x,height:v,top:w,right:m+x,bottom:w+v,left:m,x:m,y:w}}function x(t){return ((f(t)?t.ownerDocument:t.document)||window.document).documentElement}function E(t){if("html"===i$1(t))return t;const e=t.assignedSlot||t.parentNode||(u(t)?t.host:null)||x(t);return u(e)?e.host:e}function D(t){const e=E(t);return m(e)?t.ownerDocument.body:c(e)&&a(e)?e:D(e)}function F(t,e){var o;void 0===e&&(e=[]);const i=D(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=n(i);return r?e.concat(l,l.visualViewport||[],a(i)?i:[]):e.concat(i,F(i))}function S(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:c=!1}=o,f=i&&!c,u=f||r?[...s(t)?F(t):t.contextElement?F(t.contextElement):[],...F(e)]:[];u.forEach((t=>{f&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n);}));let a,d=null;if(l){let o=!0;d=new ResizeObserver((()=>{o||n(),o=!1;})),s(t)&&!c&&d.observe(t),s(t)||!t.contextElement||c||d.observe(t.contextElement),d.observe(e);}let h=c?w$1(t):null;return c&&function e(){const o=w$1(t);!h||o.x===h.x&&o.y===h.y&&o.width===h.width&&o.height===h.height||n();h=o,a=requestAnimationFrame(e);}(),n(),()=>{var t;u.forEach((t=>{f&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n);})),null==(t=d)||t.disconnect(),d=null,c&&cancelAnimationFrame(a);}}

var index =  useLayoutEffect ;

var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
// ==============================
// NO OP
// ==============================

var noop$1 = function noop() {};

// ==============================
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}
function classNames(prefix, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }
  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
}
// ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
};

// ==============================
// Clean Common Props
// ==============================

var cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
    props.clearValue;
    props.cx;
    props.getStyles;
    props.getClassNames;
    props.getValue;
    props.hasValue;
    props.isMulti;
    props.isRtl;
    props.options;
    props.selectOption;
    props.selectProps;
    props.setValue;
    props.theme;
    var innerProps = _objectWithoutProperties$1(props, _excluded$3);
  return _objectSpread2({}, innerProps);
};

// ==============================
// Get Style Props
// ==============================

var getStyleProps = function getStyleProps(props, name, classNamesState) {
  var cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};

// ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

// Normalized Scroll Top
// ------------------------------

function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}

// Normalized scrollTo & scrollTop
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}

// Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  if (style.position === 'fixed') return document.documentElement;
  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}

// Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop$1;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}

// Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

// ==============================
// Get bounding client object
// ==============================

// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

// ==============================
// Passive Event Detector
// ==============================

// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
// check for SSR
var w = typeof window !== 'undefined' ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener('p', noop$1, options);
  w.removeEventListener('p', noop$1, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function (_ref) {
    var _ref2 = _slicedToArray$2(_ref, 1),
      key = _ref2[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function (newProps, _ref3) {
    var _ref4 = _slicedToArray$2(_ref3, 2),
      key = _ref4[0],
      val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};

function getMenuPlacement(_ref) {
  var preferredMaxHeight = _ref.maxHeight,
    menuEl = _ref.menuEl,
    minHeight = _ref.minHeight,
    preferredPlacement = _ref.placement,
    shouldScroll = _ref.shouldScroll,
    isFixedPosition = _ref.isFixedPosition,
    controlHeight = _ref.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: preferredMaxHeight
  };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
    scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
    menuBottom = _menuEl$getBoundingCl.bottom,
    menuHeight = _menuEl$getBoundingCl.height,
    menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
    containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (preferredPlacement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (preferredPlacement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return {
        placement: 'bottom',
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
  }
  return defaultState;
}

// Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};
var menuCSS = function menuCSS(_ref2, unstyled) {
  var _objectSpread2$1;
  var placement = _ref2.placement,
    _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    spacing = _ref2$theme.spacing,
    colors = _ref2$theme.colors;
  return _objectSpread2((_objectSpread2$1 = {
    label: 'menu'
  }, _defineProperty$2(_objectSpread2$1, alignToControl(placement), '100%'), _defineProperty$2(_objectSpread2$1, "position", 'absolute'), _defineProperty$2(_objectSpread2$1, "width", '100%'), _defineProperty$2(_objectSpread2$1, "zIndex", 1), _objectSpread2$1), unstyled ? {} : {
    backgroundColor: colors.neutral0,
    borderRadius: borderRadius,
    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
    marginBottom: spacing.menuGutter,
    marginTop: spacing.menuGutter
  });
};
var PortalPlacementContext = /*#__PURE__*/createContext(null);

// NOTE: internal only
var MenuPlacer = function MenuPlacer(props) {
  var children = props.children,
    minMenuHeight = props.minMenuHeight,
    maxMenuHeight = props.maxMenuHeight,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition,
    menuShouldScrollIntoView = props.menuShouldScrollIntoView,
    theme = props.theme;
  var _ref3 = useContext(PortalPlacementContext) || {},
    setPortalPlacement = _ref3.setPortalPlacement;
  var ref = useRef(null);
  var _useState = useState(maxMenuHeight),
    _useState2 = _slicedToArray$2(_useState, 2),
    maxHeight = _useState2[0],
    setMaxHeight = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray$2(_useState3, 2),
    placement = _useState4[0],
    setPlacement = _useState4[1];
  var controlHeight = theme.spacing.controlHeight;
  index(function () {
    var menuEl = ref.current;
    if (!menuEl) return;

    // DO NOT scroll if position is fixed
    var isFixedPosition = menuPosition === 'fixed';
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl: menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll: shouldScroll,
      isFixedPosition: isFixedPosition,
      controlHeight: controlHeight
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
  return children({
    ref: ref,
    placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight: maxHeight
    })
  });
};
var Menu = function Menu(props) {
  var children = props.children,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'menu', {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};

// ==============================
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight,
    baseUnit = _ref4.theme.spacing.baseUnit;
  return _objectSpread2({
    maxHeight: maxHeight,
    overflowY: 'auto',
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  }, unstyled ? {} : {
    paddingBottom: baseUnit,
    paddingTop: baseUnit
  });
};
var MenuList = function MenuList(props) {
  var children = props.children,
    innerProps = props.innerProps,
    innerRef = props.innerRef,
    isMulti = props.isMulti;
  return jsx("div", _extends({}, getStyleProps(props, 'menuList', {
    'menu-list': true,
    'menu-list--is-multi': isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};

// ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme,
    baseUnit = _ref5$theme.spacing.baseUnit,
    colors = _ref5$theme.colors;
  return _objectSpread2({
    textAlign: 'center'
  }, unstyled ? {} : {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
  });
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'noOptionsMessage', {
    'menu-notice': true,
    'menu-notice--no-options': true
  }), innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'loadingMessage', {
    'menu-notice': true,
    'menu-notice--loading': true
  }), innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
};

// ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
    offset = _ref6.offset,
    position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = function MenuPortal(props) {
  var appendTo = props.appendTo,
    children = props.children,
    controlElement = props.controlElement,
    innerProps = props.innerProps,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition;
  var menuPortalRef = useRef(null);
  var cleanupRef = useRef(null);
  var _useState5 = useState(coercePlacement(menuPlacement)),
    _useState6 = _slicedToArray$2(_useState5, 2),
    placement = _useState6[0],
    setPortalPlacement = _useState6[1];
  var portalPlacementContext = useMemo(function () {
    return {
      setPortalPlacement: setPortalPlacement
    };
  }, []);
  var _useState7 = useState(null),
    _useState8 = _slicedToArray$2(_useState7, 2),
    computedPosition = _useState8[0],
    setComputedPosition = _useState8[1];
  var updateComputedPosition = useCallback(function () {
    if (!controlElement) return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset: offset,
        rect: rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  index(function () {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = useCallback(function () {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = S(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: 'ResizeObserver' in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  index(function () {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = useCallback(function (menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);

  // bail early if required elements aren't present
  if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

  // same wrapper element whether fixed or portalled
  var menuWrapper = jsx("div", _extends({
    ref: setMenuPortalElement
  }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), 'menuPortal', {
    'menu-portal': true
  }), innerProps), children);
  return jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /*#__PURE__*/createPortal(menuWrapper, appendTo) : menuWrapper);
};

// ==============================
// Root Container
// ==============================

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
    isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : undefined,
    pointerEvents: isDisabled ? 'none' : undefined,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    isRtl = props.isRtl;
  return jsx("div", _extends({}, getStyleProps(props, 'container', {
    '--is-disabled': isDisabled,
    '--is-rtl': isRtl
  }), innerProps), children);
};

// ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
  var spacing = _ref2.theme.spacing,
    isMulti = _ref2.isMulti,
    hasValue = _ref2.hasValue,
    controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
  return _objectSpread2({
    alignItems: 'center',
    display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
    flex: 1,
    flexWrap: 'wrap',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  }, unstyled ? {} : {
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
  });
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isMulti = props.isMulti,
    hasValue = props.hasValue;
  return jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
    'value-container': true,
    'value-container--is-multi': isMulti,
    'value-container--has-value': hasValue
  }), innerProps), children);
};

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
    indicators: true
  }), innerProps), children);
};

var _templateObject;
var _excluded$2 = ["size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

// ==============================
// Dropdown & Clear Icons
// ==============================
var _ref2$2 = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2xvYWRpbmdJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgICAgey4uLmlubmVyUHJvcHN9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};
var Svg = function Svg(_ref) {
  var size = _ref.size,
    props = _objectWithoutProperties$1(_ref, _excluded$2);
  return jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2$2
  }, props));
};
var CrossIcon = function CrossIcon(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};

// ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3, unstyled) {
  var isFocused = _ref3.isFocused,
    _ref3$theme = _ref3.theme,
    baseUnit = _ref3$theme.spacing.baseUnit,
    colors = _ref3$theme.colors;
  return _objectSpread2({
    label: 'indicatorContainer',
    display: 'flex',
    transition: 'color 150ms'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2,
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  });
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
    indicator: true,
    'dropdown-indicator': true
  }), innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
    indicator: true,
    'clear-indicator': true
  }), innerProps), children || jsx(CrossIcon, null));
};

// ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled,
    _ref4$theme = _ref4.theme,
    baseUnit = _ref4$theme.spacing.baseUnit,
    colors = _ref4$theme.colors;
  return _objectSpread2({
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2
  });
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var innerProps = props.innerProps;
  return jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
    'indicator-separator': true
  })));
};

// ==============================
// Loading
// ==============================

var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
  var isFocused = _ref5.isFocused,
    size = _ref5.size,
    _ref5$theme = _ref5.theme,
    colors = _ref5$theme.colors,
    baseUnit = _ref5$theme.spacing.baseUnit;
  return _objectSpread2({
    label: 'loadingIndicator',
    display: 'flex',
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2
  });
};
var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
    offset = _ref6.offset;
  return jsx("span", {
    css: /*#__PURE__*/css$2({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : undefined,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2xvYWRpbmdJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgICAgey4uLmlubmVyUHJvcHN9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */")
  });
};
var LoadingIndicator = function LoadingIndicator(props) {
  var innerProps = props.innerProps,
    isRtl = props.isRtl;
  return jsx("div", _extends({}, getStyleProps(props, 'loadingIndicator', {
    indicator: true,
    'loading-indicator': true
  }), innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css$1 = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    _ref$theme = _ref.theme,
    colors = _ref$theme.colors,
    borderRadius = _ref$theme.borderRadius,
    spacing = _ref$theme.spacing;
  return _objectSpread2({
    label: 'control',
    alignItems: 'center',
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms'
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  });
};
var Control = function Control(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    innerRef = props.innerRef,
    innerProps = props.innerProps,
    menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends({
    ref: innerRef
  }, getStyleProps(props, 'control', {
    control: true,
    'control--is-disabled': isDisabled,
    'control--is-focused': isFocused,
    'control--menu-is-open': menuIsOpen
  }), innerProps), children);
};

var _excluded$1$1 = ["data"];
var groupCSS = function groupCSS(_ref, unstyled) {
  var spacing = _ref.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};
var Group = function Group(props) {
  var children = props.children,
    cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    Heading = props.Heading,
    headingProps = props.headingProps,
    innerProps = props.innerProps,
    label = props.label,
    theme = props.theme,
    selectProps = props.selectProps;
  return jsx("div", _extends({}, getStyleProps(props, 'group', {
    group: true
  }), innerProps), jsx(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    getClassNames: getClassNames,
    cx: cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    colors = _ref2$theme.colors,
    spacing = _ref2$theme.spacing;
  return _objectSpread2({
    label: 'group',
    cursor: 'default',
    display: 'block'
  }, unstyled ? {} : {
    color: colors.neutral40,
    fontSize: '75%',
    fontWeight: 500,
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  });
};
var GroupHeading = function GroupHeading(props) {
  var _cleanCommonProps = cleanCommonProps(props);
    _cleanCommonProps.data;
    var innerProps = _objectWithoutProperties$1(_cleanCommonProps, _excluded$1$1);
  return jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
    'group-heading': true
  }), innerProps));
};

var _excluded$4 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    value = _ref.value,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return _objectSpread2(_objectSpread2({
    visibility: isDisabled ? 'hidden' : 'visible',
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? 'translateZ(0)' : ''
  }, containerStyle), unstyled ? {} : {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    color: colors.neutral80
  });
};
var spacingStyle = {
  gridArea: '1 / 2',
  font: 'inherit',
  minWidth: '2px',
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: '1 1 auto',
  display: 'inline-grid',
  gridArea: '1 / 1 / 2 / 3',
  gridTemplateColumns: '0 min-content',
  '&:after': _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: 'hidden',
    whiteSpace: 'pre'
  }, spacingStyle)
};
var inputStyle = function inputStyle(isHidden) {
  return _objectSpread2({
    label: 'input',
    color: 'inherit',
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: '100%'
  }, spacingStyle);
};
var Input = function Input(props) {
  var cx = props.cx,
    value = props.value;
  var _cleanCommonProps = cleanCommonProps(props),
    innerRef = _cleanCommonProps.innerRef,
    isDisabled = _cleanCommonProps.isDisabled,
    isHidden = _cleanCommonProps.isHidden,
    inputClassName = _cleanCommonProps.inputClassName,
    innerProps = _objectWithoutProperties$1(_cleanCommonProps, _excluded$4);
  return jsx("div", _extends({}, getStyleProps(props, 'input', {
    'input-container': true
  }), {
    "data-value": value || ''
  }), jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};

var multiValueCSS = function multiValueCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    borderRadius = _ref$theme.borderRadius,
    colors = _ref$theme.colors;
  return _objectSpread2({
    label: 'multiValue',
    display: 'flex',
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    margin: spacing.baseUnit / 2
  });
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    colors = _ref2$theme.colors,
    cropWithEllipsis = _ref2.cropWithEllipsis;
  return _objectSpread2({
    overflow: 'hidden',
    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    padding: 3,
    paddingLeft: 6
  });
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme,
    spacing = _ref3$theme.spacing,
    borderRadius = _ref3$theme.borderRadius,
    colors = _ref3$theme.colors,
    isFocused = _ref3.isFocused;
  return _objectSpread2({
    alignItems: 'center',
    display: 'flex'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused ? colors.dangerLight : undefined,
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  });
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
    innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
    innerProps = _ref5.innerProps;
  return jsx("div", _extends({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue(props) {
  var children = props.children,
    components = props.components,
    data = props.data,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    removeProps = props.removeProps,
    selectProps = props.selectProps;
  var Container = components.Container,
    Label = components.Label,
    Remove = components.Remove;
  return jsx(Container, {
    data: data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValue', {
      'multi-value': true,
      'multi-value--is-disabled': isDisabled
    })), innerProps),
    selectProps: selectProps
  }, jsx(Label, {
    data: data,
    innerProps: _objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
      'multi-value__label': true
    })),
    selectProps: selectProps
  }, children), jsx(Remove, {
    data: data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
      'multi-value__remove': true
    })), {}, {
      'aria-label': "Remove ".concat(children || 'option')
    }, removeProps),
    selectProps: selectProps
  }));
};

var optionCSS = function optionCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    isSelected = _ref.isSelected,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return _objectSpread2({
    label: 'option',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
    }
  });
};
var Option = function Option(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    isSelected = props.isSelected,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'option', {
    option: true,
    'option--is-disabled': isDisabled,
    'option--is-focused': isFocused,
    'option--is-selected': isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return _objectSpread2({
    label: 'placeholder',
    gridArea: '1 / 1 / 2 / 3'
  }, unstyled ? {} : {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var Placeholder = function Placeholder(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
    placeholder: true
  }), innerProps), children);
};

var css = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return _objectSpread2({
    label: 'singleValue',
    gridArea: '1 / 1 / 2 / 3',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var SingleValue = function SingleValue(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
    'single-value': true,
    'single-value--is-disabled': isDisabled
  }), innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this,
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

// Assistive text to describe visual elements. Hidden for sighted users.
var _ref = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};
var A11yText = function A11yText(props) {
  return jsx("span", _extends({
    css: _ref
  }, props));
};

var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
      isMulti = props.isMulti,
      isDisabled = props.isDisabled,
      tabSelectsValue = props.tabSelectsValue,
      context = props.context;
    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
      case 'input':
        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');
      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      labels = props.labels,
      isDisabled = props.isDisabled;
    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");
      case 'clear':
        return 'All selected options have been cleared.';
      case 'initial-input-focus':
        return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
      focused = props.focused,
      options = props.options,
      _props$label2 = props.label,
      label = _props$label2 === void 0 ? '' : _props$label2,
      selectValue = props.selectValue,
      isDisabled = props.isDisabled,
      isSelected = props.isSelected;
    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };
    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === 'menu') {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }
    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
      resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};

var LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
    focusedOption = props.focusedOption,
    focusedValue = props.focusedValue,
    focusableOptions = props.focusableOptions,
    isFocused = props.isFocused,
    selectValue = props.selectValue,
    selectProps = props.selectProps,
    id = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
    getOptionLabel = selectProps.getOptionLabel,
    inputValue = selectProps.inputValue,
    isMulti = selectProps.isMulti,
    isOptionDisabled = selectProps.isOptionDisabled,
    isSearchable = selectProps.isSearchable,
    menuIsOpen = selectProps.menuIsOpen,
    options = selectProps.options,
    screenReaderStatus = selectProps.screenReaderStatus,
    tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live'];

  // Update aria live message configuration when prop changes
  var messages = useMemo(function () {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);

  // Update aria live selected option when prop changes
  var ariaSelected = useMemo(function () {
    var message = '';
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
        selectedOptions = ariaSelection.options,
        removedValue = ariaSelection.removedValue,
        removedValues = ariaSelection.removedValues,
        value = ariaSelection.value;
      // select-option when !isMulti does not return option so we assume selected option is value
      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      };

      // If there is just one item from the action then get its label
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel(selected) : '';

      // If there are multiple items from the action then return an array of labels
      var multiSelected = selectedOptions || removedValues || undefined;
      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
      var onChangeProps = _objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled(selected, selectValue),
        label: label,
        labels: labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
  var ariaFocused = useMemo(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused, selectValue),
        isSelected: isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue]);
  var ariaResults = useMemo(function () {
    var resultsMsg = '';
    if (menuIsOpen && options.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
  var ariaGuidance = useMemo(function () {
    var guidanceMsg = '';
    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = jsx(Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
  return jsx(Fragment, null, jsx(A11yText, {
    id: id
  }, isInitialFocus && ScreenReaderText), jsx(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};

var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};
for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];
  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    // eslint-disable-next-line no-underscore-dangle
    if (option.data.__isNew__) return true;
    var _ignoreCase$ignoreAcc = _objectSpread2({
        ignoreCase: true,
        ignoreAccents: true,
        stringify: defaultStringify,
        trim: true,
        matchFrom: 'any'
      }, config),
      ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
      ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
      stringify = _ignoreCase$ignoreAcc.stringify,
      trim = _ignoreCase$ignoreAcc.trim,
      matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var _excluded$1 = ["innerRef"];
function DummyInput(_ref) {
  var innerRef = _ref.innerRef,
    props = _objectWithoutProperties$1(_ref, _excluded$1);
  // Remove animation props not meant for HTML elements
  var filteredProps = removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
  return jsx("input", _extends({
    ref: innerRef
  }, filteredProps, {
    css: /*#__PURE__*/css$2({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: 'transparent',
      fontSize: 'inherit',
      gridArea: '1 / 1 / 2 / 3',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(.01)'
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}

var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var isBottom = useRef(false);
  var isTop = useRef(false);
  var touchStart = useRef(0);
  var scrollTarget = useRef(null);
  var handleEventDelta = useCallback(function (event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
      scrollTop = _scrollTarget$current.scrollTop,
      scrollHeight = _scrollTarget$current.scrollHeight,
      clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;

    // reset bottom/top flags
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }

    // bottom limit
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;

      // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }

    // cancel scroll
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = useCallback(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = useCallback(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = useCallback(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = useCallback(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener('wheel', onWheel, notPassive);
    el.addEventListener('touchstart', onTouchStart, notPassive);
    el.addEventListener('touchmove', onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = useCallback(function (el) {
    // bail early if no element is available to detach from
    if (!el) return;
    el.removeEventListener('wheel', onWheel, false);
    el.removeEventListener('touchstart', onTouchStart, false);
    el.removeEventListener('touchmove', onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  useEffect(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};
function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
    _ref$accountForScroll = _ref.accountForScrollbars,
    accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = useRef({});
  var scrollTarget = useRef(null);
  var addScrollLock = useCallback(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }

    // apply the lock styles and padding if this is the first scroll lock
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }

    // account for touch devices
    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions);

      // Allow scroll on provided target
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }

    // increment active scroll locks
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = useCallback(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    // safely decrement active scroll locks
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

    // reapply original body styles, if any
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }

    // remove touch listeners
    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  useEffect(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};
var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9ICgpID0+XG4gIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmOiBSZWZDYWxsYmFjazxIVE1MRWxlbWVudD4gPSAoZWxlbWVudCkgPT4ge1xuICAgIHNldFNjcm9sbENhcHR1cmVUYXJnZXQoZWxlbWVudCk7XG4gICAgc2V0U2Nyb2xsTG9ja1RhcmdldChlbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtsb2NrRW5hYmxlZCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtibHVyU2VsZWN0SW5wdXR9XG4gICAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAwLCBib3R0b206IDAsIHJpZ2h0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW4odGFyZ2V0UmVmKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function ScrollManager(_ref) {
  var children = _ref.children,
    lockEnabled = _ref.lockEnabled,
    _ref$captureEnabled = _ref.captureEnabled,
    captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBvbkZvY3VzOiBGb2N1c0V2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0+ID0gKHsgbmFtZSwgb25Gb2N1cyB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIHJlcXVpcmVkXG4gICAgbmFtZT17bmFtZX1cbiAgICB0YWJJbmRleD17LTF9XG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var RequiredInput = function RequiredInput(_ref) {
  var name = _ref.name,
    onFocus = _ref.onFocus;
  return jsx("input", {
    required: true,
    name: name,
    tabIndex: -1,
    onFocus: onFocus,
    css: _ref2
    // Prevent `Switching from uncontrolled to controlled` error
    ,
    value: "",
    onChange: function onChange() {}
  });
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css,
  valueContainer: valueContainerCSS
};

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4;
// Used to calculate consistent margin/padding on elements
var baseUnit = 4;
// The minimum height of the control
var controlHeight = 38;
// The amount of space between the control and menu */
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps$1 = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel(props, option);
  var value = getOptionValue(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if ('options' in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray$2(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
    inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
    isSelected = categorizedOption.isSelected,
    label = categorizedOption.label,
    value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
    lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var getOptionLabel = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;
  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue(props, option);
  return selectValue.some(function (i) {
    return getOptionValue(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
    isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select$1 = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);
  var _super = _createSuper(Select);
  // Misc. Instance Properties
  // ------------------------------

  // TODO

  // Refs
  // ------------------------------

  // Lifecycle
  // ------------------------------

  function Select(_props) {
    var _this;
    _classCallCheck(this, Select);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;
    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange(newValue, actionMeta);
    };
    _this.setValue = function (newValue, action, option) {
      var _this$props2 = _this.props,
        closeMenuOnSelect = _this$props2.closeMenuOnSelect,
        isMulti = _this$props2.isMulti,
        inputValue = _this$props2.inputValue;
      _this.onInputChange('', {
        action: 'set-value',
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      // when the select value should change, we should reset focusedValue
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };
    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
        blurInputOnSelect = _this$props3.blurInputOnSelect,
        isMulti = _this$props3.isMulti,
        name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        })), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray$2(selectValue), [newValue])), 'select-option', newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), 'select-option');
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: 'select-option',
          option: newValue,
          name: name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: 'clear',
        removedValues: selectValue
      });
    };
    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };
    _this.getValue = function () {
      return _this.state.selectValue;
    };
    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function (data) {
      return getOptionLabel(_this.props, data);
    };
    _this.getOptionValue = function (data) {
      return getOptionValue(_this.props, data);
    };
    _this.getStyles = function (key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function (key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function () {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value: value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function (event) {
      // Event captured by dropdown indicator
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
        isMulti = _this$props4.isMulti,
        menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };
    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }

      // reset move vars
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function (event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: 'input-change',
        prevInputValue: prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function (event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange('', {
        action: 'input-blur',
        prevInputValue: prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      _this.setState({
        focusedOption: focusedOption
      });
    };
    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
        isMulti = _this$props5.isMulti,
        backspaceRemovesValue = _this$props5.backspaceRemovesValue,
        escapeClearsValue = _this$props5.escapeClearsValue,
        inputValue = _this$props5.inputValue,
        isClearable = _this$props5.isClearable,
        isDisabled = _this$props5.isDisabled,
        menuIsOpen = _this$props5.menuIsOpen,
        onKeyDown = _this$props5.onKeyDown,
        tabSelectsValue = _this$props5.tabSelectsValue,
        openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
        focusedOption = _this$state.focusedOption,
        focusedValue = _this$state.focusedValue,
        selectValue = _this$state.selectValue;
      if (isDisabled) return;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }

      // Block option hover events when the user has just pressed a key
      _this.blockOptionHover = true;
      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;
          _this.focusValue('previous');
          break;
        case 'ArrowRight':
          if (!isMulti || inputValue) return;
          _this.focusValue('next');
          break;
        case 'Delete':
        case 'Backspace':
          if (inputValue) return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case 'Tab':
          if (_this.isComposing) return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
          // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange('', {
              action: 'menu-close',
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case ' ':
          // space
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu('first');
            break;
          }
          if (!focusedOption) return;
          _this.selectOption(focusedOption);
          break;
        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }
          break;
        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }
          break;
        case 'PageUp':
          if (!menuIsOpen) return;
          _this.focusOption('pageup');
          break;
        case 'PageDown':
          if (!menuIsOpen) return;
          _this.focusOption('pagedown');
          break;
        case 'Home':
          if (!menuIsOpen) return;
          _this.focusOption('first');
          break;
        case 'End':
          if (!menuIsOpen) return;
          _this.focusOption('last');
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);

    // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusedOption = focusableOptions[optionIndex];
    }
    return _this;
  }
  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }

      // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
        isDisabled = _this$props6.isDisabled,
        menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
      // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled ||
      // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programmatically disabled while focused
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: true
        });
      }

      // scroll the focused option into view if necessary
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }

    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close',
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }

    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }

    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state,
        selectValue = _this$state2.selectValue,
        isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      // only scroll if the menu isn't already open
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        focusedValue = _this$state3.focusedValue;

      // Only multiselects support value focusing
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;
      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'
      var focusedIndex = options.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value:
    // ==============================
    // Getters
    // ==============================

    function getTheme() {
      // Use the default theme if there are no customisations.
      if (!this.props.theme) {
        return defaultTheme;
      }
      // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.
      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      }
      // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.
      return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
        cx = this.cx,
        getStyles = this.getStyles,
        getClassNames = this.getClassNames,
        getValue = this.getValue,
        selectOption = this.selectOption,
        setValue = this.setValue,
        props = this.props;
      var isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getClassNames: getClassNames,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
        isClearable = _this$props7.isClearable,
        isMulti = _this$props7.isMulti;

      // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable
      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    }

    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value:
    // ==============================
    // Composition Handlers
    // ==============================

    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value:
    // ==============================
    // Touch Handlers
    // ==============================

    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value:
    // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
        isDisabled = _this$props8.isDisabled,
        isSearchable = _this$props8.isSearchable,
        inputId = _this$props8.inputId,
        inputValue = _this$props8.inputValue,
        tabIndex = _this$props8.tabIndex,
        form = _this$props8.form,
        menuIsOpen = _this$props8.menuIsOpen,
        required = _this$props8.required;
      var _this$getComponents = this.getComponents(),
        Input = _this$getComponents.Input;
      var _this$state4 = this.state,
        inputIsHidden = _this$state4.inputIsHidden,
        ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input');

      // aria attributes makes the JSX "noisy", separated for clarity
      var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
        'aria-autocomplete': 'list',
        'aria-expanded': menuIsOpen,
        'aria-haspopup': true,
        'aria-errormessage': this.props['aria-errormessage'],
        'aria-invalid': this.props['aria-invalid'],
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-required': required,
        role: 'combobox'
      }, menuIsOpen && {
        'aria-controls': this.getElementId('listbox'),
        'aria-owns': this.getElementId('listbox')
      }), !isSearchable && {
        'aria-readonly': true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
        'aria-describedby': this.getElementId('live-region')
      } : {
        'aria-describedby': this.getElementId('placeholder')
      });
      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/React.createElement(DummyInput, _extends({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop$1,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex: tabIndex,
          inputMode: "none",
          form: form,
          value: ""
        }, ariaAttributes));
      }
      return /*#__PURE__*/React.createElement(Input, _extends({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(),
        MultiValue = _this$getComponents2.MultiValue,
        MultiValueContainer = _this$getComponents2.MultiValueContainer,
        MultiValueLabel = _this$getComponents2.MultiValueLabel,
        MultiValueRemove = _this$getComponents2.MultiValueRemove,
        SingleValue = _this$getComponents2.SingleValue,
        Placeholder = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props,
        controlShouldRenderValue = _this$props9.controlShouldRenderValue,
        isDisabled = _this$props9.isDisabled,
        isMulti = _this$props9.isMulti,
        inputValue = _this$props9.inputValue,
        placeholder = _this$props9.placeholder;
      var _this$state5 = this.state,
        selectValue = _this$state5.selectValue,
        focusedValue = _this$state5.focusedValue,
        isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/React.createElement(Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused,
          innerProps: {
            id: this.getElementId('placeholder')
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /*#__PURE__*/React.createElement(MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: key,
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /*#__PURE__*/React.createElement(SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
        ClearIndicator = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props,
        isDisabled = _this$props10.isDisabled,
        isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/React.createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
        LoadingIndicator = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props,
        isDisabled = _this$props11.isDisabled,
        isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/React.createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
        DropdownIndicator = _this$getComponents5.DropdownIndicator,
        IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

      // separator doesn't make sense without the dropdown indicator
      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/React.createElement(IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
        DropdownIndicator = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/React.createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(),
        Group = _this$getComponents7.Group,
        GroupHeading = _this$getComponents7.GroupHeading,
        Menu = _this$getComponents7.Menu,
        MenuList = _this$getComponents7.MenuList,
        MenuPortal = _this$getComponents7.MenuPortal,
        LoadingMessage = _this$getComponents7.LoadingMessage,
        NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
        Option = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
        captureMenuScroll = _this$props12.captureMenuScroll,
        inputValue = _this$props12.inputValue,
        isLoading = _this$props12.isLoading,
        loadingMessage = _this$props12.loadingMessage,
        minMenuHeight = _this$props12.minMenuHeight,
        maxMenuHeight = _this$props12.maxMenuHeight,
        menuIsOpen = _this$props12.menuIsOpen,
        menuPlacement = _this$props12.menuPlacement,
        menuPosition = _this$props12.menuPosition,
        menuPortalTarget = _this$props12.menuPortalTarget,
        menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
        noOptionsMessage = _this$props12.noOptionsMessage,
        onMenuScrollToTop = _this$props12.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;

      // TODO: Internal Option Type here
      var render = function render(props, id) {
        var type = props.type,
          data = props.data,
          isDisabled = props.isDisabled,
          isSelected = props.isSelected,
          label = props.label,
          value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/React.createElement(Option, _extends({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var _data = item.data,
              options = item.options,
              groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/React.createElement(Group, _extends({}, commonProps, {
              key: groupId,
              data: _data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/React.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });
        if (_message === null) return null;
        menuUI = /*#__PURE__*/React.createElement(NoOptionsMessage, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/React.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
          _ref4$placerProps = _ref4.placerProps,
          placement = _ref4$placerProps.placement,
          maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/React.createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId('listbox')
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/React.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/React.createElement(MenuList, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      });

      // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`
      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/React.createElement(MenuPortal, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props,
        delimiter = _this$props13.delimiter,
        isDisabled = _this$props13.isDisabled,
        isMulti = _this$props13.isMulti,
        name = _this$props13.name,
        required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;
      if (required && !this.hasValue()) {
        return /*#__PURE__*/React.createElement(RequiredInput, {
          name: name,
          onFocus: this.onValueInputFocus
        });
      }
      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/React.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/React.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/React.createElement("input", {
            name: name,
            type: "hidden",
            value: ""
          });
          return /*#__PURE__*/React.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return /*#__PURE__*/React.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state,
        ariaSelection = _this$state6.ariaSelection,
        focusedOption = _this$state6.focusedOption,
        focusedValue = _this$state6.focusedValue,
        isFocused = _this$state6.isFocused,
        selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/React.createElement(LiveRegion, _extends({}, commonProps, {
        id: this.getElementId('live-region'),
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
        Control = _this$getComponents8.Control,
        IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
        SelectContainer = _this$getComponents8.SelectContainer,
        ValueContainer = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props,
        className = _this$props14.className,
        id = _this$props14.id,
        isDisabled = _this$props14.isDisabled,
        menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/React.createElement(SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/React.createElement(Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/React.createElement(ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/React.createElement(IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
        clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
        inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
        ariaSelection = state.ariaSelection,
        isFocused = state.isFocused,
        prevWasFocused = state.prevWasFocused;
      var options = props.options,
        value = props.value,
        menuIsOpen = props.menuIsOpen,
        inputValue = props.inputValue,
        isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      // some updates should toggle the state of the input visibility
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        // If `value` or `defaultValue` props are not empty then announce them
        // when the Select is initially focused
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: 'initial-input-focus'
        };
        hasKeptFocus = !prevWasFocused;
      }

      // If the 'initial-input-focus' action has been set already
      // then reset the ariaSelection to null
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
        newAriaSelection = null;
      }
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select;
}(Component);
Select$1.defaultProps = defaultProps$1;

var StateManagedSelect = /*#__PURE__*/forwardRef(function (props, ref) {
  var baseSelectProps = useStateManager(props);
  return /*#__PURE__*/React.createElement(Select$1, _extends({
    ref: ref
  }, baseSelectProps));
});

var Select = StateManagedSelect;

var css_248z$X = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.select-container {\n  cursor: pointer;\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n.select-container .select__control {\n  border: none;\n  border-radius: 0;\n  border-bottom: 2px solid #000000;\n  box-shadow: none;\n  max-height: 31px;\n  min-height: 0;\n  padding-bottom: 6px;\n  background: transparent;\n  font: inherit;\n}\n.select-container .select__control:hover {\n  border-color: #000000;\n}\n.select-container .select__control .select__value-container {\n  padding: 0;\n}\n.select-container .select__control .select__value-container .select__input-container {\n  margin: 0;\n  padding: 0;\n}\n.select-container .select__control--menu-is-open .select__indicators .select__dropdown-indicator {\n  transform: rotateX(180deg);\n  color: #000000;\n}\n.select-container .select__indicators .select__indicator-separator {\n  display: none;\n}\n.select-container .select__indicators .select__dropdown-indicator {\n  padding: 0;\n  color: #000000;\n}\n\n.select__option {\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n\n@media (max-width: 768px) {\n  .select-container {\n    font: normal 400 12px e_Ukraine_Regular, sans-serif;\n  }\n  .select__menu-portal .select__menu .select__menu-list .select__option {\n    font: normal 400 12px e_Ukraine_Regular, sans-serif;\n  }\n}";
styleInject(css_248z$X);

var SelectInput = function (_a) {
    var name = _a.name, options = _a.options, _b = _a.placeholder, placeholder = _b === void 0 ? "" : _b, onChange = _a.onChange, onBlur = _a.onBlur, className = _a.className, styles = _a.styles, _c = _a.modalPortalTarget, modalPortalTarget = _c === void 0 ? document.body : _c;
    return (jsx$1(Select, { options: options, className: cn("select-container", className), classNamePrefix: "select", placeholder: placeholder, name: name, onChange: onChange, onBlur: onBlur, styles: styles, menuPortalTarget: modalPortalTarget }));
};

var css_248z$W = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.navigation {\n  display: flex;\n  flex-direction: column;\n}\n.navigation a {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n  text-decoration: none;\n}\n.navigation a:active {\n  color: inherit;\n}\n.navigation a:visited {\n  color: inherit;\n}\n.navigation__tabs {\n  display: flex;\n  gap: 50px;\n  list-style: none;\n}\n.navigation__tabs .navigation__tab {\n  white-space: nowrap;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  padding-bottom: 10px;\n  color: #000000;\n}\n.navigation__tabs .navigation__tab_active {\n  border-bottom: 2px solid #000000;\n}\n\n@media (max-width: 992px) {\n  .navigation {\n    padding: 0 16px;\n  }\n  .navigation .navigation__tabs-wrapper {\n    max-width: calc(100vw - 32px);\n  }\n  .navigation__tabs .navigation__tab {\n    font: normal 400 12px e_Ukraine_Regular, sans-serif;\n  }\n}";
styleInject(css_248z$W);

var Navigation = function (_a) {
    var navLinks = _a.navLinks, className = _a.className;
    var linkStyles = function (to, isActive, isAnchor, additionalStyles) {
        var _a;
        return cn("navigation__tab", (_a = {},
            _a["navigation__tab_active"] = isAnchor ? location.hash === to : isActive,
            _a), additionalStyles);
    };
    return (jsx$1("div", __assign({ className: cn("navigation", className) }, { children: jsx$1("nav", __assign({ className: "navigation__tabs-wrapper", role: "navigation" }, { children: jsx$1("menu", __assign({ className: "navigation__tabs" }, { children: navLinks.map(function (_a) {
                    var to = _a.to, anchor = _a.anchor, text = _a.text, customContent = _a.customContent, customStyles = _a.customStyles;
                    return anchor ? (jsx$1("a", __assign({ href: to, className: linkStyles(to, false, true, customStyles) }, { children: customContent || text }))) : (jsx$1(NavLink, __assign({ to: to, className: function (_a) {
                            var isActive = _a.isActive;
                            return linkStyles(to, isActive, false, customStyles);
                        } }, { children: customContent || text }), to));
                }) })) })) })));
};

var reactPaginate = {exports: {}};

(function (module, exports) {
	!function(e,t){module.exports=t(React__default);}(commonjsGlobal,(e=>(()=>{var t={703:(e,t,a)=>{var r=a(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a};},697:(e,t,a)=>{e.exports=a(703)();},414:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";},98:t=>{t.exports=e;}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]});},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});};var n={};return (()=>{r.r(n),r.d(n,{default:()=>k});var e=r(98),t=r.n(e),a=r(697),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);}return e},o.apply(this,arguments)}var s=function(e){var a=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,g=e.extraAriaContext,d=e.pageLabelBuilder,f=e.rel,v=e.ariaLabel||"Page "+n+(g?" "+g:""),b=null;return i&&(b="page",v=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),t().createElement("li",{className:a},t().createElement("a",o({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":v,"aria-current":b,onKeyPress:p},c(p)),d(n)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const l=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);}return e},c.apply(this,arguments)}var p=function(e){var a=e.breakLabel,r=e.breakClassName,n=e.breakLinkClassName,i=e.breakHandler,o=e.getEventListener,s=r||"break";return t().createElement("li",{className:s},t().createElement("a",c({className:n,role:"button",tabIndex:"0",onKeyPress:i},o(i)),a))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const u=p;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:t}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);}return e},f.apply(this,arguments)}function v(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function h(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t);}(s,e);var a,r,n,i,o=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return !1}}(),function(){var e,t=y(n);if(i){var a=y(this).constructor;e=Reflect.construct(t,arguments,a);}else e=t.apply(this,arguments);return h(this,e)});function s(e){var a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),C(m(a=o.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0});})),C(m(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;a.handleClick(e,null,t<r-1?t+1:void 0,{isNext:!0});})),C(m(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e);})),C(m(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e));})),C(m(a),"getEventListener",(function(e){return C({},a.props.eventListener,e)})),C(m(a),"handleClick",(function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,o=void 0!==i&&i,s=n.isNext,l=void 0!==s&&s,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,g=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=a.state.selected,f=a.props.onClick,v=r;if(f){var b=f({index:t,selected:d,nextSelectedPage:r,event:e,isPrevious:o,isNext:l,isBreak:p,isActive:g});if(!1===b)return;Number.isInteger(b)&&(v=b);}void 0!==v&&a.handlePageChange(v);})),C(m(a),"handleBreakClick",(function(e,t){var r=a.state.selected;a.handleClick(t,e,r<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0});})),C(m(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e});})),C(m(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e});})),C(m(a),"getElementPageRel",(function(e){var t=a.state.selected,r=a.props,n=r.nextPageRel,i=r.prevPageRel,o=r.selectedPageRel;return t-1===e?i:t===e?o:t+1===e?n:void 0})),C(m(a),"pagination",(function(){var e=[],r=a.props,n=r.pageRangeDisplayed,i=r.pageCount,o=r.marginPagesDisplayed,s=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,p=a.state.selected;if(i<=n)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else {var d=n/2,f=n-d;p>i-n/2?d=n-(f=i-p):p<n/2&&(f=n-(d=p));var v,b,h=function(e){return a.getPageElement(e)},m=[];for(v=0;v<i;v++){var y=v+1;y<=o||y>i-o||v>=p-d&&v<=p+(0===p&&n>1?f-1:f)?m.push({type:"page",index:v,display:h(v)}):s&&m.length>0&&m[m.length-1].display!==b&&(n>0||o>0)&&(b=t().createElement(u,{key:v,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,v),getEventListener:a.getEventListener}),m.push({type:"break",index:v,display:b}));}m.forEach((function(t,a){var r=t;"break"===t.type&&m[a-1]&&"page"===m[a-1].type&&m[a+1]&&"page"===m[a+1].type&&m[a+1].index-m[a-1].index<=2&&(r={type:"page",index:t.index,display:h(t.index)}),e.push(r.display);}));}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:r},a}return a=s,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==t&&t>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."));}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"));}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount,n=t.hrefAllControls;if(a)return n||e>=0&&e<r?a(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,o=r.activeClassName,s=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,r=a.disabledClassName,n=a.disabledLinkClassName,i=a.pageCount,o=a.className,s=a.containerClassName,l=a.previousLabel,c=a.previousClassName,p=a.previousLinkClassName,u=a.previousAriaLabel,d=a.prevRel,v=a.nextLabel,b=a.nextClassName,h=a.nextLinkClassName,m=a.nextAriaLabel,y=a.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(g(c)).concat(P?" ".concat(g(r)):""),N="".concat(g(b)).concat(k?" ".concat(g(r)):""),L="".concat(g(p)).concat(P?" ".concat(g(n)):""),O="".concat(g(h)).concat(k?" ".concat(g(n)):""),R=P?"true":"false",E=k?"true":"false";return t().createElement("ul",{className:o||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:x},t().createElement("a",f({className:L,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":R,"aria-label":u,rel:d},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:N},t().createElement("a",f({className:O,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":E,"aria-label":m,rel:y},this.getEventListener(this.handleNextPage)),v)))}}])&&v(a.prototype,r),Object.defineProperty(a,"prototype",{writable:!1}),s}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const k=P;})(),n})()));
	
} (reactPaginate));

var ReactPaginate = /*@__PURE__*/getDefaultExportFromCjs(reactPaginate.exports);

var img$R = "data:image/svg+xml,%3csvg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_815_976)'%3e%3cpath d='M9.52938 13L15.8823 7L9.52938 1' stroke='black' stroke-width='2'/%3e%3cpath d='M-3.67165e-05 7L15.3529 7' stroke='black' stroke-width='2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_815_976'%3e%3crect width='18' height='14' fill='white' transform='translate(18 14) rotate(180)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var img$Q = "data:image/svg+xml,%3csvg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_882_2220)'%3e%3cpath d='M8.47062 1L2.11768 7L8.47062 13' stroke='black' stroke-width='2'/%3e%3cpath d='M18 7H2.64709' stroke='black' stroke-width='2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_882_2220'%3e%3crect width='18' height='14' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var css_248z$V = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.item-container {\n  margin-bottom: 10px;\n}\n.item-container:last-child {\n  margin-bottom: 0;\n}\n\n.pagination {\n  padding: 0;\n  display: flex;\n  margin-top: 40px;\n  list-style-type: none;\n}\n.pagination .pagination__active a {\n  color: #8b9094;\n  border: 1px solid #8b9094;\n}\n.pagination .pagination__page-item {\n  margin-right: 30px;\n}\n.pagination .pagination__page-item:nth-last-child(-n+2) {\n  margin-right: 0;\n}\n.pagination .pagination__page-item:nth-last-child(2) {\n  margin-right: auto;\n}\n.pagination .pagination__page-item:nth-child(2) {\n  margin-left: auto;\n}\n.pagination .pagination__page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  border-radius: 50%;\n  cursor: pointer;\n  font: normal 400 24px e_Ukraine_Regular, sans-serif;\n}\n.pagination .pagination__prev-link {\n  margin-right: 90px;\n}\n.pagination .pagination__next-link {\n  margin-left: 90px;\n}\n\n@media (max-width: 992px) {\n  .subtitle {\n    font-size: 20px;\n    line-height: 26px;\n  }\n  .pagination .pagination__page-link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n    border-radius: 50%;\n    font: normal 400 16px e_Ukraine_Regular, sans-serif;\n  }\n  .pagination .pagination__page-item {\n    margin-right: 13px;\n  }\n  .pagination .pagination__next-button {\n    margin-left: 13px;\n  }\n  .pagination .pagination__prev-link {\n    margin-right: 0px;\n  }\n  .pagination .pagination__next-link {\n    margin-left: 0px;\n  }\n}";
styleInject(css_248z$V);

function Items(_a) {
    var currentItems = _a.currentItems;
    return (jsx$1(Fragment$1, { children: currentItems &&
            currentItems.map(function (item) { return (jsx$1("div", __assign({ className: "item-container" }, { children: item.element }), item.id)); }) }));
}
function Pagination(_a) {
    var itemsPerPage = _a.itemsPerPage, elements = _a.elements;
    var _b = useState(null), currentItems = _b[0], setCurrentItems = _b[1];
    var _c = useState(0), pageCount = _c[0], setPageCount = _c[1];
    var _d = useState(0), itemOffset = _d[0], setItemOffset = _d[1];
    useEffect(function () {
        var endOffset = itemOffset + itemsPerPage;
        setCurrentItems(elements.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(elements.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    var handlePageClick = function (event) {
        var newOffset = (event.selected * itemsPerPage) % elements.length;
        setItemOffset(newOffset);
    };
    return (jsxs(Fragment$1, { children: [jsx$1(Items, { currentItems: currentItems }), jsx$1(ReactPaginate, { nextLabel: jsx$1("img", { src: img$R, alt: "next page" }), onPageChange: handlePageClick, pageRangeDisplayed: 3, marginPagesDisplayed: 2, pageCount: pageCount, previousLabel: jsx$1("img", { src: img$Q, alt: "prev page" }), pageClassName: "pagination__page-item", pageLinkClassName: "pagination__page-link", previousClassName: cn("pagination__page-item", "pagination__prev-button"), previousLinkClassName: cn("pagination__page-link", "pagination__prev-link"), nextClassName: cn("pagination__page-item", "pagination__next-button"), nextLinkClassName: cn("pagination__page-link", "pagination__next-link"), breakLabel: "...", breakClassName: "pagination__page-item", breakLinkClassName: "pagination__page-link", containerClassName: "pagination", activeClassName: "pagination__active", renderOnZeroPageCount: null })] }));
}

var css_248z$U = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.checkbox {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  cursor: pointer;\n}\n.checkbox .checkbox__input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n  tab-index: -1;\n}\n.checkbox .checkbox__indicator {\n  position: relative;\n  min-width: 20px;\n  min-height: 20px;\n  border: 2px solid #d0d6db;\n  background: #ffffff;\n}\n.checkbox .checkbox__indicator:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  width: 15px;\n  height: 15px;\n  opacity: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.125 7.9375L8.15625 17.3125L19.875 0.90625' stroke='black' stroke-width='2'/%3E%3C/svg%3E\");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.checkbox .checkbox__info .checkbox__info-title {\n  font-size: 16px;\n  line-height: 23px;\n  color: #000000;\n}\n.checkbox .checkbox__info:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 30px;\n  background: #c6e9ca;\n}\n.checkbox .checkbox-warning {\n  color: #f44336;\n}\n.checkbox_active .checkbox__indicator:after {\n  opacity: 1;\n}\n.checkbox_disabled {\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n@media (max-width: 767px) {\n  .checkbox .checkbox__info .checkbox__info-title {\n    font-size: 16px;\n  }\n}";
styleInject(css_248z$U);

var Checkbox = function (_a) {
    var _b;
    var name = _a.name, title = _a.title, checked = _a.checked, disabled = _a.disabled, className = _a.className, errors = _a.errors, touched = _a.touched, errComponent = _a.errComponent, errClassName = _a.errClassName;
    return (jsxs("label", __assign({ className: cn("checkbox", className, (_b = {},
            _b["checkbox_active"] = checked,
            _b["checkbox_disabled"] = disabled,
            _b)) }, { children: [jsx$1(Field, { type: "checkbox", name: name, className: "checkbox__input" }), jsx$1("span", { className: "checkbox__indicator" }), jsx$1("div", __assign({ className: "checkbox__info" }, { children: jsx$1("span", __assign({ className: "checkbox__info-title" }, { children: title })) })), errors && touched && (jsx$1(ErrorMessage, { name: name, component: errComponent || "div", className: cn("checkbox-warning", errClassName) }))] })));
};

var img$P = "data:image/svg+xml,%3csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3953_936)'%3e %3cline x1='19.3638' y1='6.63679' x2='6.63592' y2='19.3647' stroke='black' stroke-width='2'/%3e %3cline x1='6.63582' y1='6.63664' x2='19.3637' y2='19.3646' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3953_936'%3e %3crect width='18' height='18' fill='white' transform='translate(13 0.272461) rotate(45)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var img$O = "data:image/svg+xml,%3csvg width='18' height='26' viewBox='0 0 18 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M15.5188 11.8141C15.3208 11.6161 14.8985 11.3398 14.4009 11.0673L12.9173 9.51461L11.2769 11.0673H10.8267L8.87886 8.24609C7.8083 8.25386 6.94037 9.128 6.94814 10.1986L4.18752 8.55895C3.55327 8.84154 3.10921 9.47502 3.10921 10.2149V10.9601L0.00390625 14.1958L0.0163273 15.8921L7.76716 24.2213C7.76716 24.2213 15.9325 12.3529 15.952 12.3761C15.8518 12.203 15.5537 11.8312 15.5188 11.8141Z' fill='%23EF9645'/%3e %3cpath d='M14.4024 1.56274C14.4024 0.703351 13.699 0 12.8396 0C11.9803 0 11.2769 0.703351 11.2769 1.56274V11.0688H14.4016V1.56274H14.4024ZM10.8274 11.0681V9.48126C10.8212 8.62497 10.1217 7.9356 9.26544 7.94181C8.40915 7.94802 7.71978 8.64749 7.72599 9.50377L7.73531 11.0688H10.8274V11.0681ZM1.48744 9.4735H1.61786C2.43999 9.4735 3.1053 10.1396 3.1053 10.9617V14.1959C3.1053 15.018 2.43999 15.6841 1.61786 15.6841H1.48744C0.665311 15.6841 0 15.018 0 14.1959V10.9617C0 10.1396 0.665311 9.4735 1.48744 9.4735ZM6.85806 11.7714L6.81458 11.8196C6.4466 12.2302 6.2106 12.7597 6.2106 13.3551C6.2106 13.404 6.22069 13.4506 6.22458 13.4987C6.25873 14.0251 6.46368 14.5018 6.78974 14.8759C6.73462 14.9761 6.6632 15.0646 6.58867 15.15C6.30454 15.4737 5.89774 15.6841 5.43428 15.6841C4.57721 15.6841 3.88163 14.9885 3.88163 14.1314V9.4735C3.88163 9.13114 3.99575 8.8175 4.18362 8.56054C4.4662 8.1747 4.9188 7.92085 5.43428 7.92085C6.29134 7.92085 6.98693 8.61643 6.98693 9.4735V11.6301C6.93957 11.6728 6.90231 11.7256 6.85806 11.7714Z' fill='%23FFDC5D'/%3e %3cpath d='M1.59968 16.4626C2.39464 16.4626 3.09411 16.0543 3.50168 15.4363C3.59716 15.5784 3.71206 15.7049 3.83627 15.8222C4.75622 16.6878 6.19164 16.6327 7.07122 15.7554C7.18922 15.6374 7.30645 15.5186 7.3965 15.3766L7.39417 15.3742C7.55021 15.4635 7.76215 15.6863 8.53848 15.6863H10.508C10.2208 15.9029 9.95837 16.17 9.71305 16.4626C8.75973 17.6015 8.15031 19.2621 8.15031 21.1206C8.15031 21.3349 8.32421 21.5088 8.53848 21.5088C8.75274 21.5088 8.92664 21.3349 8.92664 21.1206C8.92664 19.1425 9.66881 17.4136 10.772 16.4626C11.3402 15.9728 12.0017 15.6863 12.7112 15.6863C13.2647 15.7476 13.3688 14.91 12.8083 14.91H8.53848C7.68141 14.91 6.98582 14.2144 6.98582 13.3573C6.98582 12.5003 7.68141 11.8047 8.53848 11.8047H14.7491C15.4152 11.8047 16.0378 12.2674 16.2342 12.9032L17.0781 15.6863C17.158 15.9464 17.4499 17.1388 17.3971 17.3872C17.3971 21.1206 13.7515 25.0022 9.3148 25.0022C4.23996 25.0022 0.120004 20.9413 0.00976562 15.8928L0.0206341 15.9006C0.420442 16.246 0.933592 16.4626 1.50342 16.4626H1.59968Z' fill='%23FFDC5D'/%3e%3c/svg%3e";

var css_248z$T = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.notification {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 40px 50px 40px 20px;\n  margin-bottom: 40px;\n  max-width: 640px;\n  background-color: #fff4d7;\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n.notification h4 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.notification .notification-icon {\n  margin-right: 10px;\n}\n.notification_close-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  cursor: pointer;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.warning {\n  background-color: #feeceb;\n}\n\n@media (max-width: 992px) {\n  .notification {\n    padding: 40px 40px 40px 20px;\n  }\n}";
styleInject(css_248z$T);

var Reminder = function (_a) {
    var _b;
    var _c = _a.text, text = _c === void 0 ? "" : _c, className = _a.className, _d = _a.withButton, withButton = _d === void 0 ? false : _d, _e = _a.warning, warning = _e === void 0 ? false : _e;
    return (jsxs("div", __assign({ className: cn("notification", (_b = {}, _b["warning"] = warning, _b), className) }, { children: [jsx$1("img", { src: img$O, alt: "notification icon", className: "notification-icon" }), jsx$1("h4", { children: text }), withButton && (jsx$1("button", __assign({ className: "notification_close-btn" }, { children: jsx$1("img", { src: img$P, alt: "close" }) })))] })));
};

var img$N = "data:image/svg+xml,%3csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M12 10.9998C13.6569 10.9998 15 9.65661 15 7.99976C15 6.3429 13.6569 4.99976 12 4.99976C10.3431 4.99976 9 6.3429 9 7.99976C9 9.65661 10.3431 10.9998 12 10.9998Z' fill='black'/%3e %3cpath d='M23.0091 7.18437C21.7687 5.26625 20.1595 3.63687 18.3558 2.47203C16.3603 1.18203 14.1572 0.5 11.985 0.5C9.99187 0.5 8.03203 1.06953 6.15984 2.19266C4.25062 3.33781 2.52093 5.01078 1.01859 7.16468C0.84899 7.40811 0.755584 7.69646 0.750243 7.99309C0.744901 8.28972 0.827864 8.58125 0.988591 8.83062C2.22656 10.768 3.81984 12.3997 5.59546 13.5486C7.59468 14.8437 9.74624 15.5 11.985 15.5C14.1745 15.5 16.3823 14.8236 18.3694 13.5444C20.1722 12.3833 21.7781 10.7478 23.0137 8.81374C23.1689 8.57017 23.251 8.28718 23.2501 7.99837C23.2493 7.70956 23.1656 7.42705 23.0091 7.18437ZM12.0009 12.5C11.1109 12.5 10.2409 12.2361 9.50087 11.7416C8.76085 11.2471 8.18407 10.5443 7.84347 9.72207C7.50288 8.8998 7.41377 7.995 7.5874 7.12209C7.76103 6.24918 8.18962 5.44735 8.81895 4.81802C9.44829 4.18868 10.2501 3.7601 11.123 3.58646C11.9959 3.41283 12.9007 3.50195 13.723 3.84254C14.5453 4.18313 15.2481 4.75991 15.7425 5.49993C16.237 6.23995 16.5009 7.10998 16.5009 8C16.4996 9.19305 16.025 10.3369 15.1814 11.1805C14.3378 12.0241 13.194 12.4986 12.0009 12.5Z' fill='black'/%3e%3c/svg%3e";

var img$M = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.03116 3.00107L3 4.03223L19.9689 21.0011L21.0001 19.97L4.03116 3.00107Z' fill='%238B9094'/%3e %3cpath d='M12.1562 9.00391L14.9955 11.8431C14.956 11.1029 14.6442 10.4034 14.1201 9.87929C13.5959 9.35514 12.8965 9.04335 12.1562 9.00391Z' fill='%238B9094'/%3e %3cpath d='M11.8431 14.9955L9.00391 12.1562C9.04335 12.8965 9.35514 13.5959 9.87929 14.1201C10.4034 14.6442 11.1029 14.956 11.8431 14.9955Z' fill='%238B9094'/%3e %3cpath d='M12 16.4992C11.3077 16.4992 10.6247 16.3395 10.0043 16.0325C9.38376 15.7255 8.84246 15.2795 8.42247 14.7292C8.00248 14.1788 7.71513 13.539 7.58278 12.8595C7.45043 12.18 7.47664 11.4791 7.65937 10.8114L4.42172 7.57324C3.09937 8.78449 1.83937 10.3651 0.75 11.9992C1.98844 14.0617 3.6825 16.1823 5.44687 17.3982C7.47093 18.7923 9.67171 19.4992 11.9887 19.4992C13.255 19.5001 14.5117 19.2812 15.7031 18.8523L13.1902 16.3398C12.8024 16.4459 12.4021 16.4995 12 16.4992Z' fill='%238B9094'/%3e %3cpath d='M11.9996 7.5C12.6919 7.49997 13.3749 7.65966 13.9953 7.96665C14.6158 8.27364 15.1571 8.71966 15.5771 9.27C15.9971 9.82034 16.2845 10.4602 16.4168 11.1397C16.5492 11.8192 16.523 12.5201 16.3402 13.1878L19.6524 16.5C21.0188 15.2695 22.2807 13.6144 23.2496 12C22.013 9.96422 20.3012 7.84875 18.5068 6.61781C16.4574 5.2125 14.2641 4.5 11.9884 4.5C10.7361 4.5018 9.49429 4.72869 8.32227 5.16984L10.8118 7.65937C11.1988 7.55344 11.5983 7.49984 11.9996 7.5Z' fill='%238B9094'/%3e%3c/svg%3e";

var css_248z$S = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.form-field-wrapper {\n  position: relative;\n  width: 100%;\n  height: -moz-max-content;\n  height: max-content;\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n.form-field-wrapper .form-field {\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 8px;\n  background: transparent;\n  font: inherit;\n}\n.form-field-wrapper .form-field:focus {\n  outline: none;\n  -o-border-image: linear-gradient(68.94deg, #c3aab2 -4.77%, #99eecc 46.72%, #80c0c8 90.23%, #4b8bfa 134.46%) 1;\n     border-image: linear-gradient(68.94deg, #c3aab2 -4.77%, #99eecc 46.72%, #80c0c8 90.23%, #4b8bfa 134.46%) 1;\n}\n.form-field-wrapper .form-field:not(:-moz-placeholder-shown) ~ label {\n  top: -22px;\n  font-size: 12px;\n}\n.form-field-wrapper .form-field:focus ~ label, .form-field-wrapper .form-field:not(:placeholder-shown) ~ label {\n  top: -22px;\n  font-size: 12px;\n}\n.form-field-wrapper .form-field_no-borders {\n  border-bottom: 2px solid transparent !important;\n}\n.form-field-wrapper .form-field_no-borders:focus {\n  outline: none;\n  -o-border-image: none;\n     border-image: none;\n}\n.form-field-wrapper .form-field_error {\n  border-bottom: 2px solid #f44336;\n}\n.form-field-wrapper .form-field_error:focus {\n  outline: none;\n  -o-border-image: none;\n     border-image: none;\n}\n.form-field-wrapper .form-field_error ~ label {\n  color: #f44336;\n}\n.form-field-wrapper.password-input {\n  width: 100%;\n}\n.form-field-wrapper.password-input .password-input__eye {\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n  width: 22px;\n  height: 24px;\n}\n.form-field-wrapper .form-field-label {\n  position: absolute;\n  top: 1px;\n  left: 0;\n  transition: all 0.3s ease;\n  pointer-events: none;\n  font-size: 16px;\n  line-height: 21px;\n  color: #8b9094;\n}\n.form-field-wrapper input:-webkit-autofill,\n.form-field-wrapper input:-webkit-autofill:focus {\n  -webkit-transition: background-color 600000s 0s, color 600000s 0s;\n  transition: background-color 600000s 0s, color 600000s 0s;\n}\n.form-field-wrapper .form-field-error-message {\n  position: absolute;\n  bottom: -15px;\n  color: #f44336;\n  font-size: 10px;\n  line-height: 14px;\n}";
styleInject(css_248z$S);

var FormField = /** @class */ (function (_super) {
    __extends(FormField, _super);
    function FormField(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false
        };
        return _this;
    }
    FormField.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, placeholder = _a.placeholder, type = _a.type, className = _a.className, errors = _a.errors, touched = _a.touched, onBlur = _a.onBlur, noBorders = _a.noBorders, errComponent = _a.errComponent, errClassName = _a.errClassName;
        var handleEyeClick = function () {
            _this.setState({
                show: !_this.state.show
            });
        };
        switch (type) {
            case "password":
                return (jsxs("div", __assign({ className: cn("form-field-wrapper", "password-input", className) }, { children: [jsx$1(Field, { type: this.state.show ? "password" : "text", name: name, placeholder: " ", className: cn("form-field", {
                                "form-field_error": errors && touched && errors[name] && touched[name]
                            }, className), onBlur: onBlur, "data-testid": "input" }), jsx$1("img", { src: !this.state.show ? img$N : img$M, alt: "eye", className: "password-input__eye", onClick: handleEyeClick }), jsx$1("label", __assign({ className: "form-field-label", htmlFor: name }, { children: placeholder })), errors && touched && (jsx$1(ErrorMessage, { name: name, component: errComponent || "div", className: cn("form-field-error-message", errClassName) }))] })));
            default:
                return (jsxs("div", __assign({ className: cn("form-field-wrapper", className) }, { children: [jsx$1(Field, { type: type, name: name, placeholder: " ", className: cn("form-field", {
                                "form-field_error": errors && touched && errors[name] && touched[name],
                                "form-field_no-borders": noBorders
                            }), onBlur: onBlur, "data-testid": "input" }), jsx$1("label", __assign({ className: "form-field-label", htmlFor: name }, { children: placeholder })), errors && touched && (jsx$1(ErrorMessage, { name: name, component: errComponent || "div", className: cn("form-field-error-message", errClassName) }))] })));
        }
    };
    FormField.defaultProps = {
        type: "text",
        className: "",
        errors: undefined,
        touched: undefined
    };
    return FormField;
}(React__default.Component));

var css_248z$R = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.radio-btn {\n  position: relative;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  cursor: pointer;\n}\n.radio-btn p {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.radio-btn .radio-btn__input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  tab-index: -1;\n  opacity: 0;\n}\n.radio-btn .radio-btn__indicator {\n  position: relative;\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #000000;\n  border-radius: 50%;\n  background: #ffffff;\n}\n.radio-btn .radio-btn__indicator:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  opacity: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #000000;\n  background-size: cover;\n}\n.radio-btn .radio-btn__info {\n  display: flex;\n  flex-direction: column;\n}\n.radio-btn .radio-btn__info .radio-btn__info-title,\n.radio-btn .radio-btn__info .radio-btn__info-body,\n.radio-btn .radio-btn__info .radio-btn__info-footer,\n.radio-btn .radio-btn__info .radio-btn__info-warning {\n  z-index: 1;\n}\n.radio-btn .radio-btn__info .radio-btn__info-body,\n.radio-btn .radio-btn__info .radio-btn__info-footer,\n.radio-btn .radio-btn__info .radio-btn__info-warning {\n  margin-top: 11px;\n  font-size: 12px;\n  line-height: 16px;\n}\n.radio-btn .radio-btn__info .radio-btn__info-title {\n  font-size: 16px;\n  line-height: 23px;\n  color: #000000;\n}\n.radio-btn .radio-btn__info .radio-btn__info-body {\n  color: #d0d6db;\n}\n.radio-btn .radio-btn__info .radio-btn__info-footer {\n  color: #000000;\n}\n.radio-btn .radio-btn__info .radio-btn__info-warning {\n  color: #f6695e;\n}\n.radio-btn_active .radio-btn__indicator {\n  border: 2px solid #000000;\n}\n.radio-btn_active .radio-btn__indicator:hover {\n  border: 2px solid #000000;\n}\n.radio-btn_active .radio-btn__indicator:after {\n  opacity: 1;\n}\n.radio-btn_active .radio-btn__info:after {\n  display: inline-block;\n}\n.radio-btn_disabled {\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n@media (992px) {\n  .radio-btn .radio-btn__info .radio-btn__info-title {\n    font-size: 14px;\n    line-height: 23px;\n    color: #000000;\n  }\n}";
styleInject(css_248z$R);

var RadioButton = function (_a) {
    var _b;
    var name = _a.name, body = _a.body, value = _a.value, title = _a.title, footer = _a.footer, checked = _a.checked, warning = _a.warning, onClick = _a.onClick, disabled = _a.disabled, className = _a.className;
    return (jsxs("label", __assign({ className: cn("radio-btn", className, (_b = {},
            _b["radio-btn_active"] = checked,
            _b["radio-btn_disabled"] = disabled,
            _b)), onClick: onClick }, { children: [jsx$1("input", { className: "radio-btn__input", type: "radio", name: name, value: value, checked: checked, disabled: disabled, onChange: function () { } }), jsx$1("span", { className: "radio-btn__indicator" }), jsxs("div", __assign({ className: "radio-btn__info" }, { children: [title && jsx$1("p", __assign({ className: "radio-btn__info-title" }, { children: title })), body && jsx$1("p", __assign({ className: "radio-btn__info-body" }, { children: body })), footer && jsx$1("p", __assign({ className: "radio-btn__info-footer" }, { children: footer })), warning && (jsx$1("p", __assign({ className: "radio-btn__info-warning" }, { children: warning })))] }))] })));
};

var css_248z$Q = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.common-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -moz-max-content;\n  height: max-content;\n  border: none;\n  border-radius: 30px;\n  padding: 14px 40px;\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n  text-align: center;\n  cursor: pointer;\n}\n.common-button_image-container {\n  display: flex;\n  align-items: center;\n  height: 14px;\n  margin-right: 15px;\n}\n.common-button_image {\n  width: 100%;\n  height: 100%;\n}\n.common-button.common-button_round {\n  width: 48px;\n  height: 48px;\n  padding: 15px;\n  border-radius: 50%;\n}\n.common-button.common-button_round .common-button_image-container {\n  margin-right: 0px;\n}\n.common-button.common-button_filled {\n  padding: 16px 42px;\n  background: #000000;\n  color: #ffffff;\n}\n.common-button.common-button_filled:hover {\n  background: linear-gradient(68.94deg, #c3aab2 -4.77%, #99eecc 46.72%, #80c0c8 90.23%, #4b8bfa 134.46%);\n  color: #000000;\n}\n.common-button.common-button_filled.common-button_disabled {\n  color: #ffffff;\n  background-color: #d0d6db;\n  pointer-events: none;\n}\n.common-button.common-button_filled.common-button_large {\n  padding: 21px 60px;\n  font: normal 700 16px e_Ukraine_Bold, sans-serif;\n}\n.common-button.common-button_filled.common-button_round {\n  width: 48px;\n  height: 48px;\n  padding: 15px;\n  border-radius: 50%;\n}\n.common-button.common-button_filled.common-button_round .common-button_image-container {\n  margin-right: 0px;\n}\n.common-button.common-button_outlined {\n  color: #000000;\n  background-color: #ffffff;\n  border: 2px solid #000000;\n}\n.common-button.common-button_outlined:hover {\n  background: linear-gradient(to left, #ffffff, #ffffff) padding-box, linear-gradient(to right, #c3aab2, #99eecc, #80c0c8, #4b8bfa) border-box;\n  border-radius: 30px;\n  border: 2px solid transparent;\n}\n.common-button.common-button_outlined.common-button_disabled {\n  color: #d0d6db;\n  border-color: #d0d6db;\n  pointer-events: none;\n}\n.common-button.common-button_outlined.common-button_dashed {\n  border: 1.5px dashed #000000;\n}\n.common-button.common-button_outlined.common-button_dashed:hover {\n  background: linear-gradient(to left, #ffffff, #ffffff) padding-box, linear-gradient(to right, #c3aab2, #99eecc, #80c0c8, #4b8bfa) border-box;\n  border-radius: 30px;\n  border: 1.5px dashed transparent;\n}\n.common-button.common-button_outlined.common-button_large {\n  padding: 19px 59px;\n  font: normal 700 16px e_Ukraine_Bold, sans-serif;\n}\n.common-button.common-button_outlined.common-button_round {\n  width: 48px;\n  height: 48px;\n  padding: 15px;\n  border-radius: 50%;\n}\n.common-button.common-button_outlined.common-button_round .common-button_image-container {\n  margin-right: 0px;\n}";
styleInject(css_248z$Q);

var CommonButton = function (_a) {
    var _b;
    var _c = _a.type, type = _c === void 0 ? "button" : _c, label = _a.label, outlined = _a.outlined, disabled = _a.disabled, dashed = _a.dashed, className = _a.className, large = _a.large, image = _a.image, alt = _a.alt, round = _a.round, onClick = _a.onClick;
    return (jsxs("button", __assign({ "data-testid": "common-button", className: cn("common-button", className, (_b = {},
            _b["common-button_outlined"] = outlined,
            _b["common-button_dashed"] = dashed,
            _b["common-button_filled"] = !outlined,
            _b["common-button_disabled"] = disabled,
            _b["common-button_large"] = large,
            _b["common-button_round"] = round,
            _b)), onClick: onClick, type: type }, { children: [(image || round) && (jsx$1("div", __assign({ className: "common-button_image-container" }, { children: typeof image === "string" ? (jsx$1("img", { src: image, className: "common-button_image", alt: alt })) : (image) }))), label] })));
};

var img$L = "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3953_22668)'%3e %3cpath d='M1 9L6 16L17 1' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3953_22668'%3e %3crect width='18' height='18' fill='white' transform='translate(0 18) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var img$K = "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3953_22668)'%3e %3cpath d='M1 9L6 16L17 1' stroke='white' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3953_22668'%3e %3crect width='18' height='18' fill='white' transform='translate(0 18) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var img$J = "data:image/svg+xml,%3csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3953_936)'%3e %3cline x1='19.3638' y1='6.63679' x2='6.63592' y2='19.3647' stroke='white' stroke-width='2'/%3e %3cline x1='6.63582' y1='6.63664' x2='19.3637' y2='19.3646' stroke='white' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3953_936'%3e %3crect width='18' height='18' fill='white' transform='translate(13 0.272461) rotate(45)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$P = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.correct-button {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  height: 48px;\n  border: 1px solid black;\n  border-radius: 30px;\n  padding: 14px 40px;\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n  cursor: pointer;\n  background-color: #ecf8ed;\n}\n.correct-button:hover {\n  background-color: #c6e9ca;\n}\n.correct-button:focus {\n  background-color: green;\n}\n.correct-button_image-container {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n.correct-button_image {\n  width: 100%;\n  height: 100%;\n}\n.correct-button.correct-button_cancel {\n  background-color: #feeceb;\n}\n.correct-button.correct-button_cancel:hover {\n  background-color: #fcc7c3;\n}\n.correct-button.correct-button_cancel.correct-button_on-hold {\n  background-color: #f44336;\n  color: #ffffff;\n  border: none;\n}\n.correct-button.correct-button_on-hold {\n  background-color: #42b64e;\n  color: #ffffff;\n  border: none;\n}\n.correct-button.correct-button_round {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  padding: 0px;\n  border-radius: 50%;\n}\n.correct-button.correct-button_round .correct-button_image-container {\n  margin-right: 0px;\n}";
styleInject(css_248z$P);

var AnswerButton = function (_a) {
    var _b;
    var label = _a.label, cancel = _a.cancel, className = _a.className, round = _a.round, hold = _a.hold, onClick = _a.onClick;
    return (jsxs("button", __assign({ "data-testid": "answer-button", className: cn("correct-button", className, (_b = {},
            _b["correct-button_cancel"] = cancel,
            _b["correct-button_round"] = round,
            _b["correct-button_on-hold"] = hold,
            _b)), onClick: onClick }, { children: [jsx$1("div", __assign({ className: "correct-button_image-container" }, { children: jsx$1("img", { src: cancel
                        ? !hold
                            ? img$P
                            : img$J
                        : !hold
                            ? img$L
                            : img$K, className: "correct-button_image", alt: "button icon" }) })), !round && label] })));
};

var css_248z$O = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 30px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ffffff;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 22px;\n  width: 22px;\n  left: 4px;\n  top: 3px;\n  background-color: #8b9094;\n  transition: 0.4s;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n  border: 1px solid #000000;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\ninput:checked + .slider.round:before {\n  background-color: #35923e;\n}";
styleInject(css_248z$O);

var SwitchButton = function (_a) {
    var active = _a.active, onChange = _a.onChange, className = _a.className;
    return (jsxs("label", __assign({ "data-testid": "switch-button", className: cn("switch", className) }, { children: [jsx$1("input", { type: "checkbox", checked: active, onClick: onChange }), jsx$1("span", { className: "slider round" })] })));
};

var css_248z$N = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.bar-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.bar-wrapper .circle-progress-bar {\n  position: relative;\n  display: block;\n  height: 60px;\n  width: 60px;\n  border-radius: 100%;\n}\n.bar-wrapper .circle-progress-bar:after {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  content: attr(data-pct) \"%\";\n  border-radius: 100%;\n  font: normal 400 12px e_Ukraine_Regular, sans-serif;\n}\n.bar-wrapper .circle-progress-bar .circle-progress-bar__base {\n  stroke: #d0d6db;\n  stroke-width: 5px;\n  stroke-linecap: round;\n}\n.bar-wrapper .circle-progress-bar .circle-progress-bar__bar {\n  stroke: #42b64e;\n  stroke-width: 5px;\n  stroke-linecap: round;\n  transform-origin: center center;\n  transform: rotateY(180deg) rotateZ(-90deg);\n}";
styleInject(css_248z$N);

var RADIUS = 27;
var DASHES = 170;
var CircleProgressBar = function (_a) {
    var progress = _a.progress, className = _a.className;
    var _b = useState(0), percent = _b[0], setPercent = _b[1];
    var circumference = Math.PI * (RADIUS * 2);
    useEffect(function () {
        var p = progress;
        if (progress > 100)
            p = 100;
        if (progress < 0)
            p = 0;
        var percentToFill = ((100 - p) / 100) * circumference;
        setPercent(Math.round(percentToFill));
    }, [progress, circumference]);
    return (jsx$1("div", __assign({ "data-testid": "circle-progress-bar", className: cn("bar-wrapper", className) }, { children: jsx$1("div", __assign({ className: "circle-progress-bar", "data-pct": progress }, { children: jsxs("svg", __assign({ className: "circle-progress-bar__svg", width: "60", height: "60" }, { children: [jsx$1("circle", { className: "circle-progress-bar__base", r: RADIUS, cx: "30", cy: "30", fill: "transparent", strokeDasharray: DASHES, strokeDashoffset: "0" }), jsx$1("circle", { className: "circle-progress-bar__bar", r: RADIUS, cx: "30", cy: "30", fill: "transparent", strokeDasharray: DASHES, strokeDashoffset: percent })] })) })) })));
};

var propTypes = {exports: {}};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = reactIs$1.exports;
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs$1.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var COMMON_MIME_TYPES = new Map([
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    ['aac', 'audio/aac'],
    ['abw', 'application/x-abiword'],
    ['arc', 'application/x-freearc'],
    ['avif', 'image/avif'],
    ['avi', 'video/x-msvideo'],
    ['azw', 'application/vnd.amazon.ebook'],
    ['bin', 'application/octet-stream'],
    ['bmp', 'image/bmp'],
    ['bz', 'application/x-bzip'],
    ['bz2', 'application/x-bzip2'],
    ['cda', 'application/x-cdf'],
    ['csh', 'application/x-csh'],
    ['css', 'text/css'],
    ['csv', 'text/csv'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['epub', 'application/epub+zip'],
    ['gz', 'application/gzip'],
    ['gif', 'image/gif'],
    ['heic', 'image/heic'],
    ['heif', 'image/heif'],
    ['htm', 'text/html'],
    ['html', 'text/html'],
    ['ico', 'image/vnd.microsoft.icon'],
    ['ics', 'text/calendar'],
    ['jar', 'application/java-archive'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['js', 'text/javascript'],
    ['json', 'application/json'],
    ['jsonld', 'application/ld+json'],
    ['mid', 'audio/midi'],
    ['midi', 'audio/midi'],
    ['mjs', 'text/javascript'],
    ['mp3', 'audio/mpeg'],
    ['mp4', 'video/mp4'],
    ['mpeg', 'video/mpeg'],
    ['mpkg', 'application/vnd.apple.installer+xml'],
    ['odp', 'application/vnd.oasis.opendocument.presentation'],
    ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
    ['odt', 'application/vnd.oasis.opendocument.text'],
    ['oga', 'audio/ogg'],
    ['ogv', 'video/ogg'],
    ['ogx', 'application/ogg'],
    ['opus', 'audio/opus'],
    ['otf', 'font/otf'],
    ['png', 'image/png'],
    ['pdf', 'application/pdf'],
    ['php', 'application/x-httpd-php'],
    ['ppt', 'application/vnd.ms-powerpoint'],
    ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    ['rar', 'application/vnd.rar'],
    ['rtf', 'application/rtf'],
    ['sh', 'application/x-sh'],
    ['svg', 'image/svg+xml'],
    ['swf', 'application/x-shockwave-flash'],
    ['tar', 'application/x-tar'],
    ['tif', 'image/tiff'],
    ['tiff', 'image/tiff'],
    ['ts', 'video/mp2t'],
    ['ttf', 'font/ttf'],
    ['txt', 'text/plain'],
    ['vsd', 'application/vnd.visio'],
    ['wav', 'audio/wav'],
    ['weba', 'audio/webm'],
    ['webm', 'video/webm'],
    ['webp', 'image/webp'],
    ['woff', 'font/woff'],
    ['woff2', 'font/woff2'],
    ['xhtml', 'application/xhtml+xml'],
    ['xls', 'application/vnd.ms-excel'],
    ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    ['xml', 'application/xml'],
    ['xul', 'application/vnd.mozilla.xul+xml'],
    ['zip', 'application/zip'],
    ['7z', 'application/x-7z-compressed'],
    // Others
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['msg', 'application/vnd.ms-outlook']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}

var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 *
 * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
 * and a list of File objects will be returned.
 *
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
                return [2 /*return*/, getDataTransferFiles(evt.dataTransfer, evt.type)];
            }
            else if (isChangeEvt(evt)) {
                return [2 /*return*/, getInputFiles(evt)];
            }
            else if (Array.isArray(evt) && evt.every(function (item) { return 'getFile' in item && typeof item.getFile === 'function'; })) {
                return [2 /*return*/, getFsHandleFiles(evt)];
            }
            return [2 /*return*/, []];
        });
    });
}
function isDataTransfer(value) {
    return isObject(value);
}
function isChangeEvt(value) {
    return isObject(value) && isObject(value.target);
}
function isObject(v) {
    return typeof v === 'object' && v !== null;
}
function getInputFiles(evt) {
    return fromList(evt.target.files).map(function (file) { return toFileWithPath(file); });
}
// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
function getFsHandleFiles(handles) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(handles.map(function (h) { return h.getFile(); }))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files.map(function (file) { return toFileWithPath(file); })];
            }
        });
    });
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function () {
        var items, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return toFileWithPath(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    if (items === null) {
        return [];
    }
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return __spreadArray(__spreadArray([], __read(acc), false), __read((Array.isArray(files) ? flatten(files) : [files])), false); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject("".concat(item, " is not a File"));
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                var files, err_1, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = toFileWithPath(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}

var _default = function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = (file.type || '').toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
}; // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted

function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || _default(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }

  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}
/**
 *
 * @param {object} options
 * @param {File[]} options.files
 * @param {string|string[]} [options.accept]
 * @param {number} [options.minSize]
 * @param {number} [options.maxSize]
 * @param {boolean} [options.multiple]
 * @param {number} [options.maxFiles]
 * @param {(f: File) => FileError|FileError[]|null} [options.validator]
 * @returns
 */


function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple,
      maxFiles = _ref.maxFiles,
      validator = _ref.validator;

  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
/**
 * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
 * is supported by the browser.
 * @returns {boolean}
 */

function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
/**
 * Convert the `{accept}` dropzone prop to the
 * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
 *
 * @param {AcceptProp} accept
 * @returns {{accept: string[]}[]}
 */

function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function (_ref2) {
      var _ref3 = _slicedToArray$1(_ref2, 2),
          mimeType = _ref3[0],
          ext = _ref3[1];

      var ok = true;

      if (!isMIMEType(mimeType)) {
        console.warn("Skipped \"".concat(mimeType, "\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));
        ok = false;
      }

      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn("Skipped \"".concat(mimeType, "\" because an invalid file extension was provided."));
        ok = false;
      }

      return ok;
    }).reduce(function (agg, _ref4) {
      var _ref5 = _slicedToArray$1(_ref4, 2),
          mimeType = _ref5[0],
          ext = _ref5[1];

      return _objectSpread$1(_objectSpread$1({}, agg), {}, _defineProperty$1({}, mimeType, ext));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: acceptForPicker
    }];
  }

  return accept;
}
/**
 * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
 * @param {AcceptProp} accept
 * @returns {string}
 */

function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function (a, _ref6) {
      var _ref7 = _slicedToArray$1(_ref6, 2),
          mimeType = _ref7[0],
          ext = _ref7[1];

      return [].concat(_toConsumableArray$1(a), [mimeType], _toConsumableArray$1(ext));
    }, []) // Silently discard invalid entries as pickerOptionsFromAccept warns about these
    .filter(function (v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }

  return undefined;
}
/**
 * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is an abort exception.
 */

function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
/**
 * Check if v is a security error.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is a security error.
 */

function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
/**
 * Check if v is a MIME type string.
 *
 * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
 *
 * @param {string} v
 */

function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || /\w+\/[-+.\w]+/g.test(v);
}
/**
 * Check if v is a file extension.
 * @param {string} v
 */

function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}
/**
 * @typedef {Object.<string, string[]>} AcceptProp
 */

/**
 * @typedef {object} FileError
 * @property {string} message
 * @property {ErrorCode|string} code
 */

/**
 * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
 */

var _excluded = ["children"],
    _excluded2 = ["open"],
    _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
    _excluded4 = ["refKey", "onChange", "onClick"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, _excluded);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, _excluded2);

  useImperativeHandle(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return /*#__PURE__*/React__default.createElement(Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open: open
  })));
});
Dropzone.displayName = "Dropzone"; // Add default props for react-docgen

var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: propTypes.exports.func,

  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: propTypes.exports.objectOf(propTypes.exports.arrayOf(propTypes.exports.string)),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: propTypes.exports.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: propTypes.exports.bool,

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: propTypes.exports.bool,

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: propTypes.exports.bool,

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: propTypes.exports.bool,

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: propTypes.exports.bool,

  /**
   * Minimum file size (in bytes)
   */
  minSize: propTypes.exports.number,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: propTypes.exports.number,

  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: propTypes.exports.number,

  /**
   * Enable/disable the dropzone
   */
  disabled: propTypes.exports.bool,

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: propTypes.exports.func,

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: propTypes.exports.func,

  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: propTypes.exports.func,

  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: propTypes.exports.bool,

  /**
   * Set to true to focus the root element on render
   */
  autoFocus: propTypes.exports.bool,

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: propTypes.exports.func,

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: propTypes.exports.func,

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: propTypes.exports.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: propTypes.exports.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: propTypes.exports.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: propTypes.exports.func,

  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: propTypes.exports.func,

  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: propTypes.exports.func
};
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state.
 *
 * @typedef {object} DropzoneState
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */

/**
 * An object with the dropzone methods.
 *
 * @typedef {object} DropzoneMethods
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  acceptedFiles: [],
  fileRejections: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {import("./utils").AcceptProp} [props.accept] Set accepted file types.
 * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 * to open the file picker instead of using an `<input type="file">` click event.
 * @param {boolean} autoFocus Set to true to auto focus the root element.
 * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be an object with keys as a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) and the value an array of file extensions (optional).
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 * @param {(error: Error) => void} [props.onError]
 *
 * @returns {DropzoneState & DropzoneMethods}
 */

function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props),
      accept = _defaultProps$props.accept,
      disabled = _defaultProps$props.disabled,
      getFilesFromEvent = _defaultProps$props.getFilesFromEvent,
      maxSize = _defaultProps$props.maxSize,
      minSize = _defaultProps$props.minSize,
      multiple = _defaultProps$props.multiple,
      maxFiles = _defaultProps$props.maxFiles,
      onDragEnter = _defaultProps$props.onDragEnter,
      onDragLeave = _defaultProps$props.onDragLeave,
      onDragOver = _defaultProps$props.onDragOver,
      onDrop = _defaultProps$props.onDrop,
      onDropAccepted = _defaultProps$props.onDropAccepted,
      onDropRejected = _defaultProps$props.onDropRejected,
      onFileDialogCancel = _defaultProps$props.onFileDialogCancel,
      onFileDialogOpen = _defaultProps$props.onFileDialogOpen,
      useFsAccessApi = _defaultProps$props.useFsAccessApi,
      autoFocus = _defaultProps$props.autoFocus,
      preventDropOnDocument = _defaultProps$props.preventDropOnDocument,
      noClick = _defaultProps$props.noClick,
      noKeyboard = _defaultProps$props.noKeyboard,
      noDrag = _defaultProps$props.noDrag,
      noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling,
      onError = _defaultProps$props.onError,
      validator = _defaultProps$props.validator;

  var acceptAttr = useMemo(function () {
    return acceptPropAsAcceptAttr(accept);
  }, [accept]);
  var pickerTypes = useMemo(function () {
    return pickerOptionsFromAccept(accept);
  }, [accept]);
  var onFileDialogOpenCb = useMemo(function () {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = useMemo(function () {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  /**
   * @constant
   * @type {React.MutableRefObject<HTMLElement>}
   */

  var rootRef = useRef(null);
  var inputRef = useRef(null);

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };

  useEffect(function () {
    window.addEventListener("focus", onWindowFocus, false);
    return function () {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = useRef([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  useEffect(function () {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]); // Auto focus the root when autoFocus is true

  useEffect(function () {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }

    return function () {};
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = useCallback(function (e) {
    if (onError) {
      onError(e);
    } else {
      // Let the user know something's gone wrong if they haven't provided the onError cb.
      console.error(e);
    }
  }, [onError]);
  var onDragEnterCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && allFilesAccepted({
          files: files,
          accept: acceptAttr,
          minSize: minSize,
          maxSize: maxSize,
          multiple: multiple,
          maxFiles: maxFiles,
          validator: validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept: isDragAccept,
          isDragReject: isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function (e) {
        return onErrCb(e);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);

    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (hasFiles && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = useCallback(function (files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function (file) {
      var _fileAccepted = fileAccepted(file, acceptAttr),
          _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
          accepted = _fileAccepted2[0],
          acceptError = _fileAccepted2[1];

      var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
          _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
          sizeMatch = _fileMatchSize2[0],
          sizeError = _fileMatchSize2[1];

      var customErrors = validator ? validator(file) : null;

      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];

        if (customErrors) {
          errors = errors.concat(customErrors);
        }

        fileRejections.push({
          file: file,
          errors: errors.filter(function (e) {
            return e;
          })
        });
      }
    });

    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      // Reject everything and empty accepted files
      acceptedFiles.forEach(function (file) {
        fileRejections.push({
          file: file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }

    dispatch({
      acceptedFiles: acceptedFiles,
      fileRejections: fileRejections,
      type: "setFiles"
    });

    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }

    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }

    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        setFiles(files, event);
      }).catch(function (e) {
        return onErrCb(e);
      });
    }

    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]); // Fn for opening the file dialog programmatically

  var openFileDialog = useCallback(function () {
    // No point to use FS access APIs if context is not secure
    // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker

      var opts = {
        multiple: multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function (handles) {
        return getFilesFromEvent(handles);
      }).then(function (files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function (e) {
        // AbortError means the user canceled
        if (isAbort(e)) {
          onFileDialogCancelCb(e);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e)) {
          fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
          // Try using the input

          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e);
        }
      });
      return;
    }

    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = useCallback(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]); // Update focus state for the dropzone

  var onFocusCb = useCallback(function () {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = useCallback(function () {
    dispatch({
      type: "blur"
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = useCallback(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = useMemo(function () {
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
          role = _ref2.role,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onClick = _ref2.onClick,
          onDragEnter = _ref2.onDragEnter,
          onDragOver = _ref2.onDragOver,
          onDragLeave = _ref2.onDragLeave,
          onDrop = _ref2.onDrop,
          rest = _objectWithoutProperties(_ref2, _excluded3);

      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = useMemo(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
          onChange = _ref3.onChange,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, _excluded4);

      var inputProps = _defineProperty({
        accept: acceptAttr,
        multiple: multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}
/**
 * @param {DropzoneState} state
 * @param {{type: string} & DropzoneState} action
 * @returns {DropzoneState}
 */

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });

    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });

    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });

    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });

    case "setDraggedFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });

    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });

    case "reset":
      return _objectSpread({}, initialState);

    default:
      return state;
  }
}

function noop() {}

var css_248z$M = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.simple-file-loader {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 28px 110px;\n  margin-top: 35px;\n  margin-bottom: 35px;\n  border: 1px dashed #5c5f61;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.simple-file-loader h4 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.simple-file-loader .simple-file-loader__title {\n  margin-bottom: 10px;\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n}\n.simple-file-loader .simple-file-loader__formats {\n  font: normal 400 14px e_Ukraine_Regular, sans-serif;\n  color: #5c5f61;\n}\n.simple-file-loader .simple-file-loader__input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.simple-file-loader_uploaded {\n  padding: 28px 40px;\n  background-color: #e7eef3;\n}\n.simple-file-loader_uploaded .simple-file-loader__upload-formats {\n  color: black;\n}\n.simple-file-loader_uploaded .simple-file-loader__upload-title {\n  margin-bottom: 20px;\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n}\n.simple-file-loader:hover {\n  border-color: #ffffff;\n  background: linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(to right, #c3aab2, #99eecc, #80c0c8, #4b8bfa) border-box;\n}\n\n@media (max-width: 992px) {\n  .simple-file-loader {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding: 20px 16px;\n  }\n  .simple-file-loader .simple-file-loader__title {\n    margin-bottom: 15px;\n    font: normal 700 12px e_Ukraine_Bold, sans-serif;\n  }\n  .simple-file-loader .simple-file-loader__formats {\n    font: normal 400 12px e_Ukraine_Regular, sans-serif;\n  }\n}";
styleInject(css_248z$M);

var SimpleUploadFile = function (_a) {
    var className = _a.className, text = _a.text, uploadedText = _a.uploadedText;
    var _b = useDropzone(), acceptedFiles = _b.acceptedFiles, getRootProps = _b.getRootProps, getInputProps = _b.getInputProps;
    var files = acceptedFiles.map(function (file) { return (jsxs("li", { children: [file.path, " - ", file.size, " bytes"] }, file.path)); });
    return (jsxs("div", __assign({}, getRootProps({ className: "dropzone" }), { className: cn("simple-file-loader", files.length && "simple-file-loader_uploaded", className) }, { children: [jsx$1("h4", __assign({ className: "simple-file-loader__title" }, { children: files.length
                    ? "".concat(uploadedText || "Файд ключа:", " ").concat(files[0].props.children[0])
                    : text ||
                        "Перетягніть сюди файл ключа або оберіть його на своєму носієві" })), jsx$1("h4", __assign({ className: "simple-file-loader__formats" }, { children: files.length
                    ? "Якщо хочете перезавантажите, натиснить на це поле або перетяніть сюди файл"
                    : "Підтримуються формати: .jks, .pfx, .pk8, .zs2, .dat" })), jsx$1("input", __assign({}, getInputProps()))] })));
};

var img$I = "data:image/svg+xml,%3csvg width='25' height='26' viewBox='0 0 25 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3559_7800)'%3e %3cpath d='M6 13.4215L12 19.7744L18 13.4215' stroke='black' stroke-width='2'/%3e %3cpath d='M5 20.3916L12 20.3916L19 20.3916' stroke='black' stroke-width='2'/%3e %3cpath d='M12 6.39111L12 19.2441' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3559_7800'%3e %3crect width='18' height='14' fill='white' transform='translate(5 21.8916) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$L = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.load-file {\n  position: relative;\n  width: 160px;\n  height: 220px;\n  border-radius: 10px;\n  border: 2px dashed black;\n  cursor: pointer;\n}\n.load-file:hover {\n  border-color: white;\n  background: linear-gradient(white, white) padding-box, linear-gradient(to right, #c3aab2, #99eecc, #80c0c8, #4b8bfa) border-box;\n}\n.load-file .uplaoded-img {\n  max-height: calc(100% - 1px);\n  max-width: calc(100% - 0.5px);\n  margin: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.load-file .load-file__input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.load-file .upload-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.load-file .load-file__content-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 28px;\n  width: 160px;\n  height: 220px;\n}\n.load-file .load-file__content-wrapper .load-file__label {\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n  font-size: 14px;\n  text-align: center;\n}\n.load-file .load-file__content-wrapper .load-file__img {\n  width: 24px;\n  height: 30px;\n}\n.load-file .load-file__content-wrapper .load-file__background {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 100%;\n  border: none;\n  background-color: transparent;\n  border-radius: 10px;\n}\n\n.uploaded-file-container {\n  position: relative;\n  width: 160px;\n  height: 220px;\n  border: 2px solid #d0d6db;\n  border-radius: 0px;\n}\n.uploaded-file-container:hover {\n  border: 2px solid #d0d6db;\n}";
styleInject(css_248z$L);

var VisualUploadFile = function (_a) {
    var _b;
    var title = _a.title, backgroundImg = _a.backgroundImg, containerClassName = _a.containerClassName, contentClassName = _a.contentClassName, labelClassName = _a.labelClassName;
    var _c = useState(null), selectedImage = _c[0], setSelectedImage = _c[1];
    return (jsxs("div", __assign({ className: cn("load-file", (_b = {}, _b["uploaded-file-container"] = selectedImage, _b), containerClassName) }, { children: [selectedImage && (jsx$1("div", __assign({ className: "upload-container" }, { children: jsx$1("img", { alt: "not fount", src: URL.createObjectURL(selectedImage), className: "uplaoded-img" }) }))), jsx$1("input", { id: "load-file", type: "file", className: "load-file__input", onChange: function (event) {
                    var _a, _b;
                    setSelectedImage(((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.files) && ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.files[0]));
                } }), !selectedImage && (jsxs("div", __assign({ className: cn("load-file__content-wrapper", contentClassName) }, { children: [jsx$1("img", { src: img$I, alt: "download", className: "load-file__img" }), jsx$1("label", __assign({ htmlFor: "load-file", className: cn("load-file__label", labelClassName) }, { children: title })), backgroundImg && (jsx$1("img", { src: backgroundImg, alt: "", className: "load-file__background" }))] })))] })));
};

var css_248z$K = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.wrapper {\n  width: 600px;\n  padding: 40px;\n  box-sizing: border-box;\n  position: relative;\n}\n.wrapper .title {\n  margin: 0 0 40px;\n}\n.wrapper .decision-buttons {\n  margin-top: 40px;\n  display: flex;\n  gap: 20px;\n}\n.wrapper .close {\n  top: 15px;\n  right: 15px;\n  background-color: transparent;\n  border: 0;\n  position: absolute;\n}\n\n@media (max-width: 992px) {\n  .wrapper {\n    width: 100%;\n    padding: 40px 20px;\n  }\n  .wrapper .decision-buttons {\n    display: flex;\n    gap: 5px;\n    justify-content: space-between;\n  }\n}\n.ReactModal__Overlay {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: all 300ms ease-in-out;\n}\n\n.ReactModal__Overlay--after-open {\n  opacity: 1;\n  transform: translateY(0px);\n}\n\n.ReactModal__Overlay--before-close {\n  opacity: 0;\n  transform: translateY(20px);\n}";
styleInject(css_248z$K);

var Dialog = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, title = _a.title, _c = _a.acceptLabel, acceptLabel = _c === void 0 ? "Скасувати" : _c, _d = _a.declineLabel, declineLabel = _d === void 0 ? "Зберегти" : _d, onAccept = _a.onAccept, onDecline = _a.onDecline, children = _a.children, isOpen = _a.isOpen, afterOpen = _a.afterOpen;
    var customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            zIndex: 1000,
            borderRadius: 0,
            border: "none",
            backgroundColor: "#F5F5F5"
        }
    };
    Modal.setAppElement(document.querySelector("body"));
    return (jsx$1(Fragment$1, { children: jsx$1(Modal, __assign({ isOpen: isOpen, onAfterOpen: afterOpen, onRequestClose: onDecline, style: customStyles, contentLabel: "Example Modal", closeTimeoutMS: 300 }, { children: jsx$1("div", __assign({ "data-testid": "dialog", className: cn("wrapper", className) }, { children: jsxs("div", __assign({ className: "content" }, { children: [jsx$1(Title, { children: title, size: 24, className: "title" }), jsx$1("button", __assign({ onClick: onDecline, className: "close" }, { children: jsx$1(Close, {}) })), children, jsxs("div", __assign({ className: "decision-buttons" }, { children: [jsx$1(CommonButton, { onClick: onDecline, label: acceptLabel, outlined: true }), jsx$1(CommonButton, { onClick: onAccept, label: declineLabel })] }))] })) })) })) }));
};

var Portal = function (_a) {
    var children = _a.children, inlineStyles = _a.inlineStyles;
    var container = useState(function () { return document.createElement("div"); })[0];
    useEffect(function () {
        if (inlineStyles) {
            inlineStyles.forEach(function (style) {
                container.style.setProperty(style.property, style.value);
            });
        }
        document.body.appendChild(container);
        return function () {
            document.body.removeChild(container);
        };
    }, []);
    return ReactDOM.createPortal(children, container);
};

var css_248z$J = ".tooltip-wrapper {\n  display: inline-block;\n  position: relative;\n}\n\n.tooltip {\n  position: absolute;\n  top: 0;\n  padding: 9px 40px;\n  border: 1px solid black;\n  background-color: #ffffff;\n}\n.tooltip .tooltip__square {\n  position: absolute;\n  bottom: -7px;\n  left: 50%;\n  z-index: 1;\n  transform: translateX(-50%) rotateZ(45deg);\n  width: 10px;\n  height: 10px;\n  border-right: 1px solid #000000;\n  border-bottom: 1px solid #000000;\n  background-color: #ffffff;\n}";
styleInject(css_248z$J);

var Tooltip = function (_a) {
    var children = _a.children, content = _a.content, show = _a.show;
    var _b = useState(false), active = _b[0], setActive = _b[1];
    var tooltipWrapperRef = useRef(null);
    var tooltipRef = useRef(null);
    var showTip = function () {
        setActive(true);
    };
    var hideTip = function () {
        setActive(false);
    };
    var calcTooltipPosition = function () {
        var wrapper = tooltipWrapperRef.current;
        var tooltip = tooltipRef.current;
        if (tooltip && wrapper) {
            var wrapperCoords = wrapper.getBoundingClientRect();
            var wrapperTopCorner = wrapperCoords.top + window.scrollY;
            var wrapperLeftCorner = wrapperCoords.left + window.scrollX;
            tooltip.style.top = "".concat(wrapperTopCorner, "px");
            tooltip.style.left = "".concat(wrapperLeftCorner -
                Math.ceil(tooltip.offsetWidth / 2) +
                Math.ceil(wrapper.offsetWidth / 2), "px");
            tooltip.style.transform = "translateY(calc(-100% - 5px))";
        }
    };
    useEffect(function () {
        calcTooltipPosition();
    }, [active]);
    return (jsxs("div", __assign({ className: "tooltip-wrapper", onMouseEnter: showTip, onMouseLeave: hideTip, ref: tooltipWrapperRef }, { children: [children, (active || show) && (jsx$1(Portal, { children: jsxs("div", __assign({ className: "tooltip", ref: tooltipRef }, { children: [jsx$1("div", __assign({ className: "tooltip__content" }, { children: content })), jsx$1("div", { className: "tooltip__square" })] })) }))] })));
};

var css_248z$I = ".calendar-wrapper {\n  width: -moz-max-content;\n  width: max-content;\n  padding: 60px;\n  border: 2px solid #e7eef3;\n}\n.calendar-wrapper * {\n  box-sizing: border-box;\n}\n.calendar-wrapper .calendar-legend-wrapper {\n  display: flex;\n  gap: 20px;\n}\n.calendar-wrapper .calendar-legend-wrapper .calendar-legend {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n  color: #8b9094;\n}\n.calendar-wrapper .calendar-legend-wrapper .calendar-legend .calendar-legend__icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n.calendar-wrapper .calendar-legend-wrapper .calendar-legend .calendar-legend__icon_first {\n  background: #8ed395;\n}\n.calendar-wrapper .calendar-legend-wrapper .calendar-legend .calendar-legend__icon_second {\n  background: #42b64e;\n}\n.calendar-wrapper .calendar {\n  width: -moz-min-content;\n  width: min-content;\n  margin-top: 40px;\n}\n.calendar-wrapper .calendar .react-calendar__navigation {\n  display: flex;\n  justify-content: space-between;\n  gap: 70px;\n  padding-bottom: 21px;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-grow: 1;\n  border: none;\n  background: transparent;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__label :disabled {\n  pointer-events: all;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__label .calendar__month {\n  min-width: 130px;\n  font: normal 400 20px e_Ukraine_Regular, sans-serif;\n  color: #000000;\n  text-transform: capitalize;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__label .calendar__year {\n  width: 94px;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__label .calendar__year .select__control {\n  border-bottom: none;\n  padding-bottom: 0;\n  font: normal 400 20px e_Ukraine_Regular, sans-serif;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__label .calendar__year .select__control .select__value-container .select__placeholder {\n  color: #000000;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__arrow {\n  display: flex;\n  flex-grow: 1;\n  justify-content: flex-start;\n  border: none;\n  background-color: transparent;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__arrow:last-child {\n  justify-content: flex-end;\n}\n.calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__arrow .right-arrow {\n  transform: rotateZ(180deg);\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer {\n  display: flex;\n  gap: 60px;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view {\n  width: -moz-min-content;\n  width: min-content;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__weekdays .react-calendar__month-view__weekdays__weekday {\n  width: 50px;\n  max-width: 50px;\n  padding: 10px;\n  border-radius: 35px;\n  text-align: center;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__weekdays .react-calendar__month-view__weekdays__weekday abbr {\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n  text-decoration: none;\n  color: #8b9094;\n  text-transform: capitalize;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile {\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__long-events-start {\n  border-top-left-radius: 35px;\n  border-bottom-left-radius: 35px;\n  background: #c6e9ca;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__long-events-end {\n  border-top-right-radius: 35px;\n  border-bottom-right-radius: 35px;\n  background: #c6e9ca;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__long-events-end > :first-child:hover {\n  background: #c6e9ca;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__long-events-intermediate-part {\n  border-radius: 0;\n  background: #c6e9ca;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__long-events-intermediate-part > :first-child:hover {\n  background: #c6e9ca;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__tile-body {\n  display: inline-block;\n  width: 50px;\n  max-width: 50px;\n  padding: 10px;\n  border-radius: 35px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n  color: #000000;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__tile-body:hover {\n  background: #e7eef3;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__tile-body_secondary {\n  background: #8ed395;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__tile-body_secondary:hover {\n  background: #8ed395;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__tile-body_primary {\n  background: #42b64e;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__tile-body_primary:hover {\n  background: #42b64e;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile > *:first-child {\n  display: none;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__month-view__days__day--neighboringMonth abbr {\n  color: #d0d6db;\n}\n.calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__month-view__days__day--weekend abbr {\n  color: #8b9094;\n}\n\n.calendar-tooltip {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.calendar-tooltip .calendar-tooltip__title {\n  font: normal 400 12px e_Ukraine_Regular, sans-serif;\n}\n.calendar-tooltip .calendar-tooltip__body .calendar-tooltip__body-title {\n  padding-bottom: 5px;\n  font: normal 400 10px e_Ukraine_Regular, sans-serif;\n  color: #8b9094;\n}\n.calendar-tooltip .calendar-tooltip__body .calendar-tooltip__body-text {\n  font: normal 400 12px e_Ukraine_Regular, sans-serif;\n}\n.calendar-tooltip .calendar-tooltip__footer {\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n\n@media (max-width: 906px) {\n  .calendar-wrapper {\n    padding: 21px;\n  }\n  .calendar-wrapper .calendar-legend-wrapper {\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n  }\n  .calendar-wrapper .calendar-legend-wrapper .calendar-legend {\n    font-size: 11px;\n  }\n  .calendar-wrapper .calendar-legend-wrapper .calendar-legend .calendar-legend__icon {\n    width: 20px;\n    height: 20px;\n  }\n  .calendar-wrapper .calendar {\n    margin-top: 33px;\n  }\n  .calendar-wrapper .calendar .react-calendar__navigation {\n    gap: 0;\n  }\n  .calendar-wrapper .calendar .react-calendar__navigation .react-calendar__navigation__label {\n    justify-content: center;\n  }\n  .calendar-wrapper .calendar .react-calendar__viewContainer {\n    gap: 0;\n  }\n  .calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__weekdays .react-calendar__month-view__weekdays__weekday abbr {\n    font: normal 400 14px e_Ukraine_Regular, sans-serif;\n    text-decoration: none;\n    color: #8b9094;\n    text-transform: capitalize;\n  }\n  .calendar-wrapper .calendar .react-calendar__viewContainer .react-calendar__month-view .react-calendar__month-view__days .react-calendar__tile .react-calendar__tile-body {\n    font: normal 400 14px e_Ukraine_Regular, sans-serif;\n  }\n}";
styleInject(css_248z$I);

var CalendarView = function (props) {
    return (jsxs("div", __assign({ className: "calendar-wrapper" }, { children: [jsxs("div", __assign({ className: "calendar-legend-wrapper" }, { children: [jsxs("div", __assign({ className: "calendar-legend" }, { children: [jsx$1("div", { className: cn("calendar-legend__icon", "calendar-legend__icon_first") }), jsx$1("p", { children: "\u041F\u043E\u0447\u0430\u0442\u043E\u043A \u0433\u0440\u043E\u043C\u0430\u0434\u0441\u044C\u043A\u043E\u0433\u043E \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044F" })] })), jsxs("div", __assign({ className: "calendar-legend" }, { children: [jsx$1("div", { className: cn("calendar-legend__icon", "calendar-legend__icon_second") }), jsx$1("p", { children: "\u0413\u0440\u043E\u043C\u0430\u0434\u0441\u044C\u043A\u0435 \u0441\u043B\u0443\u0445\u0430\u043D\u043D\u044F" })] }))] })), jsx$1(Calendar$1, __assign({}, props))] })));
};

var CalendarContainer = function (_a) {
    var events = _a.events;
    var _b = useState(new Date()), startDate = _b[0], setStartDate = _b[1];
    var _c = useState(true), isDoubleView = _c[0], setIsDoubleView = _c[1];
    var _d = useState(), highlightedElements = _d[0], setHighlightedElements = _d[1];
    var renderSelectToNavigationBar = function () {
        var _a;
        var navDivider = document.getElementsByClassName("react-calendar__navigation__label__divider")[0];
        if (navDivider) {
            navDivider.innerHTML = "";
            (_a = navDivider.parentElement) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled");
            var selectOptions = [];
            var currentDate = startDate.getFullYear();
            for (var i = 0; i <= 10; i++) {
                selectOptions.push({
                    value: currentDate + i,
                    label: currentDate + i
                });
            }
            // @ts-ignore
            var root = ReactDOM$1.createRoot(navDivider);
            root.render(jsx$1(SelectInput, { className: "calendar__year", options: selectOptions, onChange: handleYearChange, placeholder: selectOptions[0].label.toString() }));
        }
    };
    var handleWindowResize = function () {
        if (document.body.clientWidth < 906) {
            setIsDoubleView(false);
        }
        else {
            setIsDoubleView(true);
            renderSelectToNavigationBar();
        }
    };
    useEffect(function () {
        var calendarWrapper = document.getElementsByClassName("calendar-wrapper")[0];
        if (calendarWrapper) {
            window.addEventListener("resize", handleWindowResize);
        }
        handleWindowResize();
        return function () {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    var handleYearChange = function (value) {
        var newYear = new Date().setFullYear(parseInt(value.value, 10));
        setStartDate(new Date(newYear));
    };
    var renderNavigationLabel = function (_a) {
        var label = _a.label;
        var currentMonth = label.split(" ")[0];
        return jsx$1("p", __assign({ className: "calendar__month" }, { children: currentMonth }));
    };
    var highlightEvent = function (e, event) {
        var elementsForHighlight = document.querySelectorAll("div[data-date='".concat(event.dateFrom.toLocaleDateString(), "']"));
        if (elementsForHighlight.length > 1) {
            for (var i = 0; i < elementsForHighlight.length; i++) {
                if (i === 0) {
                    elementsForHighlight[0].classList.add("react-calendar__long-events-start");
                    continue;
                }
                if (i === elementsForHighlight.length - 1) {
                    elementsForHighlight[i].classList.add("react-calendar__long-events-end");
                    continue;
                }
                elementsForHighlight[i].classList.add("react-calendar__long-events-intermediate-part");
            }
            setHighlightedElements(elementsForHighlight);
        }
    };
    var stopHighlightEvent = function () {
        if (highlightedElements && highlightedElements.length > 1) {
            for (var i = 0; i < highlightedElements.length; i++) {
                if (i === 0) {
                    highlightedElements[0].classList.remove("react-calendar__long-events-start");
                    continue;
                }
                if (i === highlightedElements.length - 1) {
                    highlightedElements[i].classList.remove("react-calendar__long-events-end");
                    continue;
                }
                highlightedElements[i].classList.remove("react-calendar__long-events-intermediate-part");
            }
        }
    };
    var renderTileContent = function (event, date, isIntermediate) {
        var _a;
        return (jsx$1(Tooltip, __assign({ content: jsxs("div", __assign({ className: "calendar-tooltip" }, { children: [jsx$1("p", __assign({ className: "calendar-tooltip__title" }, { children: event.description.title })), jsxs("div", __assign({ className: "calendar-tooltip__body" }, { children: [jsx$1("p", __assign({ className: "calendar-tooltip__body-title" }, { children: event.description.bodyTitle })), jsx$1("p", __assign({ className: "calendar-tooltip__body-text" }, { children: event.description.body }))] })), jsx$1("p", __assign({ className: "calendar-tooltip__footer" }, { children: event.description.footer }))] })) }, { children: jsx$1("div", __assign({ "data-date": event.dateFrom.toLocaleDateString(), onMouseEnter: function (e) { return highlightEvent(e, event); }, onMouseLeave: stopHighlightEvent }, { children: jsx$1("abbr", __assign({ "aria-label": date.toLocaleDateString(), className: cn("react-calendar__tile-body", (_a = {},
                        _a["react-calendar__tile-body_primary"] = !isIntermediate && event.grade === "PRIMARY",
                        _a["react-calendar__tile-body_secondary"] = !isIntermediate && event.grade === "SECONDARY",
                        _a)) }, { children: date.getDate() })) })) })));
    };
    var renderTile = function (_a) {
        var date = _a.date;
        if (!events) {
            return (jsx$1("abbr", __assign({ "aria-label": date.toLocaleDateString(), className: "react-calendar__tile-body" }, { children: date.getDate() })));
        }
        var Tile = undefined;
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            if (event_1.dateFrom.toLocaleDateString() === date.toLocaleDateString()) {
                Tile = renderTileContent(event_1, date, false);
            }
            else if (event_1.dateTo &&
                date.getTime() > event_1.dateFrom.getTime() &&
                date.getTime() < event_1.dateTo.getTime()) {
                Tile = renderTileContent(event_1, date, true);
            }
            else if (event_1.dateTo &&
                event_1.dateTo.toLocaleDateString() === date.toLocaleDateString()) {
                Tile = renderTileContent(event_1, date, true);
            }
        }
        return (jsx$1(Fragment$1, { children: Tile || (jsx$1("abbr", __assign({ "aria-label": date.toLocaleDateString(), className: "react-calendar__tile-body" }, { children: date.getDate() }))) }));
    };
    var handleDateChange = function (_a) {
        var value = _a.value, action = _a.action;
        var newYear = new Date();
        if (action === "prev") {
            newYear.setMonth(value.getMonth() - 1);
        }
        else if (action === "next") {
            newYear.setMonth(value.getMonth() + 1);
        }
        setStartDate(new Date(newYear));
    };
    return (jsx$1(CalendarView, { locale: "uk", events: events, value: startDate, minDetail: "month", maxDetail: "month", className: "calendar", onChange: setStartDate, tileContent: renderTile, activeStartDate: startDate, showDoubleView: isDoubleView, navigationLabel: renderNavigationLabel, onActiveStartDateChange: handleDateChange, nextLabel: jsx$1(CommonButton, { image: jsx$1(LongArrow, { className: "right-arrow" }), round: true, outlined: true }), prevLabel: jsx$1(CommonButton, { image: jsx$1(LongArrow, { className: "left-arrow" }), round: true, outlined: true }), next2Label: null, prev2Label: null }));
};

var img$H = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect x='0.144531' y='0.559082' width='24' height='24' rx='2' fill='%236ABD7C'/%3e %3cpath d='M5.04375 8.71531H7.66875V18.5591H5.04375V8.71531ZM4.94531 5.23718H7.76719V7.46843H4.94531V5.23718Z' fill='white'/%3e %3cpath d='M19.7109 5.43406V18.5591H17.3484L17.2172 17.1809C16.4297 18.2091 15.3688 18.7231 14.0344 18.7231C12.7656 18.7231 11.7484 18.2637 10.9828 17.345C10.2172 16.4262 9.83438 15.1903 9.83438 13.6372C9.83438 12.1059 10.2172 10.8809 10.9828 9.96218C11.7703 9.02156 12.7875 8.55124 14.0344 8.55124C15.2594 8.55124 16.2766 8.98874 17.0859 9.86374V5.43406H19.7109ZM14.8547 16.5575C15.5984 16.5575 16.1672 16.3059 16.5609 15.8028C16.9766 15.2778 17.1844 14.5559 17.1844 13.6372C17.1844 12.7184 16.9766 12.0075 16.5609 11.5044C16.1672 10.9794 15.5984 10.7169 14.8547 10.7169C14.1109 10.7169 13.5312 10.9794 13.1156 11.5044C12.7 12.0294 12.4922 12.7403 12.4922 13.6372C12.4922 14.5341 12.7 15.245 13.1156 15.77C13.5312 16.295 14.1109 16.5575 14.8547 16.5575Z' fill='white'/%3e%3c/svg%3e";

var css_248z$H = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$H);

var Id = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$H, alt: "id", className: className });
};

var img$G = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2212)'%3e %3cline x1='12.1445' y1='3.51343' x2='12.1445' y2='21.5134' stroke='black' stroke-width='2'/%3e %3cline x1='3.14453' y1='12.5134' x2='21.1445' y2='12.5134' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2212'%3e %3crect width='18' height='18' fill='white' transform='translate(3.14453 3.51343)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$G = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$G);

var Add = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$G, alt: "add", className: className });
};

var img$F = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2228)'%3e %3cline x1='4.14453' y1='14.5591' x2='19.1445' y2='14.5591' stroke='black' stroke-width='2'/%3e %3cline x1='4.14453' y1='10.5591' x2='19.1445' y2='10.5591' stroke='black' stroke-width='2'/%3e %3cpath d='M7.14453 5.78985C7.14453 5.78985 9.82263 4.55908 11.6445 4.55908C12.4819 4.55908 13.5 4.81905 14.356 5.10003C15.4667 5.46465 16.1445 6.53902 16.1445 7.70806V7.70806C16.1445 8.80191 15.5477 9.80861 14.5881 10.3336L9.03273 13.3724C7.86853 14.0092 7.14453 15.2452 7.14453 16.5722V16.5722C7.14453 18.1886 8.22575 19.624 9.78487 20.0505V20.0505C10.9907 20.3802 12.2717 20.3018 13.4282 19.8273L16.1445 18.7129' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2228'%3e %3crect width='15' height='20' fill='white' transform='translate(4.14453 2.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$F = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$F);

var Grn = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$F, alt: "UAH", className: className });
};

var img$E = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M14.1445 8.05908V5.55908H6.14453V15.5591H9.34453' stroke='black' stroke-width='2'/%3e %3crect x='10.1445' y='8.55908' width='8' height='10' stroke='black' stroke-width='2'/%3e %3crect x='10.1445' y='8.55908' width='8' height='10' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$E = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$E);

var Copy = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$E, alt: "copy", className: className });
};

var img$D = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2235)'%3e %3cpath d='M5.14453 7.55908L12.1445 13.5591L19.1445 7.55908' stroke='black' stroke-width='2'/%3e %3crect x='5.14453' y='7.55908' width='14' height='10' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2235'%3e %3crect width='16' height='12' fill='white' transform='translate(4.14453 6.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$D = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$D);

var Mail = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$D, alt: "mail", className: className });
};

var img$C = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='12.1445' cy='12.5591' r='12' fill='%23D0D6DB'/%3e %3cpath d='M11.207 14.8716H12.7695V14.7466C12.7695 14.2153 13.1445 13.7778 14.082 13.0903C15.4883 12.0591 16.0508 11.1528 16.0508 9.90283C16.0508 7.87158 14.4883 6.52783 12.1758 6.52783C9.76953 6.52783 8.11328 8.02783 7.89453 10.3403L9.61328 10.6841C9.76953 9.12158 10.707 8.12158 12.1445 8.12158C13.3633 8.12158 14.1445 8.84033 14.1445 10.0278C14.1445 10.8091 13.832 11.2466 12.7383 12.1528C11.457 13.1841 11.1445 13.7153 11.207 14.8716ZM10.832 18.5591H13.2695V16.1216H10.832V18.5591Z' fill='white'/%3e%3c/svg%3e";

var css_248z$C = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$C);

var Help = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$C, alt: "help", className: className });
};

var img$B = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2223)'%3e %3cpath d='M8.14453 10.1243V8.55908C8.14453 6.34994 9.93539 4.55908 12.1445 4.55908V4.55908C14.3537 4.55908 16.1445 6.34994 16.1445 8.55908V12.5591' stroke='black' stroke-width='2'/%3e %3cpath d='M6.14453 13.5591H18.1445V15.3369V17.5591V21.5591H6.14453V13.5591Z' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2223'%3e %3crect width='14' height='19' fill='white' transform='translate(5.14453 3.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$B = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$B);

var Lock = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$B, alt: "lock", className: className });
};

var img$A = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2248)'%3e %3cline x1='12.3672' y1='5.51343' x2='12.3672' y2='19.5134' stroke='black' stroke-width='2'/%3e %3cline x1='5.14453' y1='12.2912' x2='19.1445' y2='12.2912' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2248'%3e %3crect width='14' height='14' fill='white' transform='translate(5.14453 5.51343)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$A = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$A);

var Plus = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$A, alt: "plus", className: className });
};

var img$z = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2214)'%3e %3cpath d='M9.14453 4.51343L5.14453 8.51343L9.14453 12.5134' stroke='black' stroke-width='2'/%3e %3cpath d='M20.144 8.51343L4.79102 8.51343' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cg clip-path='url(%23clip1_20_2214)'%3e %3cpath d='M15.1445 20.5134L19.1445 16.5134L15.1445 12.5134' stroke='black' stroke-width='2'/%3e %3cpath d='M4.1451 16.5134L19.498 16.5134' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2214'%3e %3crect width='18' height='14' fill='white' transform='translate(2.14453 1.51343)'/%3e %3c/clipPath%3e %3cclipPath id='clip1_20_2214'%3e %3crect width='18' height='14' fill='white' transform='translate(22.1445 23.5134) rotate(-180)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$z = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$z);

var Swap = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$z, alt: "swap", className: className });
};

var img$y = "data:image/svg+xml,%3csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='10.1445' cy='10.5591' r='10' fill='%23F44336'/%3e %3cline x1='10.1445' y1='12.5591' x2='10.1445' y2='4.55908' stroke='white' stroke-width='2'/%3e %3cline x1='10.1445' y1='16.5591' x2='10.1445' y2='14.5591' stroke='white' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$y = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$y);

var Alert = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$y, alt: "alert", className: className });
};

var img$x = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2225)'%3e %3cline x1='12.1445' y1='9.55908' x2='12.1445' y2='13.5591' stroke='black' stroke-width='2'/%3e %3cline x1='15.1445' y1='13.5591' x2='11.1445' y2='13.5591' stroke='black' stroke-width='2'/%3e %3crect x='6.14453' y='6.55908' width='12' height='12' rx='6' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2225'%3e %3crect width='14' height='14' fill='white' transform='translate(5.14453 5.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$x = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$x);

var Clock = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$x, alt: "clock", className: className });
};

var img$w = "data:image/svg+xml,%3csvg width='26' height='27' viewBox='0 0 26 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2246)'%3e %3cline x1='19.5079' y1='7.14946' x2='6.77996' y2='19.8774' stroke='black' stroke-width='2'/%3e %3cline x1='6.78133' y1='7.14946' x2='19.5092' y2='19.8774' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2246'%3e %3crect width='18' height='18' fill='white' transform='translate(13.1445 0.785492) rotate(45)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$w = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$w);

var Close = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$w, alt: "close", className: className });
};

var img$v = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2238)'%3e %3cpath d='M9.00168 17.6189L14.1445 12.3557L9.00168 7.09258' stroke='black' stroke-width='2'/%3e %3cpath d='M5.14453 12.3552L14.1445 12.3552' stroke='black' stroke-width='2'/%3e %3cpath d='M14.1445 4.51343L18.1445 4.51343L18.1445 20.5134L14.1445 20.5134' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2238'%3e %3crect width='15' height='19' fill='white' transform='translate(20.1445 21.5134) rotate(180)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$v = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$v);

var Enter = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$v, alt: "enter", className: className });
};

var img$u = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M5.64555 5.51348L19.6443 5.51348L12.1439 18.5135L12.1449 10.0134L5.64555 5.51348Z' stroke='black' stroke-width='2'/%3e %3cpath d='M11.6435 10.0134L19.6435 5.51341' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$u = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$u);

var Plane = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$u, alt: "plane", className: className });
};

var img$t = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2242)'%3e %3crect x='5.14453' y='8.55908' width='14' height='7' stroke='black' stroke-width='2'/%3e %3crect x='9.14453' y='5.55908' width='6' height='3' stroke='black' stroke-width='2'/%3e %3crect x='8.14453' y='14.5591' width='8' height='4' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2242'%3e %3crect width='16' height='15' fill='white' transform='translate(4.14453 4.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$t = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$t);

var Print = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$t, alt: "print", className: className });
};

var img$s = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M14.1942 3.92511L19.7777 7.14875L14.3792 16.4991L10.1497 17.3776L8.79572 13.2755L14.1942 3.92511Z' stroke='black' stroke-width='2'/%3e %3cline x1='16.0242' y1='7.09064' x2='12.2566' y2='13.6164' stroke='black' stroke-width='2'/%3e %3cline x1='3.14453' y1='21.0625' x2='15.1445' y2='21.0625' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$s = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$s);

var Pencil = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$s, alt: "pencil", className: className });
};

var img$r = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2244)'%3e %3ccircle cx='12.1445' cy='12.5591' r='12' fill='%238B9094'/%3e %3cpath d='M7.14453 18.5591C7.14453 18.5591 6.14453 18.5591 6.14453 17.5591C6.14453 16.5591 7.14453 13.5591 12.1445 13.5591C17.1445 13.5591 18.1445 16.5591 18.1445 17.5591C18.1445 18.5591 17.1445 18.5591 17.1445 18.5591H7.14453ZM12.1445 12.5591C12.9402 12.5591 13.7032 12.243 14.2659 11.6804C14.8285 11.1178 15.1445 10.3547 15.1445 9.55908C15.1445 8.76343 14.8285 8.00037 14.2659 7.43776C13.7032 6.87515 12.9402 6.55908 12.1445 6.55908C11.3489 6.55908 10.5858 6.87515 10.0232 7.43776C9.4606 8.00037 9.14453 8.76343 9.14453 9.55908C9.14453 10.3547 9.4606 11.1178 10.0232 11.6804C10.5858 12.243 11.3489 12.5591 12.1445 12.5591Z' fill='white'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2244'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$r = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$r);

var Person = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$r, alt: "person", className: className });
};

var img$q = "data:image/svg+xml,%3csvg width='26' height='27' viewBox='0 0 26 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='13.1445' cy='13.5591' r='9' fill='white' stroke='black' stroke-width='2'/%3e %3cg clip-path='url(%23clip0_20_2249)'%3e %3cline x1='19.2364' y1='6.92305' x2='6.50848' y2='19.651' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2249'%3e %3crect width='18' height='18' fill='white' transform='translate(12.873 0.559082) rotate(45)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$q = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$q);

var Cancel = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$q, alt: "cancel", className: className });
};

var img$p = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2247)'%3e %3cpath d='M23.9111 10.2089H22.9445V10.1591H12.1445V14.9591H18.9263C17.9369 17.7533 15.2783 19.7591 12.1445 19.7591C8.16833 19.7591 4.94453 16.5353 4.94453 12.5591C4.94453 8.58288 8.16833 5.35908 12.1445 5.35908C13.9799 5.35908 15.6497 6.05148 16.9211 7.18248L20.3153 3.78828C18.1721 1.79088 15.3053 0.559082 12.1445 0.559082C5.51753 0.559082 0.144531 5.93208 0.144531 12.5591C0.144531 19.1861 5.51753 24.5591 12.1445 24.5591C18.7715 24.5591 24.1445 19.1861 24.1445 12.5591C24.1445 11.7545 24.0617 10.9691 23.9111 10.2089Z' fill='%23FFC107'/%3e %3cpath d='M1.52734 6.97368L5.46994 9.86508C6.53674 7.22388 9.12034 5.35908 12.1437 5.35908C13.9791 5.35908 15.6489 6.05148 16.9203 7.18248L20.3145 3.78828C18.1713 1.79088 15.3045 0.559082 12.1437 0.559082C7.53454 0.559082 3.53734 3.16128 1.52734 6.97368Z' fill='%23FF3D00'/%3e %3cpath d='M12.1439 24.5589C15.2435 24.5589 18.0599 23.3727 20.1893 21.4437L16.4753 18.3009C15.2301 19.248 13.7084 19.7602 12.1439 19.7589C9.02274 19.7589 6.37254 17.7687 5.37414 14.9913L1.46094 18.0063C3.44694 21.8925 7.48014 24.5589 12.1439 24.5589Z' fill='%234CAF50'/%3e %3cpath d='M23.9111 10.2089H22.9445V10.1591H12.1445V14.9591H18.9263C18.4531 16.2889 17.6005 17.451 16.4741 18.3017L16.4759 18.3005L20.1899 21.4433C19.9271 21.6821 24.1445 18.5591 24.1445 12.5591C24.1445 11.7545 24.0617 10.9691 23.9111 10.2089Z' fill='%231976D2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2247'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$p = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$p);

var Google = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$p, alt: "google", className: className });
};

var img$o = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2231)'%3e %3cpath d='M18.1445 11.984L12.1445 5.63107L6.14453 11.984' stroke='black' stroke-width='2'/%3e %3cpath d='M19.1445 19.5134L12.1445 19.5134L5.14453 19.5134' stroke='black' stroke-width='2'/%3e %3cpath d='M12.1445 19.0135L12.1445 6.16049' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2231'%3e %3crect width='18' height='14' fill='white' transform='translate(19.1445 3.51343) rotate(90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$o = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$o);

var Upload = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$o, alt: "upload", className: className });
};

var img$n = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M8.9161 10.0634C9.84206 9.34861 10.9734 8.95077 12.143 8.92868C13.3125 8.90659 14.4581 9.26141 15.4104 9.9407C16.3626 10.62 17.0711 11.5877 17.4309 12.7007C17.7907 13.8137 17.7829 15.0129 17.4085 16.1211C17.0341 17.2293 16.313 18.1877 15.3519 18.8544C14.3908 19.5211 13.2406 19.8609 12.0715 19.8235C10.9024 19.786 9.77631 19.3734 8.85981 18.6465C7.94331 17.9197 7.28503 16.9172 6.98228 15.7874' stroke='black' stroke-width='2'/%3e %3cpath d='M12.6322 12.4934L7.89301 9.75716L10.3252 5.54451' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$n = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$n);

var Reload = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$n, alt: "reload", className: className });
};

var img$m = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2211)'%3e %3cline x1='3.14453' y1='12.5134' x2='21.1445' y2='12.5134' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2211'%3e %3crect width='18' height='18' fill='white' transform='translate(3.14453 3.51343)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$m = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$m);

var Remove = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$m, alt: "remove", className: className });
};

var img$l = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2240)'%3e %3ccircle cx='11.1445' cy='11.5591' r='7' stroke='black' stroke-width='2'/%3e %3cline x1='15.8516' y1='16.852' x2='19.8516' y2='20.852' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2240'%3e %3crect width='18' height='18' fill='white' transform='translate(3.14453 3.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$l = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$l);

var Search = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$l, alt: "search", className: className });
};

var img$k = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2221)'%3e %3cpath d='M12.1445 15.5588C13.8014 15.5588 15.1445 14.2157 15.1445 12.5588C15.1445 10.902 13.8014 9.55884 12.1445 9.55884C10.4877 9.55884 9.14453 10.902 9.14453 12.5588C9.14453 14.2157 10.4877 15.5588 12.1445 15.5588Z' fill='%238B9094'/%3e %3cpath d='M23.1536 11.7435C21.9133 9.82533 20.3041 8.19596 18.5003 7.03111C16.5048 5.74111 14.3017 5.05908 12.1295 5.05908C10.1364 5.05908 8.17656 5.62861 6.30437 6.75174C4.39515 7.89689 2.66547 9.56986 1.16312 11.7238C0.993521 11.9672 0.900116 12.2555 0.894774 12.5522C0.889432 12.8488 0.972396 13.1403 1.13312 13.3897C2.37109 15.327 3.96437 16.9588 5.74 18.1077C7.73921 19.4028 9.89078 20.0591 12.1295 20.0591C14.3191 20.0591 16.5269 19.3827 18.5139 18.1034C20.3167 16.9424 21.9226 15.3069 23.1583 13.3728C23.3135 13.1293 23.3955 12.8463 23.3947 12.5575C23.3938 12.2686 23.3102 11.9861 23.1536 11.7435ZM12.1455 17.0591C11.2554 17.0591 10.3854 16.7952 9.6454 16.3007C8.90538 15.8062 8.3286 15.1034 7.98801 14.2812C7.64741 13.4589 7.5583 12.5541 7.73193 11.6812C7.90556 10.8083 8.33415 10.0064 8.96348 9.3771C9.59282 8.74776 10.3946 8.31918 11.2676 8.14555C12.1405 7.97191 13.0453 8.06103 13.8675 8.40162C14.6898 8.74222 15.3926 9.31899 15.8871 10.059C16.3815 10.799 16.6455 11.6691 16.6455 12.5591C16.6441 13.7521 16.1696 14.8959 15.3259 15.7395C14.4823 16.5832 13.3385 17.0577 12.1455 17.0591Z' fill='%238B9094'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2221'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$k = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$k);

var GrayEye = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$k, alt: "gray eye", className: className });
};

var img$j = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M23.8768 12.5589C23.8768 5.97654 18.6236 0.640503 12.1435 0.640503C5.66335 0.640503 0.410156 5.97654 0.410156 12.5589C0.410156 18.5077 4.70086 23.4384 10.3102 24.3325V16.004H7.331V12.5589H10.3102V9.93312C10.3102 6.94606 12.0619 5.29612 14.742 5.29612C16.0258 5.29612 17.3685 5.5289 17.3685 5.5289V8.46194H15.889C14.4314 8.46194 13.9768 9.38066 13.9768 10.3232V12.5589H17.231L16.7108 16.004H13.9768V24.3325C19.5861 23.4384 23.8768 18.5077 23.8768 12.5589Z' fill='%231877F2'/%3e %3cpath d='M16.7118 16.0043L17.232 12.5591H13.9779V10.3234C13.9779 9.38092 14.4324 8.4622 15.89 8.4622H17.3695V5.52916C17.3695 5.52916 16.0268 5.29639 14.743 5.29639C12.0629 5.29639 10.3112 6.94633 10.3112 9.93338V12.5591H7.33203V16.0043H10.3112V24.3327C10.9177 24.4293 11.5306 24.4777 12.1445 24.4775C12.7682 24.4775 13.3805 24.4279 13.9779 24.3327V16.0043H16.7118Z' fill='white'/%3e%3c/svg%3e";

var css_248z$j = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$j);

var Facebook = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$j, alt: "facebook", className: className });
};

var img$i = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_37_2180)'%3e %3cpath d='M12.1445 15.5588C13.8014 15.5588 15.1445 14.2157 15.1445 12.5588C15.1445 10.902 13.8014 9.55884 12.1445 9.55884C10.4877 9.55884 9.14453 10.902 9.14453 12.5588C9.14453 14.2157 10.4877 15.5588 12.1445 15.5588Z' fill='black'/%3e %3cpath d='M23.1536 11.7435C21.9133 9.82533 20.3041 8.19596 18.5003 7.03111C16.5048 5.74111 14.3017 5.05908 12.1295 5.05908C10.1364 5.05908 8.17656 5.62861 6.30437 6.75174C4.39515 7.89689 2.66547 9.56986 1.16312 11.7238C0.993521 11.9672 0.900116 12.2555 0.894774 12.5522C0.889432 12.8488 0.972396 13.1403 1.13312 13.3897C2.37109 15.327 3.96437 16.9588 5.74 18.1077C7.73921 19.4028 9.89078 20.0591 12.1295 20.0591C14.3191 20.0591 16.5269 19.3827 18.5139 18.1034C20.3167 16.9424 21.9226 15.3069 23.1583 13.3728C23.3135 13.1293 23.3955 12.8463 23.3947 12.5575C23.3938 12.2686 23.3102 11.9861 23.1536 11.7435ZM12.1455 17.0591C11.2554 17.0591 10.3854 16.7952 9.6454 16.3007C8.90538 15.8062 8.3286 15.1034 7.98801 14.2812C7.64741 13.4589 7.5583 12.5541 7.73193 11.6812C7.90556 10.8083 8.33415 10.0064 8.96348 9.3771C9.59282 8.74776 10.3946 8.31918 11.2676 8.14555C12.1405 7.97191 13.0453 8.06103 13.8675 8.40162C14.6898 8.74222 15.3926 9.31899 15.8871 10.059C16.3815 10.799 16.6455 11.6691 16.6455 12.5591C16.6441 13.7521 16.1696 14.8959 15.3259 15.7395C14.4823 16.5832 13.3385 17.0577 12.1455 17.0591Z' fill='black'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_37_2180'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$i = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$i);

var BlackEye = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$i, alt: "black eye", className: className });
};

var img$h = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2222)'%3e %3cline x1='9.14453' y1='5.55908' x2='9.14453' y2='9.55908' stroke='black' stroke-width='2'/%3e %3cline x1='16.1445' y1='5.55908' x2='16.1445' y2='9.55908' stroke='black' stroke-width='2'/%3e %3cline x1='9.14453' y1='11.5591' x2='11.1445' y2='11.5591' stroke='black' stroke-width='2'/%3e %3cline x1='14.1445' y1='11.5591' x2='16.1445' y2='11.5591' stroke='black' stroke-width='2'/%3e %3cline x1='9.14453' y1='15.5591' x2='11.1445' y2='15.5591' stroke='black' stroke-width='2'/%3e %3cline x1='14.1445' y1='15.5591' x2='16.1445' y2='15.5591' stroke='black' stroke-width='2'/%3e %3crect x='7.14453' y='8.55908' width='11' height='10' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2222'%3e %3crect width='13' height='14' fill='white' transform='translate(6.14453 5.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$h = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$h);

var Calendar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$h, alt: "calendar", className: className });
};

var img$g = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M6.14453 5.55908H14.6639L18.1445 9.90986V13.5591V21.5591H6.14453V5.55908Z' stroke='black' stroke-width='2'/%3e %3cline x1='8.14453' y1='16.5591' x2='12.1445' y2='16.5591' stroke='black' stroke-width='2'/%3e %3ccircle cx='14.6445' cy='18.0591' r='1.5' fill='black'/%3e %3cline x1='8.14453' y1='9.55908' x2='12.1445' y2='9.55908' stroke='black' stroke-width='2'/%3e %3cline x1='8.14453' y1='13.5591' x2='16.1445' y2='13.5591' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$g = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$g);

var Document = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$g, alt: "document", className: className });
};

var img$f = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2213)'%3e %3cpath d='M6.14453 13.0428L12.1445 19.3958L18.1445 13.0428' stroke='black' stroke-width='2'/%3e %3cpath d='M5.14453 20.0134L12.1445 20.0134L19.1445 20.0134' stroke='black' stroke-width='2'/%3e %3cpath d='M12.1445 6.01334L12.1445 18.8664' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2213'%3e %3crect width='18' height='14' fill='white' transform='translate(5.14453 21.5134) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$f = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$f);

var Download = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$f, alt: "download", className: className });
};

var img$e = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2219)'%3e %3cpath d='M17.1445 9.55908C17.1445 10.4879 16.828 11.6558 16.2854 12.9445C15.7497 14.2168 15.0275 15.5287 14.2929 16.7225C13.56 17.9135 12.8253 18.9697 12.2733 19.7287C12.2292 19.7894 12.1862 19.8482 12.1445 19.9049C12.1029 19.8482 12.0599 19.7894 12.0158 19.7287C11.4637 18.9697 10.7291 17.9135 9.99619 16.7225C9.26152 15.5287 8.53938 14.2168 8.00367 12.9445C7.46106 11.6558 7.14453 10.4879 7.14453 9.55908C7.14453 6.79766 9.38311 4.55908 12.1445 4.55908C14.906 4.55908 17.1445 6.79766 17.1445 9.55908Z' stroke='black' stroke-width='2'/%3e %3ccircle cx='12.1445' cy='9.55908' r='1' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2219'%3e %3crect width='18' height='14' fill='white' transform='translate(5.14453 21.5591) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$e = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$e);

var Location = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$e, alt: "location", className: className });
};

var img$d = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='12.1445' cy='12.5591' r='6' stroke='black' stroke-width='2'/%3e %3cline x1='12.1445' y1='15.5591' x2='12.1445' y2='9.55908' stroke='black' stroke-width='2'/%3e %3cline x1='9.14453' y1='12.5591' x2='15.1445' y2='12.5591' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$d = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$d);

var AddCircle = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$d, alt: "add circle", className: className });
};

var img$c = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2215)'%3e %3cpath d='M5.14453 12.5134L10.1445 19.5134L21.1445 4.51343' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2215'%3e %3crect width='18' height='18' fill='white' transform='translate(4.14453 21.5134) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$c = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$c);

var Checkmark = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$c, alt: "checkmark", className: className });
};

var img$b = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2243)'%3e %3cpath d='M11.6147 6.55908L5.26172 12.5591L11.6147 18.5591' stroke='black' stroke-width='2'/%3e %3cpath d='M21.144 12.5591H5.79102' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2243'%3e %3crect width='18' height='14' fill='white' transform='translate(3.14453 5.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$b = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$b);

var LongArrow = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$b, alt: "long arrow", className: className });
};

var img$a = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_6797)'%3e %3cpath d='M9.14511 18.5591L15.498 12.5591L9.14511 6.55908' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_6797'%3e %3crect width='18' height='14' fill='white' transform='translate(21.1445 19.5591) rotate(180)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$a = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$a);

var ShortArrow = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$a, alt: "short arrow", className: className });
};

var img$9 = "data:image/svg+xml,%3csvg width='25' height='31' viewBox='0 0 25 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M19.8594 22.559L12.1451 14.0884L4.4308 22.559' stroke='black' stroke-width='2'/%3e %3cpath d='M19.8594 16.559L12.1451 8.08838L4.4308 16.559' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$9 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$9);

var DoubleArrow = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$9, alt: "double arrow", className: className });
};

var img$8 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.59521 14.4673L11.5478 20.9985C11.7873 21.2235 11.9071 21.336 12.0482 21.3637C12.1118 21.3762 12.1772 21.3762 12.2408 21.3637C12.382 21.336 12.5017 21.2235 12.7412 20.9985L19.6939 14.4673C21.65 12.6297 21.8876 9.60568 20.2423 7.48515L19.933 7.08642C17.9648 4.54966 14.0142 4.9751 12.6312 7.87273C12.4358 8.28204 11.8532 8.28204 11.6579 7.87273C10.2749 4.9751 6.32425 4.54967 4.35607 7.08643L4.04672 7.48515C2.40148 9.60568 2.63903 12.6297 4.59521 14.4673Z' fill='black' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$8 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$8);

var FilledHeart = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return jsx$1("img", { src: img$8, alt: "filled heart", className: className });
};

var img$7 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2250)'%3e %3cpath d='M13.4386 0.559084C13.7914 0.559084 14.107 0.778684 14.2258 1.10748L15.073 3.45588C15.3766 3.53148 15.637 3.60708 15.8578 3.68628C16.099 3.77268 16.4098 3.90348 16.7938 4.08228L18.7666 3.03828C18.9276 2.95297 19.112 2.92218 19.292 2.95052C19.472 2.97886 19.6379 3.06482 19.765 3.19548L21.5002 4.98948C21.7306 5.22828 21.7954 5.57748 21.6658 5.88228L20.7406 8.05068C20.8942 8.33268 21.0166 8.57388 21.1102 8.77548C21.211 8.99508 21.3358 9.29748 21.4846 9.68748L23.641 10.6115C23.965 10.7495 24.1654 11.0735 24.1438 11.4203L23.9854 13.9103C23.9745 14.072 23.9165 14.2271 23.8183 14.3561C23.7202 14.4852 23.5864 14.5826 23.4334 14.6363L21.391 15.3623C21.3322 15.6443 21.271 15.8855 21.2062 16.0895C21.1017 16.4045 20.9823 16.7145 20.8486 17.0183L21.8746 19.2863C21.947 19.4456 21.9665 19.624 21.9302 19.7952C21.8939 19.9665 21.8038 20.1216 21.673 20.2379L19.7218 21.9803C19.5933 22.0945 19.4329 22.1668 19.2622 22.1874C19.0915 22.208 18.9186 22.1759 18.7666 22.0955L16.7554 21.0299C16.4407 21.1965 16.1161 21.3436 15.7834 21.4703L14.905 21.7991L14.125 23.9591C14.0672 24.1173 13.9629 24.2543 13.8258 24.3521C13.6888 24.45 13.5253 24.5042 13.357 24.5075L11.077 24.5591C10.9041 24.5636 10.7341 24.5145 10.5904 24.4184C10.4466 24.3224 10.3361 24.1841 10.2742 24.0227L9.35497 21.5903C9.04135 21.4831 8.73082 21.3671 8.42377 21.2423C8.17263 21.1336 7.92529 21.0163 7.68217 20.8907L5.40217 21.8651C5.25194 21.9292 5.08632 21.9482 4.92546 21.9199C4.76461 21.8915 4.61546 21.8171 4.49617 21.7055L2.80897 20.1227C2.68336 20.0054 2.59781 19.8515 2.56443 19.6829C2.53105 19.5143 2.55153 19.3394 2.62297 19.1831L3.60337 17.0471C3.47298 16.7941 3.3521 16.5363 3.24097 16.2743C3.11125 15.9536 2.9912 15.629 2.88097 15.3011L0.732972 14.6471C0.558373 14.5943 0.406085 14.4854 0.29976 14.3372C0.193434 14.189 0.139022 14.0098 0.144972 13.8275L0.228972 11.5223C0.234951 11.3719 0.281936 11.226 0.364846 11.1003C0.447755 10.9747 0.563434 10.8741 0.699372 10.8095L2.95297 9.72708C3.05737 9.34428 3.14857 9.04668 3.22897 8.82948C3.34218 8.53938 3.4679 8.25431 3.60577 7.97508L2.62897 5.91108C2.55484 5.75434 2.53233 5.57813 2.56468 5.40779C2.59702 5.23744 2.68255 5.08175 2.80897 4.96308L4.49377 3.37188C4.61188 3.26049 4.75966 3.1856 4.91932 3.15622C5.07899 3.12684 5.24375 3.14423 5.39377 3.20628L7.67137 4.14708C7.92337 3.97908 8.15137 3.84348 8.35777 3.73428C8.60377 3.60348 8.93257 3.46668 9.34657 3.31908L10.1386 1.10988C10.1971 0.948206 10.3042 0.808542 10.445 0.709962C10.5859 0.611381 10.7538 0.558691 10.9258 0.559084H13.4386ZM12.1738 8.98188C10.1734 8.98188 8.55217 10.5839 8.55217 12.5615C8.55217 14.5391 10.1734 16.1423 12.1738 16.1423C14.173 16.1423 15.7942 14.5391 15.7942 12.5615C15.7942 10.5839 14.1742 8.98188 12.1738 8.98188Z' fill='%238B9094'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2250'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$7 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$7);

var SettingsGray = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (jsx$1("img", { src: img$7, alt: "settings gray", className: className }));
};

var img$6 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2226)'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.14453 7.55908L6.14453 21.5591H18.1445L19.1445 7.55908H5.14453ZM7.29248 9.55908L8.00677 19.5591H16.2823L16.9966 9.55908H7.29248Z' fill='black'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.14453 18.3283L9.14453 10.7899L11.1445 10.7899L11.1445 18.3283L9.14453 18.3283Z' fill='black'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.1445 18.3283L13.1445 10.7899L15.1445 10.7899L15.1445 18.3283L13.1445 18.3283Z' fill='black'/%3e %3c/g%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.1445 5.55908H4.14453V3.55908H20.1445V5.55908Z' fill='black'/%3e %3cdefs%3e %3cclipPath id='clip0_20_2226'%3e %3crect width='14' height='14' fill='white' transform='translate(5.14453 7.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$6 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$6);

var TrashDefault = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (jsx$1("img", { src: img$6, alt: "trash default", className: className }));
};

var img$5 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.59521 14.4673L11.5478 20.9985C11.7873 21.2235 11.9071 21.336 12.0482 21.3637C12.1118 21.3762 12.1772 21.3762 12.2408 21.3637C12.382 21.336 12.5017 21.2235 12.7412 20.9985L19.6939 14.4673C21.65 12.6297 21.8876 9.60568 20.2423 7.48515L19.933 7.08642C17.9648 4.54966 14.0142 4.9751 12.6312 7.87273C12.4358 8.28204 11.8532 8.28204 11.6579 7.87273C10.2749 4.9751 6.32425 4.54967 4.35607 7.08643L4.04672 7.48515C2.40148 9.60568 2.63903 12.6297 4.59521 14.4673Z' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$5 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$5);

var OutlinedHeart = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (jsx$1("img", { src: img$5, alt: "outlined heart", className: className }));
};

var img$4 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M7.14453 8.55908H17.1445V19.5591C17.1445 20.1114 16.6968 20.5591 16.1445 20.5591H8.14453C7.59225 20.5591 7.14453 20.1114 7.14453 19.5591V8.55908Z' stroke='black' stroke-width='2'/%3e %3crect x='5.14453' y='4.55908' width='14' height='2' fill='black'/%3e %3crect x='9.14453' y='3.55908' width='6' height='2' fill='black'/%3e%3c/svg%3e";

var css_248z$4 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$4);

var TrashOutlined = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (jsx$1("img", { src: img$4, alt: "trash outlined", className: className }));
};

var img$3 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M12.148 10.1084C11.5129 10.1084 10.9182 10.3417 10.4679 10.7682C10.0197 11.1947 9.77123 11.758 9.77123 12.3595C9.77123 12.9611 10.0197 13.5243 10.4679 13.9508C10.9182 14.3753 11.5129 14.6107 12.148 14.6107C12.7831 14.6107 13.3778 14.3753 13.8281 13.9508C14.2762 13.5243 14.5247 12.9611 14.5247 12.3595C14.5247 11.758 14.2762 11.1947 13.8281 10.7682C13.6081 10.5583 13.3464 10.3919 13.0579 10.2786C12.7695 10.1653 12.4602 10.1075 12.148 10.1084ZM20.9052 14.8461L19.5161 13.7215C19.582 13.3393 19.616 12.949 19.616 12.5607C19.616 12.1724 19.582 11.7801 19.5161 11.3999L20.9052 10.2754C21.0102 10.1903 21.0853 10.0769 21.1206 9.95045C21.1559 9.82395 21.1496 9.69028 21.1028 9.56721L21.0837 9.5149C20.7014 8.50237 20.1285 7.56381 19.393 6.74471L19.3547 6.70246C19.2654 6.60298 19.1464 6.53147 19.0133 6.49736C18.8802 6.46324 18.7393 6.46812 18.6092 6.51134L16.8845 7.09274C16.2473 6.59785 15.5379 6.20757 14.769 5.93598L14.4355 4.22799C14.4104 4.09933 14.3445 3.98095 14.2466 3.8886C14.1487 3.79626 14.0235 3.7343 13.8875 3.71097L13.8302 3.70091C12.7257 3.51181 11.5618 3.51181 10.4573 3.70091L10.3999 3.71097C10.264 3.7343 10.1388 3.79626 10.0409 3.8886C9.943 3.98095 9.8771 4.09933 9.85194 4.22799L9.51635 5.94403C8.75474 6.21778 8.04525 6.60712 7.41571 7.09677L5.67828 6.51134C5.54821 6.46777 5.40723 6.46272 5.27407 6.49686C5.1409 6.531 5.02186 6.60271 4.93275 6.70246L4.89452 6.74471C4.16024 7.56468 3.58756 8.503 3.20381 9.5149L3.1847 9.56721C3.08912 9.81868 3.16771 10.1003 3.38223 10.2754L4.78832 11.412C4.72248 11.7902 4.69062 12.1765 4.69062 12.5587C4.69062 12.945 4.72248 13.3312 4.78832 13.7054L3.38648 14.8421C3.28154 14.9271 3.20644 15.0405 3.17116 15.167C3.13587 15.2934 3.14208 15.4271 3.18895 15.5502L3.20806 15.6025C3.59251 16.6144 4.15962 17.5499 4.89877 18.3727L4.937 18.4149C5.02632 18.5144 5.14537 18.5859 5.27846 18.62C5.41155 18.6542 5.55242 18.6493 5.68252 18.6061L7.41996 18.0206C8.05291 18.5135 8.75808 18.9038 9.5206 19.1734L9.85619 20.8894C9.88135 21.0181 9.94725 21.1364 10.0451 21.2288C10.143 21.3211 10.2682 21.3831 10.4042 21.4064L10.4615 21.4165C11.5769 21.6066 12.7191 21.6066 13.8344 21.4165L13.8918 21.4064C14.0277 21.3831 14.153 21.3211 14.2508 21.2288C14.3487 21.1364 14.4146 21.0181 14.4398 20.8894L14.7733 19.1814C15.5421 18.9078 16.2516 18.5196 16.8888 18.0247L18.6134 18.6061C18.7435 18.6496 18.8845 18.6547 19.0177 18.6205C19.1508 18.5864 19.2699 18.5147 19.359 18.4149L19.3972 18.3727C20.1364 17.5459 20.7035 16.6144 21.0879 15.6025L21.107 15.5502C21.1984 15.3007 21.1198 15.0211 20.9052 14.8461ZM12.148 15.8962C10.0856 15.8962 8.41399 14.313 8.41399 12.3595C8.41399 10.4061 10.0856 8.82286 12.148 8.82286C14.2104 8.82286 15.882 10.4061 15.882 12.3595C15.882 14.313 14.2104 15.8962 12.148 15.8962Z' fill='black'/%3e%3c/svg%3e";

var css_248z$3 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$3);

var SettingsBlack = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (jsx$1("img", { src: img$3, alt: "settings black", className: className }));
};

var img$2 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2239)'%3e %3cpath d='M4.17569 3.5599L3.14453 4.59106L20.1134 21.56L21.1446 20.5288L4.17569 3.5599Z' fill='%238B9094'/%3e %3cpath d='M12.3008 9.56299L15.14 12.4022C15.1006 11.662 14.7888 10.9625 14.2646 10.4384C13.7405 9.91422 13.041 9.60243 12.3008 9.56299Z' fill='%238B9094'/%3e %3cpath d='M11.9877 15.5548L9.14844 12.7156C9.18788 13.4558 9.49967 14.1553 10.0238 14.6794C10.548 15.2036 11.2474 15.5154 11.9877 15.5548Z' fill='%238B9094'/%3e %3cpath d='M12.1445 17.0585C11.4522 17.0585 10.7693 16.8988 10.1488 16.5919C9.52829 16.2849 8.98699 15.8388 8.567 15.2885C8.14702 14.7382 7.85967 14.0983 7.72731 13.4188C7.59496 12.7393 7.62117 12.0384 7.8039 11.3707L4.56625 8.13257C3.24391 9.34382 1.98391 10.9244 0.894531 12.5585C2.13297 14.621 3.82703 16.7416 5.5914 17.9576C7.61546 19.3516 9.81625 20.0585 12.1333 20.0585C13.3995 20.0594 14.6563 19.8405 15.8476 19.4116L13.3347 16.8991C12.9469 17.0053 12.5466 17.0589 12.1445 17.0585Z' fill='%238B9094'/%3e %3cpath d='M12.1441 8.05859C12.8364 8.05856 13.5194 8.21825 14.1399 8.52525C14.7604 8.83224 15.3017 9.27825 15.7217 9.82859C16.1416 10.3789 16.429 11.0187 16.5614 11.6983C16.6937 12.3778 16.6675 13.0787 16.4848 13.7464L19.7969 17.0586C21.1634 15.8281 22.4252 14.173 23.3941 12.5586C22.1576 10.5228 20.4457 8.40734 18.6513 7.17641C16.6019 5.77109 14.4087 5.05859 12.1329 5.05859C10.8806 5.06039 9.63882 5.28728 8.4668 5.72844L10.9563 8.21797C11.3434 8.11203 11.7429 8.05843 12.1441 8.05859Z' fill='%238B9094'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2239'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$2 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$2);

var GrayDisabledEye = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (jsx$1("img", { src: img$2, alt: "gray disabled eye", className: className }));
};

var img$1 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9.14453 12.5591L15.1445 6.55908L15.1445 18.5591L9.14453 12.5591Z' fill='black'/%3e%3c/svg%3e";

var css_248z$1 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$1);

var ShortFilledArrow = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (jsx$1("img", { src: img$1, alt: "short filled arrow", className: className }));
};

var img = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M6.14453 5.55908H14.6639L18.1445 9.90986V13.5591V21.5591H6.14453V5.55908Z' stroke='black' stroke-width='2'/%3e %3cline x1='2.61567' y1='8.67702' x2='21.6157' y2='18.8255' stroke='black' stroke-width='2'/%3e %3cline x1='2.75045' y1='18.9767' x2='21.6667' y2='8.68076' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z);

var CancelCertificate = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (jsx$1("img", { src: img, alt: "cancel certificate", className: className }));
};

export { AddCircle as AddCircleIcon, Add as AddIcon, Alert as AlertIcon, AnswerButton, BlackEye as BlackEyeIcon, CalendarContainer as Calendar, Calendar as CalendarIcon, CancelCertificate as CancelCertificateIcon, Cancel as CancelIcon, Checkbox, Checkmark as CheckmarkIcon, CircleProgressBar, Clock as ClockIcon, Close as CloseIcon, CommonButton, Copy as CopyIcon, Dialog, Document as DocumentIcon, DoubleArrow as DoubleArrowIcon, Download as DownloadIcon, Enter as EnterIcon, Expand, Facebook as FacebookIcon, FilledHeart as FilledHeartIcon, FormField, Google as GoogleIcon, GrayDisabledEye as GrayDisableEyeIcon, GrayEye as GrayEyeIcon, Grn as GrnIcon, Help as HelpIcon, Location as LocationIcon, Lock as LockIcon, LongArrow as LongArrowIcon, Mail as MailIcon, Navigation, Reminder as Notification, OutlinedHeart as OutlinedHeartIcon, Pagination, Pencil as PencilIcon, Person as PersonIcon, Plane as PlaneIcon, Plus as PlusIcon, Portal, Print as PrintIcon, RadioButton, Reload as ReloadIcon, Remove as RemoveIcon, Search as SearchIcon, SelectInput as Select, SettingsBlack as SettingsBlackIcon, SettingsGray as SettingsGrayIcon, ShortArrow as ShortArrowIcon, ShortFilledArrow as ShortFilledArrowIcon, SimpleUploadFile, Status, Swap as SwapIcon, SwitchButton, Title, Tooltip, TrashDefault as TrashDefaultIcon, TrashOutlined as TrashOutlinedIcon, Upload as UploadIcon, VisualUploadFile, Id as idIcon };
//# sourceMappingURL=index.esm.js.map
