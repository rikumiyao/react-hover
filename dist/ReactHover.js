"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Hover = _interopRequireDefault(require("./lib/Hover"));

var _Trigger = _interopRequireDefault(require("./lib/Trigger"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactHover =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactHover, _Component);

  function ReactHover(props) {
    var _this;

    _classCallCheck(this, ReactHover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactHover).call(this, props));
    _this.state = {
      children: _propTypes["default"].object,
      hoverComponentStyle: {
        display: 'none',
        position: 'fixed',
        zIndex: props.zIndex
      }
    };
    return _this;
  }

  _createClass(ReactHover, [{
    key: "renderItem",
    value: function renderItem(item, index) {
      if (item.type.name === 'Trigger' || item.props.type === 'trigger') {
        return _react["default"].createElement(_Trigger["default"], {
          key: index
        }, item);
      } else if (item.type.name === 'hover' || item.props.type === 'hover') {
        return _react["default"].createElement(_Hover["default"], {
          key: index
        }, item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hoverComponentStyle = this.state.hoverComponentStyle;
      var childrenWithProps = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          if (child.props) {
            if (child.type.name === 'Trigger' || child.props.type === 'trigger') {
              childrenWithProps.push(_react["default"].cloneElement(child, {
                setVisibility: this.setVisibility.bind(this),
                getCursorPos: this.getCursorPos.bind(this)
              }));
            } else if (child.type.name === 'Hover' || child.props.type === 'hover') {
              childrenWithProps.push(_react["default"].cloneElement(child, {
                styles: hoverComponentStyle,
                setVisibility: this.setVisibility.bind(this),
                getCursorPos: this.getCursorPos.bind(this)
              }));
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return _react["default"].createElement("div", null, childrenWithProps.map(function (item, index) {
        return _this2.renderItem(item, index);
      }));
    }
  }, {
    key: "setVisibility",
    value: function setVisibility(flag) {
      var hoverComponentStyle = this.state.hoverComponentStyle;
      var updatedStyles = null;

      if (flag) {
        updatedStyles = _objectSpread({}, hoverComponentStyle, {
          display: 'block'
        });
      } else {
        updatedStyles = _objectSpread({}, hoverComponentStyle, {
          display: 'none'
        });
      }

      this.setState({
        hoverComponentStyle: updatedStyles
      });
    }
  }, {
    key: "getCursorPos",
    value: function getCursorPos(e) {
      var cursorX = e.clientX;
      var cursorY = e.clientY;
      var _this$props$options = this.props.options,
          followCursor = _this$props$options.followCursor,
          shiftX = _this$props$options.shiftX,
          shiftY = _this$props$options.shiftY;
      var hoverComponentStyle = this.state.hoverComponentStyle;
      var updatedStyles = null;

      if (!followCursor) {
        return;
      }

      if (isNaN(shiftX)) {
        shiftX = 0;
      }

      if (isNaN(shiftY)) {
        shiftY = 0;
      }

      updatedStyles = _objectSpread({}, hoverComponentStyle, {
        top: cursorY + shiftY,
        left: cursorX + shiftX
      });
      this.setState({
        hoverComponentStyle: updatedStyles
      });
    }
  }]);

  return ReactHover;
}(_react.Component);

_defineProperty(ReactHover, "propTypes", {
  children: _propTypes["default"].array.isRequired,
  options: _propTypes["default"].object.isRequired,
  className: _propTypes["default"].string,
  zIndex: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
});

ReactHover.Trigger = _Trigger["default"];
ReactHover.Hover = _Hover["default"];
var _default = ReactHover;
exports["default"] = _default;
//# sourceMappingURL=ReactHover.js.map