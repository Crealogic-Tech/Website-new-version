"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Components/layout/TeamCard.tsx":
/*!************************************************!*\
  !*** ./src/app/Components/layout/TeamCard.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ProfileCard = (param)=>{\n    let { name, role, avatarSrc, socialLinks } = param;\n    _s();\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-span-1 xl:col-span-3 group pt-12 pb-9 px-5 flex flex-col items-center justify-center border-b xl:border-b-0 border-r border-team bg-slate-200 dark:bg-c-blue-900 hover:bg-gray-300 dark:hover:bg-drawerBg transition duration-300\",\n        onMouseEnter: ()=>setHovered(true),\n        onMouseLeave: ()=>setHovered(false),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-56 h-56 mb-11\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: avatarSrc,\n                    alt: name,\n                    width: 150,\n                    height: 150,\n                    className: \"object-cover w-full h-full rounded-full\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl xl:text-2xl text-c-blue-900 dark:text-white font-semibold leading-6 mb-2.5 font-plus-jakarta-sans\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-base font-semibold\",\n                        children: role\n                    }, void 0, false, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap items-center justify-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex items-center transition-opacity duration-300 \".concat(hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'),\n                        children: socialLinks.slice(0, Math.ceil(socialLinks.length / 2)).map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: social.url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white\",\n                                    children: social.icon\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"relative !opacity-100 w-8 h-8 mx-1.5 flex items-center justify-center rounded-full bg-slate-800 dark:bg-[#3C12D4] text-c-blue-900 dark:text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: '\"absolute h-2.5 w-0.5 bg-white transition-transform duration-300'\n                            }, void 0, false, {\n                                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute h-0.5 w-2.5 bg-white transition-opacity duration-300\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex items-center transition-opacity duration-300 \".concat(hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'),\n                        children: socialLinks.slice(Math.ceil(socialLinks.length / 2)).map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: social.url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white\",\n                                    children: social.icon\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfileCard, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n_c = ProfileCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileCard);\nvar _c;\n$RefreshReg$(_c, \"ProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9sYXlvdXQvVGVhbUNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDRjtBQWUvQixNQUFNRSxjQUEwQztRQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTs7SUFDckYsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLHFCQUNFLDhEQUFDUztRQUNDQyxXQUFVO1FBQ1ZDLGNBQWMsSUFBTUgsV0FBVztRQUMvQkksY0FBYyxJQUFNSixXQUFXOzswQkFHL0IsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDVCxrREFBS0E7b0JBQ0pZLEtBQUtSO29CQUNMUyxLQUFLWDtvQkFDTFksT0FBTztvQkFDUEMsUUFBUTtvQkFDUk4sV0FBVTs7Ozs7Ozs7Ozs7MEJBS2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ087d0JBQUdQLFdBQVU7a0NBQ1hQOzs7Ozs7a0NBRUgsOERBQUNlO3dCQUFLUixXQUFVO2tDQUEyQk47Ozs7Ozs7Ozs7OzswQkFJN0MsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ1M7d0JBQ0NULFdBQVcscURBRVYsT0FEQ0gsVUFBVSw4QkFBOEI7a0NBR3pDRCxZQUFZYyxLQUFLLENBQUMsR0FBR0MsS0FBS0MsSUFBSSxDQUFDaEIsWUFBWWlCLE1BQU0sR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3BFLDhEQUFDQztnQ0FBZWpCLFdBQVU7MENBQ3hCLDRFQUFDa0I7b0NBQ0NDLE1BQU1KLE9BQU9LLEdBQUc7b0NBQ2hCQyxRQUFPO29DQUNQQyxLQUFJO29DQUNKdEIsV0FBVTs4Q0FFVGUsT0FBT1EsSUFBSTs7Ozs7OytCQVBQUDs7Ozs7Ozs7OztrQ0FjYiw4REFBQ1I7d0JBQUtSLFdBQVU7OzBDQUNkLDhEQUFDUTtnQ0FBS1IsV0FBWTs7Ozs7OzBDQUNsQiw4REFBQ1E7Z0NBQUtSLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNTO3dCQUNDVCxXQUFXLHFEQUVWLE9BRENILFVBQVUsOEJBQThCO2tDQUd6Q0QsWUFBWWMsS0FBSyxDQUFDQyxLQUFLQyxJQUFJLENBQUNoQixZQUFZaUIsTUFBTSxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDakUsOERBQUNDO2dDQUFlakIsV0FBVTswQ0FDeEIsNEVBQUNrQjtvQ0FDQ0MsTUFBTUosT0FBT0ssR0FBRztvQ0FDaEJDLFFBQU87b0NBQ1BDLEtBQUk7b0NBQ0p0QixXQUFVOzhDQUVUZSxPQUFPUSxJQUFJOzs7Ozs7K0JBUFBQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXJCO0dBOUVNeEI7S0FBQUE7QUFnRk4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxmbHV0dGVyXFxXZWJzaXRlLW5ldy12ZXJzaW9uXFxzcmNcXGFwcFxcQ29tcG9uZW50c1xcbGF5b3V0XFxUZWFtQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFNvY2lhbExpbmsge1xyXG4gIGljb246IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDsgLy8gQWxsb3cgc3RyaW5nIG9yIEpTWCBlbGVtZW50IGZvciB0aGUgaWNvblxyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZmlsZUNhcmRQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJvbGU6IHN0cmluZztcclxuICBhdmF0YXJTcmM6IHN0cmluZyB8IFN0YXRpY0ltYWdlRGF0YTsgIC8vIEFjY2VwdCBib3RoIHN0cmluZyAoVVJMKSBhbmQgU3RhdGljSW1hZ2VEYXRhIChuZXh0L2ltYWdlKVxyXG4gIHNvY2lhbExpbmtzOiBTb2NpYWxMaW5rW107XHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGVDYXJkOiBSZWFjdC5GQzxQcm9maWxlQ2FyZFByb3BzPiA9ICh7IG5hbWUsIHJvbGUsIGF2YXRhclNyYywgc29jaWFsTGlua3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSB4bDpjb2wtc3Bhbi0zIGdyb3VwIHB0LTEyIHBiLTkgcHgtNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItYiB4bDpib3JkZXItYi0wIGJvcmRlci1yIGJvcmRlci10ZWFtIGJnLXNsYXRlLTIwMCBkYXJrOmJnLWMtYmx1ZS05MDAgaG92ZXI6YmctZ3JheS0zMDAgZGFyazpob3ZlcjpiZy1kcmF3ZXJCZyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKX1cclxuICAgID5cclxuICAgICAgey8qIEF2YXRhciBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTYgaC01NiBtYi0xMVwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXthdmF0YXJTcmN9XHJcbiAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICB3aWR0aD17MTUwfSAvLyBJbWFnZSBzaXplIGZvciBuZXh0L2ltYWdlXHJcbiAgICAgICAgICBoZWlnaHQ9ezE1MH0gLy8gSW1hZ2Ugc2l6ZSBmb3IgbmV4dC9pbWFnZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBOYW1lIGFuZCBSb2xlICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTVcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCB4bDp0ZXh0LTJ4bCB0ZXh0LWMtYmx1ZS05MDAgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IG1iLTIuNSBmb250LXBsdXMtamFrYXJ0YS1zYW5zXCI+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkXCI+e3JvbGV9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBTb2NpYWwgSWNvbnMgU2VjdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgey8qIExlZnQgU29jaWFsIEljb25zICovfVxyXG4gICAgICAgIDx1bFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke1xyXG4gICAgICAgICAgICBob3ZlcmVkID8gJ29wYWNpdHktMTAwIHRyYW5zbGF0ZS14LTAnIDogJ29wYWNpdHktMCB0cmFuc2xhdGUteC01J1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NvY2lhbExpbmtzLnNsaWNlKDAsIE1hdGguY2VpbChzb2NpYWxMaW5rcy5sZW5ndGggLyAyKSkubWFwKChzb2NpYWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtci0xXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e3NvY2lhbC51cmx9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1zbGF0ZS03MDAgZGFyazpiZy1jLWJsdWUtOTAwIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzb2NpYWwuaWNvbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICB7LyogQ2VudGVyIEJ1dHRvbiAqL31cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSAhb3BhY2l0eS0xMDAgdy04IGgtOCBteC0xLjUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTgwMCBkYXJrOmJnLVsjM0MxMkQ0XSB0ZXh0LWMtYmx1ZS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BcImFic29sdXRlIGgtMi41IHctMC41IGJnLXdoaXRlIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMGB9Pjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGgtMC41IHctMi41IGJnLXdoaXRlIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIj48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICB7LyogUmlnaHQgU29jaWFsIEljb25zICovfVxyXG4gICAgICAgIDx1bFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke1xyXG4gICAgICAgICAgICBob3ZlcmVkID8gJ29wYWNpdHktMTAwIHRyYW5zbGF0ZS14LTAnIDogJ29wYWNpdHktMCAtdHJhbnNsYXRlLXgtNSdcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzb2NpYWxMaW5rcy5zbGljZShNYXRoLmNlaWwoc29jaWFsTGlua3MubGVuZ3RoIC8gMikpLm1hcCgoc29jaWFsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibXItMVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtzb2NpYWwudXJsfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctc2xhdGUtNzAwIGRhcms6YmctYy1ibHVlLTkwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c29jaWFsLmljb259XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwiUHJvZmlsZUNhcmQiLCJuYW1lIiwicm9sZSIsImF2YXRhclNyYyIsInNvY2lhbExpbmtzIiwiaG92ZXJlZCIsInNldEhvdmVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgzIiwic3BhbiIsInVsIiwic2xpY2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm1hcCIsInNvY2lhbCIsImluZGV4IiwibGkiLCJhIiwiaHJlZiIsInVybCIsInRhcmdldCIsInJlbCIsImljb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/layout/TeamCard.tsx\n"));

/***/ })

});