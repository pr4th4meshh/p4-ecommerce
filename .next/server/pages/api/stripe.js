"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(\"sk_test_51M0KBBSHAzIzojOsT8njeYh8eDcKd2mZG5JIqNmDhEensjJERfg2Xm26TInpzqPSO6Z2Gz5KbMRJXZuQR509JdY600fDrzIwc6\");\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        try {\n            const params = {\n                submit_type: 'pay',\n                mode: 'payment',\n                payment_method_types: [\n                    'card'\n                ],\n                billing_address_collection: 'auto',\n                shipping_options: [\n                    {\n                        shipping_rate: 'shr_1MWK0WSHAzIzojOspzATA8ML'\n                    },\n                    {\n                        shipping_rate: 'shr_1M0KoISHAzIzojOsgKKUzOxO'\n                    }\n                ],\n                line_items: req.body.map((item)=>{\n                    const img = item.image[0].asset._ref;\n                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/6nu9ecj5/production/').replace('-webp', '.webp');\n                    return {\n                        price_data: {\n                            currency: 'inr',\n                            product_data: {\n                                name: item.name,\n                                images: [\n                                    newImage\n                                ]\n                            },\n                            unit_amount: item.price * 100\n                        },\n                        adjustable_quantity: {\n                            enabled: true,\n                            minimum: 1\n                        },\n                        quantity: item.quantity\n                    };\n                }),\n                success_url: `${req.headers.origin}/success`,\n                cancel_url: `${req.headers.origin}/canceled`\n            };\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create(params);\n            res.status(200).json(session);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader('Allow', 'POST');\n        res.status(405).end('Method Not Allowed');\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RyaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsb0RBQXdCO0FBQ3hCLEtBQUssQ0FBQ0UsTUFBTSxHQUFHRixtQkFBTyxDQUFDLHNCQUFRLEVBQUVHLDZHQUF5QztBQUUzRCxlQUFlRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMxQixHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7Z0JBQ2RDLFdBQVcsRUFBRSxDQUFLO2dCQUNsQkMsSUFBSSxFQUFFLENBQVM7Z0JBQ2ZDLG9CQUFvQixFQUFFLENBQUM7b0JBQUEsQ0FBTTtnQkFBQSxDQUFDO2dCQUM5QkMsMEJBQTBCLEVBQUUsQ0FBTTtnQkFDbENDLGdCQUFnQixFQUFFLENBQUM7b0JBQ2pCLENBQUM7d0JBQUNDLGFBQWEsRUFBRSxDQUE4QjtvQkFBQyxDQUFDO29CQUNqRCxDQUFDQTt3QkFBQUEsYUFBYSxFQUFFLENBQThCO29CQUFBLENBQUM7Z0JBQ2pELENBQUM7Z0JBQ0RDLFVBQVUsRUFBRVYsR0FBRyxDQUFDVyxJQUFJLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7b0JBQ2xDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQyxDQUFDLEVBQUVDLEtBQUssQ0FBQ0MsSUFBSTtvQkFDcEMsS0FBSyxDQUFDQyxRQUFRLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDLENBQVEsU0FBRSxDQUFtRCxvREFBRUEsT0FBTyxDQUFDLENBQU8sUUFBRSxDQUFPO29CQUVwSCxNQUFNLENBQUMsQ0FBQzt3QkFDTkMsVUFBVSxFQUFFLENBQUM7NEJBQ1hDLFFBQVEsRUFBRSxDQUFLOzRCQUNmQyxZQUFZLEVBQUUsQ0FBQztnQ0FDYkMsSUFBSSxFQUFFVixJQUFJLENBQUNVLElBQUk7Z0NBQ2ZDLE1BQU0sRUFBRSxDQUFDTjtvQ0FBQUEsUUFBUTtnQ0FBQSxDQUFDOzRCQUNwQixDQUFDOzRCQUNETyxXQUFXLEVBQUVaLElBQUksQ0FBQ2EsS0FBSyxHQUFHLEdBQUc7d0JBQy9CLENBQUM7d0JBQ0RDLG1CQUFtQixFQUFFLENBQUM7NEJBQ3BCQyxPQUFPLEVBQUMsSUFBSTs0QkFDWkMsT0FBTyxFQUFFLENBQUM7d0JBQ1osQ0FBQzt3QkFDREMsUUFBUSxFQUFFakIsSUFBSSxDQUFDaUIsUUFBUTtvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQUNEQyxXQUFXLEtBQUsvQixHQUFHLENBQUNnQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxRQUFRO2dCQUMzQ0MsVUFBVSxLQUFLbEMsR0FBRyxDQUFDZ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsU0FBUztZQUM3QyxDQUFDO1lBRUQsRUFBNkM7WUFDN0MsS0FBSyxDQUFDRSxPQUFPLEdBQUcsS0FBSyxDQUFDeEMsTUFBTSxDQUFDeUMsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ25DLE1BQU07WUFFNURGLEdBQUcsQ0FBQ3NDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0wsT0FBTztRQUM5QixDQUFDLENBQUMsS0FBSyxFQUFFTSxHQUFHLEVBQUUsQ0FBQztZQUNieEMsR0FBRyxDQUFDc0MsTUFBTSxDQUFDRSxHQUFHLENBQUNDLFVBQVUsSUFBSSxHQUFHLEVBQUVGLElBQUksQ0FBQ0MsR0FBRyxDQUFDRSxPQUFPO1FBQ3BELENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNOMUMsR0FBRyxDQUFDMkMsU0FBUyxDQUFDLENBQU8sUUFBRSxDQUFNO1FBQzdCM0MsR0FBRyxDQUFDc0MsTUFBTSxDQUFDLEdBQUcsRUFBRU0sR0FBRyxDQUFDLENBQW9CO0lBQzFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vcGFnZXMvYXBpL3N0cmlwZS5qcz9kNzg4Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XHJcbmNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoXCJzdHJpcGVcIikocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1NFQ1JFVF9LRVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBzdWJtaXRfdHlwZTogJ3BheScsXHJcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxyXG4gICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcclxuICAgICAgICBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbjogJ2F1dG8nLFxyXG4gICAgICAgIHNoaXBwaW5nX29wdGlvbnM6IFtcclxuICAgICAgICAgIHsgc2hpcHBpbmdfcmF0ZTogJ3Nocl8xTVdLMFdTSEF6SXpvak9zcHpBVEE4TUwnIH0sXHJcbiAgICAgICAgICB7c2hpcHBpbmdfcmF0ZTogJ3Nocl8xTTBLb0lTSEF6SXpvak9zZ0tLVXpPeE8nfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGluZV9pdGVtczogcmVxLmJvZHkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBpdGVtLmltYWdlWzBdLmFzc2V0Ll9yZWY7XHJcbiAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IGltZy5yZXBsYWNlKCdpbWFnZS0nLCAnaHR0cHM6Ly9jZG4uc2FuaXR5LmlvL2ltYWdlcy82bnU5ZWNqNS9wcm9kdWN0aW9uLycpLnJlcGxhY2UoJy13ZWJwJywgJy53ZWJwJyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJpY2VfZGF0YTogeyBcclxuICAgICAgICAgICAgICBjdXJyZW5jeTogJ2lucicsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7IFxyXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBbbmV3SW1hZ2VdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkanVzdGFibGVfcXVhbnRpdHk6IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgICAgICAgICAgbWluaW11bTogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9zdWNjZXNzYCxcclxuICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2NhbmNlbGVkYCxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXHJcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHBhcmFtcyk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzZXNzaW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKTtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBOb3QgQWxsb3dlZCcpO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInBhcmFtcyIsInN1Ym1pdF90eXBlIiwibW9kZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJzaGlwcGluZ19vcHRpb25zIiwic2hpcHBpbmdfcmF0ZSIsImxpbmVfaXRlbXMiLCJib2R5IiwibWFwIiwiaXRlbSIsImltZyIsImltYWdlIiwiYXNzZXQiLCJfcmVmIiwibmV3SW1hZ2UiLCJyZXBsYWNlIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwibmFtZSIsImltYWdlcyIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJhZGp1c3RhYmxlX3F1YW50aXR5IiwiZW5hYmxlZCIsIm1pbmltdW0iLCJxdWFudGl0eSIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();