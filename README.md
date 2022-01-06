
hello-reactjs
-----------

```
nodejs -> serves *.html with compiled bundle.js -> compiled by webpack
```

Webpack is a mega-multi-translator that works with all kinds of languages (or assets). 
For example, Webpack runs Babel as one of its jobs. 
Another example, Webpack can collect all .js inline CSS styles and bundle them into one.

we use Webpack (which uses Babel and other things) to compile JS code and 
many other assets into a few small bundle files that our users can download when they first load our webpage.

depends on https://github.com/lamatola-os/chat-server

```bash
rm -rf node_modules/ && rm package-lock.json 
npm install
```

[webpack bundler](https://webpack.js.org/concepts/) 
-----------

a module bundler which takes modules with dependencies and generates static assets
based on sources defined in `webpack.config.js`, in this example sources are `.JSX`

```bash
node_modules/.bin/webpack  --devtool eval-cheap-module-source-map --output-pathinfo
asset bundle.js 325 KiB [emitted] [minimized] [big] (name: chat) 1 related asset
modules by path ./node_modules/react/ 6.7 KiB
  ./node_modules/react/index.js 190 bytes [built] [code generated]
  ./node_modules/react/cjs/react.production.min.js 6.52 KiB [built] [code generated]
modules by path ./node_modules/react-dom/ 117 KiB
  ./node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ./node_modules/react-dom/cjs/react-dom.production.min.js 116 KiB [built] [code generated]
modules by path ./node_modules/scheduler/ 5.12 KiB
  ./node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ./node_modules/scheduler/cjs/scheduler.production.min.js 4.92 KiB [built] [code generated]
./src/client/components/chat.jsx 5.18 KiB [built] [code generated]
./node_modules/object-assign/index.js 2.06 KiB [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (325 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  chat (325 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.65.0 compiled with 4 warnings in 1119 ms
```

Webpack output
-----

```bash
$ ls -lh src/client/public/
total 664
-rw-r--r--  1 upa  upa   325K Jan  6 10:29 bundle.js
-rw-r--r--  1 upa  upa   1.3K Jan  6 10:27 bundle.js.LICENSE.txt

$ less src/client/public/bundle.js
(()=>{"use strict";var __webpack_modules__={412:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(294);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(935);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ChatComponent1 = function (_React$Component) {\n  _inherits(ChatComponent1, _React$Component);\n\n  function ChatComponent1() {\n    _classCallCheck(this, ChatComponent1);\n\n    return _possibleConstructorReturn(this, (ChatComponent1.__proto__ || Object.getPrototypeOf(ChatComponent1)).apply(this, arguments));\n  }\n\n  _createClass(ChatComponent1, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'p',\n        null,\n        'chat'\n      );\n    }\n  }]);\n\n  return ChatComponent1;\n}(_react2.default.Component);\n\nvar ChatComponent = function (_React$Component2) {\n  _inherits(ChatComponent, _React$Component2);\n\n  function ChatComponent(props) {\n    _classCallCheck(this, ChatComponent);\n\n    var _this2 = _possibleConstructorReturn(this, (ChatComponent.__proto__ || Object.getPrototypeOf(ChatComponent)).call(this, props));\n\n    _this2.state = {\n      message: '',\n      message1: '',\n      reply: ''\n    };\n\n    _this2.handleMessageChange = _this2.handleMessageChange.bind(_this2);\n    _this2.handleMessage1Change = _this2.handleMessage1Change.bind(_this2);\n    _this2.handleReplyChange = _this2.handleReplyChange.bind(_this2);\n    _this2.sendMessage = _this2.sendMessage.bind(_this2);\n    return _this2;\n  }\n\n  _createClass(ChatComponent, [{\n    key: 'handleMessageChange',\n    value: function handleMessageChange(event) {\n      this.setState({\n        message: event.target.value\n      });\n    }\n  }, {\n    key: 'handleMessage1Change',\n    value: function handleMessage1Change(event) {\n      this.setState({\n        message1: event.target.value\n      });\n    }\n  }, {\n    key: 'handleReplyChange',\n    value: function handleReplyChange(event) {\n      this.setState({\n        reply: 'test'\n      });\n    }\n  }, {\n    key: 'sendMessage',\n    value: function sendMessage(event) {\n      var _this3 = this;\n\n      console.log(this.state.message1 + ': ' + this.state.message1);\n      this.setState({\n        message: this.state.message1,\n        reply: 'hi, how can I help you?'\n      });\n      fetch(\"/chat/init\").then(function (res) {\n        return res.json();\n      }).then(function (result) {\n        console.log(result);\n        _this3.setState({\n          reply: result.message\n        });\n      }, function (error) {\n        console.log(error);\n        _this3.setState({\n          reply: 'something went wrong'\n        });\n      });\n      event.preventDefault();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'form',\n        { onSubmit: this.sendMessage },\n        _react2.default.createElement(\n          'label',\n          null,\n          'prayagupd:'\n        ),\n        _react2.default.createElement(\n          'span',\n          null,\n          this.state.message\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'label',\n          null,\n          'Agent:'\n        ),\n        _react2.default.createElement(\n          'span',\n          null,\n          this.state.reply\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement('input', { type: 'text', value: this.state.message1, onChange: this.handleMessage1Change }),\n          _react2.default.createElement('input', { type: 'submit', value: 'Send' })\n        )\n      );\n    }\n  }]);\n\n  return ChatComponent;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(ChatComponent, null), document.getElementById('chat-container'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDEyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTs7QUFNQTs7O0FBRUE7QUFBQTs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFZQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBb0JBOzs7O0FBakZBOztBQW9GQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLXJlYWN0anMvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY2hhdC5qc3g/Y2JlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIENoYXRDb21wb25lbnQxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPHA+Y2hhdDwvcD47XG4gIH1cbn1cblxuY2xhc3MgQ2hhdENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgIG1lc3NhZ2UxOiAnJyxcbiAgICAgICAgcmVwbHk6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlTWVzc2FnZUNoYW5nZSA9IHRoaXMuaGFuZGxlTWVzc2FnZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTWVzc2FnZTFDaGFuZ2UgPSB0aGlzLmhhbmRsZU1lc3NhZ2UxQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVSZXBseUNoYW5nZSA9IHRoaXMuaGFuZGxlUmVwbHlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlID0gdGhpcy5zZW5kTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuI
```

[babel js compiler](https://babeljs.io/docs/en/)
------------------------------------------------

- Babel is simply a translator, who translates your 'fancy' (ES6+) JS code into 'not-so-fancy' (ES5) ones that browser (front-end) 
or Node.js (back-end) understands, https://dev.to/getd/wtf-are-babel-and-webpack-explained-in-2-mins-43be
- make JSX(extension based on ES6) browser understandable, https://egghead.io/learn/react/beginners/wtf-is-jsx

```bash
npm install -g babel-core
npm install -g babel-repl

babel-repl
> [1, 2, 3].map((n) => n * 2);
[ 2, 4, 6 ]

>.exit
```

run in one shot:

```bash
node_modules/.bin/webpack  --devtool eval-cheap-module-source-map; npm start
```

![](chat.png)

TODO
----

- update components to compile

```
  entry: {                                                                                                                        
          index: APP_DIR + '/index.jsx'                                                                
  }, 
```

resources
---------

https://reactjs.org/docs/hello-world.html


tooling
--------

https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Bframeworks/react#install

add react to `~/.spacemacs`, 

```lisp
   dotspacemacs-configuration-layers                                                                
   '(                                                                                               
     markdown                                                                                       
     clojure                                                                                        
     javascript                                                                                     
     react                                                                                          
     html
```
