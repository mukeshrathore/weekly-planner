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



var routes = [
// {
//   path: 'store',
//   component: StoreComponent
// },
// {
//   path: 'bill',
//   component: BillComponent
// },
// {
//   path: '',
//   redirectTo: '/bill',
//   pathMatch: 'full'
// },
// {
//   path: '**',
//   component: PageNotFoundComponent
// }
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

module.exports = "<!-- <a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" routerLink=\"/bill\">Add Bill</a>\n\n<a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" routerLink=\"/store\">Add Store</a> -->\n<!-- <router-outlet></router-outlet> -->\n<app-bill></app-bill>"

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
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "./src/app/confirmation-dialog/confirmation-dialog.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _bill_bill_component__WEBPACK_IMPORTED_MODULE_11__["BillComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_14__["StoreComponent"],
                _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationDialogComponent"]
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

module.exports = "<div class=\"mrg15\">\n  <!-- <p class=\"warn\">{{errorLog}}</p> -->\n  <form [formGroup]=\"billForm\" novalidate (ngSubmit)=\"addBill()\">\n    <mat-grid-list cols=\"1\" rowHeight=\"65px\" gutterSize=\"10px\">\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Bill Date\" formControlName=\"billDate\"\n            autocomplete=\"off\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker touchUi #picker></mat-datepicker>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <mat-select placeholder=\"Bill Category\" formControlName=\"billCategory\" #billCat>\n            <mat-option *ngFor=\"let category of billCategories\" [value]=\"category.value\">\n              {{category.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\" *ngIf=\"billCat.value ==='Custom'\">\n        <mat-form-field class=\"width100\">\n          <input matInput type=\"text\" placeholder=\"Custom Bill Category\" formControlName=\"billCategory\">\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <mat-select placeholder=\"Store Name\" formControlName=\"storeName\" #store>\n            <mat-option *ngFor=\"let store of stores\" [value]=\"store.viewValue\">\n              {{store.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\" *ngIf=\"store.value ==='Custom'\">\n        <mat-form-field class=\"width100\">\n          <input matInput type=\"text\" placeholder=\"Custom Store\" formControlName=\"storeName\">\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <span matPrefix>$ &nbsp;</span>\n          <input matInput type=\"number\" placeholder=\"Bill Amount\" formControlName=\"billAmount\">\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile colspan=\"1\">\n        <mat-form-field class=\"width100\">\n          <mat-select placeholder=\"Bill Paid By\" formControlName=\"payMedium\">\n            <mat-option *ngFor=\"let medium of billMedium\" [value]=\"medium.viewValue\">\n              {{medium.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n    </mat-grid-list>\n\n    <mat-grid-list cols=\"1\" rowHeight=\"55px\">\n      <mat-grid-tile colspan=\"1\">\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"width100 height100\">Save Bill</button>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"1\" class=\"mrgTop20\">\n        <button mat-raised-button color=\"accent\" type=\"reset\" class=\"width100 height100\">Clear</button>\n      </mat-grid-tile>\n    </mat-grid-list>\n\n  </form>\n\n  <!-- <h3>List of bills Added: </h3> -->\n  <mat-divider class=\"mrgTop15 mrgBtm15\"></mat-divider>\n\n  <mat-grid-list cols=\"1\" rowHeight=\"50px\">\n    <mat-grid-tile colspan=\"1\">\n      <button mat-icon-button (click)=\"getSelectedMonth('prev')\" color=\"primary\">\n        <mat-icon aria-label=\"Previous Month\">keyboard_arrow_left</mat-icon>\n      </button>\n      {{selectedMonth}}\n      <button mat-icon-button (click)=\"getSelectedMonth('next')\" color=\"primary\">\n        <mat-icon aria-label=\"Next Month\">keyboard_arrow_right</mat-icon>\n      </button>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <table mat-table [dataSource]=\"bills\" class=\"width100\">\n\n    <ng-container matColumnDef=\"billDate\">\n      <th mat-header-cell *matHeaderCellDef> Bill Date </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">Bill Date:</span>\n        {{element.billDate.toDate() | date : 'MM/dd/yyyy'}}\n      </td>\n      <td mat-footer-cell *matFooterCellDef>\n        <span *ngIf=\"!bills.length\">\n          No Bills Found\n        </span>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"billCategory\">\n      <th mat-header-cell *matHeaderCellDef> Bill Category </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">Bill Category: </span>\n        {{element.billCategory}}\n      </td>\n      <td mat-footer-cell *matFooterCellDef> </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"storeName\">\n      <th mat-header-cell *matHeaderCellDef> Store Name </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">Store Name: </span>\n        {{element.storeName}}\n      </td>\n      <td mat-footer-cell *matFooterCellDef> </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"payMedium\">\n      <th mat-header-cell *matHeaderCellDef> Pay Medium </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">Pay Medium: </span>\n        {{element.payMedium}}\n      </td>\n      <td mat-footer-cell *matFooterCellDef> </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"billAmount\">\n      <th mat-header-cell *matHeaderCellDef> Bill Amount </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">Bill Amount: </span>\n        {{element.billAmount | currency}}\n      </td>\n      <td mat-footer-cell *matFooterCellDef> <span *ngIf=\"billTotal\">Total: {{billTotal | currency}}</span> </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <span class=\"mobile-label\">Action: </span>\n        <button mat-icon-button (click)=\"deleteItem(row)\">\n          <mat-icon color=\"warn\">delete</mat-icon>\n        </button>\n      </td>\n      <td mat-footer-cell *matFooterCellDef> </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n  </table>\n</div>\n<div class=\"spinner-container\" *ngIf=\"showSpinner\">\n  <mat-spinner color=\"primary\" diameter=\"60\" strokeWidth=\"3\"></mat-spinner>\n</div>"

/***/ }),

/***/ "./src/app/bill/bill.component.scss":
/*!******************************************!*\
  !*** ./src/app/bill/bill.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mrg15 {\n  margin: 15px; }\n\n.width100 {\n  width: 100% !important; }\n\n.warn {\n  color: red; }\n\n.mrgTop15 {\n  margin-top: 15px; }\n\n.mrgBtm15 {\n  margin-bottom: 15px; }\n\n.mat-grid-tile.align-right ::ng-deep .mat-figure {\n  justify-content: flex-end; }\n\n.mat-grid-tile.align-left ::ng-deep .mat-figure {\n  justify-content: flex-start; }\n\n.mat-header-row {\n  background-color: lightblue; }\n\n.mat-footer-row {\n  background-color: antiquewhite; }\n\n.width100 {\n  width: 100%; }\n\n.height100 {\n  height: 100%; }\n\n.mrgTop20 {\n  margin-top: 20px; }\n\n.mobile-label {\n  display: none; }\n\n@media (max-width: 414px) {\n  td.mat-cell:first-of-type {\n    padding-left: 0; }\n  td.mat-cell {\n    border: 0; }\n  .mobile-label {\n    width: 90px;\n    display: inline-block;\n    font-weight: bold; }\n  .mat-header-row {\n    display: none; }\n  .mat-row {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 8px 24px;\n    width: 100%;\n    height: 100%;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); } }\n\n.spinner-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  top: 0;\n  left: 0; }\n\n.spinner-container mat-spinner {\n    position: absolute;\n    top: calc(50% - 30px);\n    left: calc(50% - 30px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC9EOlxcZ2l0aHViLXJlcG9zXFx3ZWVrbHktcGxhbm5lci9zcmNcXGFwcFxcYmlsbFxcYmlsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFVBQVMsRUFBQTs7QUFFWDtFQUNFLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsV0FBVSxFQUFBOztBQUVaO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRTtJQUNFLGVBQWUsRUFBQTtFQUVqQjtJQUNFLFNBQVEsRUFBQTtFQUVWO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNENBQXdDLEVBQUEsRUFDekM7O0FBSUg7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBaUM7RUFDakMsTUFBTTtFQUNOLE9BQU8sRUFBQTs7QUFOVDtJQVNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iaWxsL2JpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXJnMTV7XHJcbiAgbWFyZ2luOjE1cHg7XHJcbn1cclxuLndpZHRoMTAwe1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLndhcm57XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbi5tcmdUb3AxNXtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbn0gXHJcbi5tcmdCdG0xNXtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5tYXQtZ3JpZC10aWxlLmFsaWduLXJpZ2h0IDo6bmctZGVlcCAubWF0LWZpZ3VyZXtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5tYXQtZ3JpZC10aWxlLmFsaWduLWxlZnQgOjpuZy1kZWVwIC5tYXQtZmlndXJle1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4ubWF0LWhlYWRlci1yb3d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4ubWF0LWZvb3Rlci1yb3d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG59XHJcbi53aWR0aDEwMHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5oZWlnaHQxMDB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5tcmdUb3AyMHtcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbi5tb2JpbGUtbGFiZWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQxNHB4KSB7XHJcbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZXtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiAgdGQubWF0LWNlbGx7XHJcbiAgICBib3JkZXI6MDtcclxuICB9XHJcbiAgLm1vYmlsZS1sYWJlbCB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWF0LXJvdyB7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgbWF0LXNwaW5uZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDMwcHgpO1xyXG4gIH1cclxufSJdfQ== */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var BillComponent = /** @class */ (function () {
    function BillComponent(fb, sharedService, db) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.db = db;
        this.showSpinner = false;
        this.basePath = this.sharedService.basePath;
        this.currentMonth = (Number((new Date()).getMonth() + 1) < 10) ?
            "0" + Number((new Date()).getMonth() + 1) :
            "" + Number((new Date()).getMonth() + 1);
        this.currentYear = Number((new Date()).getFullYear());
        this.selectedMonth = null;
        this.bills = [];
        this.billTotal = 0;
        this.billMedium = [
            {
                value: 'Bank of America Credit Card',
                viewValue: 'Bank of America Credit Card'
            },
            {
                value: 'Bank Of America Checking Account',
                viewValue: 'Bank Of America Checking Account'
            },
            {
                value: 'Bank of America Debit Card',
                viewValue: 'Bank of America Debit Card'
            },
            {
                value: 'Cash',
                viewValue: 'Cash'
            },
            {
                value: 'Chase Credit Card',
                viewValue: 'Chase Credit Card'
            },
            {
                value: 'Discover Credit Card',
                viewValue: 'Discover Credit Card'
            },
            {
                value: 'Wells Fargo Checking Account',
                viewValue: 'Wells Fargo Checking Account'
            },
            {
                value: 'Wells Fargo Debit Card',
                viewValue: 'Wells Fargo Debit Card'
            }
        ];
        this.billCategories = [
            {
                value: 'Grocery',
                viewValue: 'Grocery'
            },
            {
                value: 'Gas',
                viewValue: 'Gas'
            },
            {
                value: 'Electricity Bill',
                viewValue: 'Electricity Bill'
            },
            {
                value: 'Utilities Bill',
                viewValue: 'Utilities Bill'
            },
            {
                value: 'Rent',
                viewValue: 'Rent'
            },
            {
                value: 'Car Insurance',
                viewValue: 'Car Insurance'
            },
            {
                value: 'Lycamobile Bill',
                viewValue: 'Lycamobile Bill'
            },
            {
                value: 'Netflix',
                viewValue: 'Netflix'
            },
            {
                value: 'Kodi',
                viewValue: 'Kodi'
            },
            {
                value: 'Ymca Bill',
                viewValue: 'Ymca Bill'
            },
            {
                value: 'Internet Bill',
                viewValue: 'Internet Bill'
            },
            {
                value: 'Custom',
                viewValue: 'Custom'
            }
        ];
        this.stores = [
            {
                value: 'Patel Brother',
                viewValue: 'Patel Brother'
            },
            {
                value: 'Walmart',
                viewValue: 'Walmart'
            },
            {
                value: 'Dollar Tree',
                viewValue: 'Dollar Tree'
            },
            {
                value: 'Gabes',
                viewValue: 'Gabes'
            },
            {
                value: 'Around The World',
                viewValue: 'Around The World'
            },
            {
                value: 'Target',
                viewValue: 'Target'
            },
            {
                value: 'Online',
                viewValue: 'Online'
            },
            {
                value: 'Custom',
                viewValue: 'Custom'
            }
        ];
        this.displayedColumns = ['billDate', 'billCategory', 'storeName', 'payMedium', 'billAmount', 'action'];
    }
    BillComponent.prototype.ngOnInit = function () {
        this.getSelectedMonth();
        this.getTableData();
        this.createForm();
    };
    BillComponent.prototype.getSelectedMonth = function (state) {
        if (state === void 0) { state = null; }
        switch (state) {
            case 'prev':
                this.currentMonth = (Number(this.currentMonth) - 1) < 10 ?
                    "0" + (Number(this.currentMonth) - 1) : "" + (Number(this.currentMonth) - 1);
                this.currentYear = this.currentYear;
                this.getMonthString(this.currentMonth, this.currentYear);
                this.getTableData("/bills_" + this.currentMonth + "_" + this.currentYear);
                break;
            case 'next':
                this.currentMonth = (Number(this.currentMonth) - 1) < 10 ?
                    "0" + (Number(this.currentMonth) + 1) : "" + (Number(this.currentMonth) - 1);
                this.currentYear = this.currentYear;
                this.getMonthString(this.currentMonth, this.currentYear);
                this.getTableData("/bills_" + this.currentMonth + "_" + this.currentYear);
                break;
            default:
                this.getMonthString(this.currentMonth, this.currentYear);
                break;
        }
    };
    BillComponent.prototype.getMonthString = function (currentMonth, currentYear) {
        switch (currentMonth) {
            case '01':
                this.selectedMonth = "Jan " + currentYear;
                break;
            case '02':
                this.selectedMonth = "Feb " + currentYear;
                break;
            case '03':
                this.selectedMonth = "Mar " + currentYear;
                break;
            case '04':
                this.selectedMonth = "Apr " + currentYear;
                break;
            case '05':
                this.selectedMonth = "May " + currentYear;
                break;
            case '06':
                this.selectedMonth = "Jun " + currentYear;
                break;
            case '07':
                this.selectedMonth = "Jul " + currentYear;
                break;
            case '08':
                this.selectedMonth = "Aug " + currentYear;
                break;
            case '09':
                this.selectedMonth = "Sep " + currentYear;
                break;
            case '10':
                this.selectedMonth = "Oct " + currentYear;
                break;
            case '11':
                this.selectedMonth = "Nov " + currentYear;
                break;
            case '12':
                this.selectedMonth = "Dec " + currentYear;
                break;
            default:
                break;
        }
    };
    BillComponent.prototype.getTableData = function (billURL) {
        var _this = this;
        if (billURL === void 0) { billURL = this.basePath; }
        this.billTotal = 0;
        this.showSpinner = true;
        this.bills = [];
        this.dataStore = this.db.collection(billURL, function (ref) { return ref.orderBy('billDate'); }).valueChanges();
        this.dataStore.subscribe(function (result) {
            _this.bills = result.filter(function (obj) { return obj.deleteFlag === false; });
            _this.billTotal = _this.bills.map(function (obj) { return obj.billAmount; }).reduce(function (acc, value) { return acc + value; }, 0);
            _this.showSpinner = false;
        });
    };
    BillComponent.prototype.createForm = function () {
        this.billForm = this.fb.group({
            billId: null,
            billDate: new Date(),
            billCategory: null,
            storeName: null,
            billAmount: null,
            payMedium: null,
            deleteFlag: false
        });
    };
    BillComponent.prototype.addBill = function () {
        var _this = this;
        this.showSpinner = true;
        var billMonth = (Number((new Date(this.billForm.controls.billDate.value)).getMonth() + 1) < 10) ?
            "0" + Number((new Date(this.billForm.controls.billDate.value)).getMonth() + 1) :
            "" + Number((new Date(this.billForm.controls.billDate.value)).getMonth() + 1);
        var billYear = Number((new Date(this.billForm.controls.billDate.value)).getFullYear());
        var billURL = "/bills_" + billMonth + "_" + billYear;
        this.db.collection(this.basePath).get().toPromise().then(function (data) {
            _this.billForm.controls.billId.setValue(data.size);
            _this.sharedService.addBill(billURL, _this.billForm.value);
            _this.createForm();
            _this.showSpinner = false;
        });
    };
    BillComponent.prototype.deleteItem = function (selectedRow) {
        this.showSpinner = true;
        var billMonth = (Number((new Date(selectedRow.billDate.toDate())).getMonth() + 1) < 10) ?
            "0" + Number((new Date(selectedRow.billDate.toDate())).getMonth() + 1) :
            "" + Number((new Date(selectedRow.billDate.toDate())).getMonth() + 1);
        var billYear = Number((new Date(selectedRow.billDate.toDate())).getFullYear());
        var billURL = "/bills_" + billMonth + "_" + billYear;
        this.updateDoc(billURL, selectedRow.billId, { deleteFlag: true });
        this.showSpinner = false;
    };
    BillComponent.prototype.updateDoc = function (billURL, billId, requestObj) {
        var _this = this;
        var doc = this.db.collection(billURL, function (ref) { return ref.where('billId', '==', billId); });
        doc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); })).subscribe(function (result) {
            var id = result[0].id; // first result of query [0]
            _this.db.doc(billURL + "/" + id).update(requestObj);
        });
    };
    BillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bill',
            template: __webpack_require__(/*! ./bill.component.html */ "./src/app/bill/bill.component.html"),
            styles: [__webpack_require__(/*! ./bill.component.scss */ "./src/app/bill/bill.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], BillComponent);
    return BillComponent;
}());



/***/ }),

/***/ "./src/app/confirmation-dialog/confirmation-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title> Please Confirm !!</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button>Sure</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/confirmation-dialog/confirmation-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/confirmation-dialog/confirmation-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent() {
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.scss */ "./src/app/confirmation-dialog/confirmation-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
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
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
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
        this.currentMonth = (Number((new Date()).getMonth() + 1) < 10) ?
            "0" + Number((new Date()).getMonth() + 1) :
            "" + Number((new Date()).getMonth() + 1);
        this.currentYear = Number((new Date()).getFullYear());
        this.basePath = "/bills_" + this.currentMonth + "_" + this.currentYear;
    }
    SharedService.prototype.addStore = function (requestObj) {
        // const obj = this.db.database.ref(this.basePath);
        this.db.collection(this.basePath).add(requestObj);
        // this.db.collection(this.basePath);
        // obj.push(requestObj);
        console.log('Success: Store Added');
    };
    SharedService.prototype.addBill = function (billURL, requestObj) {
        this.db.collection(billURL).add(requestObj)
            .then(function () {
            console.log('Bill Added Successfully!!');
        })
            .catch(function (error) {
            console.error('Error while adding Bill: ', error);
        });
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