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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProfileCard = (param)=>{\n    let { name, role, avatarSrc, socialLinks } = param;\n    _s();\n    const socialLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const socialRightRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const hoverCenterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ProfileCard.useEffect\": ()=>{\n            const socialLeft = socialLeftRef.current;\n            const socialRight = socialRightRef.current;\n            const hoverCenter = hoverCenterRef.current;\n            if (socialLeft && socialRight && hoverCenter) {\n                var // GSAP Hover effect for social icons\n                _socialLeft_parentElement, _socialLeft_parentElement1;\n                gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(socialLeft, {\n                    opacity: 0,\n                    x: 50\n                });\n                gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(socialRight, {\n                    opacity: 0,\n                    x: -50\n                });\n                gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(hoverCenter, {\n                    opacity: 0\n                });\n                (_socialLeft_parentElement = socialLeft.parentElement) === null || _socialLeft_parentElement === void 0 ? void 0 : _socialLeft_parentElement.addEventListener('mouseenter', {\n                    \"ProfileCard.useEffect\": ()=>{\n                        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(socialLeft, {\n                            opacity: 1,\n                            x: 0,\n                            duration: 0.3\n                        });\n                        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(socialRight, {\n                            opacity: 1,\n                            x: 0,\n                            duration: 0.3\n                        });\n                        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(hoverCenter, {\n                            opacity: 1,\n                            duration: 0.3\n                        });\n                    }\n                }[\"ProfileCard.useEffect\"]);\n                (_socialLeft_parentElement1 = socialLeft.parentElement) === null || _socialLeft_parentElement1 === void 0 ? void 0 : _socialLeft_parentElement1.addEventListener('mouseleave', {\n                    \"ProfileCard.useEffect\": ()=>{\n                        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(socialLeft, {\n                            opacity: 0,\n                            x: 50,\n                            duration: 0.3\n                        });\n                        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(socialRight, {\n                            opacity: 0,\n                            x: -50,\n                            duration: 0.3\n                        });\n                        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(hoverCenter, {\n                            opacity: 0,\n                            duration: 0.3\n                        });\n                    }\n                }[\"ProfileCard.useEffect\"]);\n            }\n            return ({\n                \"ProfileCard.useEffect\": ()=>{\n                    // Cleanup event listeners to avoid memory leaks\n                    if (socialLeft && socialRight && hoverCenter) {\n                        var _socialLeft_parentElement, _socialLeft_parentElement1;\n                        (_socialLeft_parentElement = socialLeft.parentElement) === null || _socialLeft_parentElement === void 0 ? void 0 : _socialLeft_parentElement.removeEventListener('mouseenter', {\n                            \"ProfileCard.useEffect\": ()=>{}\n                        }[\"ProfileCard.useEffect\"]);\n                        (_socialLeft_parentElement1 = socialLeft.parentElement) === null || _socialLeft_parentElement1 === void 0 ? void 0 : _socialLeft_parentElement1.removeEventListener('mouseleave', {\n                            \"ProfileCard.useEffect\": ()=>{}\n                        }[\"ProfileCard.useEffect\"]);\n                    }\n                }\n            })[\"ProfileCard.useEffect\"];\n        }\n    }[\"ProfileCard.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-span-1 xl:col-span-3 group pt-12 pb-9 px-5 flex flex-col items-center justify-center border-b xl:border-b-0 border-r border-team bg-slate-200 dark:bg-c-blue-900 hover:bg-gray-300 dark:hover:bg-drawerBg transition duration-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-56 h-56 mb-11\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: avatarSrc,\n                    alt: name,\n                    width: 150,\n                    height: 150,\n                    className: \"object-cover w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl xl:text-2xl text-c-blue-900 dark:text-white font-semibold leading-6 mb-2.5 font-plus-jakarta-sans\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-base font-semibold\",\n                        children: role\n                    }, void 0, false, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        ref: socialLeftRef,\n                        className: \"flex items-center opacity-0 translate-x-5 transition duration-300\",\n                        children: socialLinks.slice(0, Math.ceil(socialLinks.length / 2)).map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: social.url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white\",\n                                    children: social.icon\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"relative !opacity-100 w-8 h-8 mx-1.5 flex items-center justify-center rounded-full bg-slate-800 dark:bg-[#3C12D4] text-c-blue-900 dark:text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute h-2.5 w-0.5 bg-white group-hover:rotate-90 transition duration-300\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute h-0.5 w-2.5 bg-white group-hover:opacity-0 transition duration-300\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        ref: socialRightRef,\n                        className: \"flex items-center opacity-0 -translate-x-5 transition duration-300\",\n                        children: socialLinks.slice(Math.ceil(socialLinks.length / 2)).map((social, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: social.url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white\",\n                                    children: social.icon\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\flutter\\\\Website-new-version\\\\src\\\\app\\\\Components\\\\layout\\\\TeamCard.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfileCard, \"OcGsjzJgBGzlCWGzbkihkqJAUhY=\");\n_c = ProfileCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileCard);\nvar _c;\n$RefreshReg$(_c, \"ProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9sYXlvdXQvVGVhbUNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ1g7QUFDSDtBQWdCNUIsTUFBTUksY0FBMEM7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUU7O0lBQ3JGLE1BQU1DLGdCQUFnQlIsNkNBQU1BLENBQTBCO0lBQ3RELE1BQU1TLGlCQUFpQlQsNkNBQU1BLENBQTBCO0lBQ3ZELE1BQU1VLGlCQUFpQlYsNkNBQU1BLENBQXlCO0lBRXRERCxnREFBU0E7aUNBQUM7WUFDUixNQUFNWSxhQUFhSCxjQUFjSSxPQUFPO1lBQ3hDLE1BQU1DLGNBQWNKLGVBQWVHLE9BQU87WUFDMUMsTUFBTUUsY0FBY0osZUFBZUUsT0FBTztZQUUxQyxJQUFJRCxjQUFjRSxlQUFlQyxhQUFhO29CQUs1QyxxQ0FBcUM7Z0JBQ3JDSCwyQkFNQUE7Z0JBWEFULHNDQUFJQSxDQUFDYSxHQUFHLENBQUNKLFlBQVk7b0JBQUVLLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUc7Z0JBQ3pDZixzQ0FBSUEsQ0FBQ2EsR0FBRyxDQUFDRixhQUFhO29CQUFFRyxTQUFTO29CQUFHQyxHQUFHLENBQUM7Z0JBQUc7Z0JBQzNDZixzQ0FBSUEsQ0FBQ2EsR0FBRyxDQUFDRCxhQUFhO29CQUFFRSxTQUFTO2dCQUFFO2lCQUduQ0wsNEJBQUFBLFdBQVdPLGFBQWEsY0FBeEJQLGdEQUFBQSwwQkFBMEJRLGdCQUFnQixDQUFDOzZDQUFjO3dCQUN2RGpCLHNDQUFJQSxDQUFDa0IsRUFBRSxDQUFDVCxZQUFZOzRCQUFFSyxTQUFTOzRCQUFHQyxHQUFHOzRCQUFHSSxVQUFVO3dCQUFJO3dCQUN0RG5CLHNDQUFJQSxDQUFDa0IsRUFBRSxDQUFDUCxhQUFhOzRCQUFFRyxTQUFTOzRCQUFHQyxHQUFHOzRCQUFHSSxVQUFVO3dCQUFJO3dCQUN2RG5CLHNDQUFJQSxDQUFDa0IsRUFBRSxDQUFDTixhQUFhOzRCQUFFRSxTQUFTOzRCQUFHSyxVQUFVO3dCQUFJO29CQUNuRDs7aUJBRUFWLDZCQUFBQSxXQUFXTyxhQUFhLGNBQXhCUCxpREFBQUEsMkJBQTBCUSxnQkFBZ0IsQ0FBQzs2Q0FBYzt3QkFDdkRqQixzQ0FBSUEsQ0FBQ2tCLEVBQUUsQ0FBQ1QsWUFBWTs0QkFBRUssU0FBUzs0QkFBR0MsR0FBRzs0QkFBSUksVUFBVTt3QkFBSTt3QkFDdkRuQixzQ0FBSUEsQ0FBQ2tCLEVBQUUsQ0FBQ1AsYUFBYTs0QkFBRUcsU0FBUzs0QkFBR0MsR0FBRyxDQUFDOzRCQUFJSSxVQUFVO3dCQUFJO3dCQUN6RG5CLHNDQUFJQSxDQUFDa0IsRUFBRSxDQUFDTixhQUFhOzRCQUFFRSxTQUFTOzRCQUFHSyxVQUFVO3dCQUFJO29CQUNuRDs7WUFDRjtZQUVBO3lDQUFPO29CQUNMLGdEQUFnRDtvQkFDaEQsSUFBSVYsY0FBY0UsZUFBZUMsYUFBYTs0QkFDNUNILDJCQUNBQTt5QkFEQUEsNEJBQUFBLFdBQVdPLGFBQWEsY0FBeEJQLGdEQUFBQSwwQkFBMEJXLG1CQUFtQixDQUFDO3FEQUFjLEtBQU87O3lCQUNuRVgsNkJBQUFBLFdBQVdPLGFBQWEsY0FBeEJQLGlEQUFBQSwyQkFBMEJXLG1CQUFtQixDQUFDO3FEQUFjLEtBQU87O29CQUNyRTtnQkFDRjs7UUFDRjtnQ0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3ZCLGtEQUFLQTtvQkFDSndCLEtBQUtuQjtvQkFDTG9CLEtBQUt0QjtvQkFDTHVCLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JKLFdBQVU7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNLO3dCQUFHTCxXQUFVO2tDQUNYcEI7Ozs7OztrQ0FFSCw4REFBQzBCO3dCQUFLTixXQUFVO2tDQUEyQm5COzs7Ozs7Ozs7Ozs7MEJBSTdDLDhEQUFDa0I7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDTzt3QkFBR0MsS0FBS3hCO3dCQUFlZ0IsV0FBVTtrQ0FDL0JqQixZQUFZMEIsS0FBSyxDQUFDLEdBQUdDLEtBQUtDLElBQUksQ0FBQzVCLFlBQVk2QixNQUFNLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNwRSw4REFBQ0M7Z0NBQWVoQixXQUFVOzBDQUN4Qiw0RUFBQ2lCO29DQUNDQyxNQUFNSixPQUFPSyxHQUFHO29DQUNoQkMsUUFBTztvQ0FDUEMsS0FBSTtvQ0FDSnJCLFdBQVU7OENBRVRjLE9BQU9RLElBQUk7Ozs7OzsrQkFQUFA7Ozs7Ozs7Ozs7a0NBY2IsOERBQUNUO3dCQUVDTixXQUFVOzswQ0FFViw4REFBQ007Z0NBQUtOLFdBQVU7Ozs7OzswQ0FDaEIsOERBQUNNO2dDQUFLTixXQUFVOzs7Ozs7Ozs7Ozs7a0NBSWxCLDhEQUFDTzt3QkFBR0MsS0FBS3ZCO3dCQUFnQmUsV0FBVTtrQ0FDaENqQixZQUFZMEIsS0FBSyxDQUFDQyxLQUFLQyxJQUFJLENBQUM1QixZQUFZNkIsTUFBTSxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDakUsOERBQUNDO2dDQUFlaEIsV0FBVTswQ0FDeEIsNEVBQUNpQjtvQ0FDQ0MsTUFBTUosT0FBT0ssR0FBRztvQ0FDaEJDLFFBQU87b0NBQ1BDLEtBQUk7b0NBQ0pyQixXQUFVOzhDQUVUYyxPQUFPUSxJQUFJOzs7Ozs7K0JBUFBQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXJCO0dBeEdNcEM7S0FBQUE7QUEwR04saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxmbHV0dGVyXFxXZWJzaXRlLW5ldy12ZXJzaW9uXFxzcmNcXGFwcFxcQ29tcG9uZW50c1xcbGF5b3V0XFxUZWFtQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbnRlcmZhY2UgU29jaWFsTGluayB7XHJcbiAgaWNvbjogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50OyAgLy8gQWxsb3cgc3RyaW5nIG9yIEpTWCBlbGVtZW50IGZvciB0aGUgaWNvblxyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZmlsZUNhcmRQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJvbGU6IHN0cmluZztcclxuICBhdmF0YXJTcmM6IHN0cmluZyB8IFN0YXRpY0ltYWdlRGF0YTsgIC8vIEFjY2VwdCBib3RoIHN0cmluZyAoVVJMKSBhbmQgU3RhdGljSW1hZ2VEYXRhIChuZXh0L2ltYWdlKVxyXG4gIHNvY2lhbExpbmtzOiBTb2NpYWxMaW5rW107XHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGVDYXJkOiBSZWFjdC5GQzxQcm9maWxlQ2FyZFByb3BzPiA9ICh7IG5hbWUsIHJvbGUsIGF2YXRhclNyYywgc29jaWFsTGlua3MgfSkgPT4ge1xyXG4gIGNvbnN0IHNvY2lhbExlZnRSZWYgPSB1c2VSZWY8SFRNTFVMaXN0RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHNvY2lhbFJpZ2h0UmVmID0gdXNlUmVmPEhUTUxVTGlzdEVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBob3ZlckNlbnRlclJlZiA9IHVzZVJlZjxIVE1MU3BhbkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNvY2lhbExlZnQgPSBzb2NpYWxMZWZ0UmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBzb2NpYWxSaWdodCA9IHNvY2lhbFJpZ2h0UmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBob3ZlckNlbnRlciA9IGhvdmVyQ2VudGVyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgaWYgKHNvY2lhbExlZnQgJiYgc29jaWFsUmlnaHQgJiYgaG92ZXJDZW50ZXIpIHtcclxuICAgICAgZ3NhcC5zZXQoc29jaWFsTGVmdCwgeyBvcGFjaXR5OiAwLCB4OiA1MCB9KTtcclxuICAgICAgZ3NhcC5zZXQoc29jaWFsUmlnaHQsIHsgb3BhY2l0eTogMCwgeDogLTUwIH0pO1xyXG4gICAgICBnc2FwLnNldChob3ZlckNlbnRlciwgeyBvcGFjaXR5OiAwIH0pO1xyXG5cclxuICAgICAgLy8gR1NBUCBIb3ZlciBlZmZlY3QgZm9yIHNvY2lhbCBpY29uc1xyXG4gICAgICBzb2NpYWxMZWZ0LnBhcmVudEVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhzb2NpYWxMZWZ0LCB7IG9wYWNpdHk6IDEsIHg6IDAsIGR1cmF0aW9uOiAwLjMgfSk7XHJcbiAgICAgICAgZ3NhcC50byhzb2NpYWxSaWdodCwgeyBvcGFjaXR5OiAxLCB4OiAwLCBkdXJhdGlvbjogMC4zIH0pO1xyXG4gICAgICAgIGdzYXAudG8oaG92ZXJDZW50ZXIsIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuMyB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NpYWxMZWZ0LnBhcmVudEVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhzb2NpYWxMZWZ0LCB7IG9wYWNpdHk6IDAsIHg6IDUwLCBkdXJhdGlvbjogMC4zIH0pO1xyXG4gICAgICAgIGdzYXAudG8oc29jaWFsUmlnaHQsIHsgb3BhY2l0eTogMCwgeDogLTUwLCBkdXJhdGlvbjogMC4zIH0pO1xyXG4gICAgICAgIGdzYXAudG8oaG92ZXJDZW50ZXIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gQ2xlYW51cCBldmVudCBsaXN0ZW5lcnMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXHJcbiAgICAgIGlmIChzb2NpYWxMZWZ0ICYmIHNvY2lhbFJpZ2h0ICYmIGhvdmVyQ2VudGVyKSB7XHJcbiAgICAgICAgc29jaWFsTGVmdC5wYXJlbnRFbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge30pO1xyXG4gICAgICAgIHNvY2lhbExlZnQucGFyZW50RWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHt9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgeGw6Y29sLXNwYW4tMyBncm91cCBwdC0xMiBwYi05IHB4LTUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLWIgeGw6Ym9yZGVyLWItMCBib3JkZXItciBib3JkZXItdGVhbSBiZy1zbGF0ZS0yMDAgZGFyazpiZy1jLWJsdWUtOTAwIGhvdmVyOmJnLWdyYXktMzAwIGRhcms6aG92ZXI6YmctZHJhd2VyQmcgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgey8qIEF2YXRhciBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTYgaC01NiBtYi0xMVwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXthdmF0YXJTcmN9XHJcbiAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICB3aWR0aD17MTUwfSAvLyBJbWFnZSBzaXplIGZvciBuZXh0L2ltYWdlXHJcbiAgICAgICAgICBoZWlnaHQ9ezE1MH0gLy8gSW1hZ2Ugc2l6ZSBmb3IgbmV4dC9pbWFnZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIE5hbWUgYW5kIFJvbGUgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNVwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIHhsOnRleHQtMnhsIHRleHQtYy1ibHVlLTkwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgbWItMi41IGZvbnQtcGx1cy1qYWthcnRhLXNhbnNcIj5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGRcIj57cm9sZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIFNvY2lhbCBJY29ucyBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIHsvKiBMZWZ0IFNvY2lhbCBJY29ucyAqL31cclxuICAgICAgICA8dWwgcmVmPXtzb2NpYWxMZWZ0UmVmfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBvcGFjaXR5LTAgdHJhbnNsYXRlLXgtNSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAge3NvY2lhbExpbmtzLnNsaWNlKDAsIE1hdGguY2VpbChzb2NpYWxMaW5rcy5sZW5ndGggLyAyKSkubWFwKChzb2NpYWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtci0xXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e3NvY2lhbC51cmx9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1zbGF0ZS03MDAgZGFyazpiZy1jLWJsdWUtOTAwIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzb2NpYWwuaWNvbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICB7LyogQ2VudGVyIEJ1dHRvbiAqL31cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSAhb3BhY2l0eS0xMDAgdy04IGgtOCBteC0xLjUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTgwMCBkYXJrOmJnLVsjM0MxMkQ0XSB0ZXh0LWMtYmx1ZS05MDAgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTIuNSB3LTAuNSBiZy13aGl0ZSBncm91cC1ob3Zlcjpyb3RhdGUtOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTAuNSB3LTIuNSBiZy13aGl0ZSBncm91cC1ob3ZlcjpvcGFjaXR5LTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICB7LyogUmlnaHQgU29jaWFsIEljb25zICovfVxyXG4gICAgICAgIDx1bCByZWY9e3NvY2lhbFJpZ2h0UmVmfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBvcGFjaXR5LTAgLXRyYW5zbGF0ZS14LTUgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgIHtzb2NpYWxMaW5rcy5zbGljZShNYXRoLmNlaWwoc29jaWFsTGlua3MubGVuZ3RoIC8gMikpLm1hcCgoc29jaWFsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibXItMVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtzb2NpYWwudXJsfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctc2xhdGUtNzAwIGRhcms6YmctYy1ibHVlLTkwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c29jaWFsLmljb259XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJbWFnZSIsImdzYXAiLCJQcm9maWxlQ2FyZCIsIm5hbWUiLCJyb2xlIiwiYXZhdGFyU3JjIiwic29jaWFsTGlua3MiLCJzb2NpYWxMZWZ0UmVmIiwic29jaWFsUmlnaHRSZWYiLCJob3ZlckNlbnRlclJlZiIsInNvY2lhbExlZnQiLCJjdXJyZW50Iiwic29jaWFsUmlnaHQiLCJob3ZlckNlbnRlciIsInNldCIsIm9wYWNpdHkiLCJ4IiwicGFyZW50RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0byIsImR1cmF0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJzcGFuIiwidWwiLCJyZWYiLCJzbGljZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwibWFwIiwic29jaWFsIiwiaW5kZXgiLCJsaSIsImEiLCJocmVmIiwidXJsIiwidGFyZ2V0IiwicmVsIiwiaWNvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/layout/TeamCard.tsx\n"));

/***/ })

});