(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cheat-sheets-cheat-sheets-module"],{

/***/ "./src/app/cheat-sheets/cheat-home/cheat-home.component.css":
/*!******************************************************************!*\
  !*** ./src/app/cheat-sheets/cheat-home/cheat-home.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWF0LXNoZWV0cy9jaGVhdC1ob21lL2NoZWF0LWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cheat-sheets/cheat-home/cheat-home.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/cheat-sheets/cheat-home/cheat-home.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"position-relative\">\n    <!-- Hero for FREE version -->\n    <section class=\"section section-lg section-hero section-shaped\">\n      <!-- Background circles -->\n      <div class=\"shape shape-style-1 shape-primary\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n      </div>\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\n        <div class=\"col px-0\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col-lg-8 text-center\">\n              <h2 style=\"color:white;\"><b>Dev-Cheet-Sheet</b></h2>\n              <p class=\"lead text-white\">Dev Cheat Sheet helps you do or remember programming concepts and keywords\n                easily. It's Free and Open Source.</p>\n              <div class=\"btn-wrapper mt-5\">\n                <div class=\"form-group\">\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n\n\n    </section>\n  </div>\n  <section class=\"section section-lg pt-lg-0 mt--200\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\" >\n        <div class=\"col-lg-12\" >\n          <div class=\"row row-grid\">\n            <div class=\"col-lg-4\"  *ngFor=\"let n of categoryArray\">\n              <app-main-category [title]=\"n\"></app-main-category>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- <app-sections></app-sections> -->\n</main>"

/***/ }),

/***/ "./src/app/cheat-sheets/cheat-home/cheat-home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cheat-sheets/cheat-home/cheat-home.component.ts ***!
  \*****************************************************************/
/*! exports provided: CheatHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatHomeComponent", function() { return CheatHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheatHomeComponent = /** @class */ (function () {
    function CheatHomeComponent() {
        this.categoryArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    }
    CheatHomeComponent.prototype.ngOnInit = function () {
    };
    CheatHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheat-home',
            template: __webpack_require__(/*! ./cheat-home.component.html */ "./src/app/cheat-sheets/cheat-home/cheat-home.component.html"),
            styles: [__webpack_require__(/*! ./cheat-home.component.css */ "./src/app/cheat-sheets/cheat-home/cheat-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheatHomeComponent);
    return CheatHomeComponent;
}());



/***/ }),

/***/ "./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.css":
/*!********************************************************************!*\
  !*** ./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWF0LXNoZWV0cy9jaGVhdC1zaGVldC9jaGVhdC1zaGVldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white\">\n              <div class=\"text-muted text-center mb-3\">\n                <h3>Sign in with</h3>\n              </div>\n             \n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div>\n             \n            </div>\n          </div>\n          \n        </div>\n\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white\">\n              <div class=\"text-muted text-center mb-3\">\n                <h3>Sign in with</h3>\n              </div>\n             \n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div>\n             \n            </div>\n          </div>\n          \n        </div>\n      </div>\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-4\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white\">\n              <div class=\"text-muted text-center mb-3\">\n                <h3>Sign in with</h3>\n              </div>\n             \n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div>\n             \n            </div>\n          </div>\n          \n        </div>\n\n        <div class=\"col-lg-4\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white\">\n              <div class=\"text-muted text-center mb-3\">\n                <h3>Sign in with</h3>\n              </div>\n             \n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div>\n             \n            </div>\n          </div>\n          \n        </div>\n\n        <div class=\"col-lg-4\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white\">\n              <div class=\"text-muted text-center mb-3\">\n                <h3>Sign in with</h3>\n              </div>\n             \n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div>\n             \n            </div>\n          </div>\n          \n        </div>\n        \n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.ts ***!
  \*******************************************************************/
/*! exports provided: CheatSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatSheetComponent", function() { return CheatSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheatSheetComponent = /** @class */ (function () {
    function CheatSheetComponent(route) {
        this.route = route;
    }
    CheatSheetComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.paramMap.get("id");
    };
    CheatSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheat-sheet',
            template: __webpack_require__(/*! ./cheat-sheet.component.html */ "./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.html"),
            styles: [__webpack_require__(/*! ./cheat-sheet.component.css */ "./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CheatSheetComponent);
    return CheatSheetComponent;
}());



/***/ }),

/***/ "./src/app/cheat-sheets/cheat-sheets.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cheat-sheets/cheat-sheets.module.ts ***!
  \*****************************************************/
/*! exports provided: CheatSheetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatSheetsModule", function() { return CheatSheetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cheet_sheets_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheet-sheets.route */ "./src/app/cheat-sheets/cheet-sheets.route.ts");
/* harmony import */ var _cheat_home_cheat_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cheat-home/cheat-home.component */ "./src/app/cheat-sheets/cheat-home/cheat-home.component.ts");
/* harmony import */ var _main_category_main_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-category/main-category.component */ "./src/app/cheat-sheets/main-category/main-category.component.ts");
/* harmony import */ var _cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cheat-sheet/cheat-sheet.component */ "./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CheatSheetsModule = /** @class */ (function () {
    function CheatSheetsModule() {
    }
    CheatSheetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cheat_home_cheat_home_component__WEBPACK_IMPORTED_MODULE_4__["CheatHomeComponent"], _main_category_main_category_component__WEBPACK_IMPORTED_MODULE_5__["MainCategoryComponent"], _cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_6__["CheatSheetComponent"]],
            entryComponents: [_cheat_home_cheat_home_component__WEBPACK_IMPORTED_MODULE_4__["CheatHomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_cheet_sheets_route__WEBPACK_IMPORTED_MODULE_3__["cheatsheetsRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
            ]
        })
    ], CheatSheetsModule);
    return CheatSheetsModule;
}());



/***/ }),

/***/ "./src/app/cheat-sheets/cheet-sheets.route.ts":
/*!****************************************************!*\
  !*** ./src/app/cheat-sheets/cheet-sheets.route.ts ***!
  \****************************************************/
/*! exports provided: cheatsheetsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cheatsheetsRoutes", function() { return cheatsheetsRoutes; });
/* harmony import */ var _cheat_home_cheat_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cheat-home/cheat-home.component */ "./src/app/cheat-sheets/cheat-home/cheat-home.component.ts");
/* harmony import */ var _cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cheat-sheet/cheat-sheet.component */ "./src/app/cheat-sheets/cheat-sheet/cheat-sheet.component.ts");


var cheatsheetsRoutes = [
    {
        path: '',
        component: _cheat_home_cheat_home_component__WEBPACK_IMPORTED_MODULE_0__["CheatHomeComponent"]
    },
    {
        path: ':id',
        component: _cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_1__["CheatSheetComponent"]
    },
];


/***/ }),

/***/ "./src/app/cheat-sheets/main-category/main-category.component.css":
/*!************************************************************************!*\
  !*** ./src/app/cheat-sheets/main-category/main-category.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWF0LXNoZWV0cy9tYWluLWNhdGVnb3J5L21haW4tY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cheat-sheets/main-category/main-category.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cheat-sheets/main-category/main-category.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-lift--hover shadow border-0\">\n    <div class=\"card-body py-5\">\n      <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n        <i class=\"ni ni-check-bold\"></i>\n      </div>\n      <h6 class=\"text-primary text-uppercase\">Card : {{title}}</h6>\n      <div>\n        <span class=\"badge badge-pill badge-warning\" style=\"margin-right:5px; cursor: pointer; \" (click)=\"onSelect(title)\">angulafdfdfdfdfr</span>\n        <span class=\"badge badge-pill badge-primary\" style=\"cursor: pointer;\" placement=\"top\" ngbTooltip=\"Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.Tooltip on top\">ng-bootstrap</span>\n        <span class=\"badge badge-pill badge-primary\">creative</span>\n        <span class=\"badge badge-pill badge-primary\">creative</span>\n        <span class=\"badge badge-pill badge-primary\">creative</span>\n        <span class=\"badge badge-pill badge-primary\">creative</span>\n        <span class=\"badge badge-pill badge-primary\">creative</span>\n        <span class=\"badge badge-pill badge-primary\">creative</span>\n        <span class=\"badge badge-pill badge-primary\">creative</span>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/cheat-sheets/main-category/main-category.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cheat-sheets/main-category/main-category.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCategoryComponent", function() { return MainCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainCategoryComponent = /** @class */ (function () {
    function MainCategoryComponent(router) {
        this.router = router;
    }
    MainCategoryComponent.prototype.ngOnInit = function () {
    };
    MainCategoryComponent.prototype.onSelect = function (title) {
        this.router.navigate(["cheatsheets/" + title]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("title"),
        __metadata("design:type", String)
    ], MainCategoryComponent.prototype, "title", void 0);
    MainCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-category',
            template: __webpack_require__(/*! ./main-category.component.html */ "./src/app/cheat-sheets/main-category/main-category.component.html"),
            styles: [__webpack_require__(/*! ./main-category.component.css */ "./src/app/cheat-sheets/main-category/main-category.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainCategoryComponent);
    return MainCategoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cheat-sheets-cheat-sheets-module.js.map