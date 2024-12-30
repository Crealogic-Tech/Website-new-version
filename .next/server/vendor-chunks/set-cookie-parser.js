"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/set-cookie-parser";
exports.ids = ["vendor-chunks/set-cookie-parser"];
exports.modules = {

/***/ "(ssr)/./node_modules/set-cookie-parser/lib/set-cookie.js":
/*!**********************************************************!*\
  !*** ./node_modules/set-cookie-parser/lib/set-cookie.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nvar defaultParseOptions = {\n  decodeValues: true,\n  map: false,\n  silent: false,\n};\n\nfunction isNonEmptyString(str) {\n  return typeof str === \"string\" && !!str.trim();\n}\n\nfunction parseString(setCookieValue, options) {\n  var parts = setCookieValue.split(\";\").filter(isNonEmptyString);\n\n  var nameValuePairStr = parts.shift();\n  var parsed = parseNameValuePair(nameValuePairStr);\n  var name = parsed.name;\n  var value = parsed.value;\n\n  options = options\n    ? Object.assign({}, defaultParseOptions, options)\n    : defaultParseOptions;\n\n  try {\n    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value\n  } catch (e) {\n    console.error(\n      \"set-cookie-parser encountered an error while decoding a cookie with value '\" +\n        value +\n        \"'. Set options.decodeValues to false to disable this feature.\",\n      e\n    );\n  }\n\n  var cookie = {\n    name: name,\n    value: value,\n  };\n\n  parts.forEach(function (part) {\n    var sides = part.split(\"=\");\n    var key = sides.shift().trimLeft().toLowerCase();\n    var value = sides.join(\"=\");\n    if (key === \"expires\") {\n      cookie.expires = new Date(value);\n    } else if (key === \"max-age\") {\n      cookie.maxAge = parseInt(value, 10);\n    } else if (key === \"secure\") {\n      cookie.secure = true;\n    } else if (key === \"httponly\") {\n      cookie.httpOnly = true;\n    } else if (key === \"samesite\") {\n      cookie.sameSite = value;\n    } else if (key === \"partitioned\") {\n      cookie.partitioned = true;\n    } else {\n      cookie[key] = value;\n    }\n  });\n\n  return cookie;\n}\n\nfunction parseNameValuePair(nameValuePairStr) {\n  // Parses name-value-pair according to rfc6265bis draft\n\n  var name = \"\";\n  var value = \"\";\n  var nameValueArr = nameValuePairStr.split(\"=\");\n  if (nameValueArr.length > 1) {\n    name = nameValueArr.shift();\n    value = nameValueArr.join(\"=\"); // everything after the first =, joined by a \"=\" if there was more than one part\n  } else {\n    value = nameValuePairStr;\n  }\n\n  return { name: name, value: value };\n}\n\nfunction parse(input, options) {\n  options = options\n    ? Object.assign({}, defaultParseOptions, options)\n    : defaultParseOptions;\n\n  if (!input) {\n    if (!options.map) {\n      return [];\n    } else {\n      return {};\n    }\n  }\n\n  if (input.headers) {\n    if (typeof input.headers.getSetCookie === \"function\") {\n      // for fetch responses - they combine headers of the same type in the headers array,\n      // but getSetCookie returns an uncombined array\n      input = input.headers.getSetCookie();\n    } else if (input.headers[\"set-cookie\"]) {\n      // fast-path for node.js (which automatically normalizes header names to lower-case\n      input = input.headers[\"set-cookie\"];\n    } else {\n      // slow-path for other environments - see #25\n      var sch =\n        input.headers[\n          Object.keys(input.headers).find(function (key) {\n            return key.toLowerCase() === \"set-cookie\";\n          })\n        ];\n      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36\n      if (!sch && input.headers.cookie && !options.silent) {\n        console.warn(\n          \"Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.\"\n        );\n      }\n      input = sch;\n    }\n  }\n  if (!Array.isArray(input)) {\n    input = [input];\n  }\n\n  if (!options.map) {\n    return input.filter(isNonEmptyString).map(function (str) {\n      return parseString(str, options);\n    });\n  } else {\n    var cookies = {};\n    return input.filter(isNonEmptyString).reduce(function (cookies, str) {\n      var cookie = parseString(str, options);\n      cookies[cookie.name] = cookie;\n      return cookies;\n    }, cookies);\n  }\n}\n\n/*\n  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas\n  that are within a single set-cookie field-value, such as in the Expires portion.\n\n  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2\n  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128\n  React Native's fetch does this for *every* header, including set-cookie.\n\n  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25\n  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation\n*/\nfunction splitCookiesString(cookiesString) {\n  if (Array.isArray(cookiesString)) {\n    return cookiesString;\n  }\n  if (typeof cookiesString !== \"string\") {\n    return [];\n  }\n\n  var cookiesStrings = [];\n  var pos = 0;\n  var start;\n  var ch;\n  var lastComma;\n  var nextStart;\n  var cookiesSeparatorFound;\n\n  function skipWhitespace() {\n    while (pos < cookiesString.length && /\\s/.test(cookiesString.charAt(pos))) {\n      pos += 1;\n    }\n    return pos < cookiesString.length;\n  }\n\n  function notSpecialChar() {\n    ch = cookiesString.charAt(pos);\n\n    return ch !== \"=\" && ch !== \";\" && ch !== \",\";\n  }\n\n  while (pos < cookiesString.length) {\n    start = pos;\n    cookiesSeparatorFound = false;\n\n    while (skipWhitespace()) {\n      ch = cookiesString.charAt(pos);\n      if (ch === \",\") {\n        // ',' is a cookie separator if we have later first '=', not ';' or ','\n        lastComma = pos;\n        pos += 1;\n\n        skipWhitespace();\n        nextStart = pos;\n\n        while (pos < cookiesString.length && notSpecialChar()) {\n          pos += 1;\n        }\n\n        // currently special character\n        if (pos < cookiesString.length && cookiesString.charAt(pos) === \"=\") {\n          // we found cookies separator\n          cookiesSeparatorFound = true;\n          // pos is inside the next cookie, so back up and return it.\n          pos = nextStart;\n          cookiesStrings.push(cookiesString.substring(start, lastComma));\n          start = pos;\n        } else {\n          // in param ',' or param separator ';',\n          // we continue from that comma\n          pos = lastComma + 1;\n        }\n      } else {\n        pos += 1;\n      }\n    }\n\n    if (!cookiesSeparatorFound || pos >= cookiesString.length) {\n      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));\n    }\n  }\n\n  return cookiesStrings;\n}\n\nmodule.exports = parse;\nmodule.exports.parse = parse;\nmodule.exports.parseString = parseString;\nmodule.exports.splitCookiesString = splitCookiesString;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2V0LWNvb2tpZS1wYXJzZXIvbGliL3NldC1jb29raWUuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0Esc0VBQXNFO0FBQ3RFLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9NQUFvTSxjQUFjO0FBQ2xOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsaUNBQWlDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1hc3Rlci5ERVNLVE9QLVZJRlFBN0pcXERvd25sb2Fkc1xcTWVldFxcV2Vic2l0ZS1uZXctdmVyc2lvblxcbm9kZV9tb2R1bGVzXFxzZXQtY29va2llLXBhcnNlclxcbGliXFxzZXQtY29va2llLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVmYXVsdFBhcnNlT3B0aW9ucyA9IHtcbiAgZGVjb2RlVmFsdWVzOiB0cnVlLFxuICBtYXA6IGZhbHNlLFxuICBzaWxlbnQ6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gaXNOb25FbXB0eVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIgJiYgISFzdHIudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzZXRDb29raWVWYWx1ZSwgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBzZXRDb29raWVWYWx1ZS5zcGxpdChcIjtcIikuZmlsdGVyKGlzTm9uRW1wdHlTdHJpbmcpO1xuXG4gIHZhciBuYW1lVmFsdWVQYWlyU3RyID0gcGFydHMuc2hpZnQoKTtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlTmFtZVZhbHVlUGFpcihuYW1lVmFsdWVQYWlyU3RyKTtcbiAgdmFyIG5hbWUgPSBwYXJzZWQubmFtZTtcbiAgdmFyIHZhbHVlID0gcGFyc2VkLnZhbHVlO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zXG4gICAgPyBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyc2VPcHRpb25zLCBvcHRpb25zKVxuICAgIDogZGVmYXVsdFBhcnNlT3B0aW9ucztcblxuICB0cnkge1xuICAgIHZhbHVlID0gb3B0aW9ucy5kZWNvZGVWYWx1ZXMgPyBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpIDogdmFsdWU7IC8vIGRlY29kZSBjb29raWUgdmFsdWVcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcInNldC1jb29raWUtcGFyc2VyIGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGRlY29kaW5nIGEgY29va2llIHdpdGggdmFsdWUgJ1wiICtcbiAgICAgICAgdmFsdWUgK1xuICAgICAgICBcIicuIFNldCBvcHRpb25zLmRlY29kZVZhbHVlcyB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgZmVhdHVyZS5cIixcbiAgICAgIGVcbiAgICApO1xuICB9XG5cbiAgdmFyIGNvb2tpZSA9IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgfTtcblxuICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgdmFyIHNpZGVzID0gcGFydC5zcGxpdChcIj1cIik7XG4gICAgdmFyIGtleSA9IHNpZGVzLnNoaWZ0KCkudHJpbUxlZnQoKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciB2YWx1ZSA9IHNpZGVzLmpvaW4oXCI9XCIpO1xuICAgIGlmIChrZXkgPT09IFwiZXhwaXJlc1wiKSB7XG4gICAgICBjb29raWUuZXhwaXJlcyA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJtYXgtYWdlXCIpIHtcbiAgICAgIGNvb2tpZS5tYXhBZ2UgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInNlY3VyZVwiKSB7XG4gICAgICBjb29raWUuc2VjdXJlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJodHRwb25seVwiKSB7XG4gICAgICBjb29raWUuaHR0cE9ubHkgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInNhbWVzaXRlXCIpIHtcbiAgICAgIGNvb2tpZS5zYW1lU2l0ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInBhcnRpdGlvbmVkXCIpIHtcbiAgICAgIGNvb2tpZS5wYXJ0aXRpb25lZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvb2tpZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29va2llO1xufVxuXG5mdW5jdGlvbiBwYXJzZU5hbWVWYWx1ZVBhaXIobmFtZVZhbHVlUGFpclN0cikge1xuICAvLyBQYXJzZXMgbmFtZS12YWx1ZS1wYWlyIGFjY29yZGluZyB0byByZmM2MjY1YmlzIGRyYWZ0XG5cbiAgdmFyIG5hbWUgPSBcIlwiO1xuICB2YXIgdmFsdWUgPSBcIlwiO1xuICB2YXIgbmFtZVZhbHVlQXJyID0gbmFtZVZhbHVlUGFpclN0ci5zcGxpdChcIj1cIik7XG4gIGlmIChuYW1lVmFsdWVBcnIubGVuZ3RoID4gMSkge1xuICAgIG5hbWUgPSBuYW1lVmFsdWVBcnIuc2hpZnQoKTtcbiAgICB2YWx1ZSA9IG5hbWVWYWx1ZUFyci5qb2luKFwiPVwiKTsgLy8gZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgPSwgam9pbmVkIGJ5IGEgXCI9XCIgaWYgdGhlcmUgd2FzIG1vcmUgdGhhbiBvbmUgcGFydFxuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gbmFtZVZhbHVlUGFpclN0cjtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9uc1xuICAgID8gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFBhcnNlT3B0aW9ucywgb3B0aW9ucylcbiAgICA6IGRlZmF1bHRQYXJzZU9wdGlvbnM7XG5cbiAgaWYgKCFpbnB1dCkge1xuICAgIGlmICghb3B0aW9ucy5tYXApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbnB1dC5oZWFkZXJzKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dC5oZWFkZXJzLmdldFNldENvb2tpZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAvLyBmb3IgZmV0Y2ggcmVzcG9uc2VzIC0gdGhleSBjb21iaW5lIGhlYWRlcnMgb2YgdGhlIHNhbWUgdHlwZSBpbiB0aGUgaGVhZGVycyBhcnJheSxcbiAgICAgIC8vIGJ1dCBnZXRTZXRDb29raWUgcmV0dXJucyBhbiB1bmNvbWJpbmVkIGFycmF5XG4gICAgICBpbnB1dCA9IGlucHV0LmhlYWRlcnMuZ2V0U2V0Q29va2llKCk7XG4gICAgfSBlbHNlIGlmIChpbnB1dC5oZWFkZXJzW1wic2V0LWNvb2tpZVwiXSkge1xuICAgICAgLy8gZmFzdC1wYXRoIGZvciBub2RlLmpzICh3aGljaCBhdXRvbWF0aWNhbGx5IG5vcm1hbGl6ZXMgaGVhZGVyIG5hbWVzIHRvIGxvd2VyLWNhc2VcbiAgICAgIGlucHV0ID0gaW5wdXQuaGVhZGVyc1tcInNldC1jb29raWVcIl07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNsb3ctcGF0aCBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gc2VlICMyNVxuICAgICAgdmFyIHNjaCA9XG4gICAgICAgIGlucHV0LmhlYWRlcnNbXG4gICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXQuaGVhZGVycykuZmluZChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5LnRvTG93ZXJDYXNlKCkgPT09IFwic2V0LWNvb2tpZVwiO1xuICAgICAgICAgIH0pXG4gICAgICAgIF07XG4gICAgICAvLyB3YXJuIGlmIGNhbGxlZCBvbiBhIHJlcXVlc3QtbGlrZSBvYmplY3Qgd2l0aCBhIGNvb2tpZSBoZWFkZXIgcmF0aGVyIHRoYW4gYSBzZXQtY29va2llIGhlYWRlciAtIHNlZSAjMzQsIDM2XG4gICAgICBpZiAoIXNjaCAmJiBpbnB1dC5oZWFkZXJzLmNvb2tpZSAmJiAhb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiV2FybmluZzogc2V0LWNvb2tpZS1wYXJzZXIgYXBwZWFycyB0byBoYXZlIGJlZW4gY2FsbGVkIG9uIGEgcmVxdWVzdCBvYmplY3QuIEl0IGlzIGRlc2lnbmVkIHRvIHBhcnNlIFNldC1Db29raWUgaGVhZGVycyBmcm9tIHJlc3BvbnNlcywgbm90IENvb2tpZSBoZWFkZXJzIGZyb20gcmVxdWVzdHMuIFNldCB0aGUgb3B0aW9uIHtzaWxlbnQ6IHRydWV9IHRvIHN1cHByZXNzIHRoaXMgd2FybmluZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaW5wdXQgPSBzY2g7XG4gICAgfVxuICB9XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICBpbnB1dCA9IFtpbnB1dF07XG4gIH1cblxuICBpZiAoIW9wdGlvbnMubWFwKSB7XG4gICAgcmV0dXJuIGlucHV0LmZpbHRlcihpc05vbkVtcHR5U3RyaW5nKS5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nKHN0ciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNvb2tpZXMgPSB7fTtcbiAgICByZXR1cm4gaW5wdXQuZmlsdGVyKGlzTm9uRW1wdHlTdHJpbmcpLnJlZHVjZShmdW5jdGlvbiAoY29va2llcywgc3RyKSB7XG4gICAgICB2YXIgY29va2llID0gcGFyc2VTdHJpbmcoc3RyLCBvcHRpb25zKTtcbiAgICAgIGNvb2tpZXNbY29va2llLm5hbWVdID0gY29va2llO1xuICAgICAgcmV0dXJuIGNvb2tpZXM7XG4gICAgfSwgY29va2llcyk7XG4gIH1cbn1cblxuLypcbiAgU2V0LUNvb2tpZSBoZWFkZXIgZmllbGQtdmFsdWVzIGFyZSBzb21ldGltZXMgY29tbWEgam9pbmVkIGluIG9uZSBzdHJpbmcuIFRoaXMgc3BsaXRzIHRoZW0gd2l0aG91dCBjaG9raW5nIG9uIGNvbW1hc1xuICB0aGF0IGFyZSB3aXRoaW4gYSBzaW5nbGUgc2V0LWNvb2tpZSBmaWVsZC12YWx1ZSwgc3VjaCBhcyBpbiB0aGUgRXhwaXJlcyBwb3J0aW9uLlxuXG4gIFRoaXMgaXMgdW5jb21tb24sIGJ1dCBleHBsaWNpdGx5IGFsbG93ZWQgLSBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI2MTYjc2VjdGlvbi00LjJcbiAgTm9kZS5qcyBkb2VzIHRoaXMgZm9yIGV2ZXJ5IGhlYWRlciAqZXhjZXB0KiBzZXQtY29va2llIC0gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL2Q1ZTM2M2I3N2ViYWYxY2FmNjdjZDc1MjgyMjRiNjUxYzg2ODE1YzEvbGliL19odHRwX2luY29taW5nLmpzI0wxMjhcbiAgUmVhY3QgTmF0aXZlJ3MgZmV0Y2ggZG9lcyB0aGlzIGZvciAqZXZlcnkqIGhlYWRlciwgaW5jbHVkaW5nIHNldC1jb29raWUuXG5cbiAgQmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvajJvYmpjL2NvbW1pdC8xNjgyMGZkYmM4Zjc2Y2EwYzMzNDcyODEwY2UwY2IwM2QyMGVmZTI1XG4gIENyZWRpdHMgdG86IGh0dHBzOi8vZ2l0aHViLmNvbS90b21iYWxsIGZvciBvcmlnaW5hbCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2NocnVzYXJ0IGZvciBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uXG4qL1xuZnVuY3Rpb24gc3BsaXRDb29raWVzU3RyaW5nKGNvb2tpZXNTdHJpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29va2llc1N0cmluZykpIHtcbiAgICByZXR1cm4gY29va2llc1N0cmluZztcbiAgfVxuICBpZiAodHlwZW9mIGNvb2tpZXNTdHJpbmcgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgY29va2llc1N0cmluZ3MgPSBbXTtcbiAgdmFyIHBvcyA9IDA7XG4gIHZhciBzdGFydDtcbiAgdmFyIGNoO1xuICB2YXIgbGFzdENvbW1hO1xuICB2YXIgbmV4dFN0YXJ0O1xuICB2YXIgY29va2llc1NlcGFyYXRvckZvdW5kO1xuXG4gIGZ1bmN0aW9uIHNraXBXaGl0ZXNwYWNlKCkge1xuICAgIHdoaWxlIChwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aCAmJiAvXFxzLy50ZXN0KGNvb2tpZXNTdHJpbmcuY2hhckF0KHBvcykpKSB7XG4gICAgICBwb3MgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHBvcyA8IGNvb2tpZXNTdHJpbmcubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gbm90U3BlY2lhbENoYXIoKSB7XG4gICAgY2ggPSBjb29raWVzU3RyaW5nLmNoYXJBdChwb3MpO1xuXG4gICAgcmV0dXJuIGNoICE9PSBcIj1cIiAmJiBjaCAhPT0gXCI7XCIgJiYgY2ggIT09IFwiLFwiO1xuICB9XG5cbiAgd2hpbGUgKHBvcyA8IGNvb2tpZXNTdHJpbmcubGVuZ3RoKSB7XG4gICAgc3RhcnQgPSBwb3M7XG4gICAgY29va2llc1NlcGFyYXRvckZvdW5kID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoc2tpcFdoaXRlc3BhY2UoKSkge1xuICAgICAgY2ggPSBjb29raWVzU3RyaW5nLmNoYXJBdChwb3MpO1xuICAgICAgaWYgKGNoID09PSBcIixcIikge1xuICAgICAgICAvLyAnLCcgaXMgYSBjb29raWUgc2VwYXJhdG9yIGlmIHdlIGhhdmUgbGF0ZXIgZmlyc3QgJz0nLCBub3QgJzsnIG9yICcsJ1xuICAgICAgICBsYXN0Q29tbWEgPSBwb3M7XG4gICAgICAgIHBvcyArPSAxO1xuXG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIG5leHRTdGFydCA9IHBvcztcblxuICAgICAgICB3aGlsZSAocG9zIDwgY29va2llc1N0cmluZy5sZW5ndGggJiYgbm90U3BlY2lhbENoYXIoKSkge1xuICAgICAgICAgIHBvcyArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3VycmVudGx5IHNwZWNpYWwgY2hhcmFjdGVyXG4gICAgICAgIGlmIChwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aCAmJiBjb29raWVzU3RyaW5nLmNoYXJBdChwb3MpID09PSBcIj1cIikge1xuICAgICAgICAgIC8vIHdlIGZvdW5kIGNvb2tpZXMgc2VwYXJhdG9yXG4gICAgICAgICAgY29va2llc1NlcGFyYXRvckZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAvLyBwb3MgaXMgaW5zaWRlIHRoZSBuZXh0IGNvb2tpZSwgc28gYmFjayB1cCBhbmQgcmV0dXJuIGl0LlxuICAgICAgICAgIHBvcyA9IG5leHRTdGFydDtcbiAgICAgICAgICBjb29raWVzU3RyaW5ncy5wdXNoKGNvb2tpZXNTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0LCBsYXN0Q29tbWEpKTtcbiAgICAgICAgICBzdGFydCA9IHBvcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpbiBwYXJhbSAnLCcgb3IgcGFyYW0gc2VwYXJhdG9yICc7JyxcbiAgICAgICAgICAvLyB3ZSBjb250aW51ZSBmcm9tIHRoYXQgY29tbWFcbiAgICAgICAgICBwb3MgPSBsYXN0Q29tbWEgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvb2tpZXNTZXBhcmF0b3JGb3VuZCB8fCBwb3MgPj0gY29va2llc1N0cmluZy5sZW5ndGgpIHtcbiAgICAgIGNvb2tpZXNTdHJpbmdzLnB1c2goY29va2llc1N0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGNvb2tpZXNTdHJpbmcubGVuZ3RoKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb2tpZXNTdHJpbmdzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlO1xubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbm1vZHVsZS5leHBvcnRzLnBhcnNlU3RyaW5nID0gcGFyc2VTdHJpbmc7XG5tb2R1bGUuZXhwb3J0cy5zcGxpdENvb2tpZXNTdHJpbmcgPSBzcGxpdENvb2tpZXNTdHJpbmc7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/set-cookie-parser/lib/set-cookie.js\n");

/***/ })

};
;