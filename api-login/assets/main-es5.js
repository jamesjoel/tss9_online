function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div style=\"min-height: 700px;\" class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>dashboard works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p Mydir>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae ullam ab velit dolore nemo </p>\n\n<h1 Mydir>hello world</h1>\n\n<input type=\"file\" #myfile (change)=\"upload(myfile)\"/>\n<br />\n<br />\n<input type=\"text\" [(ngModel)]=\"name\"/>\n\n<br />\n\n<Br />\n<button (click)=\"upload(myfile)\" class=\"btn btn-success\">Upload</button>\n<Br />\n<span *ngFor=\"let a of filearr\">\n    <img [src]=\"a.filepath\" height=\"200\" />\n</span>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6 offset-md-3 mt-5\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4>Login</h4>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"form-group\">\n                    <label>Username</label>\n                    <input type=\"text\" [(ngModel)]=\"user.username\" class=\"form-control\" />\n                </div>\n                <div class=\"form-group\">\n                    <label>Password</label>\n                    <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" />\n                </div>\n                <p *ngIf=\"showMsg\" class=\"text-danger text-center\">\n                    {{ msg }}\n                </p>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-success\" (click)=\"login()\">Login</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-4\">\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <table class=\"table table-dark table-bordered\">\n                <tr>\n                    <td>Full Name</td>\n                    <td>{{ user.full_name }}</td>\n                </tr>\n                <tr>\n                    <td>Address</td>\n                    <td>{{ user.address }}</td>\n                </tr>\n                <tr>\n                    <td>City</td>\n                    <td>{{ user.city }}</td>\n                </tr>\n                <tr>\n                    <td>Username</td>\n                    <td>{{ user.username }}</td>\n                </tr>\n\n            </table>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-4\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n            <form [formGroup]=\"user\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h4>Registartion</h4>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"form-group\">\n                        <label>Full Name</label>\n                        <input [ngClass]=\"{ 'is-invalid': checkSubmit && user.controls.name.errors }\" formControlName=\"name\" type=\"text\" class=\"form-control\" />\n                        <div *ngIf=\"checkSubmit && user.controls.name.errors\"  class=\"invalid-feedback\">\n                            <div *ngIf=\"user.controls.name.errors.required\">\n                                Insert Your Full Name\n                            </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input [ngClass]=\"{ 'is-invalid' : checkSubmit && user.controls.email.errors }\" formControlName=\"email\" type=\"text\" class=\"form-control\" />\n                        <div *ngIf=\"checkSubmit && user.controls.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"user.controls.email.errors.required\">\n                                Insert Your Eamil\n                            </div>\n                            <div *ngIf=\"user.controls.email.errors.email\">\n                                Your Email id is not correct\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input [ngClass]=\"{'is-invalid': checkSubmit && user.controls.password.errors }\" formControlName=\"password\" type=\"password\" class=\"form-control\" >\n                        <div *ngIf=\"checkSubmit && user.controls.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"user.controls.password.errors.required\">\n                                Insert Your Password\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Re- Password</label>\n                        <input [ngClass]=\"{'is-invalid': checkSubmit && user.controls.re_pass.errors }\" formControlName=\"re_pass\" type=\"password\" class=\"form-control\" >\n                        <div *ngIf=\"checkSubmit && user.controls.re_pass.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"user.controls.re_pass.errors.required\">\n                                Insert Your Re-Password\n                            </div>\n\n                            <div *ngIf=\"user.controls.re_pass.errors.machErr\">\n                                Password and Re-Password not matched\n                            </div>\n\n\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Contact</label>\n                        <input [ngClass]=\"{'is-invalid': checkSubmit && user.controls.contact.errors }\" formControlName=\"contact\" type=\"password\" class=\"form-control\" >\n                        <div *ngIf=\"checkSubmit && user.controls.contact.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"user.controls.contact.errors.required\">\n                                Insert Your Contact Number\n                            </div>\n                            <div *ngIf=\"user.controls.contact.errors.contacterr\">\n                                Contact Number must be a Number\n                            </div>\n                            <div *ngIf=\"user.controls.contact.errors.lengtherr\">\n                                Contact Number length is less then 10 digit\n                            </div>\n                            \n\n                            \n\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Select Image</label>\n                        <input [ngClass]=\"{'is-invalid': checkSubmit && user.controls.image.errors }\" formControlName=\"image\" type=\"file\" class=\"form-control\" >\n                        <div *ngIf=\"checkSubmit && user.controls.re_pass.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"user.controls.image.errors.required\">\n                                Select Your Image\n                            </div>\n                            <div *ngIf=\"user.controls.image.errors.imgerr\">\n                                Select Only .jpg or .jpeg files\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" (click)=\"save()\" class=\"btn btn-primary\">Submit</button>\n                </div>\n            </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statecity/statecity.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statecity/statecity.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStatecityStatecityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\n    <div class=\"row\">\n        <!-- <pre>{{ cityarr | json }}</pre> -->\n        <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n                <label>State</label>\n                <select (change)=\"getcity()\" [(ngModel)]=\"state\" class=\"form-control\">\n                    <option>Select</option>\n                    <option *ngFor=\"let s of arr\">{{ s }}</option>\n                </select>\n            </div>\n            <br />\n            <Br />\n            <div class=\"form-group\">\n                <label>City</label>\n                <select class=\"form-control\">\n                    <option>Select</option>\n                    <option *ngFor=\"let c of cityarr\">{{ c.name }}</option>\n                </select>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/student.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/student.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStudentStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-md-8 mt-3 offset-md-2\">\n            <table class=\"table table-hover table-dark table-bordered\">\n                <tr>\n                    <th>S.No.</th>\n                    <th>Name</th>\n                    <th>Age</th>\n                    <Th>Fee</Th>\n                    <th>Discount</th>\n                    <th>Gender</th>\n                </tr>\n                <tr *ngFor=\"let s of student; let n = index\">\n                    <td>{{ n+1 }}</td>\n                    <td>{{ s.name }}</td>\n                    <td>{{ s.age }}</td>\n                    <td>{{ s.fee | currency : '&#8377;' }}</td>\n                    <td>{{ s.age | discount : s.fee | currency : '&#8377;' }}</td>\n                    <td>{{ s.gender }}</td>\n                </tr>\n\n            </table>\n\n            <br />\n            <p #abc>hello world</p>\n            <button (click)=\"demo(abc)\" class=\"btn btn-primary\">OK</button>\n        </div>\n        \n\n        \n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <!-- Brand -->\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  \n    <!-- Toggler/collapsibe Button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <!-- Navbar links -->\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"student\">Student</a>\n        </li>\n        <ng-template  [ngIf]=\"_auth.isLoggedIn()\" [ngIfElse]=\"elseBox\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"profile\">Profile</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"_auth.logout()\">Logout</a>\n          </li>\n        </ng-template>\n        \n        <ng-template #elseBox>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"login\">Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"signup\">Signup</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"statecity\">StateCity</a>\n          </li>\n        </ng-template>\n\n        \n        \n\n      </ul>\n    </div>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");
    /* harmony import */


    var _guards_backdoor_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/backdoor.guard */
    "./src/app/guards/backdoor.guard.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _pages_student_student_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/student/student.component */
    "./src/app/pages/student/student.component.ts");
    /* harmony import */


    var _pages_statecity_statecity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/statecity/statecity.component */
    "./src/app/pages/statecity/statecity.component.ts");

    var routes = [{
      path: "",
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: "login",
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: "signup",
      component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }, {
      path: "dashboard",
      canActivate: [_guards_backdoor_guard__WEBPACK_IMPORTED_MODULE_7__["BackdoorGuard"]],
      component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: "profile",
      canActivate: [_guards_backdoor_guard__WEBPACK_IMPORTED_MODULE_7__["BackdoorGuard"]],
      component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
    }, {
      path: "student",
      component: _pages_student_student_component__WEBPACK_IMPORTED_MODULE_9__["StudentComponent"]
    }, {
      path: "statecity",
      component: _pages_statecity_statecity_component__WEBPACK_IMPORTED_MODULE_10__["StatecityComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ang-login';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _pages_student_student_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/student/student.component */
    "./src/app/pages/student/student.component.ts");
    /* harmony import */


    var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes/discount.pipe */
    "./src/app/pipes/discount.pipe.ts");
    /* harmony import */


    var _directives_mydir_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./directives/mydir.directive */
    "./src/app/directives/mydir.directive.ts");
    /* harmony import */


    var _pages_statecity_statecity_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/statecity/statecity.component */
    "./src/app/pages/statecity/statecity.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _pages_student_student_component__WEBPACK_IMPORTED_MODULE_14__["StudentComponent"], _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_15__["DiscountPipe"], _directives_mydir_directive__WEBPACK_IMPORTED_MODULE_16__["MydirDirective"], _pages_statecity_statecity_component__WEBPACK_IMPORTED_MODULE_17__["StatecityComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/directives/mydir.directive.ts":
  /*!***********************************************!*\
    !*** ./src/app/directives/mydir.directive.ts ***!
    \***********************************************/

  /*! exports provided: MydirDirective */

  /***/
  function srcAppDirectivesMydirDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MydirDirective", function () {
      return MydirDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MydirDirective = /*#__PURE__*/function () {
      function MydirDirective(_ele) {
        _classCallCheck(this, MydirDirective);

        this._ele = _ele; // console.log(this._ele);

        this._ele.nativeElement.style.backgroundColor = "red";
        this._ele.nativeElement.style.fontSize = "35px";
      }

      _createClass(MydirDirective, [{
        key: "demo",
        value: function demo() {
          //  console.log("------------------");
          //  alert();
          this._ele.nativeElement.style.backgroundColor = "green";
        }
      }, {
        key: "demo2",
        value: function demo2() {
          this._ele.nativeElement.innerHTML = "go back";
        }
      }]);

      return MydirDirective;
    }();

    MydirDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], MydirDirective.prototype, "demo", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseout')], MydirDirective.prototype, "demo2", null);
    MydirDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[Mydir]'
    })], MydirDirective); // <p MyDir><p>

    /***/
  },

  /***/
  "./src/app/guards/backdoor.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/guards/backdoor.guard.ts ***!
    \******************************************/

  /*! exports provided: BackdoorGuard */

  /***/
  function srcAppGuardsBackdoorGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackdoorGuard", function () {
      return BackdoorGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BackdoorGuard = /*#__PURE__*/function () {
      function BackdoorGuard(_router) {
        _classCallCheck(this, BackdoorGuard);

        this._router = _router;
      }

      _createClass(BackdoorGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (localStorage.getItem("token")) {
            return true;
          } else {
            this._router.navigate(["/"]);

            return false;
          }
        }
      }]);

      return BackdoorGuard;
    }();

    BackdoorGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BackdoorGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BackdoorGuard);
    /***/
  },

  /***/
  "./src/app/helpers/val.helper.ts":
  /*!***************************************!*\
    !*** ./src/app/helpers/val.helper.ts ***!
    \***************************************/

  /*! exports provided: MachPass, chekNum, imageCheck */

  /***/
  function srcAppHelpersValHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MachPass", function () {
      return MachPass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chekNum", function () {
      return chekNum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "imageCheck", function () {
      return imageCheck;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function MachPass(pass, repass) {
      return function (myForm) {
        var x = myForm.controls[pass]; // password

        var y = myForm.controls[repass]; // re_pass

        if (y.errors && !y.errors.machErr) {
          return;
        }

        if (x.value != y.value) {
          y.setErrors({
            machErr: true
          });
        } else {
          y.setErrors(null);
        }
      };
    }

    function chekNum(con) {
      return function (xyz) {
        var a = xyz.controls[con];

        if (a.errors && !a.errors.contacterr && !a.errors.lengtherr) {
          return;
        }

        if (isNaN(a.value)) {
          a.setErrors({
            contacterr: true
          });
        } else {
          if (a.value.length > 10) {
            a.setErrors({
              lengtherr: true
            });
          } else {
            a.setErrors(null);
          }
        }
      };
    }

    function imageCheck(img) {
      return function (myForm) {
        var a = myForm.controls[img];
        var name = a.value;
        var arr = name.split(".");
        var ext = arr[arr.length - 1];

        if (a.errors && !a.errors.imgerr) {
          return;
        }

        if (ext == "jpg" || ext == "jpeg") {
          a.setErrors(null);
        } else {
          a.setErrors({
            imgerr: true
          });
        }
      };
    } // isNaN()  --- is Not A Number
    // if(isNaN(x))

    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/home/home.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(_http) {
        _classCallCheck(this, HomeComponent);

        this._http = _http;
        this.filearr = [];
        this.name = "";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "upload",
        value: function upload(x) {
          var _this = this;

          console.log(x.files[0]);
          var filedata = x.files[0];
          var form = new FormData();
          form.append("myfile", filedata); // req.files
          // form.append("formobj", this.name); // req.body
          // form.append("age", "25"); // req.body

          this._http.post("http://localhost:3000/api/upload", form).subscribe(function (result) {
            //console.log(result);
            _this.filearr.push(result); // { filepath : "http://localhost:3000/images/"}

          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/pages/home/home.component.scss"))["default"]]
    })], HomeComponent); //  <form enctype = "multipart/form-data">

    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_auth, _router) {
        _classCallCheck(this, LoginComponent);

        this._auth = _auth;
        this._router = _router;
        this.user = {
          username: "",
          password: ""
        };
        this.showMsg = false;
        this.msg = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          this._auth.do_login(this.user).subscribe(function (result) {
            // console.log(result);
            localStorage.setItem("token", result.token);

            _this2._router.navigate(["/dashboard"]);
          }, function (err) {
            //console.log(err.error);
            if (err.error.type == 1) {
              _this2.showMsg = true;
              _this2.msg = "This Username And Password is Incorrect !";
            }

            if (err.error.type == 2) {
              _this2.showMsg = true;
              _this2.msg = "This Password is Incorrect !";
              _this2.user.password = "";
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/profile/profile.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(_user) {
        var _this3 = this;

        _classCallCheck(this, ProfileComponent);

        this._user = _user;

        this._user.getUser().subscribe(function (result) {
          console.log(result);
          _this3.user = result;
        });
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/pages/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/signup/signup.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/signup/signup.component.ts ***!
    \**************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPagesSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _helpers_val_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../helpers/val.helper */
    "./src/app/helpers/val.helper.ts");

    var SignupComponent = /*#__PURE__*/function () {
      // define a variable by FormGroup for form-data

      /*
      user = {
        name : "",
        email : ""
      }
          */
      function SignupComponent(_fb) {
        _classCallCheck(this, SignupComponent);

        this._fb = _fb;
        this.checkSubmit = false;
        this.user = this._fb.group({
          name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          re_pass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
          validator: [Object(_helpers_val_helper__WEBPACK_IMPORTED_MODULE_3__["MachPass"])('password', 're_pass'), Object(_helpers_val_helper__WEBPACK_IMPORTED_MODULE_3__["chekNum"])('contact'), Object(_helpers_val_helper__WEBPACK_IMPORTED_MODULE_3__["imageCheck"])('image')]
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.checkSubmit = true;

          if (this.user.invalid) {
            return;
          } // console.log(this.user.value);


          var obj = this.user.value;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/pages/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/pages/statecity/statecity.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/statecity/statecity.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStatecityStatecityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRlY2l0eS9zdGF0ZWNpdHkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/statecity/statecity.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/statecity/statecity.component.ts ***!
    \********************************************************/

  /*! exports provided: StatecityComponent */

  /***/
  function srcAppPagesStatecityStatecityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatecityComponent", function () {
      return StatecityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/city.service */
    "./src/app/services/city.service.ts");

    var StatecityComponent = /*#__PURE__*/function () {
      function StatecityComponent(_city) {
        var _this4 = this;

        _classCallCheck(this, StatecityComponent);

        this._city = _city;
        this.arr = [];
        this.cityarr = [];
        this.state = "";

        this._city.getCityState().subscribe(function (result) {
          _this4.arr = result;
        });
      }

      _createClass(StatecityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getcity",
        value: function getcity() {
          var _this5 = this;

          // console.log(this.state);
          // this.user.state.value
          this._city.getcity(this.state).subscribe(function (result) {
            // console.log(result);
            _this5.cityarr = result;
          });
        }
      }]);

      return StatecityComponent;
    }();

    StatecityComponent.ctorParameters = function () {
      return [{
        type: _services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"]
      }];
    };

    StatecityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-statecity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./statecity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statecity/statecity.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./statecity.component.scss */
      "./src/app/pages/statecity/statecity.component.scss"))["default"]]
    })], StatecityComponent);
    /***/
  },

  /***/
  "./src/app/pages/student/student.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/student/student.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStudentStudentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/student/student.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/student/student.component.ts ***!
    \****************************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppPagesStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentComponent = /*#__PURE__*/function () {
      function StudentComponent() {
        _classCallCheck(this, StudentComponent);

        this.student = [{
          name: "rohit joshi",
          age: 25,
          fee: 5000,
          gender: "male"
        }, {
          name: "jaya verma",
          age: 20,
          fee: 4500,
          gender: "female"
        }, {
          name: "gaurav sharma",
          age: 27,
          fee: 10000,
          gender: "male"
        }, {
          name: "nilesh sahu",
          age: 28,
          fee: 4200,
          gender: "male"
        }];
      }

      _createClass(StudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "demo",
        value: function demo(x) {
          console.log(x.innerHTML); // <p>hello world</p>
        }
      }]);

      return StudentComponent;
    }();

    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/student.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student.component.scss */
      "./src/app/pages/student/student.component.scss"))["default"]]
    })], StudentComponent);
    /***/
  },

  /***/
  "./src/app/pipes/discount.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/discount.pipe.ts ***!
    \****************************************/

  /*! exports provided: DiscountPipe */

  /***/
  function srcAppPipesDiscountPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountPipe", function () {
      return DiscountPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DiscountPipe = /*#__PURE__*/function () {
      function DiscountPipe() {
        _classCallCheck(this, DiscountPipe);
      }

      _createClass(DiscountPipe, [{
        key: "transform",
        value: function transform(x, y) {
          if (x <= 25) {
            var z = y * 5 / 100;
            return y - z;
          }

          if (x > 25) {
            var _z = y * 10 / 100;

            return y - _z;
          }
        }
      }]);

      return DiscountPipe;
    }();

    DiscountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'discount'
    })], DiscountPipe);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(_http, _router) {
        _classCallCheck(this, AuthService);

        this._http = _http;
        this._router = _router;
      }

      _createClass(AuthService, [{
        key: "do_login",
        value: function do_login(obj) {
          return this._http.post("http://localhost:3000/api/login", obj);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          if (localStorage.getItem("token")) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("token");

          this._router.navigate(["/"]);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/city.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/city.service.ts ***!
    \******************************************/

  /*! exports provided: CityService */

  /***/
  function srcAppServicesCityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityService", function () {
      return CityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CityService = /*#__PURE__*/function () {
      function CityService(_http) {
        _classCallCheck(this, CityService);

        this._http = _http;
      }

      _createClass(CityService, [{
        key: "getCityState",
        value: function getCityState() {
          return this._http.get("http://localhost:3000/api/statecity");
        }
      }, {
        key: "getcity",
        value: function getcity(state) {
          return this._http.post("http://localhost:3000/api/statecity", {
            state: state
          });
        }
      }]);

      return CityService;
    }();

    CityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CityService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(_http) {
        _classCallCheck(this, UserService);

        this._http = _http;
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser() {
          return this._http.get("http://localhost:3000/api/user", {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(_auth) {
        _classCallCheck(this, HeaderComponent);

        this._auth = _auth;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\tss9\ang-login\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map