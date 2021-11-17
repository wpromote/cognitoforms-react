"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Prepares a message for CognitoForms
 *
 * @param {string} event The event name (init, setCss, or prefill are supported)
 * @param {object} data Event data to send
 * @returns {string} Message to send with postMessage
 */
var getMessage = function getMessage(event, data) {
  return JSON.stringify({
    event: event,
    data: data
  });
};
/**
 * A CognitoForms iframe embed, with styling and prefills built-in!
 *
 * @param {object} params React params
 * @param {string} params.accountId           The CognitoForms account ID (the random text after /f/ in your embed code)
 * @param {string} params.formId              The form number (the integer in your embed code)
 * @param {number=} params.version						The version of CognitoForms to use
 * @param {string=} params.css                URL or CSS code to load in the form.
 * @param {object=} params.prefill            Object representing form fields to prefill on the page.
 * @param {React.Component} params.loading    React element to show when the form is loading.
 * @param {object=} params.style              Style to apply to the form.
 * @param {Function=} params.onSubmit         Function to run after the form is submitted.
 * @param {Function=} params.onPageChange     Function to run after the page changes.
 * @returns {React.Component}                 React component.
 */


var CognitoForm = function CognitoForm(_ref) {
  var accountId = _ref.accountId,
      formId = _ref.formId,
      css = _ref.css,
      prefill = _ref.prefill,
      loading = _ref.loading,
      style = _ref.style,
      onSubmit = _ref.onSubmit,
      onPageChange = _ref.onPageChange;
  var ref = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var _useReducer = (0, _react.useReducer)(function (v) {
    return !v;
  }, false),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      grow = _useReducer2[0],
      dispatchGrow = _useReducer2[1];

  (0, _react.useEffect)(function () {
    setLoaded(false);
    setHeight(100);
  }, [accountId, formId]);
  var iframeSrc = "https://www.cognitoforms.com/f/".concat(accountId, "?id=").concat(formId); // Event handlers for postMessage

  var listeners = {
    heightChanged: function heightChanged(_ref2) {
      var newHeight = _ref2.height;
      setHeight(newHeight);
    },
    navigate: function navigate(_ref3) {
      var url = _ref3.url;
      window.top.document.location.href = url;
    },
    updateHash: function updateHash(_ref4) {
      var hash = _ref4.hash;
      window.top.document.location.hash = hash;
    },
    fireEvent: function fireEvent(_ref5) {
      var name = _ref5.name,
          data = _ref5.data;
      if (name === 'afterSubmit.cognito') return onSubmit(data);
      if (name === 'afterNavigate.cognito') return onPageChange(data);
      return null;
    },
    domReady: function domReady(_, src) {
      src.postMessage(getMessage('init', {
        embedUrl: 'http://localhost/',
        entry: ''
      }), '*');
      src.postMessage(getMessage('setCss', {
        css: css
      }), '*');
      src.postMessage(getMessage('prefill', {
        entry: prefill
      }), '*');
      setTimeout(function () {
        return setLoaded(true);
      }, 1000);
    }
  };
  /**
   * Processes a postMessage from CognitoForms.
   */

  var onMessageRecieved = function onMessageRecieved(_ref6) {
    var data = _ref6.data,
        source = _ref6.source;
    if (!ref.current || source !== ref.current.contentWindow) return;
    if (typeof data !== 'string') return;
    var payload = JSON.parse(data);
    if (payload.event in listeners) listeners[payload.event](payload, source);
  }; // Register our message listener


  (0, _react.useEffect)(function () {
    if (!ref.current) return function () {};
    window.addEventListener('message', onMessageRecieved, false);
    return function () {
      return window.removeEventListener('message', onMessageRecieved);
    };
  }, [onSubmit, onPageChange]); // This is a dumb hack to fix the fact that CognitoForms doesn't dispatch resize events when the form changes size,
  // only when the window changes size. TODO: follow up whenever CognitoForms fixes this.

  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      return dispatchGrow();
    }, 4000);
    return function () {
      return clearInterval(interval);
    };
  }, []); // The CF form

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !loaded && loading, /*#__PURE__*/_react["default"].createElement("iframe", {
    src: iframeSrc,
    title: "Form",
    width: "100%",
    height: height + (grow ? 1 : 0),
    ref: ref,
    style: _objectSpread({
      height: !loaded ? "1px" : "".concat(height + (grow ? 1 : 0), "px"),
      marginBottom: "".concat(grow ? 0 : 1, "px"),
      opacity: !loaded ? 0 : 1,
      transition: 'all 0.25s ease-in-out'
    }, style || {})
  }));
};

CognitoForm.propTypes = {
  accountId: _propTypes["default"].string.isRequired,
  formId: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  css: _propTypes["default"].string,
  prefill: _propTypes["default"].object,
  loading: _propTypes["default"].element,
  style: _propTypes["default"].object,
  onSubmit: _propTypes["default"].func,
  onPageChange: _propTypes["default"].func
};
CognitoForm.defaultProps = {
  css: null,
  prefill: null,
  loading: null,
  style: {},
  onSubmit: function onSubmit() {},
  onPageChange: function onPageChange() {}
};
var _default = CognitoForm;
exports["default"] = _default;