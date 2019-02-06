(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/bill/bill.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");






var routes = [
    {
        path: 'store',
        component: _store_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"]
    },
    {
        path: 'bill',
        component: _bill_bill_component__WEBPACK_IMPORTED_MODULE_4__["BillComponent"]
    },
    {
        path: '',
        redirectTo: '/bill',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" routerLink=\"/bill\">Add Bill</a>\n\n<a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" routerLink=\"/store\">Add Store</a> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'weekly-planner';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/bill/bill.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _import_material_module_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./import-material-module.module */ "./src/app/import-material-module.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _bill_bill_component__WEBPACK_IMPORTED_MODULE_11__["BillComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_14__["StoreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase, 'weekly-planner-db1'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _import_material_module_module__WEBPACK_IMPORTED_MODULE_15__["ImportMaterialModuleModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bill/bill.component.html":
/*!******************************************!*\
  !*** ./src/app/bill/bill.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mrg15\">\n  <p class=\"warn\">{{errorLog}}</p>\n  <form [formGroup]=\"billForm\" novalidate class=\"mrg15\" (ngSubmit)=\"addBill()\">\n    <mat-grid-list cols=\"1\" rowHeight=\"65px\" gutterSize=\"10px\">\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Bill Date\" formControlName=\"billDate\" autocomplete=\"off\"\n            required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker touchUi #picker></mat-datepicker>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <mat-select placeholder=\"Bill Category\" formControlName=\"billCategory\" required>\n            <mat-option *ngFor=\"let category of billCategories\" [value]=\"category.value\">\n              {{category.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <mat-select placeholder=\"Store Name\" formControlName=\"storeName\" required>\n            <mat-option *ngFor=\"let store of stores\" [value]=\"store.viewValue\">\n              {{store.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <input matInput type=\"number\" placeholder=\"bill Amount\" formControlName=\"billAmount\" required>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <mat-select placeholder=\"Bill Paid By\" formControlName=\"payMedium\" required>\n            <mat-option *ngFor=\"let medium of billMedium\" [value]=\"medium.viewValue\">\n              {{medium.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n    </mat-grid-list>\n\n    <mat-grid-list cols=\"1\" rowHeight=\"55px\" gutterSize=\"10px\">\n      <mat-grid-tile colspan=\"1\">\n        <div class=\"example-button-row\">\n          <button mat-raised-button color=\"primary\" type=\"submit\">Save Bill</button>\n          <button mat-raised-button color=\"accent\" type=\"reset\">Clear</button>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n\n  </form>\n\n  <h3>List of bills already Added: </h3>\n\n  <table mat-table [dataSource]=\"bills\" class=\"width100\">\n    <ng-container matColumnDef=\"billDate\">\n      <th mat-header-cell *matHeaderCellDef> Bill Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.billDate | date : 'MM/dd/yyyy'}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"billCategory\">\n      <th mat-header-cell *matHeaderCellDef> Bill Category </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.billCategory}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"storeName\">\n      <th mat-header-cell *matHeaderCellDef> Store Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.storeName}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"billAmount\">\n      <th mat-header-cell *matHeaderCellDef> Bill Amount </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.billAmount}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"payMedium\">\n      <th mat-header-cell *matHeaderCellDef> Pay Medium </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.payMedium}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/bill/bill.component.scss":
/*!******************************************!*\
  !*** ./src/app/bill/bill.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button {\n  margin-right: 8px; }\n\n.mrg15 {\n  margin: 15px; }\n\n.width100 {\n  width: 100% !important; }\n\n.warn {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC9EOlxcZ2l0aHViLXJlcG9zXFx3ZWVrbHktcGxhbm5lci9zcmNcXGFwcFxcYmlsbFxcYmlsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFVBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JpbGwvYmlsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9ue1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5tcmcxNXtcclxuICBtYXJnaW46MTVweDtcclxufVxyXG4ud2lkdGgxMDB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ud2FybntcclxuICBjb2xvcjpyZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bill/bill.component.ts":
/*!****************************************!*\
  !*** ./src/app/bill/bill.component.ts ***!
  \****************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var BillComponent = /** @class */ (function () {
    function BillComponent(fb, sharedService, db, datePipe) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.db = db;
        this.datePipe = datePipe;
        this.errorLog = null;
        this.billMedium = [
            {
                value: 'chase_cc',
                viewValue: 'Chase Credit Card'
            },
            {
                value: 'discover_cc',
                viewValue: 'Discover Credit Card'
            },
            {
                value: 'bofa_cc',
                viewValue: 'Bank of America Credit Card'
            },
            {
                value: 'bofa_dc',
                viewValue: 'Bank of America Debit Card'
            },
            {
                value: 'wells_dc',
                viewValue: 'Wells Fargo Debit Card'
            }
        ];
        this.billCategories = [
            {
                value: 'grocery',
                viewValue: 'Grocery'
            },
            {
                value: 'gas',
                viewValue: 'Gas'
            },
            {
                value: 'other',
                viewValue: 'other'
            },
        ];
        this.stores = [
            {
                value: 'patel',
                viewValue: 'Patel Brother'
            },
            {
                value: 'walmart',
                viewValue: 'Walmart'
            },
        ];
        this.displayedColumns = ['billDate', 'billCategory', 'storeName', 'billAmount', 'payMedium'];
        this.bills = db.collection('bills').valueChanges();
    }
    BillComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    BillComponent.prototype.createForm = function () {
        this.billForm = this.fb.group({
            billDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            billCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            storeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            billAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payMedium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    BillComponent.prototype.addBill = function () {
        this.errorLog = null;
        console.log(this.billForm.value);
        // const requestData = this.billForm.value;
        if (this.billForm.valid) {
            var tempDate = this.billForm.controls.billDate.value;
            this.billForm.controls.billDate.setValue(this.datePipe.transform(tempDate, 'MM/dd/yyyy'));
            this.sharedService.addBill(this.billForm.value);
            // this.billForm.reset();
            this.createForm();
        }
        else {
            this.errorLog = 'Please fill all required fields.';
        }
        // this.billForm.updateValueAndValidity();
    };
    BillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bill',
            template: __webpack_require__(/*! ./bill.component.html */ "./src/app/bill/bill.component.html"),
            styles: [__webpack_require__(/*! ./bill.component.scss */ "./src/app/bill/bill.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], BillComponent);
    return BillComponent;
}());



/***/ }),

/***/ "./src/app/import-material-module.module.ts":
/*!**************************************************!*\
  !*** ./src/app/import-material-module.module.ts ***!
  \**************************************************/
/*! exports provided: ImportMaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportMaterialModuleModule", function() { return ImportMaterialModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ImportMaterialModuleModule = /** @class */ (function () {
    function ImportMaterialModuleModule() {
    }
    ImportMaterialModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"]
            ]
        })
    ], ImportMaterialModuleModule);
    return ImportMaterialModuleModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Page not found\n</p>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var SharedService = /** @class */ (function () {
    function SharedService(db) {
        this.db = db;
        this.basePath = '/stores';
    }
    SharedService.prototype.addStore = function (requestObj) {
        // const obj = this.db.database.ref(this.basePath);
        this.db.collection(this.basePath).add(requestObj);
        // this.db.collection(this.basePath);
        // obj.push(requestObj);
        console.log('Success: Store Added');
    };
    SharedService.prototype.addBill = function (requestObj) {
        this.db.collection('/bills').add(requestObj);
        console.log('Success: Bill Added');
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/store/store.component.html":
/*!********************************************!*\
  !*** ./src/app/store/store.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"storeForm\" novalidate>\n  <mat-form-field>\n    <input matInput placeholder=\"Store Name\" formControlName=\"storeName\" required>\n  </mat-form-field>\n\n  <div class=\"example-button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"addStore()\">Add Store</button>\n    <button mat-raised-button color=\"accent\" type=\"reset\">Clear</button>\n  </div>\n\n</form>\n<h3>List of Stores already Added: </h3>\n<ol>\n  <li *ngFor=\"let biller of stores | async\">\n    {{ biller.storeName }}\n  </li>\n</ol>"

/***/ }),

/***/ "./src/app/store/store.component.scss":
/*!********************************************!*\
  !*** ./src/app/store/store.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvRDpcXGdpdGh1Yi1yZXBvc1xcd2Vla2x5LXBsYW5uZXIvc3JjXFxhcHBcXHN0b3JlXFxzdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbntcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





var StoreComponent = /** @class */ (function () {
    function StoreComponent(db, sharedService, fb) {
        this.db = db;
        this.sharedService = sharedService;
        this.fb = fb;
        this.stores = db.collection('stores', function (ref) { return ref.orderBy('storeName'); }).valueChanges();
    }
    StoreComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    StoreComponent.prototype.createForm = function () {
        this.storeForm = this.fb.group({
            storeName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            storeId: null
        });
    };
    StoreComponent.prototype.addStore = function () {
        var _this = this;
        this.db.collection('/stores').get().toPromise().then(function (data) {
            _this.storeForm.controls.storeId.setValue(data.size);
            _this.sharedService.addStore(_this.storeForm.value);
        });
    };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/store/store.component.html"),
            providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]],
            styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/store/store.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDvimY5Buf8w1DWlcEeqkKnfER_K5lz5lE',
        authDomain: 'weekly-planner-db1.firebaseapp.com',
        databaseURL: 'https://weekly-planner-db1.firebaseio.com',
        projectId: 'weekly-planner-db1',
        storageBucket: 'weekly-planner-db1.appspot.com',
        messagingSenderId: '177513723458'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github-repos\weekly-planner\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map