/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  * vue-router v2.5.3
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery;
}

function parseQuery(query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route);
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;if (query === void 0) query = {};
  var hash = ref.hash;if (hash === void 0) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key) {
    return String(a[key]) === String(b[key]);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

    var handler = function handler(e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}

function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this.$root._router;
    }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this.$root._route;
    }
  });

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var registerInstance = function registerInstance(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (index$1(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true });
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }
    return '';
  }
}

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) {
        return (/^\/?$/.test(child.path)
        );
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function compileRouteRegex(path) {
  var regex = index(path);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
      keys[key.name] = true;
    });
  }
  return regex;
}

function normalizePath(path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;

  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, "Route with name '" + name + "' does not exist");
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (_typeof(location.params) !== 'object') {
        location.params = {};
      }

      if (currentRoute && _typeof(currentRoute.params) === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

var positionStore = Object.create(null);

function setupScroll() {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return;
    }
    var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function step(index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;

  var current = this.current;
  var abort = function abort(err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;

  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));

  this.pending = route;
  var iterator = function iterator(hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function isValid() {
      return this$1.current === route;
    };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, // somehow flow cannot infer this is a function
instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    return fn.apply(this, arguments);
  };
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

/*  */

var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return;
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function pushHash(path) {
  window.location.hash = path;
}

function replaceHash(path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
}

/*  */

var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };

  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, "invalid mode: " + mode);
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return;
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function setupHashListener() {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '2.5.3';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

exports.default = VueRouter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.3.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vue = factory();
})(undefined, function () {
  'use strict';

  /*  */

  // these helpers produces better vm code in JS engines due to their
  // explicitness and function inlining

  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }
  /**
   * Check if value is primitive
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number';
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }

  var _toString = Object.prototype.toString;

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
    return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
  }

  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Remove an item from an array
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /([^-])([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
  });

  /**
   * Simple bind, faster than native
   */
  function bind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }
    // record original fn length
    boundFn._length = fn.length;
    return boundFn;
  }

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /**
   * Perform no operation.
   */
  function noop() {}

  /**
   * Always return false.
   */
  var no = function no() {
    return false;
  };

  /**
   * Return same value
   */
  var identity = function identity(_) {
    return _;
  };

  /**
   * Generate a static keys string from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        return JSON.stringify(a) === JSON.stringify(b);
      } catch (e) {
        // possible circular reference
        return a === b;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = ['component', 'directive', 'filter'];

  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'];

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /*  */

  var emptyObject = Object.freeze({});

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var formatComponentName = null; // work around flow check

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      var name = typeof vm === 'string' ? vm : typeof vm === 'function' && vm.options ? vm.options.name : vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;

      var file = vm._isVue && vm.$options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    var generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  /*  */

  function handleError(err, vm, info) {
    if (config.errorHandler) {
      config.errorHandler.call(null, err, vm, info);
    } else {
      {
        warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
      }
      /* istanbul ignore else */
      if (inBrowser && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err;
      }
    }
  }

  /*  */
  /* globals MutationObserver */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0;
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  /**
   * Defer a task to execute it asynchronously.
   */
  var nextTick = function () {
    var callbacks = [];
    var pending = false;
    var timerFunc;

    function nextTickHandler() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }

    // the nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore if */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();
      var logError = function logError(err) {
        console.error(err);
      };
      timerFunc = function timerFunc() {
        p.then(nextTickHandler).catch(logError);
        // in problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) {
          setTimeout(noop);
        }
      };
    } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]')) {
      // use MutationObserver where native Promise is not available,
      // e.g. PhantomJS IE11, iOS7, Android 4.4
      var counter = 1;
      var observer = new MutationObserver(nextTickHandler);
      var textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function timerFunc() {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
    } else {
      // fallback to setTimeout
      /* istanbul ignore next */
      timerFunc = function timerFunc() {
        setTimeout(nextTickHandler, 0);
      };
    }

    return function queueNextTick(cb, ctx) {
      var _resolve;
      callbacks.push(function () {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        timerFunc();
      }
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve, reject) {
          _resolve = resolve;
        });
      }
    };
  }();

  var _Set;
  /* istanbul ignore if */
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = function () {
      function Set() {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var arguments$1 = arguments;

      // avoid leaking arguments:
      // http://jsperf.com/closure-with-arguments
      var i = arguments.length;
      var args = new Array(i);
      while (i--) {
        args[i] = arguments$1[i];
      }
      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
          inserted = args;
          break;
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * By default, when a reactive property is set, the new value is
   * also converted to become reactive. However when passing down props,
   * we don't want to force conversion because the value may be a nested value
   * under a frozen data structure. Converting it would defeat the optimization.
   */
  var observerState = {
    shouldConvert: true,
    isSettingProps: false
  };

  /**
   * Observer class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i], obj[keys[i]]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value)) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1(obj, key, val, customSetter) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;

    var childOb = observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
          }
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if ("development" !== 'production' && customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set(target, key, val) {
    if (Array.isArray(target) && typeof key === 'number') {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (hasOwn(target, key)) {
      target[key] = val;
      return val;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {
    if (Array.isArray(target) && typeof key === 'number') {
      target.splice(key, 1);
      return;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (typeof childVal !== 'function') {
        "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(childVal.call(this), parentVal.call(this));
      };
    } else if (parentVal || childVal) {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal) {
    var res = Object.create(parentVal || null);
    return childVal ? extend(res, childVal) : res;
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal) {
    /* istanbul ignore if */
    if (!childVal) {
      return Object.create(parentVal || null);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key in childVal) {
      var parent = ret[key];
      var child = childVal[key];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key] = parent ? parent.concat(child) : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
    if (!childVal) {
      return Object.create(parentVal || null);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = Object.create(null);
    extend(ret, parentVal);
    extend(ret, childVal);
    return ret;
  };

  /**
   * Default strategy.
   */
  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      var lower = key.toLowerCase();
      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
      }
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    }
    options.props = res;
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child);
    normalizeDirectives(child);
    var extendsFrom = child.extends;
    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ("development" !== 'production' && warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // handle boolean props
    if (isType(Boolean, prop.type)) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldConvert = observerState.shouldConvert;
      observerState.shouldConvert = true;
      observe(value);
      observerState.shouldConvert = prevShouldConvert;
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ("development" !== 'production' && isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType.toLowerCase();
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isType(type, fn) {
    if (!Array.isArray(fn)) {
      return getType(fn) === getType(type);
    }
    for (var i = 0, len = fn.length; i < len; i++) {
      if (getType(fn[i]) === getType(type)) {
        return true;
      }
    }
    /* istanbul ignore next */
    return false;
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };
      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          warnNonPresent(target, key);
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.functionalContext = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
  };

  var prototypeAccessors = { child: {} };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode() {
    var node = new VNode();
    node.text = '';
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.isCloned = true;
    return cloned;
  }

  function cloneVNodes(vnodes) {
    var len = vnodes.length;
    var res = new Array(len);
    for (var i = 0; i < len; i++) {
      res[i] = cloneVNode(vnodes[i]);
    }
    return res;
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns) {
    function invoker() {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        for (var i = 0; i < fns.length; i++) {
          fns[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers
        return fns.apply(null, arguments);
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {
    var name, cur, old, event;
    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        add(event.name, cur, event.once, event.capture, event.passive);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      last = res[res.length - 1];
      //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          last.text += String(c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[res.length - 1] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function ensureCtor(comp, base) {
    return isObject(comp) ? base.extend(comp) : comp;
  }

  function resolveAsyncComponent(factory, baseCtor, context) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (isDef(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function forceRender() {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender();
        }
      });

      var reject = once(function (reason) {
        "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender();
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && isDef(c.componentOptions)) {
          return c;
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn, once$$1) {
    if (once$$1) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var this$1 = this;

      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var this$1 = this;

      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          this$1.$off(event[i$1], fn);
        }
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (arguments.length === 1) {
        vm._events[event] = null;
        return vm;
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i].apply(vm, args);
        }
      }
      return vm;
    };
  }

  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
    var slots = {};
    if (!children) {
      return slots;
    }
    var defaultSlot = [];
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.functionalContext === context) && child.data && child.data.slot != null) {
        var name = child.data.slot;
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children);
        } else {
          slot.push(child);
        }
      } else {
        defaultSlot.push(child);
      }
    }
    // ignore whitespace
    if (!defaultSlot.every(isWhitespace)) {
      slots.default = defaultSlot;
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment || node.text === ' ';
  }

  function resolveScopedSlots(fns, // see flow/vnode
  res) {
    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res;
  }

  /*  */

  var activeInstance = null;

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
        , vm.$options._parentElm, vm.$options._refElm);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // remove reference to DOM nodes (prevents leak)
      vm.$options._parentElm = vm.$options._refElm = null;
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(name + " render", startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    }

    vm._watcher = new Watcher(vm, updateComponent, noop);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      {
        observerState.isSettingProps = true;
      }
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        props[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      {
        observerState.isSettingProps = false;
      }
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, hook + " hook");
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ("development" !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdateHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdateHooks(queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options) {
    this.vm = vm;
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;
    if (this.user) {
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      }
    } else {
      value = this.getter.call(vm, vm);
    }
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      var dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    var this$1 = this;

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }
  };

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  var seenObjects = new _Set();
  function traverse(val) {
    seenObjects.clear();
    _traverse(val, seenObjects);
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || !Object.isExtensible(val)) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch) {
      initWatch(vm, opts.watch);
    }
  }

  var isReservedProp = {
    key: 1,
    ref: 1,
    slot: 1
  };

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        if (isReservedProp[key] || config.isReservedAttr(key)) {
          warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive$$1(props, key, value, function () {
          if (vm.$parent && !observerState.isSettingProps) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }observerState.shouldConvert = true;
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var i = keys.length;
    while (i--) {
      if (props && hasOwn(props, keys[i])) {
        "development" !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(keys[i])) {
        proxy(vm, "_data", keys[i]);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    try {
      return data.call(vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed(vm, computed) {
    var watchers = vm._computedWatchers = Object.create(null);

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      {
        if (getter === undefined) {
          warn("No getter function has been defined for computed property \"" + key + "\".", vm);
          getter = noop;
        }
      }
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = createComputedGetter(key);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
      {
        if (methods[key] == null) {
          warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
        }
        if (props && hasOwn(props, key)) {
          warn("method \"" + key + "\" has already been defined as a prop.", vm);
        }
      }
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, key, handler) {
    var options;
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    vm.$watch(key, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
      return this._props;
    };
    {
      dataDef.set = function (newData) {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  /*  */

  function initProvide(vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      // isArray here
      var isArray = Array.isArray(inject);
      var result = Object.create(null);
      var keys = isArray ? inject : hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = isArray ? key : inject[key];
        var source = vm;
        while (source) {
          if (source._provided && provideKey in source._provided) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
      }
      return result;
    }
  }

  /*  */

  function createFunctionalComponent(Ctor, propsData, data, context, children) {
    var props = {};
    var propOptions = Ctor.options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || {});
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var _context = Object.create(context);
    var h = function h(a, b, c, d) {
      return createElement(_context, a, b, c, d, true);
    };
    var vnode = Ctor.options.render.call(null, h, {
      data: data,
      props: props,
      children: children,
      parent: context,
      listeners: data.on || {},
      injections: resolveInject(Ctor.options.inject, context),
      slots: function slots() {
        return resolveSlots(children, context);
      }
    });
    if (vnode instanceof VNode) {
      vnode.functionalContext = context;
      vnode.functionalOptions = Ctor.options;
      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }
    return vnode;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  // hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating, parentElm, refElm) {
      if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      } else if (vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },

    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    if (isUndef(Ctor.cid)) {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
      if (Ctor === undefined) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return;
      }
    }

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    data = data || {};

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners
      data = {};
    }

    // merge component management hooks onto the placeholder node
    mergeHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm, refElm) {
    var vnodeComponentOptions = vnode.componentOptions;
    var options = {
      _isComponent: true,
      parent: parent,
      propsData: vnodeComponentOptions.propsData,
      _componentTag: vnodeComponentOptions.tag,
      _parentVnode: vnode,
      _parentListeners: vnodeComponentOptions.listeners,
      _renderChildren: vnodeComponentOptions.children,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnodeComponentOptions.Ctor(options);
  }

  function mergeHooks(data) {
    if (!data.hook) {
      data.hook = {};
    }
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var fromParent = data.hook[key];
      var ours = componentVNodeHooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
  }

  function mergeHook$1(one, two) {
    return function (a, b, c, d) {
      one(a, b, c, d);
      two(a, b, c, d);
    };
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    if (isDef(on[event])) {
      on[event] = [data.model.callback].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (isDef(vnode)) {
      if (ns) {
        applyNS(vnode, ns);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      return;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && isUndef(child.ns)) {
          applyNS(child, ns);
        }
      }
    }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (isDef(ret)) {
      ret._isVList = true;
    }
    return ret;
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        extend(props, bindObject);
      }
      return scopedSlotFn(props) || fallback;
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes && "development" !== 'production') {
        slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
        slotNodes._rendered = true;
      }
      return slotNodes || fallback;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  /*  */

  /**
   * Runtime helper for checking keyCodes from config.
   */
  function checkKeyCodes(eventKeyCode, key, builtInAlias) {
    var keyCodes = config.keyCodes[key] || builtInAlias;
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1;
    } else {
      return keyCodes !== eventKeyCode;
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          if (!(key in hash)) {
            hash[key] = value[key];
          }
        }
      }
    }
    return data;
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {
    var tree = this._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null;
    var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };
  }

  function renderMixin(Vue) {
    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      var _parentVnode = ref._parentVnode;

      if (vm._isMounted) {
        // clone slot nodes on re-renders
        for (var key in vm.$slots) {
          vm.$slots[key] = cloneVNodes(vm.$slots[key]);
        }
      }

      vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

      if (staticRenderFns && !vm._staticTrees) {
        vm._staticTrees = [];
      }
      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render function");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        {
          vnode = vm.$options.renderError ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) : vm._vnode;
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if ("development" !== 'production' && Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };

    // internal render helpers.
    // these are exposed on the instance prototype to reduce generated render
    // code size.
    Vue.prototype._o = markOnce;
    Vue.prototype._n = toNumber;
    Vue.prototype._s = toString;
    Vue.prototype._l = renderList;
    Vue.prototype._t = renderSlot;
    Vue.prototype._q = looseEqual;
    Vue.prototype._i = looseIndexOf;
    Vue.prototype._m = renderStatic;
    Vue.prototype._f = resolveFilter;
    Vue.prototype._k = checkKeyCodes;
    Vue.prototype._b = bindObjectProps;
    Vue.prototype._v = createTextVNode;
    Vue.prototype._e = createEmptyVNode;
    Vue.prototype._u = resolveScopedSlots;
  }

  /*  */

  var uid$1 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$1++;

      var startTag, endTag;
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        startTag = "vue-perf-init:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;
    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified;
  }

  function dedupe(latest, extended, sealed) {
    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res;
    } else {
      return latest;
    }
  }

  function Vue$3(options) {
    if ("development" !== 'production' && !(this instanceof Vue$3)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue$3);
  stateMixin(Vue$3);
  eventsMixin(Vue$3);
  lifecycleMixin(Vue$3);
  renderMixin(Vue$3);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      /* istanbul ignore if */
      if (plugin.installed) {
        return this;
      }
      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      plugin.installed = true;
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;
      {
        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
          warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
        }
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          {
            if (type === 'component' && config.isReservedTag(id)) {
              warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
            }
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  var patternTypes = [String, RegExp];

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
  }

  function pruneCache(cache, current, filter) {
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          if (cachedNode !== current) {
            pruneCacheEntry(cachedNode);
          }
          cache[key] = null;
        }
      }
    }
  }

  function pruneCacheEntry(vnode) {
    if (vnode) {
      vnode.componentInstance.$destroy();
    }
  }

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes
    },

    created: function created() {
      this.cache = Object.create(null);
    },

    destroyed: function destroyed() {
      var this$1 = this;

      for (var key in this$1.cache) {
        pruneCacheEntry(this$1.cache[key]);
      }
    },

    watch: {
      include: function include(val) {
        pruneCache(this.cache, this._vnode, function (name) {
          return matches(val, name);
        });
      },
      exclude: function exclude(val) {
        pruneCache(this.cache, this._vnode, function (name) {
          return !matches(val, name);
        });
      }
    },

    render: function render() {
      var vnode = getFirstComponentChild(this.$slots.default);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
          return vnode;
        }
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (this.cache[key]) {
          vnode.componentInstance = this.cache[key].componentInstance;
        } else {
          this.cache[key] = vnode;
        }
        vnode.data.keepAlive = true;
      }
      return vnode;
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue$3);

  Object.defineProperty(Vue$3.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue$3.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode.ssrContext;
    }
  });

  Vue$3.version = '2.3.3';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select');
  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return genClassFromData(data);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function genClassFromData(data) {
    var dynamicClass = data.class;
    var staticClass = data.staticClass;
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (isUndef(value)) {
      return '';
    }
    if (typeof value === 'string') {
      return value;
    }
    var res = '';
    if (Array.isArray(value)) {
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (isDef(value[i])) {
          if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
            res += stringified + ' ';
          }
        }
      }
      return res.slice(0, -1);
    }
    if (isObject(value)) {
      for (var key in value) {
        if (value[key]) {
          res += key + ' ';
        }
      }
      return res.slice(0, -1);
    }
    /* istanbul ignore next */
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        "development" !== 'production' && warn('Cannot find element: ' + el);
        return document.createElement('div');
      }
      return selected;
    } else {
      return el;
    }
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setAttribute(node, key, val) {
    node.setAttribute(key, val);
  }

  var nodeOps = Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setAttribute: setAttribute
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!key) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
          refs[key].push(ref);
        } else {
          refs[key] = [ref];
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
  
  /*
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b);
  }

  // Some browsers do not support dynamically changing type for <input>
  // so they need to be treated as different nodes
  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB;
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    var inPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            inPre++;
          }
          if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if ("development" !== 'production' && data && data.pre) {
          inPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */, parentElm, refElm);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref) {
      if (isDef(parent)) {
        if (isDef(ref)) {
          if (ref.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, elmToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            elmToMove = oldCh[idxInOld];
            /* istanbul ignore if */
            if ("development" !== 'production' && !elmToMove) {
              warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
            }
            if (sameVnode(elmToMove, newStartVnode)) {
              patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
              newStartVnode = newCh[++newStartIdx];
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
              newStartVnode = newCh[++newStartIdx];
            }
          }
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }
      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.elm = oldVnode.elm;
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }
      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }
      var elm = vnode.elm = oldVnode.elm;
      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var bailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue) {
      {
        if (!assertNodeMatch(elm, vnode)) {
          return false;
        }
      }
      vnode.elm = elm;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              if ("development" !== 'production' && typeof console !== 'undefined' && !bailed) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
        if (isDef(data)) {
          for (var key in data) {
            if (!isRenderedModule(key)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }
          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

          if (isDef(vnode.parent)) {
            // component root element replaced.
            // update parent placeholder node element, recursively
            var ancestor = vnode.parent;
            while (ancestor) {
              ancestor.elm = vnode.elm;
              ancestor = ancestor.parent;
            }
            if (isPatchable(vnode)) {
              for (var i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, vnode.parent);
              }
            }
          }

          if (isDef(parentElm$1)) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    /* istanbul ignore if */
    if (isIE9 && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, key);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + "," + args;
    }
  }

  /*  */

  function baseWarn(msg) {
    console.error("[Vue compiler]: " + msg);
  }

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
  }

  function addAttr(el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  }

  function addDirective(el, name, rawName, value, arg, modifiers) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  }

  function addHandler(el, name, value, modifiers, important, warn) {
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ("development" !== 'production' && warn && modifiers && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
    }
    // check capture modifier
    if (modifiers && modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers && modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers && modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }
    var events;
    if (modifiers && modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }
    var newHandler = { value: value, modifiers: modifiers };
    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  }

  function getAndRemoveAttr(el, name) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    return val;
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: "(" + value + ")",
      expression: "\"" + value + "\"",
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
    var modelRs = parseModel(value);
    if (modelRs.idx === null) {
      return value + "=" + assignment;
    } else {
      return "var $$exp = " + modelRs.exp + ", $$idx = " + modelRs.idx + ";" + "if (!Array.isArray($$exp)){" + value + "=" + assignment + "}" + "else{$$exp.splice($$idx, 1, " + assignment + ")}";
    }
  }

  /**
   * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
   *
   * for loop possible cases:
   *
   * - test
   * - test[idx]
   * - test[test1[idx]]
   * - test["a"][idx]
   * - xxx.test[a[a].test1[idx]]
   * - test.xxx.a["asa"][test1[idx]]
   *
   */

  var len;
  var str;
  var chr;
  var index$1;
  var expressionPos;
  var expressionEndPos;

  function parseModel(val) {
    str = val;
    len = str.length;
    index$1 = expressionPos = expressionEndPos = 0;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      return {
        exp: val,
        idx: null
      };
    }

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.substring(0, expressionPos),
      idx: val.substring(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (tag === 'input' && dynamicType) {
        warn$1("<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" + "v-model does not support dynamic input types. Use v-if branches instead.");
      }
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
      }
    }

    if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
    }

    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, CHECKBOX_RADIO_TOKEN, "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;
    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number || type === 'number') {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
    var event;
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      // Chrome fires microtasks in between click/change, leads to #4521
      event = isChrome ? 'click' : 'change';
      on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function add$1(event, _handler, once$$1, capture, passive) {
    if (once$$1) {
      var oldHandler = _handler;
      var _target = target$1; // save current target element in closure
      _handler = function handler(ev) {
        var res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, _handler, capture, _target);
        }
      };
    }
    target$1.addEventListener(event, _handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }

  function remove$2(event, handler, capture, _target) {
    (_target || target$1).removeEventListener(event, handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, vnode, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, vnode, checkVal) {
    return !elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
  }

  function isDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
    return document.activeElement !== elm && elm.value !== checkVal;
  }

  function isInputChanged(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers) && modifiers.number || elm.type === 'number') {
      return toNumber(value) !== toNumber(newVal);
    }
    if (isDef(modifiers) && modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var prefixes = ['Webkit', 'Moz', 'ms'];

  var testEl;
  var normalize = cached(function (prop) {
    testEl = testEl || document.createElement('div');
    prop = camelize(prop);
    if (prop !== 'filter' && prop in testEl.style) {
      return prop;
    }
    var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < prefixes.length; i++) {
      var prefixed = prefixes[i] + upper;
      if (prefixed in testEl.style) {
        return prefixed;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likley wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      el.setAttribute('class', cur.trim());
    }
  }

  /*  */

  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }
    /* istanbul ignore else */
    if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    (el._transitionClasses || (el._transitionClasses = [])).push(cls);
    addClass(el, cls);
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if ("development" !== 'production' && explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        addTransitionClass(el, toClass);
        removeTransitionClass(el, startClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return rm();
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          addTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled && !userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var model$1 = {
    inserted: function inserted(el, binding, vnode) {
      if (vnode.tag === 'select') {
        var cb = function cb() {
          setSelected(el, binding, vnode.context);
        };
        cb();
        /* istanbul ignore if */
        if (isIE || isEdge) {
          setTimeout(cb, 0);
        }
      } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          if (!isAndroid) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
          }
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, el.options);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    for (var i = 0, l = options.length; i < l; i++) {
      if (looseEqual(getValue(options[i]), value)) {
        return false;
      }
    }
    return true;
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition && !isIE9) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (value === oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition = vnode.data && vnode.data.transition;
      if (transition && !isIE9) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: model$1,
    show: show
  };

  /*  */

  // Provides transition support for a single element/component.
  // supports transition mode (out-in / in-out)

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(function (c) {
        return c.tag;
      });
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if ("development" !== 'production' && children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function (d) {
        return d.name === 'show';
      })) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild && (oldChild.data.transition = extend({}, data));
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          var delayedLeave;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };

  /*  */

  // Provides transition support for list items.
  // supports move transitions using the FLIP technique.

  // Because the vdom's children update algorithm is "unstable" - i.e.
  // it doesn't guarantee the relative positioning of removed elements,
  // we force transition-group to update its children into two passes:
  // in the first pass, we remove all nodes that need to be removed,
  // triggering their leaving transition; in the second pass, we insert/move
  // into the final desired state. This way in the second pass removed
  // nodes will remain where they should be.

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    beforeUpdate: function beforeUpdate() {
      // force removing pass
      this.__patch__(this._vnode, this.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );
      this._vnode = this.kept;
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      var body = document.body;
      var f = body.offsetHeight; // eslint-disable-line

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        if (this._hasMove != null) {
          return this._hasMove;
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue$3.config.mustUseProp = mustUseProp;
  Vue$3.config.isReservedTag = isReservedTag;
  Vue$3.config.isReservedAttr = isReservedAttr;
  Vue$3.config.getTagNamespace = getTagNamespace;
  Vue$3.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue$3.options.directives, platformDirectives);
  extend(Vue$3.options.components, platformComponents);

  // install platform patch function
  Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

  // devtools global hook
  /* istanbul ignore next */
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue$3);
      } else if ("development" !== 'production' && isChrome) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }
    if ("development" !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);

  /*  */

  // check whether current browser encodes a char inside attribute values
  function shouldDecode(content, encoded) {
    var div = document.createElement('div');
    div.innerHTML = "<div a=\"" + content + "\">";
    return div.innerHTML.indexOf(encoded) > 0;
  }

  // #3663
  // IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

  /*  */

  var decoder;

  function decode(html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent;
  }

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  /*!
   * HTML Parser By John Resig (ejohn.org)
   * Modified by Juriy "kangax" Zaytsev
   * Original code by Erik Arvidsson, Mozilla Public License
   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
   */

  // Regular Expressions for parsing tags and attributes
  var singleAttrIdentifier = /([^\s"'<>/=]+)/;
  var singleAttrAssign = /(?:=)/;
  var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source];
  var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');

  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
  var startTagOpen = new RegExp('^<' + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
  var doctype = /^<!DOCTYPE [^>]+>/i;
  var comment = /^<!--/;
  var conditionalComment = /^<!\[/;

  var IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function (m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            continue;
          }
        }

        var text = void 0,
            rest$1 = void 0,
            next = void 0;
        if (textEnd >= 0) {
          rest$1 = html.slice(textEnd);
          while (!endTag.test(rest$1) && !startTagOpen.test(rest$1) && !comment.test(rest$1) && !conditionalComment.test(rest$1)) {
            // < in plain text, be forgiving and treat it as text
            next = rest$1.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest$1 = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var endTagLength = 0;
        var rest = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest.length;
        html = rest;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if ("development" !== 'production' && !stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
        }
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        var value = args[3] || args[4] || args[5] || '';
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, options.shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if ("development" !== 'production' && (i > pos || !tagName) && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)));
    }
    return tokens.join('+');
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
  var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(decode);

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$2 = options.warn || baseWarn;
    platformGetTagNamespace = options.getTagNamespace || no;
    platformMustUseProp = options.mustUseProp || no;
    platformIsPreTag = options.isPreTag || no;
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    transforms = pluckModuleFunction(options.modules, 'transformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function endPre(element) {
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      start: function start(tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = {
          type: 1,
          tag: tag,
          attrsList: attrs,
          attrsMap: makeAttrsMap(attrs),
          parent: currentParent,
          children: []
        };
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          "development" !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          preTransforms[i](element, options);
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else {
          processFor(element);
          processIf(element);
          processOnce(element);
          processKey(element);

          // determine whether this is a plain element after
          // removing structural attributes
          element.plain = !element.key && !attrs.length;

          processRef(element);
          processSlot(element);
          processComponent(element);
          for (var i$1 = 0; i$1 < transforms.length; i$1++) {
            transforms[i$1](element, options);
          }
          processAttrs(element);
        }

        function checkRootConstraints(el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) {
            // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          endPre(element);
        }
        // apply post-transforms
        for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
          postTransforms[i$2](element, options);
        }
      },

      end: function end() {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        endPre(element);
      },

      chars: function chars(text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.');
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.");
            }
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var expression;
          if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: expression,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      if ("development" !== 'production' && el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var inMatch = exp.match(forAliasRE);
      if (!inMatch) {
        "development" !== 'production' && warn$2("Invalid v-for expression: " + exp);
        return;
      }
      el.for = inMatch[2].trim();
      var alias = inMatch[1].trim();
      var iteratorMatch = alias.match(forIteratorRE);
      if (iteratorMatch) {
        el.alias = iteratorMatch[1].trim();
        el.iterator1 = iteratorMatch[2].trim();
        if (iteratorMatch[3]) {
          el.iterator2 = iteratorMatch[3].trim();
        }
      } else {
        el.alias = alias;
      }
    }
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if ("development" !== 'production' && children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if ("development" !== 'production' && el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
      }
    } else {
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      }
      if (el.tag === 'template') {
        el.slotScope = getAndRemoveAttr(el, 'scope');
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
            }
          }
          if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if ("development" !== 'production' && name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var expression = parseText(value, delimiters);
          if (expression) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
          }
        }
        addAttr(el, name, JSON.stringify(value));
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if ("development" !== 'production' && map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
      }
      _el = _el.parent;
    }
  }

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        walkThroughConditionsBlocks(node.ifConditions, isInFor);
      }
    }
  }

  function walkThroughConditionsBlocks(conditionBlocks, isInFor) {
    for (var i = 1, len = conditionBlocks.length; i < len; i++) {
      markStaticRoots(conditionBlocks[i].block, isInFor);
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

  // keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function genGuard(condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative, warn) {
    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      var handler = events[name];
      // #5330: warn click.right, since right clicks do not actually fire click events.
      if ("development" !== 'production' && name === 'click' && handler && handler.modifiers && handler.modifiers.right) {
        warn("Use \"contextmenu\" instead of \"click.right\" since right clicks " + "do not actually fire \"click\" events.");
      }
      res += "\"" + name + "\":" + genHandler(name, handler) + ",";
    }
    return res.slice(0, -1) + '}';
  }

  function genHandler(name, handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(name, handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      return isMethodPath || isFunctionExpression ? handler.value : "function($event){" + handler.value + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var alias = keyCodes[key];
    return "_k($event.keyCode," + JSON.stringify(key) + (alias ? ',' + JSON.stringify(alias) : '') + ")";
  }

  /*  */

  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    bind: bind$1,
    cloak: noop
  };

  /*  */

  // configurable state
  var warn$3;
  var transforms$1;
  var dataGenFns;
  var platformDirectives$1;
  var isPlatformReservedTag$1;
  var staticRenderFns;
  var onceCount;
  var currentOptions;

  function generate(ast, options) {
    // save previous staticRenderFns so generate calls can be nested
    var prevStaticRenderFns = staticRenderFns;
    var currentStaticRenderFns = staticRenderFns = [];
    var prevOnceCount = onceCount;
    onceCount = 0;
    currentOptions = options;
    warn$3 = options.warn || baseWarn;
    transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
    dataGenFns = pluckModuleFunction(options.modules, 'genData');
    platformDirectives$1 = options.directives || {};
    isPlatformReservedTag$1 = options.isReservedTag || no;
    var code = ast ? genElement(ast) : '_c("div")';
    staticRenderFns = prevStaticRenderFns;
    onceCount = prevOnceCount;
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: currentStaticRenderFns
    };
  }

  function genElement(el) {
    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el);
    } else if (el.for && !el.forProcessed) {
      return genFor(el);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el);
    } else if (el.tag === 'template' && !el.slotTarget) {
      return genChildren(el) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el);
      } else {
        var data = el.plain ? undefined : genData(el);

        var children = el.inlineTemplate ? null : genChildren(el, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < transforms$1.length; i++) {
        code = transforms$1[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el) {
    el.staticProcessed = true;
    staticRenderFns.push("with(this){return " + genElement(el) + "}");
    return "_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  }

  // v-once
  function genOnce(el) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        "development" !== 'production' && warn$3("v-once can only be used inside v-for that is keyed. ");
        return genElement(el);
      }
      return "_o(" + genElement(el) + "," + onceCount++ + (key ? "," + key : "") + ")";
    } else {
      return genStatic(el);
    }
  }

  function genIf(el) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice());
  }

  function genIfConditions(conditions) {
    if (!conditions.length) {
      return '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return el.once ? genOnce(el) : genElement(el);
    }
  }

  function genFor(el) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if ("development" !== 'production' && maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      warn$3("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genElement(el) + '})';
  }

  function genData(el) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < dataGenFns.length; i++) {
      data += dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + genProps(el.attrs) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + genProps(el.props) + "},";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events, false, warn$3) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true, warn$3) + ",";
    }
    // slot target
    if (el.slotTarget) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el.scopedSlots) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    return data;
  }

  function genDirectives(el) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, warn$3);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el) {
    var ast = el.children[0];
    if ("development" !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
      warn$3('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, currentOptions);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(slots) {
    return "scopedSlots:_u([" + Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key]);
    }).join(',') + "])";
  }

  function genScopedSlot(key, el) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el);
    }
    return "{key:" + key + ",fn:function(" + String(el.attrsMap.scope) + "){" + "return " + (el.tag === 'template' ? genChildren(el) || 'void 0' : genElement(el)) + "}}";
  }

  function genForScopedSlot(key, el) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el) + '})';
  }

  function genChildren(el, checkSkip) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        return genElement(el$1);
      }
      var normalizationType = checkSkip ? getNormalizationType(children) : 0;
      return "[" + children.map(genNode).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function maybeComponent(el) {
    return !isPlatformReservedTag$1(el.tag);
  }

  function genNode(node) {
    if (node.type === 1) {
      return genElement(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genSlot(el) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs && "{" + el.attrs.map(function (a) {
      return camelize(a.name) + ":" + a.value;
    }).join(',') + "}";
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el) {
    var children = el.inlineTemplate ? null : genChildren(el, true);
    return "_c(" + componentName + "," + genData(el) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
    }
    return res.slice(0, -1);
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // check valid identifier for v-for
  var identRE = /[A-Za-z_$][\w$]*/;

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors;
  }

  function checkNode(node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", errors);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", errors);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent(exp, text, errors) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
    }
    checkExpression(exp, text, errors);
  }

  function checkFor(node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier(ident, type, text, errors) {
    if (typeof ident === 'string' && !identRE.test(ident)) {
      errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
    }
  }

  function checkExpression(exp, text, errors) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
      } else {
        errors.push("invalid expression: " + text.trim());
      }
    }
  }

  /*  */

  function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    optimize(ast, options);
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  }

  function makeFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop;
    }
  }

  function createCompiler(baseOptions) {
    var functionCompileCache = Object.create(null);

    function compile(template, options) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip$$1) {
        (tip$$1 ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(Object.create(baseOptions.directives), options.directives);
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }

    function compileToFunctions(template, options, vm) {
      options = options || {};

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (functionCompileCache[key]) {
        return functionCompileCache[key];
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
            return "- " + e;
          }).join('\n') + '\n', vm);
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function (msg) {
            return tip(msg, vm);
          });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = makeFunction(compiled.render, fnGenErrors);
      var l = compiled.staticRenderFns.length;
      res.staticRenderFns = new Array(l);
      for (var i = 0; i < l; i++) {
        res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
      }

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }

      return functionCompileCache[key] = res;
    }

    return {
      compile: compile,
      compileToFunctions: compileToFunctions
    };
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ("development" !== 'production' && staticClass) {
      var expression = parseText(staticClass, options.delimiters);
      if (expression) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData$1
  };

  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var expression = parseText(staticStyle, options.delimiters);
        if (expression) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$2(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$2
  };

  var modules$1 = [klass$1, style$1];

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")");
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")");
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  var ref$1 = createCompiler(baseOptions);
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue$3.prototype.$mount;
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if ("development" !== 'production' && !template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          delimiters: options.delimiters
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile end');
          measure(this._name + " compile", 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue$3.compile = compileToFunctions;

  return Vue$3;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.28.1@css-loader/index.js!./mui.css", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.28.1@css-loader/index.js!./mui.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(16),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\project1\\component\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40507277", Component.options)
  } else {
    hotAPI.reload("data-v-40507277", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(1);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//使用路由
//引入Vue
_vue2.default.use(_vueRouter2.default);

//引入mui.css样式


//引入路由
__webpack_require__(3);

//引入vue模块
var index = __webpack_require__(4);

var router = new _vueRouter2.default({
	routes: [{
		path: '/index',
		component: index
	}]
});
new _vue2.default({
	el: '#taobao',

	template: '<div><router-view></router-view></div>',
	//需要注入
	router: router
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	mounted: function mounted() {
		console.log(666);
	}
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/*!\r\n * =====================================================\r\n * Mui v3.6.1 (http://dev.dcloud.net.cn/mui)\r\n * =====================================================\r\n */\r\n\r\n/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\r\nhtml\r\n{\r\n    font-family: sans-serif;\r\n\r\n    -webkit-text-size-adjust: 100%;\r\n}\r\n\r\nbody\r\n{\r\n    margin: 0;\r\n}\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection,\r\nsummary\r\n{\r\n    display: block;\r\n}\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo\r\n{\r\n    display: inline-block;\r\n\r\n    vertical-align: baseline;\r\n}\r\n\r\naudio:not([controls])\r\n{\r\n    display: none;\r\n\r\n    height: 0;\r\n}\r\n\r\n[hidden],\r\ntemplate\r\n{\r\n    display: none;\r\n}\r\n\r\na\r\n{\r\n    background: transparent;\r\n}\r\n\r\na:active,\r\na:hover\r\n{\r\n    outline: 0;\r\n}\r\n\r\nabbr[title]\r\n{\r\n    border-bottom: 1px dotted;\r\n}\r\n\r\nb,\r\nstrong\r\n{\r\n    font-weight: bold;\r\n}\r\n\r\ndfn\r\n{\r\n    font-style: italic;\r\n}\r\n\r\nh1\r\n{\r\n    font-size: 2em;\r\n\r\n    margin: .67em 0;\r\n}\r\n\r\nmark\r\n{\r\n    color: #000;\r\n    background: #ff0;\r\n}\r\n\r\nsmall\r\n{\r\n    font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup\r\n{\r\n    font-size: 75%;\r\n    line-height: 0;\r\n\r\n    position: relative;\r\n\r\n    vertical-align: baseline;\r\n}\r\n\r\nsup\r\n{\r\n    top: -.5em;\r\n}\r\n\r\nsub\r\n{\r\n    bottom: -.25em;\r\n}\r\n\r\nimg\r\n{\r\n    border: 0;\r\n}\r\n\r\nsvg:not(:root)\r\n{\r\n    overflow: hidden;\r\n}\r\n\r\nfigure\r\n{\r\n    margin: 1em 40px;\r\n}\r\n\r\nhr\r\n{\r\n    box-sizing: content-box;\r\n    height: 0;\r\n}\r\n\r\npre\r\n{\r\n    overflow: auto;\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp\r\n{\r\n    font-family: monospace, monospace;\r\n    font-size: 1em;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea\r\n{\r\n    font: inherit;\r\n\r\n    margin: 0;\r\n\r\n    color: inherit;\r\n}\r\n\r\nbutton\r\n{\r\n    overflow: visible;\r\n}\r\n\r\nbutton,\r\nselect\r\n{\r\n    text-transform: none;\r\n}\r\n\r\nbutton,\r\nhtml input[type='button'],\r\ninput[type='reset'],\r\ninput[type='submit']\r\n{\r\n    cursor: pointer;\r\n\r\n    -webkit-appearance: button;\r\n}\r\n\r\nbutton[disabled],\r\nhtml input[disabled]\r\n{\r\n    cursor: default;\r\n}\r\n\r\ninput\r\n{\r\n    line-height: normal;\r\n}\r\n\r\ninput[type='checkbox'],\r\ninput[type='radio']\r\n{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n\r\ninput[type='number']::-webkit-inner-spin-button,\r\ninput[type='number']::-webkit-outer-spin-button\r\n{\r\n    height: auto;\r\n}\r\n\r\ninput[type='search']\r\n{\r\n    -webkit-box-sizing: content-box;\r\n            box-sizing: content-box;\r\n\r\n    -webkit-appearance: textfield;\r\n}\r\n\r\ninput[type='search']::-webkit-search-cancel-button,\r\ninput[type='search']::-webkit-search-decoration\r\n{\r\n    -webkit-appearance: none;\r\n}\r\n\r\nfieldset\r\n{\r\n    margin: 0 2px;\r\n    padding: .35em .625em .75em;\r\n\r\n    border: 1px solid #c0c0c0;\r\n}\r\n\r\nlegend\r\n{\r\n    padding: 0;\r\n\r\n    border: 0;\r\n}\r\n\r\ntextarea\r\n{\r\n    overflow: auto;\r\n}\r\n\r\noptgroup\r\n{\r\n    font-weight: bold;\r\n}\r\n\r\ntable\r\n{\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n}\r\n\r\ntd,\r\nth\r\n{\r\n    padding: 0;\r\n}\r\n\r\n*\r\n{\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\r\n    -webkit-user-select: none;\r\n\r\n    outline: none;\r\n\r\n    -webkit-tap-highlight-color: transparent;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\nbody\r\n{\r\n    font-family: 'Helvetica Neue', Helvetica, sans-serif;\r\n    font-size: 17px;\r\n    line-height: 21px;\r\n\r\n    color: #000;\r\n    background-color: #fff;\r\n\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\na\r\n{\r\n    text-decoration: none;\r\n\r\n    color: #007aff;\r\n}\r\na:active\r\n{\r\n    color: #0062cc;\r\n}\r\n\r\n.mui-content\r\n{\r\n    background-color: #efeff4;\r\n\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.mui-bar-nav ~ .mui-content\r\n{\r\n    padding-top: 44px;\r\n}\r\n.mui-bar-nav ~ .mui-content.mui-scroll-wrapper .mui-scrollbar-vertical\r\n{\r\n    top: 44px;\r\n}\r\n\r\n.mui-bar-header-secondary ~ .mui-content\r\n{\r\n    padding-top: 88px;\r\n}\r\n.mui-bar-header-secondary ~ .mui-content.mui-scroll-wrapper .mui-scrollbar-vertical\r\n{\r\n    top: 88px;\r\n}\r\n\r\n.mui-bar-footer ~ .mui-content\r\n{\r\n    padding-bottom: 44px;\r\n}\r\n.mui-bar-footer ~ .mui-content.mui-scroll-wrapper .mui-scrollbar-vertical\r\n{\r\n    bottom: 44px;\r\n}\r\n\r\n.mui-bar-footer-secondary ~ .mui-content\r\n{\r\n    padding-bottom: 88px;\r\n}\r\n.mui-bar-footer-secondary ~ .mui-content.mui-scroll-wrapper .mui-scrollbar-vertical\r\n{\r\n    bottom: 88px;\r\n}\r\n\r\n.mui-bar-tab ~ .mui-content\r\n{\r\n    padding-bottom: 50px;\r\n}\r\n.mui-bar-tab ~ .mui-content.mui-scroll-wrapper .mui-scrollbar-vertical\r\n{\r\n    bottom: 50px;\r\n}\r\n\r\n.mui-bar-footer-secondary-tab ~ .mui-content\r\n{\r\n    padding-bottom: 94px;\r\n}\r\n.mui-bar-footer-secondary-tab ~ .mui-content.mui-scroll-wrapper .mui-scrollbar-vertical\r\n{\r\n    bottom: 94px;\r\n}\r\n\r\n.mui-content-padded\r\n{\r\n    margin: 10px;\r\n}\r\n\r\n.mui-inline\r\n{\r\n    display: inline-block;\r\n\r\n    vertical-align: top;\r\n}\r\n\r\n.mui-block\r\n{\r\n    display: block !important;\r\n}\r\n\r\n.mui-visibility\r\n{\r\n    visibility: visible !important;\r\n}\r\n\r\n.mui-hidden\r\n{\r\n    display: none !important;\r\n}\r\n\r\n.mui-ellipsis\r\n{\r\n    overflow: hidden;\r\n\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.mui-ellipsis-2\r\n{\r\n    display: -webkit-box;\r\n    overflow: hidden;\r\n\r\n    white-space: normal !important;\r\n    text-overflow: ellipsis;\r\n    word-wrap: break-word;\r\n\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n.mui-table\r\n{\r\n    display: table;\r\n\r\n    width: 100%;\r\n\r\n    table-layout: fixed;\r\n}\r\n\r\n.mui-table-cell\r\n{\r\n    position: relative;\r\n\r\n    display: table-cell;\r\n}\r\n\r\n.mui-text-left\r\n{\r\n    text-align: left !important;\r\n}\r\n\r\n.mui-text-center\r\n{\r\n    text-align: center !important;\r\n}\r\n\r\n.mui-text-justify\r\n{\r\n    text-align: justify !important;\r\n}\r\n\r\n.mui-text-right\r\n{\r\n    text-align: right !important;\r\n}\r\n\r\n.mui-pull-left\r\n{\r\n    float: left;\r\n}\r\n\r\n.mui-pull-right\r\n{\r\n    float: right;\r\n}\r\n\r\n.mui-list-unstyled\r\n{\r\n    padding-left: 0;\r\n\r\n    list-style: none;\r\n}\r\n\r\n.mui-list-inline\r\n{\r\n    margin-left: -5px;\r\n    padding-left: 0;\r\n\r\n    list-style: none;\r\n}\r\n\r\n.mui-list-inline > li\r\n{\r\n    display: inline-block;\r\n\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.mui-clearfix:before, .mui-clearfix:after\r\n{\r\n    display: table;\r\n\r\n    content: ' ';\r\n}\r\n.mui-clearfix:after\r\n{\r\n    clear: both;\r\n}\r\n\r\n.mui-bg-primary\r\n{\r\n    background-color: #007aff;\r\n}\r\n\r\n.mui-bg-positive\r\n{\r\n    background-color: #4cd964;\r\n}\r\n\r\n.mui-bg-negative\r\n{\r\n    background-color: #dd524d;\r\n}\r\n\r\n.mui-error\r\n{\r\n    margin: 88px 35px;\r\n    padding: 10px;\r\n\r\n    border-radius: 6px;\r\n    background-color: #bbb;\r\n}\r\n\r\n.mui-subtitle\r\n{\r\n    font-size: 15px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6\r\n{\r\n    line-height: 1;\r\n\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\nh1, .mui-h1\r\n{\r\n    font-size: 36px;\r\n}\r\n\r\nh2, .mui-h2\r\n{\r\n    font-size: 30px;\r\n}\r\n\r\nh3, .mui-h3\r\n{\r\n    font-size: 24px;\r\n}\r\n\r\nh4, .mui-h4\r\n{\r\n    font-size: 18px;\r\n}\r\n\r\nh5, .mui-h5\r\n{\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n\r\n    color: #8f8f94;\r\n}\r\n\r\nh6, .mui-h6\r\n{\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n\r\n    color: #8f8f94;\r\n}\r\n\r\np\r\n{\r\n    font-size: 14px;\r\n\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n\r\n    color: #8f8f94;\r\n}\r\n\r\n.mui-row:before, .mui-row:after\r\n{\r\n    display: table;\r\n\r\n    content: ' ';\r\n}\r\n.mui-row:after\r\n{\r\n    clear: both;\r\n}\r\n\r\n.mui-col-xs-1, .mui-col-sm-1, .mui-col-xs-2, .mui-col-sm-2, .mui-col-xs-3, .mui-col-sm-3, .mui-col-xs-4, .mui-col-sm-4, .mui-col-xs-5, .mui-col-sm-5, .mui-col-xs-6, .mui-col-sm-6, .mui-col-xs-7, .mui-col-sm-7, .mui-col-xs-8, .mui-col-sm-8, .mui-col-xs-9, .mui-col-sm-9, .mui-col-xs-10, .mui-col-sm-10, .mui-col-xs-11, .mui-col-sm-11, .mui-col-xs-12, .mui-col-sm-12\r\n{\r\n    position: relative;\r\n\r\n    min-height: 1px;\r\n}\r\n\r\n.mui-row > [class*='mui-col-']\r\n{\r\n    float: left;\r\n}\r\n\r\n.mui-col-xs-12\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.mui-col-xs-11\r\n{\r\n    width: 91.66666667%;\r\n}\r\n\r\n.mui-col-xs-10\r\n{\r\n    width: 83.33333333%;\r\n}\r\n\r\n.mui-col-xs-9\r\n{\r\n    width: 75%;\r\n}\r\n\r\n.mui-col-xs-8\r\n{\r\n    width: 66.66666667%;\r\n}\r\n\r\n.mui-col-xs-7\r\n{\r\n    width: 58.33333333%;\r\n}\r\n\r\n.mui-col-xs-6\r\n{\r\n    width: 50%;\r\n}\r\n\r\n.mui-col-xs-5\r\n{\r\n    width: 41.66666667%;\r\n}\r\n\r\n.mui-col-xs-4\r\n{\r\n    width: 33.33333333%;\r\n}\r\n\r\n.mui-col-xs-3\r\n{\r\n    width: 25%;\r\n}\r\n\r\n.mui-col-xs-2\r\n{\r\n    width: 16.66666667%;\r\n}\r\n\r\n.mui-col-xs-1\r\n{\r\n    width: 8.33333333%;\r\n}\r\n\r\n@media (min-width: 400px)\r\n{\r\n    .mui-col-sm-12\r\n    {\r\n        width: 100%;\r\n    }\r\n\r\n    .mui-col-sm-11\r\n    {\r\n        width: 91.66666667%;\r\n    }\r\n\r\n    .mui-col-sm-10\r\n    {\r\n        width: 83.33333333%;\r\n    }\r\n\r\n    .mui-col-sm-9\r\n    {\r\n        width: 75%;\r\n    }\r\n\r\n    .mui-col-sm-8\r\n    {\r\n        width: 66.66666667%;\r\n    }\r\n\r\n    .mui-col-sm-7\r\n    {\r\n        width: 58.33333333%;\r\n    }\r\n\r\n    .mui-col-sm-6\r\n    {\r\n        width: 50%;\r\n    }\r\n\r\n    .mui-col-sm-5\r\n    {\r\n        width: 41.66666667%;\r\n    }\r\n\r\n    .mui-col-sm-4\r\n    {\r\n        width: 33.33333333%;\r\n    }\r\n\r\n    .mui-col-sm-3\r\n    {\r\n        width: 25%;\r\n    }\r\n\r\n    .mui-col-sm-2\r\n    {\r\n        width: 16.66666667%;\r\n    }\r\n\r\n    .mui-col-sm-1\r\n    {\r\n        width: 8.33333333%;\r\n    }\r\n}\r\n.mui-scroll-wrapper\r\n{\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.mui-scroll\r\n{\r\n    position: absolute;\r\n    z-index: 1;\r\n\r\n    width: 100%;\r\n\r\n    -webkit-transform: translateZ(0);\r\n            transform: translateZ(0);\r\n}\r\n\r\n.mui-scrollbar\r\n{\r\n    position: absolute;\r\n    z-index: 9998;\r\n\r\n    overflow: hidden;\r\n\r\n    -webkit-transition: 500ms;\r\n            transition: 500ms;\r\n    transform: translateZ(0px);\r\n    pointer-events: none;\r\n\r\n    opacity: 0;\r\n}\r\n\r\n.mui-scrollbar-vertical\r\n{\r\n    top: 0;\r\n    right: 1px;\r\n    bottom: 2px;\r\n\r\n    width: 4px;\r\n}\r\n.mui-scrollbar-vertical .mui-scrollbar-indicator\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.mui-scrollbar-horizontal\r\n{\r\n    right: 2px;\r\n    bottom: 0;\r\n    left: 2px;\r\n\r\n    height: 4px;\r\n}\r\n.mui-scrollbar-horizontal .mui-scrollbar-indicator\r\n{\r\n    height: 100%;\r\n}\r\n\r\n.mui-scrollbar-indicator\r\n{\r\n    position: absolute;\r\n\r\n    display: block;\r\n\r\n    box-sizing: border-box;\r\n\r\n    -webkit-transition: .01s cubic-bezier(.1, .57, .1, 1);\r\n            transition: .01s cubic-bezier(.1, .57, .1, 1);\r\n    transform: translate(0px, 0px) translateZ(0px);\r\n\r\n    border: 1px solid rgba(255, 255, 255, .80196);\r\n    border-radius: 2px;\r\n    background: rgba(0, 0, 0, .39804);\r\n}\r\n\r\n.mui-plus-pullrefresh .mui-fullscreen .mui-scroll-wrapper .mui-scroll-wrapper, .mui-plus-pullrefresh .mui-fullscreen .mui-slider-group .mui-scroll-wrapper\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n}\r\n.mui-plus-pullrefresh .mui-fullscreen .mui-scroll-wrapper .mui-scroll, .mui-plus-pullrefresh .mui-fullscreen .mui-slider-group .mui-scroll\r\n{\r\n    position: absolute;\r\n\r\n    width: 100%;\r\n}\r\n.mui-plus-pullrefresh .mui-scroll-wrapper, .mui-plus-pullrefresh .mui-slider-group\r\n{\r\n    position: static;\r\n    top: auto;\r\n    bottom: auto;\r\n    left: auto;\r\n\r\n    overflow: auto;\r\n\r\n    width: auto;\r\n}\r\n.mui-plus-pullrefresh .mui-slider-group\r\n{\r\n    overflow: visible;\r\n}\r\n.mui-plus-pullrefresh .mui-scroll\r\n{\r\n    position: static;\r\n\r\n    width: auto;\r\n}\r\n\r\n.mui-off-canvas-wrap .mui-bar\r\n{\r\n    position: absolute !important;\r\n\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.mui-off-canvas-wrap\r\n{\r\n    position: relative;\r\n    z-index: 1;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.mui-off-canvas-wrap .mui-inner-wrap\r\n{\r\n    position: relative;\r\n    z-index: 1;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.mui-off-canvas-wrap .mui-inner-wrap.mui-transitioning\r\n{\r\n    -webkit-transition: -webkit-transform 350ms;\r\n            transition:         transform 350ms cubic-bezier(.165, .84, .44, 1);\r\n}\r\n.mui-off-canvas-wrap .mui-inner-wrap .mui-off-canvas-left\r\n{\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n}\r\n.mui-off-canvas-wrap .mui-inner-wrap .mui-off-canvas-right\r\n{\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n}\r\n.mui-off-canvas-wrap.mui-active\r\n{\r\n    overflow: hidden;\r\n\r\n    height: 100%;\r\n}\r\n.mui-off-canvas-wrap.mui-active .mui-off-canvas-backdrop\r\n{\r\n    position: absolute;\r\n    z-index: 998;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    display: block;\r\n\r\n    transition: background 350ms cubic-bezier(.165, .84, .44, 1);\r\n\r\n    background: rgba(0, 0, 0, .4);\r\n    box-shadow: -4px 0 4px rgba(0, 0, 0, .5), 4px 0 4px rgba(0, 0, 0, .5);\r\n\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n.mui-off-canvas-wrap.mui-slide-in .mui-off-canvas-right\r\n{\r\n    z-index: 10000 !important;\r\n\r\n    -webkit-transform: translate3d(100%, 0px, 0px);\r\n}\r\n.mui-off-canvas-wrap.mui-slide-in .mui-off-canvas-left\r\n{\r\n    z-index: 10000 !important;\r\n\r\n    -webkit-transform: translate3d(-100%, 0px, 0px);\r\n}\r\n\r\n.mui-off-canvas-left, .mui-off-canvas-right\r\n{\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    bottom: 0;\r\n\r\n    visibility: hidden;\r\n\r\n    box-sizing: content-box;\r\n    width: 70%;\r\n    min-height: 100%;\r\n\r\n    background: #333;\r\n\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.mui-off-canvas-left.mui-transitioning, .mui-off-canvas-right.mui-transitioning\r\n{\r\n    -webkit-transition: -webkit-transform 350ms cubic-bezier(.165, .84, .44, 1);\r\n            transition:         transform 350ms cubic-bezier(.165, .84, .44, 1);\r\n}\r\n\r\n.mui-off-canvas-left\r\n{\r\n    left: 0;\r\n}\r\n\r\n.mui-off-canvas-right\r\n{\r\n    right: 0;\r\n}\r\n\r\n.mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable\r\n{\r\n    background-color: #333;\r\n}\r\n.mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable > .mui-off-canvas-left, .mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable > .mui-off-canvas-right\r\n{\r\n    width: 80%;\r\n\r\n    -webkit-transform: scale(.8);\r\n            transform: scale(.8);\r\n\r\n    opacity: .1;\r\n}\r\n.mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable > .mui-off-canvas-left.mui-transitioning, .mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable > .mui-off-canvas-right.mui-transitioning\r\n{\r\n    -webkit-transition: -webkit-transform 350ms cubic-bezier(.165, .84, .44, 1), opacity 350ms cubic-bezier(.165, .84, .44, 1);\r\n            transition:         transform 350ms cubic-bezier(.165, .84, .44, 1), opacity 350ms cubic-bezier(.165, .84, .44, 1);\r\n}\r\n.mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable > .mui-off-canvas-left\r\n{\r\n    -webkit-transform-origin: -100%;\r\n            transform-origin: -100%;\r\n}\r\n.mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable > .mui-off-canvas-right\r\n{\r\n    -webkit-transform-origin: 200%;\r\n            transform-origin: 200%;\r\n}\r\n.mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable.mui-active > .mui-inner-wrap\r\n{\r\n    -webkit-transform: scale(.8);\r\n            transform: scale(.8);\r\n}\r\n.mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable.mui-active > .mui-off-canvas-left, .mui-off-canvas-wrap:not(.mui-slide-in).mui-scalable.mui-active > .mui-off-canvas-right\r\n{\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n\r\n    opacity: 1;\r\n}\r\n\r\n.mui-loading .mui-spinner\r\n{\r\n    display: block;\r\n\r\n    margin: 0 auto;\r\n}\r\n\r\n.mui-spinner\r\n{\r\n    display: inline-block;\r\n\r\n    width: 24px;\r\n    height: 24px;\r\n\r\n    -webkit-transform-origin: 50%;\r\n            transform-origin: 50%;\r\n    -webkit-animation: spinner-spin 1s step-end infinite;\r\n            animation: spinner-spin 1s step-end infinite;\r\n}\r\n\r\n.mui-spinner:after\r\n{\r\n    display: block;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    content: '';\r\n\r\n    background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox=\\'0 0 120 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'><defs><line id=\\'l\\' x1=\\'60\\' x2=\\'60\\' y1=\\'7\\' y2=\\'27\\' stroke=\\'%236c6c6c\\' stroke-width=\\'11\\' stroke-linecap=\\'round\\'/></defs><g><use xlink:href=\\'%23l\\' opacity=\\'.27\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(30 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(60 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(90 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(120 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(150 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.37\\' transform=\\'rotate(180 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.46\\' transform=\\'rotate(210 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.56\\' transform=\\'rotate(240 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.66\\' transform=\\'rotate(270 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.75\\' transform=\\'rotate(300 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.85\\' transform=\\'rotate(330 60,60)\\'/></g></svg>');\r\n    background-repeat: no-repeat;\r\n    background-position: 50%;\r\n    background-size: 100%;\r\n}\r\n\r\n.mui-spinner-white:after\r\n{\r\n    background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox=\\'0 0 120 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'><defs><line id=\\'l\\' x1=\\'60\\' x2=\\'60\\' y1=\\'7\\' y2=\\'27\\' stroke=\\'%23fff\\' stroke-width=\\'11\\' stroke-linecap=\\'round\\'/></defs><g><use xlink:href=\\'%23l\\' opacity=\\'.27\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(30 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(60 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(90 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(120 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.27\\' transform=\\'rotate(150 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.37\\' transform=\\'rotate(180 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.46\\' transform=\\'rotate(210 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.56\\' transform=\\'rotate(240 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.66\\' transform=\\'rotate(270 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.75\\' transform=\\'rotate(300 60,60)\\'/><use xlink:href=\\'%23l\\' opacity=\\'.85\\' transform=\\'rotate(330 60,60)\\'/></g></svg>');\r\n}\r\n\r\n@-webkit-keyframes spinner-spin\r\n{\r\n    0%\r\n    {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n\r\n    8.33333333%\r\n    {\r\n        -webkit-transform: rotate(30deg);\r\n    }\r\n\r\n    16.66666667%\r\n    {\r\n        -webkit-transform: rotate(60deg);\r\n    }\r\n\r\n    25%\r\n    {\r\n        -webkit-transform: rotate(90deg);\r\n    }\r\n\r\n    33.33333333%\r\n    {\r\n        -webkit-transform: rotate(120deg);\r\n    }\r\n\r\n    41.66666667%\r\n    {\r\n        -webkit-transform: rotate(150deg);\r\n    }\r\n\r\n    50%\r\n    {\r\n        -webkit-transform: rotate(180deg);\r\n    }\r\n\r\n    58.33333333%\r\n    {\r\n        -webkit-transform: rotate(210deg);\r\n    }\r\n\r\n    66.66666667%\r\n    {\r\n        -webkit-transform: rotate(240deg);\r\n    }\r\n\r\n    75%\r\n    {\r\n        -webkit-transform: rotate(270deg);\r\n    }\r\n\r\n    83.33333333%\r\n    {\r\n        -webkit-transform: rotate(300deg);\r\n    }\r\n\r\n    91.66666667%\r\n    {\r\n        -webkit-transform: rotate(330deg);\r\n    }\r\n\r\n    100%\r\n    {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes spinner-spin\r\n{\r\n    0%\r\n    {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    8.33333333%\r\n    {\r\n        transform: rotate(30deg);\r\n    }\r\n\r\n    16.66666667%\r\n    {\r\n        transform: rotate(60deg);\r\n    }\r\n\r\n    25%\r\n    {\r\n        transform: rotate(90deg);\r\n    }\r\n\r\n    33.33333333%\r\n    {\r\n        transform: rotate(120deg);\r\n    }\r\n\r\n    41.66666667%\r\n    {\r\n        transform: rotate(150deg);\r\n    }\r\n\r\n    50%\r\n    {\r\n        transform: rotate(180deg);\r\n    }\r\n\r\n    58.33333333%\r\n    {\r\n        transform: rotate(210deg);\r\n    }\r\n\r\n    66.66666667%\r\n    {\r\n        transform: rotate(240deg);\r\n    }\r\n\r\n    75%\r\n    {\r\n        transform: rotate(270deg);\r\n    }\r\n\r\n    83.33333333%\r\n    {\r\n        transform: rotate(300deg);\r\n    }\r\n\r\n    91.66666667%\r\n    {\r\n        transform: rotate(330deg);\r\n    }\r\n\r\n    100%\r\n    {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\ninput[type='button'],\r\ninput[type='submit'],\r\ninput[type='reset'],\r\nbutton,\r\n.mui-btn\r\n{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1.42;\r\n\r\n    position: relative;\r\n\r\n    display: inline-block;\r\n\r\n    margin-bottom: 0;\r\n    padding: 6px 12px;\r\n\r\n    cursor: pointer;\r\n    -webkit-transition: all;\r\n            transition: all;\r\n    -webkit-transition-timing-function: linear;\r\n            transition-timing-function: linear;\r\n    -webkit-transition-duration: .2s;\r\n            transition-duration: .2s;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    white-space: nowrap;\r\n\r\n    color: #333;\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n}\r\ninput[type='button']:enabled:active, input[type='button'].mui-active:enabled,\r\ninput[type='submit']:enabled:active,\r\ninput[type='submit'].mui-active:enabled,\r\ninput[type='reset']:enabled:active,\r\ninput[type='reset'].mui-active:enabled,\r\nbutton:enabled:active,\r\nbutton.mui-active:enabled,\r\n.mui-btn:enabled:active,\r\n.mui-btn.mui-active:enabled\r\n{\r\n    color: #fff;\r\n    background-color: #929292;\r\n}\r\ninput[type='button']:disabled, input[type='button'].mui-disabled,\r\ninput[type='submit']:disabled,\r\ninput[type='submit'].mui-disabled,\r\ninput[type='reset']:disabled,\r\ninput[type='reset'].mui-disabled,\r\nbutton:disabled,\r\nbutton.mui-disabled,\r\n.mui-btn:disabled,\r\n.mui-btn.mui-disabled\r\n{\r\n    opacity: .6;\r\n}\r\n\r\ninput[type='submit'],\r\n.mui-btn-primary,\r\n.mui-btn-blue\r\n{\r\n    color: #fff;\r\n    border: 1px solid #007aff;\r\n    background-color: #007aff;\r\n}\r\ninput[type='submit']:enabled:active, input[type='submit'].mui-active:enabled,\r\n.mui-btn-primary:enabled:active,\r\n.mui-btn-primary.mui-active:enabled,\r\n.mui-btn-blue:enabled:active,\r\n.mui-btn-blue.mui-active:enabled\r\n{\r\n    color: #fff;\r\n    border: 1px solid #0062cc;\r\n    background-color: #0062cc;\r\n}\r\n\r\n.mui-btn-positive,\r\n.mui-btn-success,\r\n.mui-btn-green\r\n{\r\n    color: #fff;\r\n    border: 1px solid #4cd964;\r\n    background-color: #4cd964;\r\n}\r\n.mui-btn-positive:enabled:active, .mui-btn-positive.mui-active:enabled,\r\n.mui-btn-success:enabled:active,\r\n.mui-btn-success.mui-active:enabled,\r\n.mui-btn-green:enabled:active,\r\n.mui-btn-green.mui-active:enabled\r\n{\r\n    color: #fff;\r\n    border: 1px solid #2ac845;\r\n    background-color: #2ac845;\r\n}\r\n\r\n.mui-btn-warning,\r\n.mui-btn-yellow\r\n{\r\n    color: #fff;\r\n    border: 1px solid #f0ad4e;\r\n    background-color: #f0ad4e;\r\n}\r\n.mui-btn-warning:enabled:active, .mui-btn-warning.mui-active:enabled,\r\n.mui-btn-yellow:enabled:active,\r\n.mui-btn-yellow.mui-active:enabled\r\n{\r\n    color: #fff;\r\n    border: 1px solid #ec971f;\r\n    background-color: #ec971f;\r\n}\r\n\r\n.mui-btn-negative,\r\n.mui-btn-danger,\r\n.mui-btn-red\r\n{\r\n    color: #fff;\r\n    border: 1px solid #dd524d;\r\n    background-color: #dd524d;\r\n}\r\n.mui-btn-negative:enabled:active, .mui-btn-negative.mui-active:enabled,\r\n.mui-btn-danger:enabled:active,\r\n.mui-btn-danger.mui-active:enabled,\r\n.mui-btn-red:enabled:active,\r\n.mui-btn-red.mui-active:enabled\r\n{\r\n    color: #fff;\r\n    border: 1px solid #cf2d28;\r\n    background-color: #cf2d28;\r\n}\r\n\r\n.mui-btn-royal,\r\n.mui-btn-purple\r\n{\r\n    color: #fff;\r\n    border: 1px solid #8a6de9;\r\n    background-color: #8a6de9;\r\n}\r\n.mui-btn-royal:enabled:active, .mui-btn-royal.mui-active:enabled,\r\n.mui-btn-purple:enabled:active,\r\n.mui-btn-purple.mui-active:enabled\r\n{\r\n    color: #fff;\r\n    border: 1px solid #6641e2;\r\n    background-color: #6641e2;\r\n}\r\n\r\n.mui-btn-grey\r\n{\r\n    color: #fff;\r\n    border: 1px solid #c7c7cc;\r\n    background-color: #c7c7cc;\r\n}\r\n.mui-btn-grey:enabled:active, .mui-btn-grey.mui-active:enabled\r\n{\r\n    color: #fff;\r\n    border: 1px solid #acacb4;\r\n    background-color: #acacb4;\r\n}\r\n\r\n.mui-btn-outlined\r\n{\r\n    background-color: transparent;\r\n}\r\n.mui-btn-outlined.mui-btn-primary, .mui-btn-outlined.mui-btn-blue\r\n{\r\n    color: #007aff;\r\n}\r\n.mui-btn-outlined.mui-btn-positive, .mui-btn-outlined.mui-btn-success, .mui-btn-outlined.mui-btn-green\r\n{\r\n    color: #4cd964;\r\n}\r\n.mui-btn-outlined.mui-btn-warning, .mui-btn-outlined.mui-btn-yellow\r\n{\r\n    color: #f0ad4e;\r\n}\r\n.mui-btn-outlined.mui-btn-negative, .mui-btn-outlined.mui-btn-danger, .mui-btn-outlined.mui-btn-red\r\n{\r\n    color: #dd524d;\r\n}\r\n.mui-btn-outlined.mui-btn-royal, .mui-btn-outlined.mui-btn-purple\r\n{\r\n    color: #8a6de9;\r\n}\r\n.mui-btn-outlined.mui-btn-primary:enabled:active, .mui-btn-outlined.mui-btn-blue:enabled:active, .mui-btn-outlined.mui-btn-positive:enabled:active, .mui-btn-outlined.mui-btn-success:enabled:active, .mui-btn-outlined.mui-btn-green:enabled:active, .mui-btn-outlined.mui-btn-warning:enabled:active, .mui-btn-outlined.mui-btn-yellow:enabled:active, .mui-btn-outlined.mui-btn-negative:enabled:active, .mui-btn-outlined.mui-btn-danger:enabled:active, .mui-btn-outlined.mui-btn-red:enabled:active, .mui-btn-outlined.mui-btn-royal:enabled:active, .mui-btn-outlined.mui-btn-purple:enabled:active\r\n{\r\n    color: #fff;\r\n}\r\n\r\n.mui-btn-link\r\n{\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n\r\n    color: #007aff;\r\n    border: 0;\r\n    background-color: transparent;\r\n}\r\n.mui-btn-link:enabled:active, .mui-btn-link.mui-active:enabled\r\n{\r\n    color: #0062cc;\r\n    background-color: transparent;\r\n}\r\n\r\n.mui-btn-block\r\n{\r\n    font-size: 18px;\r\n\r\n    display: block;\r\n\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    padding: 15px 0;\r\n}\r\n\r\n.mui-btn .mui-badge\r\n{\r\n    font-size: 14px;\r\n\r\n    margin: -2px -4px -2px 4px;\r\n\r\n    background-color: rgba(0, 0, 0, .15);\r\n}\r\n\r\n.mui-btn .mui-badge-inverted,\r\n.mui-btn:enabled:active .mui-badge-inverted\r\n{\r\n    background-color: transparent;\r\n}\r\n\r\n.mui-btn-primary:enabled:active .mui-badge-inverted,\r\n.mui-btn-positive:enabled:active .mui-badge-inverted,\r\n.mui-btn-negative:enabled:active .mui-badge-inverted\r\n{\r\n    color: #fff;\r\n}\r\n\r\n.mui-btn-block .mui-badge\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n\r\n    margin-right: 10px;\r\n}\r\n\r\n.mui-btn .mui-icon\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.mui-btn.mui-icon\r\n{\r\n    font-size: 14px;\r\n    line-height: 1.42;\r\n}\r\n\r\n.mui-btn.mui-fab\r\n{\r\n    width: 56px;\r\n    height: 56px;\r\n    padding: 16px;\r\n\r\n    border-radius: 50%;\r\n    outline: none;\r\n}\r\n.mui-btn.mui-fab.mui-btn-mini\r\n{\r\n    width: 40px;\r\n    height: 40px;\r\n    padding: 8px;\r\n}\r\n.mui-btn.mui-fab .mui-icon\r\n{\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n.mui-btn .mui-spinner\r\n{\r\n    width: 14px;\r\n    height: 14px;\r\n\r\n    vertical-align: text-bottom;\r\n}\r\n\r\n.mui-btn-block .mui-spinner\r\n{\r\n    width: 22px;\r\n    height: 22px;\r\n}\r\n\r\n.mui-bar\r\n{\r\n    position: fixed;\r\n    z-index: 10;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    height: 44px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n\r\n    border-bottom: 0;\r\n    background-color: #f7f7f7;\r\n    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85);\r\n            box-shadow: 0 0 1px rgba(0, 0, 0, .85);\r\n\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n.mui-bar .mui-title\r\n{\r\n    right: 40px;\r\n    left: 40px;\r\n\r\n    display: inline-block;\r\n    overflow: hidden;\r\n\r\n    width: auto;\r\n    margin: 0;\r\n\r\n    text-overflow: ellipsis;\r\n}\r\n.mui-bar .mui-backdrop\r\n{\r\n    background: none;\r\n}\r\n\r\n.mui-bar-header-secondary\r\n{\r\n    top: 44px;\r\n}\r\n\r\n.mui-bar-footer\r\n{\r\n    bottom: 0;\r\n}\r\n\r\n.mui-bar-footer-secondary\r\n{\r\n    bottom: 44px;\r\n}\r\n\r\n.mui-bar-footer-secondary-tab\r\n{\r\n    bottom: 50px;\r\n}\r\n\r\n.mui-bar-footer,\r\n.mui-bar-footer-secondary,\r\n.mui-bar-footer-secondary-tab\r\n{\r\n    border-top: 0;\r\n}\r\n\r\n.mui-bar-transparent\r\n{\r\n    top: 0;\r\n\r\n    background-color: rgba(247, 247, 247, 0);\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.mui-bar-nav\r\n{\r\n    top: 0;\r\n\r\n    -webkit-box-shadow: 0 1px 6px #ccc;\r\n            box-shadow: 0 1px 6px #ccc;\r\n}\r\n.mui-bar-nav ~ .mui-content .mui-anchor\r\n{\r\n    display: block;\r\n    visibility: hidden;\r\n\r\n    height: 45px;\r\n    margin-top: -45px;\r\n}\r\n.mui-bar-nav.mui-bar .mui-icon\r\n{\r\n    margin-right: -10px;\r\n    margin-left: -10px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.mui-title\r\n{\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    line-height: 44px;\r\n\r\n    position: absolute;\r\n\r\n    display: block;\r\n\r\n    width: 100%;\r\n    margin: 0 -10px;\r\n    padding: 0;\r\n\r\n    text-align: center;\r\n    white-space: nowrap;\r\n\r\n    color: #000;\r\n}\r\n\r\n.mui-title a\r\n{\r\n    color: inherit;\r\n}\r\n\r\n.mui-bar-tab\r\n{\r\n    bottom: 0;\r\n\r\n    display: table;\r\n\r\n    width: 100%;\r\n    height: 50px;\r\n    padding: 0;\r\n\r\n    table-layout: fixed;\r\n\r\n    border-top: 0;\r\n    border-bottom: 0;\r\n\r\n    -webkit-touch-callout: none;\r\n}\r\n.mui-bar-tab .mui-tab-item\r\n{\r\n    display: table-cell;\r\n    overflow: hidden;\r\n\r\n    width: 1%;\r\n    height: 50px;\r\n\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n\r\n    color: #929292;\r\n}\r\n.mui-bar-tab .mui-tab-item.mui-active\r\n{\r\n    color: #007aff;\r\n}\r\n.mui-bar-tab .mui-tab-item .mui-icon\r\n{\r\n    top: 3px;\r\n\r\n    width: 24px;\r\n    height: 24px;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n.mui-bar-tab .mui-tab-item .mui-icon ~ .mui-tab-label\r\n{\r\n    font-size: 11px;\r\n\r\n    display: block;\r\n    overflow: hidden;\r\n\r\n    text-overflow: ellipsis;\r\n}\r\n.mui-bar-tab .mui-tab-item .mui-icon:active\r\n{\r\n    background: none;\r\n}\r\n\r\n.mui-focusin > .mui-bar-nav,\r\n.mui-focusin > .mui-bar-header-secondary\r\n{\r\n    position: absolute;\r\n}\r\n\r\n.mui-focusin > .mui-bar ~ .mui-content\r\n{\r\n    padding-bottom: 0;\r\n}\r\n\r\n.mui-bar .mui-btn\r\n{\r\n    font-weight: 400;\r\n\r\n    position: relative;\r\n    z-index: 20;\r\n    top: 7px;\r\n\r\n    margin-top: 0;\r\n    padding: 6px 12px 7px;\r\n}\r\n.mui-bar .mui-btn.mui-pull-right\r\n{\r\n    margin-left: 10px;\r\n}\r\n.mui-bar .mui-btn.mui-pull-left\r\n{\r\n    margin-right: 10px;\r\n}\r\n\r\n.mui-bar .mui-btn-link\r\n{\r\n    font-size: 16px;\r\n    line-height: 44px;\r\n\r\n    top: 0;\r\n\r\n    padding: 0;\r\n\r\n    color: #007aff;\r\n    border: 0;\r\n}\r\n.mui-bar .mui-btn-link:active, .mui-bar .mui-btn-link.mui-active\r\n{\r\n    color: #0062cc;\r\n}\r\n\r\n.mui-bar .mui-btn-block\r\n{\r\n    font-size: 16px;\r\n\r\n    top: 6px;\r\n\r\n    margin-bottom: 0;\r\n    padding: 5px 0;\r\n}\r\n\r\n.mui-bar .mui-btn-nav.mui-pull-left\r\n{\r\n    margin-left: -5px;\r\n}\r\n.mui-bar .mui-btn-nav.mui-pull-left .mui-icon-left-nav\r\n{\r\n    margin-right: -3px;\r\n}\r\n.mui-bar .mui-btn-nav.mui-pull-right\r\n{\r\n    margin-right: -5px;\r\n}\r\n.mui-bar .mui-btn-nav.mui-pull-right .mui-icon-right-nav\r\n{\r\n    margin-left: -3px;\r\n}\r\n.mui-bar .mui-btn-nav:active\r\n{\r\n    opacity: .3;\r\n}\r\n\r\n.mui-bar .mui-icon\r\n{\r\n    font-size: 24px;\r\n\r\n    position: relative;\r\n    z-index: 20;\r\n\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n.mui-bar .mui-icon:active\r\n{\r\n    opacity: .3;\r\n}\r\n.mui-bar .mui-btn .mui-icon\r\n{\r\n    top: 1px;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.mui-bar .mui-title .mui-icon\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.mui-bar .mui-title .mui-icon.mui-icon-caret\r\n{\r\n    top: 4px;\r\n\r\n    margin-left: -5px;\r\n}\r\n\r\n.mui-bar input[type='search']\r\n{\r\n    height: 29px;\r\n    margin: 6px 0;\r\n}\r\n\r\n.mui-bar .mui-input-row .mui-btn\r\n{\r\n    padding: 12px 10px;\r\n}\r\n\r\n.mui-bar .mui-search:before\r\n{\r\n    margin-top: -10px;\r\n}\r\n\r\n.mui-bar .mui-input-row .mui-input-clear ~ .mui-icon-clear,\r\n.mui-bar .mui-input-row .mui-input-speech ~ .mui-icon-speech\r\n{\r\n    top: 0;\r\n    right: 12px;\r\n}\r\n\r\n.mui-bar.mui-bar-header-secondary .mui-input-row .mui-input-clear ~ .mui-icon-clear,\r\n.mui-bar.mui-bar-header-secondary .mui-input-row .mui-input-speech ~ .mui-icon-speech\r\n{\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\n.mui-bar .mui-segmented-control\r\n{\r\n    top: 7px;\r\n\r\n    width: auto;\r\n    margin: 0 auto;\r\n}\r\n\r\n.mui-bar.mui-bar-header-secondary .mui-segmented-control\r\n{\r\n    top: 0;\r\n}\r\n\r\n.mui-badge\r\n{\r\n    font-size: 12px;\r\n    line-height: 1;\r\n\r\n    display: inline-block;\r\n\r\n    padding: 3px 6px;\r\n\r\n    color: #333;\r\n    border-radius: 100px;\r\n    background-color: rgba(0, 0, 0, .15);\r\n}\r\n.mui-badge.mui-badge-inverted\r\n{\r\n    padding: 0 5px 0 0;\r\n\r\n    color: #929292;\r\n    background-color: transparent;\r\n}\r\n\r\n.mui-badge-primary, .mui-badge-blue\r\n{\r\n    color: #fff;\r\n    background-color: #007aff;\r\n}\r\n.mui-badge-primary.mui-badge-inverted, .mui-badge-blue.mui-badge-inverted\r\n{\r\n    color: #007aff;\r\n    background-color: transparent;\r\n}\r\n\r\n.mui-badge-success, .mui-badge-green\r\n{\r\n    color: #fff;\r\n    background-color: #4cd964;\r\n}\r\n.mui-badge-success.mui-badge-inverted, .mui-badge-green.mui-badge-inverted\r\n{\r\n    color: #4cd964;\r\n    background-color: transparent;\r\n}\r\n\r\n.mui-badge-warning, .mui-badge-yellow\r\n{\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n.mui-badge-warning.mui-badge-inverted, .mui-badge-yellow.mui-badge-inverted\r\n{\r\n    color: #f0ad4e;\r\n    background-color: transparent;\r\n}\r\n\r\n.mui-badge-danger, .mui-badge-red\r\n{\r\n    color: #fff;\r\n    background-color: #dd524d;\r\n}\r\n.mui-badge-danger.mui-badge-inverted, .mui-badge-red.mui-badge-inverted\r\n{\r\n    color: #dd524d;\r\n    background-color: transparent;\r\n}\r\n\r\n.mui-badge-royal, .mui-badge-purple\r\n{\r\n    color: #fff;\r\n    background-color: #8a6de9;\r\n}\r\n.mui-badge-royal.mui-badge-inverted, .mui-badge-purple.mui-badge-inverted\r\n{\r\n    color: #8a6de9;\r\n    background-color: transparent;\r\n}\r\n\r\n.mui-icon .mui-badge\r\n{\r\n    font-size: 10px;\r\n    line-height: 1.4;\r\n\r\n    position: absolute;\r\n    top: -2px;\r\n    left: 100%;\r\n\r\n    margin-left: -10px;\r\n    padding: 1px 5px;\r\n\r\n    color: white;\r\n    background: red;\r\n}\r\n\r\n.mui-card\r\n{\r\n    font-size: 14px;\r\n\r\n    position: relative;\r\n\r\n    overflow: hidden;\r\n\r\n    margin: 10px;\r\n\r\n    border-radius: 2px;\r\n    background-color: white;\r\n    background-clip: padding-box;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, .3);\r\n}\r\n\r\n.mui-content > .mui-card:first-child\r\n{\r\n    margin-top: 15px;\r\n}\r\n\r\n.mui-card .mui-input-group:before, .mui-card .mui-input-group:after\r\n{\r\n    height: 0;\r\n}\r\n.mui-card .mui-input-group .mui-input-row:last-child:before, .mui-card .mui-input-group .mui-input-row:last-child:after\r\n{\r\n    height: 0;\r\n}\r\n\r\n.mui-card .mui-table-view\r\n{\r\n    margin-bottom: 0;\r\n\r\n    border-top: 0;\r\n    border-bottom: 0;\r\n    border-radius: 6px;\r\n}\r\n.mui-card .mui-table-view .mui-table-view-divider:first-child, .mui-card .mui-table-view .mui-table-view-cell:first-child\r\n{\r\n    top: 0;\r\n\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px;\r\n}\r\n.mui-card .mui-table-view .mui-table-view-divider:last-child, .mui-card .mui-table-view .mui-table-view-cell:last-child\r\n{\r\n    border-bottom-right-radius: 6px;\r\n    border-bottom-left-radius: 6px;\r\n}\r\n.mui-card .mui-table-view:before, .mui-card .mui-table-view:after\r\n{\r\n    height: 0;\r\n}\r\n\r\n.mui-card > .mui-table-view > .mui-table-view-cell:last-child:before, .mui-card > .mui-table-view > .mui-table-view-cell:last-child:after\r\n{\r\n    height: 0;\r\n}\r\n\r\n.mui-card-header,\r\n.mui-card-footer\r\n{\r\n    position: relative;\r\n\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display:         flex;\r\n\r\n    min-height: 44px;\r\n    padding: 10px 15px;\r\n\r\n    -webkit-box-pack: justify;\r\n    -webkit-justify-content: space-between;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n}\r\n.mui-card-header .mui-card-link,\r\n.mui-card-footer .mui-card-link\r\n{\r\n    line-height: 44px;\r\n\r\n    position: relative;\r\n\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display:         flex;\r\n\r\n    height: 44px;\r\n    margin-top: -10px;\r\n    margin-bottom: -10px;\r\n\r\n    -webkit-transition-duration: .3s;\r\n            transition-duration: .3s;\r\n    text-decoration: none;\r\n\r\n    -webkit-box-pack: start;\r\n    -webkit-justify-content: flex-start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n}\r\n\r\n.mui-card-header:after,\r\n.mui-card-footer:before\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n\r\n.mui-card-header\r\n{\r\n    font-size: 17px;\r\n\r\n    border-radius: 2px 2px 0 0;\r\n}\r\n.mui-card-header:after\r\n{\r\n    top: auto;\r\n    bottom: 0;\r\n}\r\n.mui-card-header > img:first-child\r\n{\r\n    font-size: 0;\r\n    line-height: 0;\r\n\r\n    float: left;\r\n\r\n    width: 34px;\r\n    height: 34px;\r\n}\r\n\r\n.mui-card-footer\r\n{\r\n    color: #6d6d72;\r\n    border-radius: 0 0 2px 2px;\r\n}\r\n\r\n.mui-card-content\r\n{\r\n    font-size: 14px;\r\n\r\n    position: relative;\r\n}\r\n\r\n.mui-card-content-inner\r\n{\r\n    position: relative;\r\n\r\n    padding: 15px;\r\n}\r\n\r\n.mui-card-media\r\n{\r\n    vertical-align: bottom;\r\n\r\n    color: #fff;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.mui-card-header.mui-card-media\r\n{\r\n    display: block;\r\n\r\n    padding: 10px;\r\n}\r\n.mui-card-header.mui-card-media .mui-media-body\r\n{\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 17px;\r\n\r\n    margin-bottom: 0;\r\n    margin-left: 44px;\r\n\r\n    color: #333;\r\n}\r\n.mui-card-header.mui-card-media .mui-media-body p\r\n{\r\n    font-size: 13px;\r\n\r\n    margin-bottom: 0;\r\n}\r\n\r\n.mui-table-view\r\n{\r\n    position: relative;\r\n\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    padding-left: 0;\r\n\r\n    list-style: none;\r\n\r\n    background-color: #fff;\r\n}\r\n.mui-table-view:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n.mui-table-view:before\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n.mui-table-view:before\r\n{\r\n    top: -1px;\r\n}\r\n\r\n.mui-table-view-icon .mui-table-view-cell .mui-navigate-right .mui-icon\r\n{\r\n    font-size: 20px;\r\n\r\n    margin-top: -1px;\r\n    margin-right: 5px;\r\n    margin-left: -5px;\r\n}\r\n.mui-table-view-icon .mui-table-view-cell:after\r\n{\r\n    left: 40px;\r\n}\r\n\r\n.mui-table-view-chevron .mui-table-view-cell\r\n{\r\n    padding-right: 65px;\r\n}\r\n.mui-table-view-chevron .mui-table-view-cell > a:not(.mui-btn)\r\n{\r\n    margin-right: -65px;\r\n}\r\n\r\n.mui-table-view-radio .mui-table-view-cell\r\n{\r\n    padding-right: 65px;\r\n}\r\n.mui-table-view-radio .mui-table-view-cell > a:not(.mui-btn)\r\n{\r\n    margin-right: -65px;\r\n}\r\n.mui-table-view-radio .mui-table-view-cell .mui-navigate-right:after\r\n{\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n\r\n    right: 9px;\r\n\r\n    content: '';\r\n\r\n    color: #007aff;\r\n}\r\n.mui-table-view-radio .mui-table-view-cell.mui-selected .mui-navigate-right:after\r\n{\r\n    content: '\\E472';\r\n}\r\n\r\n.mui-table-view-inverted\r\n{\r\n    color: #fff;\r\n    background: #333;\r\n}\r\n.mui-table-view-inverted:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #222;\r\n}\r\n.mui-table-view-inverted:before\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #222;\r\n}\r\n.mui-table-view-inverted .mui-table-view-cell:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 15px;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #222;\r\n}\r\n.mui-table-view-inverted .mui-table-view-cell.mui-active\r\n{\r\n    background-color: #242424;\r\n}\r\n.mui-table-view-inverted .mui-table-view-cell > a:not(.mui-btn).mui-active\r\n{\r\n    background-color: #242424;\r\n}\r\n\r\n.mui-table-view-cell\r\n{\r\n    position: relative;\r\n\r\n    overflow: hidden;\r\n\r\n    padding: 11px 15px;\r\n\r\n    -webkit-touch-callout: none;\r\n}\r\n.mui-table-view-cell:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 15px;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n.mui-table-view-cell.mui-radio input[type=radio], .mui-table-view-cell.mui-checkbox input[type=checkbox]\r\n{\r\n    top: 8px;\r\n}\r\n.mui-table-view-cell.mui-radio.mui-left, .mui-table-view-cell.mui-checkbox.mui-left\r\n{\r\n    padding-left: 58px;\r\n}\r\n.mui-table-view-cell.mui-active\r\n{\r\n    background-color: #eee;\r\n}\r\n.mui-table-view-cell:last-child:before, .mui-table-view-cell:last-child:after\r\n{\r\n    height: 0;\r\n}\r\n.mui-table-view-cell > a:not(.mui-btn)\r\n{\r\n    position: relative;\r\n\r\n    display: block;\r\n    overflow: hidden;\r\n\r\n    margin: -11px -15px;\r\n    padding: inherit;\r\n\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n\r\n    color: inherit;\r\n  /*&:active {\r\n      background-color: #eee;\r\n  }*/\r\n}\r\n.mui-table-view-cell > a:not(.mui-btn).mui-active\r\n{\r\n    background-color: #eee;\r\n}\r\n.mui-table-view-cell p\r\n{\r\n    margin-bottom: 0;\r\n}\r\n\r\n.mui-table-view-cell.mui-transitioning > .mui-slider-handle, .mui-table-view-cell.mui-transitioning > .mui-slider-left .mui-btn, .mui-table-view-cell.mui-transitioning > .mui-slider-right .mui-btn\r\n{\r\n    -webkit-transition: -webkit-transform 300ms ease;\r\n            transition:         transform 300ms ease;\r\n}\r\n.mui-table-view-cell.mui-active > .mui-slider-handle\r\n{\r\n    background-color: #eee;\r\n}\r\n.mui-table-view-cell > .mui-slider-handle\r\n{\r\n    position: relative;\r\n\r\n    background-color: #fff;\r\n}\r\n.mui-table-view-cell > .mui-slider-handle.mui-navigate-right:after, .mui-table-view-cell > .mui-slider-handle .mui-navigate-right:after\r\n{\r\n    right: 0;\r\n}\r\n.mui-table-view-cell > .mui-slider-handle, .mui-table-view-cell > .mui-slider-left .mui-btn, .mui-table-view-cell > .mui-slider-right .mui-btn\r\n{\r\n    -webkit-transition: -webkit-transform 0ms ease;\r\n            transition:         transform 0ms ease;\r\n}\r\n.mui-table-view-cell > .mui-slider-left, .mui-table-view-cell > .mui-slider-right\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display:         flex;\r\n\r\n    height: 100%;\r\n}\r\n.mui-table-view-cell > .mui-slider-left > .mui-btn, .mui-table-view-cell > .mui-slider-right > .mui-btn\r\n{\r\n    position: relative;\r\n    left: 0;\r\n\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display:         flex;\r\n\r\n    padding: 0 30px;\r\n\r\n    color: #fff;\r\n    border: 0;\r\n    border-radius: 0;\r\n\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n}\r\n.mui-table-view-cell > .mui-slider-left > .mui-btn:after, .mui-table-view-cell > .mui-slider-right > .mui-btn:after\r\n{\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n\r\n    width: 600%;\r\n    height: 100%;\r\n\r\n    content: '';\r\n\r\n    background: inherit;\r\n}\r\n.mui-table-view-cell > .mui-slider-left > .mui-btn.mui-icon, .mui-table-view-cell > .mui-slider-right > .mui-btn.mui-icon\r\n{\r\n    font-size: 30px;\r\n}\r\n.mui-table-view-cell > .mui-slider-right\r\n{\r\n    right: 0;\r\n\r\n    -webkit-transition: -webkit-transform 0ms ease;\r\n            transition:         transform 0ms ease;\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n}\r\n.mui-table-view-cell > .mui-slider-left\r\n{\r\n    left: 0;\r\n\r\n    -webkit-transition: -webkit-transform 0ms ease;\r\n            transition:         transform 0ms ease;\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n}\r\n.mui-table-view-cell > .mui-slider-left > .mui-btn:after\r\n{\r\n    right: 100%;\r\n\r\n    margin-right: -1px;\r\n}\r\n\r\n.mui-table-view-divider\r\n{\r\n    font-weight: 500;\r\n\r\n    position: relative;\r\n\r\n    margin-top: -1px;\r\n    margin-left: 0;\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n    padding-left: 15px;\r\n\r\n    color: #999;\r\n    background-color: #fafafa;\r\n}\r\n.mui-table-view-divider:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n.mui-table-view-divider:before\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n\r\n.mui-table-view .mui-media,\r\n.mui-table-view .mui-media-body\r\n{\r\n    overflow: hidden;\r\n}\r\n\r\n.mui-table-view .mui-media-large .mui-media-object\r\n{\r\n    line-height: 80px;\r\n\r\n    max-width: 80px;\r\n    height: 80px;\r\n}\r\n.mui-table-view .mui-media .mui-subtitle\r\n{\r\n    color: #000;\r\n}\r\n.mui-table-view .mui-media-object\r\n{\r\n    line-height: 42px;\r\n\r\n    max-width: 42px;\r\n    height: 42px;\r\n}\r\n.mui-table-view .mui-media-object.mui-pull-left\r\n{\r\n    margin-right: 10px;\r\n}\r\n.mui-table-view .mui-media-object.mui-pull-right\r\n{\r\n    margin-left: 10px;\r\n}\r\n.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-object\r\n{\r\n    line-height: 29px;\r\n\r\n    max-width: 29px;\r\n    height: 29px;\r\n    margin: -4px 0;\r\n}\r\n.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-object img\r\n{\r\n    line-height: 29px;\r\n\r\n    max-width: 29px;\r\n    height: 29px;\r\n}\r\n.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-object.mui-pull-left\r\n{\r\n    margin-right: 10px;\r\n}\r\n.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-object .mui-icon\r\n{\r\n    font-size: 29px;\r\n}\r\n.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-body:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 55px;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n.mui-table-view .mui-table-view-cell.mui-media-icon:after\r\n{\r\n    height: 0 !important;\r\n}\r\n\r\n.mui-table-view.mui-unfold .mui-table-view-cell.mui-collapse .mui-table-view\r\n{\r\n    display: block;\r\n}\r\n.mui-table-view.mui-unfold .mui-table-view-cell.mui-collapse .mui-table-view:before, .mui-table-view.mui-unfold .mui-table-view-cell.mui-collapse .mui-table-view:after\r\n{\r\n    height: 0 !important;\r\n}\r\n.mui-table-view.mui-unfold .mui-table-view-cell.mui-media-icon.mui-collapse .mui-media-body:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 70px;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n\r\n.mui-table-view-cell > .mui-btn,\r\n.mui-table-view-cell > .mui-badge,\r\n.mui-table-view-cell > .mui-switch,\r\n.mui-table-view-cell > a > .mui-btn,\r\n.mui-table-view-cell > a > .mui-badge,\r\n.mui-table-view-cell > a > .mui-switch\r\n{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n.mui-table-view-cell .mui-navigate-right > .mui-btn,\r\n.mui-table-view-cell .mui-navigate-right > .mui-badge,\r\n.mui-table-view-cell .mui-navigate-right > .mui-switch,\r\n.mui-table-view-cell .mui-push-left > .mui-btn,\r\n.mui-table-view-cell .mui-push-left > .mui-badge,\r\n.mui-table-view-cell .mui-push-left > .mui-switch,\r\n.mui-table-view-cell .mui-push-right > .mui-btn,\r\n.mui-table-view-cell .mui-push-right > .mui-badge,\r\n.mui-table-view-cell .mui-push-right > .mui-switch,\r\n.mui-table-view-cell > a .mui-navigate-right > .mui-btn,\r\n.mui-table-view-cell > a .mui-navigate-right > .mui-badge,\r\n.mui-table-view-cell > a .mui-navigate-right > .mui-switch,\r\n.mui-table-view-cell > a .mui-push-left > .mui-btn,\r\n.mui-table-view-cell > a .mui-push-left > .mui-badge,\r\n.mui-table-view-cell > a .mui-push-left > .mui-switch,\r\n.mui-table-view-cell > a .mui-push-right > .mui-btn,\r\n.mui-table-view-cell > a .mui-push-right > .mui-badge,\r\n.mui-table-view-cell > a .mui-push-right > .mui-switch\r\n{\r\n    right: 35px;\r\n}\r\n\r\n.mui-content > .mui-table-view:first-child\r\n{\r\n    margin-top: 15px;\r\n}\r\n\r\n.mui-table-view-cell.mui-collapse .mui-table-view:before, .mui-table-view-cell.mui-collapse .mui-table-view:after\r\n{\r\n    height: 0;\r\n}\r\n.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell:last-child:after\r\n{\r\n    height: 0;\r\n}\r\n.mui-table-view-cell.mui-collapse > .mui-navigate-right:after, .mui-table-view-cell.mui-collapse > .mui-push-right:after\r\n{\r\n    content: '\\E581';\r\n}\r\n.mui-table-view-cell.mui-collapse.mui-active\r\n{\r\n    margin-top: -1px;\r\n}\r\n.mui-table-view-cell.mui-collapse.mui-active .mui-table-view, .mui-table-view-cell.mui-collapse.mui-active .mui-collapse-content\r\n{\r\n    display: block;\r\n}\r\n.mui-table-view-cell.mui-collapse.mui-active > .mui-navigate-right:after, .mui-table-view-cell.mui-collapse.mui-active > .mui-push-right:after\r\n{\r\n    content: '\\E580';\r\n}\r\n.mui-table-view-cell.mui-collapse.mui-active .mui-table-view-cell > a:not(.mui-btn).mui-active\r\n{\r\n    margin-left: -31px;\r\n    padding-left: 47px;\r\n}\r\n.mui-table-view-cell.mui-collapse .mui-collapse-content\r\n{\r\n    position: relative;\r\n\r\n    display: none;\r\n    overflow: hidden;\r\n\r\n    margin: 11px -15px -11px;\r\n    padding: 8px 15px;\r\n\r\n    -webkit-transition: height .35s ease;\r\n         -o-transition: height .35s ease;\r\n            transition: height .35s ease;\r\n\r\n    background: white;\r\n}\r\n.mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-input-group, .mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-slider\r\n{\r\n    width: auto;\r\n    height: auto;\r\n    margin: -8px -15px;\r\n}\r\n.mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-slider\r\n{\r\n    margin: -8px -16px;\r\n}\r\n.mui-table-view-cell.mui-collapse .mui-table-view\r\n{\r\n    display: none;\r\n\r\n    margin-top: 11px;\r\n    margin-right: -15px;\r\n    margin-bottom: -11px;\r\n    margin-left: -15px;\r\n\r\n    border: 0;\r\n}\r\n.mui-table-view-cell.mui-collapse .mui-table-view.mui-table-view-chevron\r\n{\r\n    margin-right: -65px;\r\n}\r\n.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell\r\n{\r\n    padding-left: 31px;\r\n\r\n    background-position: 31px 100%;\r\n}\r\n.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 30px;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n\r\n.mui-table-view.mui-grid-view\r\n{\r\n    font-size: 0;\r\n\r\n    display: block;\r\n\r\n    width: 100%;\r\n    padding: 0 10px 10px 0;\r\n\r\n    white-space: normal;\r\n}\r\n.mui-table-view.mui-grid-view .mui-table-view-cell\r\n{\r\n    font-size: 17px;\r\n\r\n    display: inline-block;\r\n\r\n    margin-right: -4px;\r\n    padding: 10px 0 0 14px;\r\n\r\n    text-align: center;\r\n    vertical-align: middle;\r\n\r\n    background: none;\r\n}\r\n.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object\r\n{\r\n    width: 100%;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn)\r\n{\r\n    margin: -10px 0 0 -14px;\r\n}\r\n.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn):active, .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn).mui-active\r\n{\r\n    background: none;\r\n}\r\n.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body\r\n{\r\n    font-size: 15px;\r\n    line-height: 15px;\r\n\r\n    display: block;\r\n\r\n    width: 100%;\r\n    height: 15px;\r\n    margin-top: 8px;\r\n\r\n    text-overflow: ellipsis;\r\n\r\n    color: #333;\r\n}\r\n.mui-table-view.mui-grid-view .mui-table-view-cell:before, .mui-table-view.mui-grid-view .mui-table-view-cell:after\r\n{\r\n    height: 0;\r\n}\r\n\r\n.mui-grid-view.mui-grid-9\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    border-top: 1px solid #eee;\r\n    border-left: 1px solid #eee;\r\n    background-color: #f2f2f2;\r\n}\r\n.mui-grid-view.mui-grid-9:before, .mui-grid-view.mui-grid-9:after\r\n{\r\n    display: table;\r\n\r\n    content: ' ';\r\n}\r\n.mui-grid-view.mui-grid-9:after\r\n{\r\n    clear: both;\r\n}\r\n.mui-grid-view.mui-grid-9:after\r\n{\r\n    position: static;\r\n}\r\n.mui-grid-view.mui-grid-9 .mui-table-view-cell\r\n{\r\n    margin: 0;\r\n    padding: 11px 15px;\r\n\r\n    vertical-align: top;\r\n\r\n    border-right: 1px solid #eee;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.mui-grid-view.mui-grid-9 .mui-table-view-cell.mui-active\r\n{\r\n    background-color: #eee;\r\n}\r\n.mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn)\r\n{\r\n    margin: 0;\r\n    padding: 10px 0;\r\n}\r\n.mui-grid-view.mui-grid-9:before\r\n{\r\n    height: 0;\r\n}\r\n.mui-grid-view.mui-grid-9 .mui-media\r\n{\r\n    color: #797979;\r\n}\r\n.mui-grid-view.mui-grid-9 .mui-media .mui-icon\r\n{\r\n    font-size: 2.4em;\r\n\r\n    position: relative;\r\n}\r\n\r\n.mui-slider-cell\r\n{\r\n    position: relative;\r\n}\r\n.mui-slider-cell > .mui-slider-handle\r\n{\r\n    z-index: 1;\r\n}\r\n.mui-slider-cell > .mui-slider-left, .mui-slider-cell > .mui-slider-right\r\n{\r\n    position: absolute;\r\n    z-index: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n}\r\n.mui-slider-cell > .mui-slider-left\r\n{\r\n    left: 0;\r\n}\r\n.mui-slider-cell > .mui-slider-right\r\n{\r\n    right: 0;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect\r\n{\r\n    font-family: 'Helvetica Neue', Helvetica, sans-serif;\r\n    font-size: 17px;\r\n\r\n    -webkit-tap-highlight-color: transparent;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\ninput:focus,\r\ntextarea:focus,\r\nselect:focus\r\n{\r\n    -webkit-tap-highlight-color: transparent;\r\n    -webkit-tap-highlight-color: transparent;\r\n    -webkit-user-modify: read-write-plaintext-only;\r\n}\r\n\r\nselect,\r\ntextarea,\r\ninput[type='text'],\r\ninput[type='search'],\r\ninput[type='password'],\r\ninput[type='datetime'],\r\ninput[type='datetime-local'],\r\ninput[type='date'],\r\ninput[type='month'],\r\ninput[type='time'],\r\ninput[type='week'],\r\ninput[type='number'],\r\ninput[type='email'],\r\ninput[type='url'],\r\ninput[type='tel'],\r\ninput[type='color']\r\n{\r\n    line-height: 21px;\r\n\r\n    width: 100%;\r\n    height: 40px;\r\n    margin-bottom: 15px;\r\n    padding: 10px 15px;\r\n\r\n    -webkit-user-select: text;\r\n\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    border-radius: 3px;\r\n    outline: none;\r\n    background-color: #fff;\r\n\r\n    -webkit-appearance: none;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button\r\n{\r\n    margin: 0;\r\n\r\n    -webkit-appearance: none;\r\n}\r\n\r\ninput[type='search']\r\n{\r\n    font-size: 16px;\r\n\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    height: 34px;\r\n\r\n    text-align: center;\r\n\r\n    border: 0;\r\n    border-radius: 6px;\r\n    background-color: rgba(0, 0, 0, .1);\r\n}\r\n\r\ninput[type='search']:focus\r\n{\r\n    text-align: left;\r\n}\r\n\r\ntextarea\r\n{\r\n    height: auto;\r\n\r\n    resize: none;\r\n}\r\n\r\nselect\r\n{\r\n    font-size: 14px;\r\n\r\n    height: auto;\r\n    margin-top: 1px;\r\n\r\n    border: 0 !important;\r\n    background-color: #fff;\r\n}\r\nselect:focus\r\n{\r\n    -webkit-user-modify: read-only;\r\n}\r\n\r\n.mui-input-group\r\n{\r\n    position: relative;\r\n\r\n    padding: 0;\r\n\r\n    border: 0;\r\n    background-color: #fff;\r\n}\r\n.mui-input-group:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n.mui-input-group:before\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n\r\n.mui-input-group input,\r\n.mui-input-group textarea\r\n{\r\n    margin-bottom: 0;\r\n\r\n    border: 0;\r\n    border-radius: 0;\r\n    background-color: transparent;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.mui-input-group input[type='search']\r\n{\r\n    background: none;\r\n}\r\n\r\n.mui-input-group input:last-child\r\n{\r\n    background-image: none;\r\n}\r\n\r\n.mui-input-row\r\n{\r\n    clear: left;\r\n    overflow: hidden;\r\n}\r\n.mui-input-row select\r\n{\r\n    font-size: 17px;\r\n\r\n    height: 37px;\r\n    padding: 0;\r\n}\r\n\r\n.mui-input-row:last-child,\r\n.mui-input-row label + input, .mui-input-row .mui-btn + input\r\n{\r\n    background: none;\r\n}\r\n\r\n.mui-input-group .mui-input-row\r\n{\r\n    height: 40px;\r\n}\r\n.mui-input-group .mui-input-row:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 15px;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n\r\n.mui-input-row label\r\n{\r\n    font-family: 'Helvetica Neue', Helvetica, sans-serif;\r\n    line-height: 1.1;\r\n\r\n    float: left;\r\n\r\n    width: 35%;\r\n    padding: 11px 15px;\r\n}\r\n\r\n.mui-input-row label ~ input, .mui-input-row label ~ select, .mui-input-row label ~ textarea\r\n{\r\n    float: right;\r\n\r\n    width: 65%;\r\n    margin-bottom: 0;\r\n    padding-left: 0;\r\n\r\n    border: 0;\r\n}\r\n\r\n.mui-input-row .mui-btn\r\n{\r\n    line-height: 1.1;\r\n\r\n    float: right;\r\n\r\n    width: 15%;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.mui-input-row .mui-btn ~ input, .mui-input-row .mui-btn ~ select, .mui-input-row .mui-btn ~ textarea\r\n{\r\n    float: left;\r\n\r\n    width: 85%;\r\n    margin-bottom: 0;\r\n    padding-left: 0;\r\n\r\n    border: 0;\r\n}\r\n\r\n.mui-button-row\r\n{\r\n    position: relative;\r\n\r\n    padding-top: 5px;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.mui-input-group .mui-button-row\r\n{\r\n    height: 45px;\r\n}\r\n\r\n.mui-input-row\r\n{\r\n    position: relative;\r\n}\r\n.mui-input-row.mui-input-range\r\n{\r\n    overflow: visible;\r\n\r\n    padding-right: 20px;\r\n}\r\n.mui-input-row .mui-inline\r\n{\r\n    padding: 8px 0;\r\n}\r\n.mui-input-row .mui-input-clear ~ .mui-icon-clear, .mui-input-row .mui-input-speech ~ .mui-icon-speech, .mui-input-row .mui-input-password ~ .mui-icon-eye\r\n{\r\n    font-size: 20px;\r\n\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 10px;\r\n    right: 0;\r\n\r\n    width: 38px;\r\n    height: 38px;\r\n\r\n    text-align: center;\r\n\r\n    color: #999;\r\n}\r\n.mui-input-row .mui-input-clear ~ .mui-icon-clear.mui-active, .mui-input-row .mui-input-speech ~ .mui-icon-speech.mui-active, .mui-input-row .mui-input-password ~ .mui-icon-eye.mui-active\r\n{\r\n    color: #007aff;\r\n}\r\n.mui-input-row .mui-input-speech ~ .mui-icon-speech\r\n{\r\n    font-size: 24px;\r\n\r\n    top: 8px;\r\n}\r\n.mui-input-row .mui-input-clear ~ .mui-icon-clear ~ .mui-icon-speech\r\n{\r\n    display: none;\r\n}\r\n.mui-input-row .mui-input-clear ~ .mui-icon-clear.mui-hidden ~ .mui-icon-speech\r\n{\r\n    display: inline-block;\r\n}\r\n.mui-input-row .mui-icon-speech ~ .mui-placeholder\r\n{\r\n    right: 38px;\r\n}\r\n.mui-input-row.mui-search .mui-icon-clear\r\n{\r\n    top: 7px;\r\n}\r\n.mui-input-row.mui-search .mui-icon-speech\r\n{\r\n    top: 5px;\r\n}\r\n\r\n.mui-radio, .mui-checkbox\r\n{\r\n    position: relative;\r\n}\r\n.mui-radio label, .mui-checkbox label\r\n{\r\n    display: inline-block;\r\n    float: none;\r\n\r\n    width: 100%;\r\n    padding-right: 58px;\r\n}\r\n\r\n.mui-radio.mui-left input[type='radio'], .mui-checkbox.mui-left input[type='checkbox']\r\n{\r\n    left: 20px;\r\n}\r\n\r\n.mui-radio.mui-left label, .mui-checkbox.mui-left label\r\n{\r\n    padding-right: 15px;\r\n    padding-left: 58px;\r\n}\r\n\r\n.mui-radio input[type='radio'], .mui-checkbox input[type='checkbox']\r\n{\r\n    position: absolute;\r\n    top: 4px;\r\n    right: 20px;\r\n\r\n    display: inline-block;\r\n\r\n    width: 28px;\r\n    height: 26px;\r\n\r\n    border: 0;\r\n    outline: 0 !important;\r\n    background-color: transparent;\r\n\r\n    -webkit-appearance: none;\r\n}\r\n.mui-radio input[type='radio'][disabled]:before, .mui-checkbox input[type='checkbox'][disabled]:before\r\n{\r\n    opacity: .3;\r\n}\r\n.mui-radio input[type='radio']:before, .mui-checkbox input[type='checkbox']:before\r\n{\r\n    font-family: Muiicons;\r\n    font-size: 28px;\r\n    font-weight: normal;\r\n    line-height: 1;\r\n\r\n    text-decoration: none;\r\n\r\n    color: #aaa;\r\n    border-radius: 0;\r\n    background: none;\r\n\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n.mui-radio input[type='radio']:checked:before, .mui-checkbox input[type='checkbox']:checked:before\r\n{\r\n    color: #007aff;\r\n}\r\n\r\n.mui-radio.mui-disabled label, .mui-radio label.mui-disabled, .mui-checkbox.mui-disabled label, .mui-checkbox label.mui-disabled\r\n{\r\n    opacity: .4;\r\n}\r\n\r\n.mui-radio input[type='radio']:before\r\n{\r\n    content: '\\E411';\r\n}\r\n\r\n.mui-radio input[type='radio']:checked:before\r\n{\r\n    content: '\\E441';\r\n}\r\n\r\n.mui-checkbox input[type='checkbox']:before\r\n{\r\n    content: '\\E411';\r\n}\r\n\r\n.mui-checkbox input[type='checkbox']:checked:before\r\n{\r\n    content: '\\E442';\r\n}\r\n\r\n.mui-select\r\n{\r\n    position: relative;\r\n}\r\n\r\n.mui-select:before\r\n{\r\n    font-family: Muiicons;\r\n\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 21px;\r\n\r\n    content: '\\E581';\r\n\r\n    color: rgba(170, 170, 170, .6);\r\n}\r\n\r\n.mui-input-row .mui-switch\r\n{\r\n    float: right;\r\n\r\n    margin-top: 5px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.mui-input-range\r\n{\r\n  /*input[type=\"range\"] {\r\n      -webkit-appearance: none;\r\n      background: #999;\r\n      height: 36px;\r\n      border-radius: 1px;\r\n      overflow: hidden;\r\n      margin-top: 2px;\r\n      margin-bottom: 2px;\r\n      outline:none;\r\n      position:relative;\r\n      width:100%;\r\n  }*/\r\n  /*input[type='range']::-webkit-slider-thumb {\r\n      -webkit-appearance: none!important;\r\n      opacity: 0.5;\r\n      height:28px;\r\n      width:28px;\r\n      border-radius: 50%;\r\n      background:#00b7fb;\r\n      position: relative;\r\n      pointer-events: none;\r\n      -webkit-box-sizing: border-box;\r\n      box-sizing: border-box;\r\n      &:before{\r\n          position: absolute;\r\n          top: 13px;\r\n          left: -2000px;\r\n          width: 2000px;\r\n          height: 2px;\r\n          background: #00b7fb;\r\n          content:' ';\r\n      }\r\n  }*/\r\n}\r\n.mui-input-range input[type='range']\r\n{\r\n    position: relative;\r\n\r\n    width: 100%;\r\n    height: 2px;\r\n    margin: 17px 0;\r\n    padding: 0;\r\n\r\n    cursor: pointer;\r\n\r\n    border: 0;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    background-color: #999;\r\n\r\n    -webkit-appearance: none !important;\r\n}\r\n.mui-input-range input[type='range']::-webkit-slider-thumb\r\n{\r\n    width: 28px;\r\n    height: 28px;\r\n\r\n    border-color: #0062cc;\r\n    border-radius: 50%;\r\n    background-color: #007aff;\r\n    background-clip: padding-box;\r\n\r\n    -webkit-appearance: none !important;\r\n}\r\n.mui-input-range label ~ input[type='range']\r\n{\r\n    width: 65%;\r\n}\r\n.mui-input-range .mui-tooltip\r\n{\r\n    font-size: 36px;\r\n    line-height: 64px;\r\n\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: -70px;\r\n\r\n    width: 64px;\r\n    height: 64px;\r\n\r\n    text-align: center;\r\n\r\n    opacity: .8;\r\n    color: #333;\r\n    border: 1px solid #ddd;\r\n    border-radius: 6px;\r\n    background-color: #fff;\r\n    text-shadow: 0 1px 0 #f3f3f3;\r\n}\r\n\r\n.mui-search\r\n{\r\n    position: relative;\r\n}\r\n.mui-search input[type='search']\r\n{\r\n    padding-left: 30px;\r\n}\r\n.mui-search .mui-placeholder\r\n{\r\n    font-size: 16px;\r\n    line-height: 34px;\r\n\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    display: inline-block;\r\n\r\n    height: 34px;\r\n\r\n    text-align: center;\r\n\r\n    color: #999;\r\n    border: 0;\r\n    border-radius: 6px;\r\n    background: none;\r\n}\r\n.mui-search .mui-placeholder .mui-icon\r\n{\r\n    font-size: 20px;\r\n\r\n    color: #333;\r\n}\r\n.mui-search:before\r\n{\r\n    font-family: Muiicons;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 50%;\r\n\r\n    display: none;\r\n\r\n    margin-top: -18px;\r\n    margin-right: 31px;\r\n\r\n    content: '\\E466';\r\n}\r\n.mui-search.mui-active:before\r\n{\r\n    font-size: 20px;\r\n\r\n    right: auto;\r\n    left: 5px;\r\n\r\n    display: block;\r\n\r\n    margin-right: 0;\r\n}\r\n.mui-search.mui-active input[type='search']\r\n{\r\n    text-align: left;\r\n}\r\n.mui-search.mui-active .mui-placeholder\r\n{\r\n    display: none;\r\n}\r\n\r\n.mui-segmented-control\r\n{\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n\r\n    position: relative;\r\n\r\n    display: table;\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n\r\n    table-layout: fixed;\r\n\r\n    border: 1px solid #007aff;\r\n    border-radius: 3px;\r\n    background-color: transparent;\r\n\r\n    -webkit-touch-callout: none;\r\n}\r\n.mui-segmented-control.mui-segmented-control-vertical\r\n{\r\n    border-collapse: collapse;\r\n\r\n    border-width: 0;\r\n    border-radius: 0;\r\n}\r\n.mui-segmented-control.mui-segmented-control-vertical .mui-control-item\r\n{\r\n    display: block;\r\n\r\n    border-bottom: 1px solid #c8c7cc;\r\n    border-left-width: 0;\r\n}\r\n.mui-segmented-control.mui-scroll-wrapper\r\n{\r\n    height: 38px;\r\n}\r\n.mui-segmented-control.mui-scroll-wrapper .mui-scroll\r\n{\r\n    width: auto;\r\n    height: 40px;\r\n\r\n    white-space: nowrap;\r\n}\r\n.mui-segmented-control.mui-scroll-wrapper .mui-control-item\r\n{\r\n    display: inline-block;\r\n\r\n    width: auto;\r\n    padding: 0 20px;\r\n\r\n    border: 0;\r\n}\r\n.mui-segmented-control .mui-control-item\r\n{\r\n    line-height: 38px;\r\n\r\n    display: table-cell;\r\n    overflow: hidden;\r\n\r\n    width: 1%;\r\n\r\n    -webkit-transition: background-color .1s linear;\r\n            transition: background-color .1s linear;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n\r\n    color: #007aff;\r\n    border-color: #007aff;\r\n    border-left: 1px solid #007aff;\r\n}\r\n.mui-segmented-control .mui-control-item:first-child\r\n{\r\n    border-left-width: 0;\r\n}\r\n.mui-segmented-control .mui-control-item.mui-active\r\n{\r\n    color: #fff;\r\n    background-color: #007aff;\r\n}\r\n.mui-segmented-control.mui-segmented-control-inverted\r\n{\r\n    width: 100%;\r\n\r\n    border: 0;\r\n    border-radius: 0;\r\n}\r\n.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical .mui-control-item\r\n{\r\n    border-bottom: 1px solid #c8c7cc;\r\n}\r\n.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical .mui-control-item.mui-active\r\n{\r\n    border-bottom: 1px solid #c8c7cc;\r\n}\r\n.mui-segmented-control.mui-segmented-control-inverted .mui-control-item\r\n{\r\n    color: inherit;\r\n    border: 0;\r\n}\r\n.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active\r\n{\r\n    color: #007aff;\r\n    border-bottom: 2px solid #007aff;\r\n    background: none;\r\n}\r\n.mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-progress-bar\r\n{\r\n    background-color: #007aff;\r\n}\r\n\r\n.mui-segmented-control-positive\r\n{\r\n    border: 1px solid #4cd964;\r\n}\r\n.mui-segmented-control-positive .mui-control-item\r\n{\r\n    color: #4cd964;\r\n    border-color: inherit;\r\n}\r\n.mui-segmented-control-positive .mui-control-item.mui-active\r\n{\r\n    color: #fff;\r\n    background-color: #4cd964;\r\n}\r\n.mui-segmented-control-positive.mui-segmented-control-inverted .mui-control-item.mui-active\r\n{\r\n    color: #4cd964;\r\n    border-bottom: 2px solid #4cd964;\r\n    background: none;\r\n}\r\n.mui-segmented-control-positive.mui-segmented-control-inverted ~ .mui-slider-progress-bar\r\n{\r\n    background-color: #4cd964;\r\n}\r\n\r\n.mui-segmented-control-negative\r\n{\r\n    border: 1px solid #dd524d;\r\n}\r\n.mui-segmented-control-negative .mui-control-item\r\n{\r\n    color: #dd524d;\r\n    border-color: inherit;\r\n}\r\n.mui-segmented-control-negative .mui-control-item.mui-active\r\n{\r\n    color: #fff;\r\n    background-color: #dd524d;\r\n}\r\n.mui-segmented-control-negative.mui-segmented-control-inverted .mui-control-item.mui-active\r\n{\r\n    color: #dd524d;\r\n    border-bottom: 2px solid #dd524d;\r\n    background: none;\r\n}\r\n.mui-segmented-control-negative.mui-segmented-control-inverted ~ .mui-slider-progress-bar\r\n{\r\n    background-color: #dd524d;\r\n}\r\n\r\n.mui-control-content\r\n{\r\n    position: relative;\r\n\r\n    display: none;\r\n}\r\n.mui-control-content.mui-active\r\n{\r\n    display: block;\r\n}\r\n\r\n.mui-popover\r\n{\r\n    position: absolute;\r\n    z-index: 999;\r\n\r\n    display: none;\r\n\r\n    width: 280px;\r\n\r\n    -webkit-transition: opacity .3s;\r\n            transition: opacity .3s;\r\n    -webkit-transition-property: opacity;\r\n            transition-property: opacity;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n\r\n    opacity: 0;\r\n    border-radius: 7px;\r\n    background-color: #f7f7f7;\r\n    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, .1);\r\n            box-shadow: 0 0 15px rgba(0, 0, 0, .1);\r\n}\r\n.mui-popover .mui-popover-arrow\r\n{\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: -25px;\r\n    left: 0;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 26px;\r\n    height: 26px;\r\n}\r\n.mui-popover .mui-popover-arrow:after\r\n{\r\n    position: absolute;\r\n    top: 19px;\r\n    left: 0;\r\n\r\n    width: 26px;\r\n    height: 26px;\r\n\r\n    content: ' ';\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n\r\n    border-radius: 3px;\r\n    background: #f7f7f7;\r\n}\r\n.mui-popover .mui-popover-arrow.mui-bottom\r\n{\r\n    top: 100%;\r\n    left: -26px;\r\n\r\n    margin-top: -1px;\r\n}\r\n.mui-popover .mui-popover-arrow.mui-bottom:after\r\n{\r\n    top: -19px;\r\n    left: 0;\r\n}\r\n.mui-popover.mui-popover-action\r\n{\r\n    bottom: 0;\r\n\r\n    width: 100%;\r\n\r\n    -webkit-transition: -webkit-transform .3s, opacity .3s;\r\n            transition:         transform .3s, opacity .3s;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n\r\n    border-radius: 0;\r\n    background: none;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n.mui-popover.mui-popover-action .mui-popover-arrow\r\n{\r\n    display: none;\r\n}\r\n.mui-popover.mui-popover-action.mui-popover-bottom\r\n{\r\n    position: fixed;\r\n}\r\n.mui-popover.mui-popover-action.mui-active\r\n{\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n}\r\n.mui-popover.mui-popover-action .mui-table-view\r\n{\r\n    margin: 8px;\r\n\r\n    text-align: center;\r\n\r\n    color: #007aff;\r\n    border-radius: 4px;\r\n}\r\n.mui-popover.mui-popover-action .mui-table-view .mui-table-view-cell:after\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n\r\n    background-color: #c8c7cc;\r\n}\r\n.mui-popover.mui-popover-action .mui-table-view small\r\n{\r\n    font-weight: 400;\r\n    line-height: 1.3;\r\n\r\n    display: block;\r\n}\r\n.mui-popover.mui-active\r\n{\r\n    display: block;\r\n\r\n    opacity: 1;\r\n}\r\n.mui-popover .mui-bar ~ .mui-table-view\r\n{\r\n    padding-top: 44px;\r\n}\r\n\r\n.mui-backdrop\r\n{\r\n    position: fixed;\r\n    z-index: 998;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    background-color: rgba(0, 0, 0, .3);\r\n}\r\n\r\n.mui-bar-backdrop.mui-backdrop\r\n{\r\n    bottom: 50px;\r\n\r\n    background: none;\r\n}\r\n\r\n.mui-backdrop-action.mui-backdrop\r\n{\r\n    background-color: rgba(0, 0, 0, .3);\r\n}\r\n\r\n.mui-bar-backdrop.mui-backdrop, .mui-backdrop-action.mui-backdrop\r\n{\r\n    opacity: 0;\r\n}\r\n.mui-bar-backdrop.mui-backdrop.mui-active, .mui-backdrop-action.mui-backdrop.mui-active\r\n{\r\n    -webkit-transition: all .4s ease;\r\n            transition: all .4s ease;\r\n\r\n    opacity: 1;\r\n}\r\n\r\n.mui-popover .mui-btn-block\r\n{\r\n    margin-bottom: 5px;\r\n}\r\n.mui-popover .mui-btn-block:last-child\r\n{\r\n    margin-bottom: 0;\r\n}\r\n\r\n.mui-popover .mui-bar\r\n{\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.mui-popover .mui-bar-nav\r\n{\r\n    border-bottom: 1px solid rgba(0, 0, 0, .15);\r\n    border-top-left-radius: 12px;\r\n    border-top-right-radius: 12px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.mui-popover .mui-scroll-wrapper\r\n{\r\n    margin: 7px 0;\r\n\r\n    border-radius: 7px;\r\n    background-clip: padding-box;\r\n}\r\n\r\n.mui-popover .mui-scroll .mui-table-view\r\n{\r\n    max-height: none;\r\n}\r\n\r\n.mui-popover .mui-table-view\r\n{\r\n    overflow: auto;\r\n\r\n    max-height: 300px;\r\n    margin-bottom: 0;\r\n\r\n    border-radius: 7px;\r\n    background-color: #f7f7f7;\r\n    background-image: none;\r\n\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.mui-popover .mui-table-view:before, .mui-popover .mui-table-view:after\r\n{\r\n    height: 0;\r\n}\r\n.mui-popover .mui-table-view .mui-table-view-cell:first-child,\r\n.mui-popover .mui-table-view .mui-table-view-cell:first-child > a:not(.mui-btn)\r\n{\r\n    border-top-left-radius: 12px;\r\n    border-top-right-radius: 12px;\r\n}\r\n.mui-popover .mui-table-view .mui-table-view-cell:last-child,\r\n.mui-popover .mui-table-view .mui-table-view-cell:last-child > a:not(.mui-btn)\r\n{\r\n    border-bottom-right-radius: 12px;\r\n    border-bottom-left-radius: 12px;\r\n}\r\n\r\n.mui-popover.mui-bar-popover .mui-table-view\r\n{\r\n    width: 106px;\r\n}\r\n.mui-popover.mui-bar-popover .mui-table-view .mui-table-view-cell\r\n{\r\n    padding: 11px 15px 11px 15px;\r\n\r\n    background-position: 0 100%;\r\n}\r\n.mui-popover.mui-bar-popover .mui-table-view .mui-table-view-cell > a:not(.mui-btn)\r\n{\r\n    margin: -11px -15px -11px -15px;\r\n}\r\n\r\n.mui-popup-backdrop\r\n{\r\n    position: fixed;\r\n    z-index: 998;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    -webkit-transition-duration: 400ms;\r\n            transition-duration: 400ms;\r\n\r\n    opacity: 0;\r\n    background: rgba(0, 0, 0, .4);\r\n}\r\n.mui-popup-backdrop.mui-active\r\n{\r\n    opacity: 1;\r\n}\r\n\r\n.mui-popup\r\n{\r\n    position: fixed;\r\n    z-index: 10000;\r\n    top: 50%;\r\n    left: 50%;\r\n\r\n    display: none;\r\n    overflow: hidden;\r\n\r\n    width: 270px;\r\n\r\n    -webkit-transition-property: -webkit-transform,opacity;\r\n            transition-property:         transform,opacity;\r\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);\r\n            transform: translate3d(-50%, -50%, 0) scale(1.185);\r\n    text-align: center;\r\n\r\n    opacity: 0;\r\n    color: #000;\r\n    border-radius: 13px;\r\n}\r\n.mui-popup.mui-popup-in\r\n{\r\n    display: block;\r\n\r\n    -webkit-transition-duration: 400ms;\r\n            transition-duration: 400ms;\r\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\r\n            transform: translate3d(-50%, -50%, 0) scale(1);\r\n\r\n    opacity: 1;\r\n}\r\n.mui-popup.mui-popup-out\r\n{\r\n    -webkit-transition-duration: 400ms;\r\n            transition-duration: 400ms;\r\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\r\n            transform: translate3d(-50%, -50%, 0) scale(1);\r\n\r\n    opacity: 0;\r\n}\r\n\r\n.mui-popup-inner\r\n{\r\n    position: relative;\r\n\r\n    padding: 15px;\r\n\r\n    border-radius: 13px 13px 0 0;\r\n    background: rgba(255, 255, 255, .95);\r\n}\r\n.mui-popup-inner:after\r\n{\r\n    position: absolute;\r\n    z-index: 15;\r\n    top: auto;\r\n    right: auto;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    display: block;\r\n\r\n    width: 100%;\r\n    height: 1px;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleY(.5);\r\n            transform: scaleY(.5);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n\r\n    background-color: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.mui-popup-title\r\n{\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.mui-popup-title + .mui-popup-text\r\n{\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n\r\n    margin: 5px 0 0;\r\n}\r\n\r\n.mui-popup-buttons\r\n{\r\n    position: relative;\r\n\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display:         flex;\r\n\r\n    height: 44px;\r\n\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n}\r\n\r\n.mui-popup-button\r\n{\r\n    font-size: 17px;\r\n    line-height: 44px;\r\n\r\n    position: relative;\r\n\r\n    display: block;\r\n    overflow: hidden;\r\n\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 44px;\r\n    padding: 0 5px;\r\n\r\n    cursor: pointer;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n\r\n    color: #007aff;\r\n    background: rgba(255, 255, 255, .95);\r\n\r\n    -webkit-box-flex: 1;\r\n}\r\n.mui-popup-button:after\r\n{\r\n    position: absolute;\r\n    z-index: 15;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: auto;\r\n    left: auto;\r\n\r\n    display: block;\r\n\r\n    width: 1px;\r\n    height: 100%;\r\n\r\n    content: '';\r\n    -webkit-transform: scaleX(.5);\r\n            transform: scaleX(.5);\r\n    -webkit-transform-origin: 100% 50%;\r\n            transform-origin: 100% 50%;\r\n\r\n    background-color: rgba(0, 0, 0, .2);\r\n}\r\n.mui-popup-button:first-child\r\n{\r\n    border-radius: 0 0 0 13px;\r\n}\r\n.mui-popup-button:first-child:last-child\r\n{\r\n    border-radius: 0 0 13px 13px;\r\n}\r\n.mui-popup-button:last-child\r\n{\r\n    border-radius: 0 0 13px 0;\r\n}\r\n.mui-popup-button:last-child:after\r\n{\r\n    display: none;\r\n}\r\n.mui-popup-button.mui-popup-button-bold\r\n{\r\n    font-weight: 600;\r\n}\r\n\r\n.mui-popup-input input\r\n{\r\n    font-size: 14px;\r\n\r\n    width: 100%;\r\n    height: 26px;\r\n    margin: 15px 0 0;\r\n    padding: 0 5px;\r\n\r\n    border: 1px solid rgba(0, 0, 0, .3);\r\n    border-radius: 0;\r\n    background: #fff;\r\n}\r\n\r\n.mui-plus.mui-android .mui-popup-backdrop\r\n{\r\n    -webkit-transition-duration: 1ms;\r\n            transition-duration: 1ms;\r\n}\r\n\r\n.mui-plus.mui-android .mui-popup\r\n{\r\n    -webkit-transition-duration: 1ms;\r\n            transition-duration: 1ms;\r\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\r\n            transform: translate3d(-50%, -50%, 0) scale(1);\r\n}\r\n\r\n/* === Progress Bar === */\r\n.mui-progressbar\r\n{\r\n    position: relative;\r\n\r\n    display: block;\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n    height: 2px;\r\n\r\n    -webkit-transform-origin: center top;\r\n            transform-origin: center top;\r\n    vertical-align: middle;\r\n\r\n    border-radius: 2px;\r\n    background: #b6b6b6;\r\n\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n}\r\n.mui-progressbar span\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    -webkit-transition: 150ms;\r\n            transition: 150ms;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n\r\n    background: #007aff;\r\n}\r\n.mui-progressbar.mui-progressbar-infinite:before\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    content: '';\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n    -webkit-transform-origin: left center;\r\n            transform-origin: left center;\r\n    -webkit-animation: mui-progressbar-infinite 1s linear infinite;\r\n            animation: mui-progressbar-infinite 1s linear infinite;\r\n\r\n    background: #007aff;\r\n}\r\n\r\nbody > .mui-progressbar\r\n{\r\n    position: absolute;\r\n    z-index: 10000;\r\n    top: 44px;\r\n    left: 0;\r\n\r\n    border-radius: 0;\r\n}\r\n\r\n.mui-progressbar-in\r\n{\r\n    -webkit-animation: mui-progressbar-in 300ms forwards;\r\n            animation: mui-progressbar-in 300ms forwards;\r\n}\r\n\r\n.mui-progressbar-out\r\n{\r\n    -webkit-animation: mui-progressbar-out 300ms forwards;\r\n            animation: mui-progressbar-out 300ms forwards;\r\n}\r\n\r\n@-webkit-keyframes mui-progressbar-in\r\n{\r\n    from\r\n    {\r\n        -webkit-transform: scaleY(0);\r\n\r\n        opacity: 0;\r\n    }\r\n\r\n    to\r\n    {\r\n        -webkit-transform: scaleY(1);\r\n\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes mui-progressbar-in\r\n{\r\n    from\r\n    {\r\n        transform: scaleY(0);\r\n\r\n        opacity: 0;\r\n    }\r\n\r\n    to\r\n    {\r\n        transform: scaleY(1);\r\n\r\n        opacity: 1;\r\n    }\r\n}\r\n@-webkit-keyframes mui-progressbar-out\r\n{\r\n    from\r\n    {\r\n        -webkit-transform: scaleY(1);\r\n\r\n        opacity: 1;\r\n    }\r\n\r\n    to\r\n    {\r\n        -webkit-transform: scaleY(0);\r\n\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes mui-progressbar-out\r\n{\r\n    from\r\n    {\r\n        transform: scaleY(1);\r\n\r\n        opacity: 1;\r\n    }\r\n\r\n    to\r\n    {\r\n        transform: scaleY(0);\r\n\r\n        opacity: 0;\r\n    }\r\n}\r\n@-webkit-keyframes mui-progressbar-infinite\r\n{\r\n    0%\r\n    {\r\n        -webkit-transform: translate3d(-50%, 0, 0) scaleX(.5);\r\n    }\r\n\r\n    100%\r\n    {\r\n        -webkit-transform: translate3d(100%, 0, 0) scaleX(.5);\r\n    }\r\n}\r\n@keyframes mui-progressbar-infinite\r\n{\r\n    0%\r\n    {\r\n        transform: translate3d(-50%, 0, 0) scaleX(.5);\r\n    }\r\n\r\n    100%\r\n    {\r\n        transform: translate3d(100%, 0, 0) scaleX(.5);\r\n    }\r\n}\r\n.mui-pagination\r\n{\r\n    display: inline-block;\r\n\r\n    margin: 0 auto;\r\n    padding-left: 0;\r\n\r\n    border-radius: 6px;\r\n}\r\n.mui-pagination > li\r\n{\r\n    display: inline;\r\n}\r\n.mui-pagination > li > a,\r\n.mui-pagination > li > span\r\n{\r\n    line-height: 1.428571429;\r\n\r\n    position: relative;\r\n\r\n    float: left;\r\n\r\n    margin-left: -1px;\r\n    padding: 6px 12px;\r\n\r\n    text-decoration: none;\r\n\r\n    color: #007aff;\r\n    border: 1px solid #ddd;\r\n    background-color: #fff;\r\n}\r\n.mui-pagination > li:first-child > a,\r\n.mui-pagination > li:first-child > span\r\n{\r\n    margin-left: 0;\r\n\r\n    border-top-left-radius: 6px;\r\n    border-bottom-left-radius: 6px;\r\n    background-clip: padding-box;\r\n}\r\n.mui-pagination > li:last-child > a,\r\n.mui-pagination > li:last-child > span\r\n{\r\n    border-top-right-radius: 6px;\r\n    border-bottom-right-radius: 6px;\r\n    background-clip: padding-box;\r\n}\r\n.mui-pagination > li:active > a, .mui-pagination > li:active > a:active,\r\n.mui-pagination > li:active > span,\r\n.mui-pagination > li:active > span:active,\r\n.mui-pagination > li.mui-active > a,\r\n.mui-pagination > li.mui-active > a:active,\r\n.mui-pagination > li.mui-active > span,\r\n.mui-pagination > li.mui-active > span:active\r\n{\r\n    z-index: 2;\r\n\r\n    cursor: default;\r\n\r\n    color: #fff;\r\n    border-color: #007aff;\r\n    background-color: #007aff;\r\n}\r\n.mui-pagination > li.mui-disabled > span,\r\n.mui-pagination > li.mui-disabled > span:active,\r\n.mui-pagination > li.mui-disabled > a,\r\n.mui-pagination > li.mui-disabled > a:active\r\n{\r\n    opacity: .6;\r\n    color: #777;\r\n    border: 1px solid #ddd;\r\n    background-color: #fff;\r\n}\r\n\r\n.mui-pagination-lg > li > a,\r\n.mui-pagination-lg > li > span\r\n{\r\n    font-size: 18px;\r\n\r\n    padding: 10px 16px;\r\n}\r\n\r\n.mui-pagination-sm > li > a,\r\n.mui-pagination-sm > li > span\r\n{\r\n    font-size: 12px;\r\n\r\n    padding: 5px 10px;\r\n}\r\n\r\n.mui-pager\r\n{\r\n    padding-left: 0;\r\n\r\n    list-style: none;\r\n\r\n    text-align: center;\r\n}\r\n.mui-pager:before, .mui-pager:after\r\n{\r\n    display: table;\r\n\r\n    content: ' ';\r\n}\r\n.mui-pager:after\r\n{\r\n    clear: both;\r\n}\r\n.mui-pager li\r\n{\r\n    display: inline;\r\n}\r\n.mui-pager li > a,\r\n.mui-pager li > span\r\n{\r\n    display: inline-block;\r\n\r\n    padding: 5px 14px;\r\n\r\n    border: 1px solid #ddd;\r\n    border-radius: 6px;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n}\r\n.mui-pager li:active > a, .mui-pager li:active > span, .mui-pager li.mui-active > a, .mui-pager li.mui-active > span\r\n{\r\n    cursor: default;\r\n    text-decoration: none;\r\n\r\n    color: #fff;\r\n    border-color: #007aff;\r\n    background-color: #007aff;\r\n}\r\n.mui-pager .mui-next > a,\r\n.mui-pager .mui-next > span\r\n{\r\n    float: right;\r\n}\r\n.mui-pager .mui-previous > a,\r\n.mui-pager .mui-previous > span\r\n{\r\n    float: left;\r\n}\r\n.mui-pager .mui-disabled > a,\r\n.mui-pager .mui-disabled > a:active,\r\n.mui-pager .mui-disabled > span,\r\n.mui-pager .mui-disabled > span:active\r\n{\r\n    opacity: .6;\r\n    color: #777;\r\n    border: 1px solid #ddd;\r\n    background-color: #fff;\r\n}\r\n\r\n.mui-modal\r\n{\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n    min-height: 100%;\r\n\r\n    -webkit-transition: -webkit-transform .25s, opacity 1ms .25s;\r\n            transition:         transform .25s, opacity 1ms .25s;\r\n    -webkit-transition-timing-function: cubic-bezier(.1, .5, .1, 1);\r\n            transition-timing-function: cubic-bezier(.1, .5, .1, 1);\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n\r\n    opacity: 0;\r\n    background-color: #fff;\r\n}\r\n.mui-modal.mui-active\r\n{\r\n    height: 100%;\r\n\r\n    -webkit-transition: -webkit-transform .25s;\r\n            transition:         transform .25s;\r\n    -webkit-transition-timing-function: cubic-bezier(.1, .5, .1, 1);\r\n            transition-timing-function: cubic-bezier(.1, .5, .1, 1);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n\r\n    opacity: 1;\r\n}\r\n\r\n.mui-android .mui-modal .mui-bar\r\n{\r\n    position: static;\r\n}\r\n\r\n.mui-android .mui-modal .mui-bar-nav ~ .mui-content\r\n{\r\n    padding-top: 0;\r\n}\r\n\r\n.mui-slider\r\n{\r\n    position: relative;\r\n    z-index: 1;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n}\r\n.mui-slider .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active\r\n{\r\n    border-bottom: 0;\r\n}\r\n.mui-slider .mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-group .mui-slider-item\r\n{\r\n    border-top: 1px solid #c8c7cc;\r\n    border-bottom: 1px solid #c8c7cc;\r\n}\r\n.mui-slider .mui-slider-group\r\n{\r\n    font-size: 0;\r\n\r\n    position: relative;\r\n\r\n    -webkit-transition: all 0s linear;\r\n            transition: all 0s linear;\r\n    white-space: nowrap;\r\n}\r\n.mui-slider .mui-slider-group .mui-slider-item\r\n{\r\n    font-size: 14px;\r\n\r\n    position: relative;\r\n\r\n    display: inline-block;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    vertical-align: top;\r\n    white-space: normal;\r\n}\r\n.mui-slider .mui-slider-group .mui-slider-item > a:not(.mui-control-item)\r\n{\r\n    line-height: 0;\r\n\r\n    position: relative;\r\n\r\n    display: block;\r\n}\r\n.mui-slider .mui-slider-group .mui-slider-item img\r\n{\r\n    width: 100%;\r\n}\r\n.mui-slider .mui-slider-group .mui-slider-item .mui-table-view:before, .mui-slider .mui-slider-group .mui-slider-item .mui-table-view:after\r\n{\r\n    height: 0;\r\n}\r\n.mui-slider .mui-slider-group.mui-slider-loop\r\n{\r\n    -webkit-transform: translate(-100%, 0px);\r\n            transform: translate(-100%, 0px);\r\n}\r\n\r\n.mui-slider-title\r\n{\r\n    line-height: 30px;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    width: 100%;\r\n    height: 30px;\r\n    margin: 0;\r\n\r\n    text-align: left;\r\n    text-indent: 12px;\r\n\r\n    opacity: .8;\r\n    background-color: #000;\r\n}\r\n\r\n.mui-slider-indicator\r\n{\r\n    position: absolute;\r\n    bottom: 8px;\r\n\r\n    width: 100%;\r\n\r\n    text-align: center;\r\n\r\n    background: none;\r\n}\r\n.mui-slider-indicator.mui-segmented-control\r\n{\r\n    position: relative;\r\n    bottom: auto;\r\n}\r\n.mui-slider-indicator .mui-indicator\r\n{\r\n    display: inline-block;\r\n\r\n    width: 6px;\r\n    height: 6px;\r\n    margin: 1px 6px;\r\n\r\n    cursor: pointer;\r\n\r\n    border-radius: 50%;\r\n    background: #aaa;\r\n    -webkit-box-shadow: 0 0 1px 1px rgba(130, 130, 130, .7);\r\n            box-shadow: 0 0 1px 1px rgba(130, 130, 130, .7);\r\n}\r\n.mui-slider-indicator .mui-active.mui-indicator\r\n{\r\n    background: #fff;\r\n}\r\n.mui-slider-indicator .mui-icon\r\n{\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n\r\n    width: 40px;\r\n    height: 30px;\r\n    margin: 3px;\r\n\r\n    text-align: center;\r\n\r\n    border: 1px solid #ddd;\r\n}\r\n.mui-slider-indicator .mui-number\r\n{\r\n    line-height: 32px;\r\n\r\n    display: inline-block;\r\n\r\n    width: 58px;\r\n}\r\n.mui-slider-indicator .mui-number span\r\n{\r\n    color: #ff5053;\r\n}\r\n\r\n.mui-slider-progress-bar\r\n{\r\n    z-index: 1;\r\n\r\n    height: 2px;\r\n\r\n    -webkit-transform: translateZ(0);\r\n            transform: translateZ(0);\r\n}\r\n\r\n.mui-switch\r\n{\r\n    position: relative;\r\n\r\n    display: block;\r\n\r\n    width: 74px;\r\n    height: 30px;\r\n\r\n    -webkit-transition-timing-function: ease-in-out;\r\n            transition-timing-function: ease-in-out;\r\n    -webkit-transition-duration: .2s;\r\n            transition-duration: .2s;\r\n    -webkit-transition-property: background-color, border;\r\n            transition-property: background-color, border;\r\n\r\n    border: 2px solid #ddd;\r\n    border-radius: 20px;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n}\r\n.mui-switch.mui-disabled\r\n{\r\n    opacity: .3;\r\n}\r\n.mui-switch .mui-switch-handle\r\n{\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: -1px;\r\n    left: -1px;\r\n\r\n    width: 28px;\r\n    height: 28px;\r\n\r\n    -webkit-transition: .2s ease-in-out;\r\n            transition: .2s ease-in-out;\r\n    -webkit-transition-property: -webkit-transform, width,left;\r\n            transition-property:         transform, width,left;\r\n\r\n    border-radius: 16px;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .4);\r\n            box-shadow: 0 2px 5px rgba(0, 0, 0, .4);\r\n}\r\n.mui-switch:before\r\n{\r\n    font-size: 13px;\r\n\r\n    position: absolute;\r\n    top: 3px;\r\n    right: 11px;\r\n\r\n    content: 'Off';\r\n    text-transform: uppercase;\r\n\r\n    color: #999;\r\n}\r\n.mui-switch.mui-dragging\r\n{\r\n    border-color: #f7f7f7;\r\n    background-color: #f7f7f7;\r\n}\r\n.mui-switch.mui-dragging .mui-switch-handle\r\n{\r\n    width: 38px;\r\n}\r\n.mui-switch.mui-dragging.mui-active .mui-switch-handle\r\n{\r\n    left: -11px;\r\n\r\n    width: 38px;\r\n}\r\n.mui-switch.mui-active\r\n{\r\n    border-color: #4cd964;\r\n    background-color: #4cd964;\r\n}\r\n.mui-switch.mui-active .mui-switch-handle\r\n{\r\n    -webkit-transform: translate(43px, 0);\r\n            transform: translate(43px, 0);\r\n}\r\n.mui-switch.mui-active:before\r\n{\r\n    right: auto;\r\n    left: 15px;\r\n\r\n    content: 'On';\r\n\r\n    color: #fff;\r\n}\r\n.mui-switch input[type='checkbox']\r\n{\r\n    display: none;\r\n}\r\n\r\n.mui-switch-mini\r\n{\r\n    width: 47px;\r\n}\r\n.mui-switch-mini:before\r\n{\r\n    display: none;\r\n}\r\n.mui-switch-mini.mui-active .mui-switch-handle\r\n{\r\n    -webkit-transform: translate(16px, 0);\r\n            transform: translate(16px, 0);\r\n}\r\n\r\n.mui-switch-blue.mui-active\r\n{\r\n    border: 2px solid #007aff;\r\n    background-color: #007aff;\r\n}\r\n\r\n.mui-content.mui-fade\r\n{\r\n    left: 0;\r\n\r\n    opacity: 0;\r\n}\r\n.mui-content.mui-fade.mui-in\r\n{\r\n    opacity: 1;\r\n}\r\n.mui-content.mui-sliding\r\n{\r\n    z-index: 2;\r\n\r\n    -webkit-transition: -webkit-transform .4s;\r\n            transition:         transform .4s;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n}\r\n.mui-content.mui-sliding.mui-left\r\n{\r\n    z-index: 1;\r\n\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n}\r\n.mui-content.mui-sliding.mui-right\r\n{\r\n    z-index: 3;\r\n\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n}\r\n\r\n.mui-navigate-right:after,\r\n.mui-push-left:after,\r\n.mui-push-right:after\r\n{\r\n    font-family: Muiicons;\r\n    font-size: inherit;\r\n    line-height: 1;\r\n\r\n    position: absolute;\r\n    top: 50%;\r\n\r\n    display: inline-block;\r\n\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    text-decoration: none;\r\n\r\n    color: #bbb;\r\n\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.mui-push-left:after\r\n{\r\n    left: 15px;\r\n\r\n    content: '\\E582';\r\n}\r\n\r\n.mui-navigate-right:after,\r\n.mui-push-right:after\r\n{\r\n    right: 15px;\r\n\r\n    content: '\\E583';\r\n}\r\n\r\n.mui-pull-top-pocket, .mui-pull-bottom-pocket\r\n{\r\n    position: absolute;\r\n    left: 0;\r\n\r\n    display: block;\r\n    visibility: hidden;\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n    height: 50px;\r\n}\r\n\r\n.mui-plus-pullrefresh .mui-pull-top-pocket, .mui-plus-pullrefresh .mui-pull-bottom-pocket\r\n{\r\n    display: none;\r\n    visibility: visible;\r\n}\r\n\r\n.mui-pull-top-pocket\r\n{\r\n    top: 0;\r\n}\r\n\r\n.mui-bar-nav ~ .mui-content .mui-pull-top-pocket\r\n{\r\n    top: 44px;\r\n}\r\n\r\n.mui-bar-nav ~ .mui-bar-header-secondary ~ .mui-content .mui-pull-top-pocket\r\n{\r\n    top: 88px;\r\n}\r\n\r\n.mui-pull-bottom-pocket\r\n{\r\n    position: relative;\r\n    bottom: 0;\r\n\r\n    height: 40px;\r\n}\r\n.mui-pull-bottom-pocket .mui-pull-loading\r\n{\r\n    visibility: hidden;\r\n}\r\n.mui-pull-bottom-pocket .mui-pull-loading.mui-in\r\n{\r\n    display: inline-block;\r\n}\r\n\r\n.mui-pull\r\n{\r\n    font-weight: bold;\r\n\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 10px;\r\n    left: 0;\r\n\r\n    text-align: center;\r\n\r\n    color: #777;\r\n}\r\n\r\n.mui-pull-loading\r\n{\r\n    margin-right: 10px;\r\n\r\n    -webkit-transition: -webkit-transform .4s;\r\n            transition:         transform .4s;\r\n    -webkit-transition-duration: 400ms;\r\n            transition-duration: 400ms;\r\n    vertical-align: middle;\r\n}\r\n\r\n.mui-pull-loading.mui-reverse\r\n{\r\n    -webkit-transform: rotate(180deg) translateZ(0);\r\n            transform: rotate(180deg) translateZ(0);\r\n}\r\n\r\n.mui-pull-caption\r\n{\r\n    font-size: 15px;\r\n    line-height: 24px;\r\n\r\n    position: relative;\r\n\r\n    display: inline-block;\r\n    overflow: visible;\r\n\r\n    margin-top: 0;\r\n\r\n    vertical-align: middle;\r\n}\r\n.mui-pull-caption span\r\n{\r\n    display: none;\r\n}\r\n.mui-pull-caption span.mui-in\r\n{\r\n    display: inline;\r\n}\r\n\r\n.mui-toast-container\r\n{\r\n    line-height: 17px;\r\n\r\n    position: fixed;\r\n    z-index: 9999;\r\n    bottom: 50px;\r\n    left: 50%;\r\n\r\n    -webkit-transition: opacity .3s;\r\n            transition: opacity .3s;\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0);\r\n\r\n    opacity: 0;\r\n}\r\n.mui-toast-container.mui-active\r\n{\r\n    opacity: .9;\r\n}\r\n\r\n.mui-toast-message\r\n{\r\n    font-size: 14px;\r\n\r\n    padding: 10px 25px;\r\n\r\n    text-align: center;\r\n\r\n    color: #fff;\r\n    border-radius: 6px;\r\n    background-color: #323232;\r\n}\r\n\r\n.mui-numbox\r\n{\r\n    position: relative;\r\n\r\n    display: inline-block;\r\n    overflow: hidden;\r\n\r\n    width: 120px;\r\n    height: 35px;\r\n    padding: 0 40px 0 40px;\r\n\r\n    vertical-align: top;\r\n    vertical-align: middle;\r\n\r\n    border: solid 1px #bbb;\r\n    border-radius: 3px;\r\n    background-color: #efeff4;\r\n}\r\n.mui-numbox [class*=numbox-btn], .mui-numbox [class*=btn-numbox]\r\n{\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    line-height: 100%;\r\n\r\n    position: absolute;\r\n    top: 0;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 40px;\r\n    height: 100%;\r\n    padding: 0;\r\n\r\n    color: #555;\r\n    border: none;\r\n    border-radius: 0;\r\n    background-color: #f9f9f9;\r\n}\r\n.mui-numbox [class*=numbox-btn]:active, .mui-numbox [class*=btn-numbox]:active\r\n{\r\n    background-color: #ccc;\r\n}\r\n.mui-numbox [class*=numbox-btn][disabled], .mui-numbox [class*=btn-numbox][disabled]\r\n{\r\n    color: #c0c0c0;\r\n}\r\n.mui-numbox .mui-numbox-btn-plus, .mui-numbox .mui-btn-numbox-plus\r\n{\r\n    right: 0;\r\n\r\n    border-top-right-radius: 3px;\r\n    border-bottom-right-radius: 3px;\r\n}\r\n.mui-numbox .mui-numbox-btn-minus, .mui-numbox .mui-btn-numbox-minus\r\n{\r\n    left: 0;\r\n\r\n    border-top-left-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n}\r\n.mui-numbox .mui-numbox-input, .mui-numbox .mui-input-numbox\r\n{\r\n    display: inline-block;\r\n    overflow: hidden;\r\n\r\n    width: 100% !important;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0 3px !important;\r\n\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    word-break: normal;\r\n\r\n    border: none !important;\r\n    border-right: solid 1px #ccc !important;\r\n    border-left: solid 1px #ccc !important;\r\n    border-radius: 0 !important;\r\n}\r\n\r\n.mui-input-row .mui-numbox\r\n{\r\n    float: right;\r\n\r\n    margin: 2px 8px;\r\n}\r\n\r\n@font-face {\r\n    font-family: Muiicons;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n    src: url(" + __webpack_require__(13) + ") format('truetype');\r\n}\r\n.mui-icon\r\n{\r\n    font-family: Muiicons;\r\n    font-size: 24px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    line-height: 1;\r\n\r\n    display: inline-block;\r\n\r\n    text-decoration: none;\r\n\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n.mui-icon.mui-active\r\n{\r\n    color: #007aff;\r\n}\r\n.mui-icon.mui-right:before\r\n{\r\n    float: right;\r\n\r\n    padding-left: .2em;\r\n}\r\n\r\n.mui-icon-contact:before\r\n{\r\n    content: '\\E100';\r\n}\r\n\r\n.mui-icon-person:before\r\n{\r\n    content: '\\E101';\r\n}\r\n\r\n.mui-icon-personadd:before\r\n{\r\n    content: '\\E102';\r\n}\r\n\r\n.mui-icon-contact-filled:before\r\n{\r\n    content: '\\E130';\r\n}\r\n\r\n.mui-icon-person-filled:before\r\n{\r\n    content: '\\E131';\r\n}\r\n\r\n.mui-icon-personadd-filled:before\r\n{\r\n    content: '\\E132';\r\n}\r\n\r\n.mui-icon-phone:before\r\n{\r\n    content: '\\E200';\r\n}\r\n\r\n.mui-icon-email:before\r\n{\r\n    content: '\\E201';\r\n}\r\n\r\n.mui-icon-chatbubble:before\r\n{\r\n    content: '\\E202';\r\n}\r\n\r\n.mui-icon-chatboxes:before\r\n{\r\n    content: '\\E203';\r\n}\r\n\r\n.mui-icon-phone-filled:before\r\n{\r\n    content: '\\E230';\r\n}\r\n\r\n.mui-icon-email-filled:before\r\n{\r\n    content: '\\E231';\r\n}\r\n\r\n.mui-icon-chatbubble-filled:before\r\n{\r\n    content: '\\E232';\r\n}\r\n\r\n.mui-icon-chatboxes-filled:before\r\n{\r\n    content: '\\E233';\r\n}\r\n\r\n.mui-icon-weibo:before\r\n{\r\n    content: '\\E260';\r\n}\r\n\r\n.mui-icon-weixin:before\r\n{\r\n    content: '\\E261';\r\n}\r\n\r\n.mui-icon-pengyouquan:before\r\n{\r\n    content: '\\E262';\r\n}\r\n\r\n.mui-icon-chat:before\r\n{\r\n    content: '\\E263';\r\n}\r\n\r\n.mui-icon-qq:before\r\n{\r\n    content: '\\E264';\r\n}\r\n\r\n.mui-icon-videocam:before\r\n{\r\n    content: '\\E300';\r\n}\r\n\r\n.mui-icon-camera:before\r\n{\r\n    content: '\\E301';\r\n}\r\n\r\n.mui-icon-mic:before\r\n{\r\n    content: '\\E302';\r\n}\r\n\r\n.mui-icon-location:before\r\n{\r\n    content: '\\E303';\r\n}\r\n\r\n.mui-icon-mic-filled:before, .mui-icon-speech:before\r\n{\r\n    content: '\\E332';\r\n}\r\n\r\n.mui-icon-location-filled:before\r\n{\r\n    content: '\\E333';\r\n}\r\n\r\n.mui-icon-micoff:before\r\n{\r\n    content: '\\E360';\r\n}\r\n\r\n.mui-icon-image:before\r\n{\r\n    content: '\\E363';\r\n}\r\n\r\n.mui-icon-map:before\r\n{\r\n    content: '\\E364';\r\n}\r\n\r\n.mui-icon-compose:before\r\n{\r\n    content: '\\E400';\r\n}\r\n\r\n.mui-icon-trash:before\r\n{\r\n    content: '\\E401';\r\n}\r\n\r\n.mui-icon-upload:before\r\n{\r\n    content: '\\E402';\r\n}\r\n\r\n.mui-icon-download:before\r\n{\r\n    content: '\\E403';\r\n}\r\n\r\n.mui-icon-close:before\r\n{\r\n    content: '\\E404';\r\n}\r\n\r\n.mui-icon-redo:before\r\n{\r\n    content: '\\E405';\r\n}\r\n\r\n.mui-icon-undo:before\r\n{\r\n    content: '\\E406';\r\n}\r\n\r\n.mui-icon-refresh:before\r\n{\r\n    content: '\\E407';\r\n}\r\n\r\n.mui-icon-star:before\r\n{\r\n    content: '\\E408';\r\n}\r\n\r\n.mui-icon-plus:before\r\n{\r\n    content: '\\E409';\r\n}\r\n\r\n.mui-icon-minus:before\r\n{\r\n    content: '\\E410';\r\n}\r\n\r\n.mui-icon-circle:before, .mui-icon-checkbox:before\r\n{\r\n    content: '\\E411';\r\n}\r\n\r\n.mui-icon-close-filled:before, .mui-icon-clear:before\r\n{\r\n    content: '\\E434';\r\n}\r\n\r\n.mui-icon-refresh-filled:before\r\n{\r\n    content: '\\E437';\r\n}\r\n\r\n.mui-icon-star-filled:before\r\n{\r\n    content: '\\E438';\r\n}\r\n\r\n.mui-icon-plus-filled:before\r\n{\r\n    content: '\\E439';\r\n}\r\n\r\n.mui-icon-minus-filled:before\r\n{\r\n    content: '\\E440';\r\n}\r\n\r\n.mui-icon-circle-filled:before\r\n{\r\n    content: '\\E441';\r\n}\r\n\r\n.mui-icon-checkbox-filled:before\r\n{\r\n    content: '\\E442';\r\n}\r\n\r\n.mui-icon-closeempty:before\r\n{\r\n    content: '\\E460';\r\n}\r\n\r\n.mui-icon-refreshempty:before\r\n{\r\n    content: '\\E461';\r\n}\r\n\r\n.mui-icon-reload:before\r\n{\r\n    content: '\\E462';\r\n}\r\n\r\n.mui-icon-starhalf:before\r\n{\r\n    content: '\\E463';\r\n}\r\n\r\n.mui-icon-spinner:before\r\n{\r\n    content: '\\E464';\r\n}\r\n\r\n.mui-icon-spinner-cycle:before\r\n{\r\n    content: '\\E465';\r\n}\r\n\r\n.mui-icon-search:before\r\n{\r\n    content: '\\E466';\r\n}\r\n\r\n.mui-icon-plusempty:before\r\n{\r\n    content: '\\E468';\r\n}\r\n\r\n.mui-icon-forward:before\r\n{\r\n    content: '\\E470';\r\n}\r\n\r\n.mui-icon-back:before, .mui-icon-left-nav:before\r\n{\r\n    content: '\\E471';\r\n}\r\n\r\n.mui-icon-checkmarkempty:before\r\n{\r\n    content: '\\E472';\r\n}\r\n\r\n.mui-icon-home:before\r\n{\r\n    content: '\\E500';\r\n}\r\n\r\n.mui-icon-navigate:before\r\n{\r\n    content: '\\E501';\r\n}\r\n\r\n.mui-icon-gear:before\r\n{\r\n    content: '\\E502';\r\n}\r\n\r\n.mui-icon-paperplane:before\r\n{\r\n    content: '\\E503';\r\n}\r\n\r\n.mui-icon-info:before\r\n{\r\n    content: '\\E504';\r\n}\r\n\r\n.mui-icon-help:before\r\n{\r\n    content: '\\E505';\r\n}\r\n\r\n.mui-icon-locked:before\r\n{\r\n    content: '\\E506';\r\n}\r\n\r\n.mui-icon-more:before\r\n{\r\n    content: '\\E507';\r\n}\r\n\r\n.mui-icon-flag:before\r\n{\r\n    content: '\\E508';\r\n}\r\n\r\n.mui-icon-home-filled:before\r\n{\r\n    content: '\\E530';\r\n}\r\n\r\n.mui-icon-gear-filled:before\r\n{\r\n    content: '\\E532';\r\n}\r\n\r\n.mui-icon-info-filled:before\r\n{\r\n    content: '\\E534';\r\n}\r\n\r\n.mui-icon-help-filled:before\r\n{\r\n    content: '\\E535';\r\n}\r\n\r\n.mui-icon-more-filled:before\r\n{\r\n    content: '\\E537';\r\n}\r\n\r\n.mui-icon-settings:before\r\n{\r\n    content: '\\E560';\r\n}\r\n\r\n.mui-icon-list:before\r\n{\r\n    content: '\\E562';\r\n}\r\n\r\n.mui-icon-bars:before\r\n{\r\n    content: '\\E563';\r\n}\r\n\r\n.mui-icon-loop:before\r\n{\r\n    content: '\\E565';\r\n}\r\n\r\n.mui-icon-paperclip:before\r\n{\r\n    content: '\\E567';\r\n}\r\n\r\n.mui-icon-eye:before\r\n{\r\n    content: '\\E568';\r\n}\r\n\r\n.mui-icon-arrowup:before\r\n{\r\n    content: '\\E580';\r\n}\r\n\r\n.mui-icon-arrowdown:before\r\n{\r\n    content: '\\E581';\r\n}\r\n\r\n.mui-icon-arrowleft:before\r\n{\r\n    content: '\\E582';\r\n}\r\n\r\n.mui-icon-arrowright:before\r\n{\r\n    content: '\\E583';\r\n}\r\n\r\n.mui-icon-arrowthinup:before\r\n{\r\n    content: '\\E584';\r\n}\r\n\r\n.mui-icon-arrowthindown:before\r\n{\r\n    content: '\\E585';\r\n}\r\n\r\n.mui-icon-arrowthinleft:before\r\n{\r\n    content: '\\E586';\r\n}\r\n\r\n.mui-icon-arrowthinright:before\r\n{\r\n    content: '\\E587';\r\n}\r\n\r\n.mui-icon-pulldown:before\r\n{\r\n    content: '\\E588';\r\n}\r\n\r\n.mui-fullscreen\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n.mui-fullscreen.mui-slider .mui-slider-group\r\n{\r\n    height: 100%;\r\n}\r\n.mui-fullscreen .mui-segmented-control ~ .mui-slider-group\r\n{\r\n    position: absolute;\r\n    top: 40px;\r\n    bottom: 0;\r\n\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.mui-fullscreen.mui-slider .mui-slider-item > a\r\n{\r\n    top: 50%;\r\n\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n.mui-fullscreen .mui-off-canvas-wrap .mui-slider-item > a\r\n{\r\n    top: auto;\r\n\r\n    -webkit-transform: none;\r\n            transform: none;\r\n}\r\n\r\n.mui-bar-nav ~ .mui-content .mui-slider.mui-fullscreen\r\n{\r\n    top: 44px;\r\n}\r\n\r\n.mui-bar-tab ~ .mui-content .mui-slider.mui-fullscreen .mui-segmented-control ~ .mui-slider-group\r\n{\r\n    bottom: 50px;\r\n}\r\n\r\n.mui-android.mui-android-4-0 input:focus,\r\n.mui-android.mui-android-4-0 textarea:focus\r\n{\r\n    -webkit-user-modify: inherit;\r\n}\r\n\r\n.mui-android.mui-android-4-2 input,\r\n.mui-android.mui-android-4-2 textarea, .mui-android.mui-android-4-3 input,\r\n.mui-android.mui-android-4-3 textarea\r\n{\r\n    -webkit-user-select: text;\r\n}\r\n\r\n.mui-ios .mui-table-view-cell\r\n{\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n}\r\n\r\n.mui-plus-visible, .mui-wechat-visible\r\n{\r\n    display: none !important;\r\n}\r\n\r\n.mui-plus-hidden, .mui-wechat-hidden\r\n{\r\n    display: block !important;\r\n}\r\n\r\n.mui-tab-item.mui-plus-hidden, .mui-tab-item.mui-wechat-hidden\r\n{\r\n    display: table-cell !important;\r\n}\r\n\r\n.mui-plus .mui-plus-visible, .mui-wechat .mui-wechat-visible\r\n{\r\n    display: block !important;\r\n}\r\n\r\n.mui-plus .mui-tab-item.mui-plus-visible, .mui-wechat .mui-tab-item.mui-wechat-visible\r\n{\r\n    display: table-cell !important;\r\n}\r\n\r\n.mui-plus .mui-plus-hidden, .mui-wechat .mui-wechat-hidden\r\n{\r\n    display: none !important;\r\n}\r\n\r\n.mui-plus.mui-statusbar.mui-statusbar-offset .mui-bar-nav\r\n{\r\n    height: 64px;\r\n    padding-top: 20px;\r\n}\r\n.mui-plus.mui-statusbar.mui-statusbar-offset .mui-bar-nav ~ .mui-content\r\n{\r\n    padding-top: 64px;\r\n}\r\n.mui-plus.mui-statusbar.mui-statusbar-offset .mui-bar-nav ~ .mui-content .mui-pull-top-pocket\r\n{\r\n    top: 64px;\r\n}\r\n.mui-plus.mui-statusbar.mui-statusbar-offset .mui-bar-header-secondary\r\n{\r\n    top: 64px;\r\n}\r\n.mui-plus.mui-statusbar.mui-statusbar-offset .mui-bar-header-secondary ~ .mui-content\r\n{\r\n    padding-top: 94px;\r\n}\r\n\r\n.mui-iframe-wrapper\r\n{\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.mui-iframe-wrapper iframe\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    border: 0;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8820b7f6582a3c45b7527ae6b183dd2f.ttf";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "mui-bar mui-bar-tab"
  }, [_c('a', {
    staticClass: "mui-tab-item mui-active",
    attrs: {
      "href": "#tabbar"
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-home"
  }), _vm._v(" "), _c('span', {
    staticClass: "mui-tab-label"
  }, [_vm._v("首页")])]), _vm._v(" "), _c('a', {
    staticClass: "mui-tab-item",
    attrs: {
      "href": "#tabbar-with-chat"
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-email"
  }, [_c('span', {
    staticClass: "mui-badge"
  }, [_vm._v("9")])]), _vm._v(" "), _c('span', {
    staticClass: "mui-tab-label"
  }, [_vm._v("物流")])]), _vm._v(" "), _c('a', {
    staticClass: "mui-tab-item",
    attrs: {
      "href": "#tabbar-with-contact"
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-contact"
  }), _vm._v(" "), _c('span', {
    staticClass: "mui-tab-label"
  }, [_vm._v("购物车")])]), _vm._v(" "), _c('a', {
    staticClass: "mui-tab-item",
    attrs: {
      "href": "#tabbar-with-map"
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-gear"
  }), _vm._v(" "), _c('span', {
    staticClass: "mui-tab-label"
  }, [_vm._v("我的淘宝")])]), _vm._v(" "), _c('a', {
    staticClass: "mui-tab-item",
    attrs: {
      "href": "#tabbar-with-map"
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-gear"
  }), _vm._v(" "), _c('span', {
    staticClass: "mui-tab-label"
  }, [_vm._v("更多")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-40507277", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("9b4ab40e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/_css-loader@0.28.1@css-loader/index.js!../node_modules/_vue-loader@12.0.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40507277\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/_vue-loader@12.0.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../node_modules/_css-loader@0.28.1@css-loader/index.js!../node_modules/_vue-loader@12.0.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40507277\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/_vue-loader@12.0.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(10)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })
/******/ ]);