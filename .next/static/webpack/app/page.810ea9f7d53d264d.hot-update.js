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

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _contract_data_GetSet_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contract_data/GetSet.json */ \"(app-pages-browser)/./src/contract_data/GetSet.json\");\n/* harmony import */ var _contract_data_GetSet_address_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contract_data/GetSet-address.json */ \"(app-pages-browser)/./src/contract_data/GetSet-address.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [retrievedValue, setRetrievedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [signer, setSigner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [depositAmount, setDepositAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [recipient, setRecipient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [transferAmount, setTransferAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [contractBalance, setContractBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Initialize Provider, Signer, and Contract\n    const initializeEthers = async ()=>{\n        if (!window.ethereum) {\n            alert(\"MetaMask not detected!\");\n            return;\n        }\n        try {\n            const _provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.BrowserProvider(window.ethereum);\n            const _signer = await _provider.getSigner();\n            const _contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_contract_data_GetSet_address_json__WEBPACK_IMPORTED_MODULE_3__.address, _contract_data_GetSet_json__WEBPACK_IMPORTED_MODULE_2__.abi, _signer);\n            setProvider(_provider);\n            setSigner(_signer);\n            setContract(_contract);\n            const accounts = await _provider.send(\"eth_requestAccounts\", []);\n            setAccount(accounts[0]);\n        } catch (error) {\n            console.error(\"Error initializing ethers:\", error);\n        }\n    };\n    // Set value in contract\n    const setContractValue = async ()=>{\n        if (!contract) return alert(\"Please connect wallet first!\");\n        try {\n            const tx = await contract.set(BigInt(value)); // Convert string to BigInt\n            await tx.wait(); // Wait for transaction confirmation\n            alert(\"Value set successfully!\");\n        } catch (error) {\n            console.error(\"Error setting value:\", error);\n        }\n    };\n    // Get value from contract\n    const getContractValue = async ()=>{\n        if (!contract) return alert(\"Please connect wallet first!\");\n        try {\n            const result = await contract.get();\n            setRetrievedValue(result.toString());\n        } catch (error) {\n            console.error(\"Error getting value:\", error);\n        }\n    };\n    // Deposit funds into the contract\n    const depositFunds = async (amount)=>{\n        if (!contract) return alert(\"Please connect wallet first!\");\n        try {\n            const tx = await signer.sendTransaction({\n                to: _contract_data_GetSet_address_json__WEBPACK_IMPORTED_MODULE_3__.address,\n                value: ethers__WEBPACK_IMPORTED_MODULE_6__.parseEther(amount),\n                gasLimit: 21000\n            });\n            await tx.wait();\n            alert(\"Funds deposited successfully!\");\n        } catch (error) {\n            console.error(\"Error depositing funds:\", error);\n        }\n    };\n    // Transfer ETH from the contract to a specified address\n    const transferETH = async (recipient, amount)=>{\n        if (!contract) return alert(\"Please connect wallet first!\");\n        try {\n            const tx = await contract.transferETH(recipient, ethers__WEBPACK_IMPORTED_MODULE_6__.parseEther(amount));\n            await tx.wait();\n            alert(\"ETH transferred successfully!\");\n        } catch (error) {\n            console.error(\"Error transferring ETH:\", error);\n        }\n    };\n    // Get the contract balance\n    const getContractBalance = async ()=>{\n        if (!contract) return alert(\"Please connect wallet first!\");\n        try {\n            const balance = await contract.getContractBalance();\n            setContractBalance(ethers__WEBPACK_IMPORTED_MODULE_6__.formatEther(balance));\n        } catch (error) {\n            console.error(\"Error getting contract balance:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (window.ethereum) {\n                initializeEthers();\n            }\n        }\n    }[\"Page.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"GetSet Contract\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-4\",\n                children: [\n                    \"Connected: \",\n                    account\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: initializeEthers,\n                className: \"px-4 py-2 bg-blue-600 text-white rounded-md mb-4\",\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: value,\n                onChange: (e)=>setValue(e.target.value),\n                placeholder: \"Enter value\",\n                className: \"border px-4 py-2 mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: setContractValue,\n                className: \"px-4 py-2 bg-green-600 text-white rounded-md mb-4\",\n                children: \"Set Value\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getContractValue,\n                className: \"px-4 py-2 bg-purple-600 text-white rounded-md mb-4\",\n                children: \"Get Value\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this),\n            retrievedValue !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg font-bold\",\n                children: [\n                    \"Stored Value: \",\n                    retrievedValue\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 152,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Amount in ETH\",\n                onChange: (e)=>setDepositAmount(e.target.value),\n                className: \"border px-4 py-2 mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>depositFunds(depositAmount),\n                className: \"px-4 py-2 bg-yellow-600 text-white rounded-md mb-4\",\n                children: \"Deposit Funds\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Recipient Address\",\n                onChange: (e)=>setRecipient(e.target.value),\n                className: \"border px-4 py-2 mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Amount in ETH\",\n                onChange: (e)=>setTransferAmount(e.target.value),\n                className: \"border px-4 py-2 mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 176,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>transferETH(recipient, transferAmount),\n                className: \"px-4 py-2 bg-red-600 text-white rounded-md mb-4\",\n                children: \"Transfer ETH\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 182,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getContractBalance,\n                className: \"px-4 py-2 bg-gray-600 text-white rounded-md mb-4\",\n                children: \"Get Contract Balance\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 190,\n                columnNumber: 7\n            }, this),\n            contractBalance !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg font-bold\",\n                children: [\n                    \"Contract Balance: \",\n                    contractBalance,\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 199,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\visha\\\\OneDrive\\\\Desktop\\\\new_hardhat\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"12omAQrRlGsbjY7fmpecvvVHmiY=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1lBS0F0RCxtQkFBbUIsc0JBQ2xCLDhEQUFDd0Q7Z0JBQUVGLFdBQVU7O29CQUFvQjtvQkFBZXREOzs7Ozs7OzBCQUlsRCw4REFBQzJEO2dCQUNDQyxNQUFLO2dCQUNMSSxhQUFZO2dCQUNaSCxVQUFVLENBQUNDLElBQU1uRCxpQkFBaUJtRCxFQUFFQyxNQUFNLENBQUNqRSxLQUFLO2dCQUNoRHdELFdBQVU7Ozs7OzswQkFFWiw4REFBQ0c7Z0JBQ0NDLFNBQVMsSUFBTWYsYUFBYWpDO2dCQUM1QjRDLFdBQVU7MEJBQ1g7Ozs7OzswQkFLRCw4REFBQ0s7Z0JBQ0NDLE1BQUs7Z0JBQ0xJLGFBQVk7Z0JBQ1pILFVBQVUsQ0FBQ0MsSUFBTWpELGFBQWFpRCxFQUFFQyxNQUFNLENBQUNqRSxLQUFLO2dCQUM1Q3dELFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Z0JBQ0NDLE1BQUs7Z0JBQ0xJLGFBQVk7Z0JBQ1pILFVBQVUsQ0FBQ0MsSUFBTS9DLGtCQUFrQitDLEVBQUVDLE1BQU0sQ0FBQ2pFLEtBQUs7Z0JBQ2pEd0QsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDRztnQkFDQ0MsU0FBUyxJQUFNVCxZQUFZckMsV0FBV0U7Z0JBQ3RDd0MsV0FBVTswQkFDWDs7Ozs7OzBCQUtELDhEQUFDRztnQkFDQ0MsU0FBU1I7Z0JBQ1RJLFdBQVU7MEJBQ1g7Ozs7OztZQUtBdEMsb0JBQW9CLHNCQUNuQiw4REFBQ3dDO2dCQUFFRixXQUFVOztvQkFBb0I7b0JBQW1CdEM7b0JBQWdCOzs7Ozs7Ozs7Ozs7O0FBSTVFO0dBbk13Qm5CO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHZpc2hhXFxPbmVEcml2ZVxcRGVza3RvcFxcbmV3X2hhcmRoYXRcXHNyY1xcYXBwXFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgY29udHJhY3RBQkkgZnJvbSBcIi4uL2NvbnRyYWN0X2RhdGEvR2V0U2V0Lmpzb25cIjtcclxuaW1wb3J0IGNvbnRyYWN0QWRkcmVzcyBmcm9tIFwiLi4vY29udHJhY3RfZGF0YS9HZXRTZXQtYWRkcmVzcy5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7IFxyXG4gIGNvbnN0IFtyZXRyaWV2ZWRWYWx1ZSwgc2V0UmV0cmlldmVkVmFsdWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2lnbmVyLCBzZXRTaWduZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVwb3NpdEFtb3VudCwgc2V0RGVwb3NpdEFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVjaXBpZW50LCBzZXRSZWNpcGllbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RyYW5zZmVyQW1vdW50LCBzZXRUcmFuc2ZlckFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udHJhY3RCYWxhbmNlLCBzZXRDb250cmFjdEJhbGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgUHJvdmlkZXIsIFNpZ25lciwgYW5kIENvbnRyYWN0XHJcbiAgY29uc3QgaW5pdGlhbGl6ZUV0aGVycyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghd2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIGFsZXJ0KFwiTWV0YU1hc2sgbm90IGRldGVjdGVkIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBfcHJvdmlkZXIgPSBuZXcgZXRoZXJzLkJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBjb25zdCBfc2lnbmVyID0gYXdhaXQgX3Byb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBfY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcy5hZGRyZXNzLCBjb250cmFjdEFCSS5hYmksIF9zaWduZXIpO1xyXG5cclxuICAgICAgc2V0UHJvdmlkZXIoX3Byb3ZpZGVyKTtcclxuICAgICAgc2V0U2lnbmVyKF9zaWduZXIpO1xyXG4gICAgICBzZXRDb250cmFjdChfY29udHJhY3QpO1xyXG5cclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBfcHJvdmlkZXIuc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbml0aWFsaXppbmcgZXRoZXJzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gU2V0IHZhbHVlIGluIGNvbnRyYWN0XHJcbiAgY29uc3Qgc2V0Q29udHJhY3RWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghY29udHJhY3QpIHJldHVybiBhbGVydChcIlBsZWFzZSBjb25uZWN0IHdhbGxldCBmaXJzdCFcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LnNldChCaWdJbnQodmFsdWUpKTsgLy8gQ29udmVydCBzdHJpbmcgdG8gQmlnSW50XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTsgLy8gV2FpdCBmb3IgdHJhbnNhY3Rpb24gY29uZmlybWF0aW9uXHJcbiAgICAgIGFsZXJ0KFwiVmFsdWUgc2V0IHN1Y2Nlc3NmdWxseSFcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2V0dGluZyB2YWx1ZTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEdldCB2YWx1ZSBmcm9tIGNvbnRyYWN0XHJcbiAgY29uc3QgZ2V0Q29udHJhY3RWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghY29udHJhY3QpIHJldHVybiBhbGVydChcIlBsZWFzZSBjb25uZWN0IHdhbGxldCBmaXJzdCFcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5nZXQoKTtcclxuICAgICAgc2V0UmV0cmlldmVkVmFsdWUocmVzdWx0LnRvU3RyaW5nKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgdmFsdWU6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBEZXBvc2l0IGZ1bmRzIGludG8gdGhlIGNvbnRyYWN0XHJcbiAgY29uc3QgZGVwb3NpdEZ1bmRzID0gYXN5bmMgKGFtb3VudCkgPT4ge1xyXG4gICAgaWYgKCFjb250cmFjdCkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGNvbm5lY3Qgd2FsbGV0IGZpcnN0IVwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbmVyLnNlbmRUcmFuc2FjdGlvbih7XHJcbiAgICAgICAgdG86IGNvbnRyYWN0QWRkcmVzcy5hZGRyZXNzLFxyXG4gICAgICAgIHZhbHVlOiBldGhlcnMucGFyc2VFdGhlcihhbW91bnQpLFxyXG4gICAgICAgIGdhc0xpbWl0OiAyMTAwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcclxuICAgICAgYWxlcnQoXCJGdW5kcyBkZXBvc2l0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZXBvc2l0aW5nIGZ1bmRzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gVHJhbnNmZXIgRVRIIGZyb20gdGhlIGNvbnRyYWN0IHRvIGEgc3BlY2lmaWVkIGFkZHJlc3NcclxuICBjb25zdCB0cmFuc2ZlckVUSCA9IGFzeW5jIChyZWNpcGllbnQsIGFtb3VudCkgPT4ge1xyXG4gICAgaWYgKCFjb250cmFjdCkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGNvbm5lY3Qgd2FsbGV0IGZpcnN0IVwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QudHJhbnNmZXJFVEgocmVjaXBpZW50LCBldGhlcnMucGFyc2VFdGhlcihhbW91bnQpKTtcclxuICAgICAgYXdhaXQgdHgud2FpdCgpO1xyXG4gICAgICBhbGVydChcIkVUSCB0cmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHRyYW5zZmVycmluZyBFVEg6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBHZXQgdGhlIGNvbnRyYWN0IGJhbGFuY2VcclxuICBjb25zdCBnZXRDb250cmFjdEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWNvbnRyYWN0KSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgY29ubmVjdCB3YWxsZXQgZmlyc3QhXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbnRyYWN0LmdldENvbnRyYWN0QmFsYW5jZSgpO1xyXG4gICAgICBzZXRDb250cmFjdEJhbGFuY2UoZXRoZXJzLmZvcm1hdEV0aGVyKGJhbGFuY2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGNvbnRyYWN0IGJhbGFuY2U6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICBpbml0aWFsaXplRXRoZXJzKCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+R2V0U2V0IENvbnRyYWN0PC9oMT5cclxuXHJcbiAgICAgIHsvKiBXYWxsZXQgQ29ubmVjdGlvbiAqL31cclxuICAgICAge2FjY291bnQgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPkNvbm5lY3RlZDoge2FjY291bnR9PC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBvbkNsaWNrPXtpbml0aWFsaXplRXRoZXJzfSBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgbWItNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBJbnB1dCBGaWVsZCBmb3IgU2V0dGluZyBWYWx1ZSAqL31cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmFsdWVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgbWItNFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgb25DbGljaz17c2V0Q29udHJhY3RWYWx1ZX0gXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgbWItNFwiXHJcbiAgICAgID5cclxuICAgICAgICBTZXQgVmFsdWVcclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7LyogR2V0IFZhbHVlIEJ1dHRvbiAqL31cclxuICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBvbkNsaWNrPXtnZXRDb250cmFjdFZhbHVlfSBcclxuICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgbWItNFwiXHJcbiAgICAgID5cclxuICAgICAgICBHZXQgVmFsdWVcclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7LyogRGlzcGxheSBSZXRyaWV2ZWQgVmFsdWUgKi99XHJcbiAgICAgIHtyZXRyaWV2ZWRWYWx1ZSAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5TdG9yZWQgVmFsdWU6IHtyZXRyaWV2ZWRWYWx1ZX08L3A+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogRGVwb3NpdCBGdW5kcyAqL31cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgaW4gRVRIXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlcG9zaXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgbWItNFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZXBvc2l0RnVuZHMoZGVwb3NpdEFtb3VudCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLXllbGxvdy02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIG1iLTRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgRGVwb3NpdCBGdW5kc1xyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBUcmFuc2ZlciBFVEggKi99XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2lwaWVudCBBZGRyZXNzXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlY2lwaWVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMiBtYi00XCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgaW4gRVRIXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRyYW5zZmVyQW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yIG1iLTRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdHJhbnNmZXJFVEgocmVjaXBpZW50LCB0cmFuc2ZlckFtb3VudCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLXJlZC02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIG1iLTRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgVHJhbnNmZXIgRVRIXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgey8qIEdldCBDb250cmFjdCBCYWxhbmNlICovfVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17Z2V0Q29udHJhY3RCYWxhbmNlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgbWItNFwiXHJcbiAgICAgID5cclxuICAgICAgICBHZXQgQ29udHJhY3QgQmFsYW5jZVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBEaXNwbGF5IENvbnRyYWN0IEJhbGFuY2UgKi99XHJcbiAgICAgIHtjb250cmFjdEJhbGFuY2UgIT09IG51bGwgJiYgKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+Q29udHJhY3QgQmFsYW5jZToge2NvbnRyYWN0QmFsYW5jZX0gRVRIPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiUGFnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJyZXRyaWV2ZWRWYWx1ZSIsInNldFJldHJpZXZlZFZhbHVlIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwic2lnbmVyIiwic2V0U2lnbmVyIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImRlcG9zaXRBbW91bnQiLCJzZXREZXBvc2l0QW1vdW50IiwicmVjaXBpZW50Iiwic2V0UmVjaXBpZW50IiwidHJhbnNmZXJBbW91bnQiLCJzZXRUcmFuc2ZlckFtb3VudCIsImNvbnRyYWN0QmFsYW5jZSIsInNldENvbnRyYWN0QmFsYW5jZSIsImluaXRpYWxpemVFdGhlcnMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFsZXJ0IiwiX3Byb3ZpZGVyIiwiQnJvd3NlclByb3ZpZGVyIiwiX3NpZ25lciIsImdldFNpZ25lciIsIl9jb250cmFjdCIsIkNvbnRyYWN0IiwiYWRkcmVzcyIsImFiaSIsImFjY291bnRzIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsInNldENvbnRyYWN0VmFsdWUiLCJ0eCIsInNldCIsIkJpZ0ludCIsIndhaXQiLCJnZXRDb250cmFjdFZhbHVlIiwicmVzdWx0IiwiZ2V0IiwidG9TdHJpbmciLCJkZXBvc2l0RnVuZHMiLCJhbW91bnQiLCJzZW5kVHJhbnNhY3Rpb24iLCJ0byIsInBhcnNlRXRoZXIiLCJnYXNMaW1pdCIsInRyYW5zZmVyRVRIIiwiZ2V0Q29udHJhY3RCYWxhbmNlIiwiYmFsYW5jZSIsImZvcm1hdEV0aGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});