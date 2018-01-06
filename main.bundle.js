webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menubar></app-menubar>\n<app-file-browser></app-file-browser>\n<app-coding-files></app-coding-files>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_browser_file_browser_component__ = __webpack_require__("../../../../../src/app/file-browser/file-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menubar_menubar_component__ = __webpack_require__("../../../../../src/app/menubar/menubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coding_files_coding_files_component__ = __webpack_require__("../../../../../src/app/coding-files/coding-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mock_server_service__ = __webpack_require__("../../../../../src/app/mock-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tree_model_service__ = __webpack_require__("../../../../../src/app/tree-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router_testing__ = __webpack_require__("../../../router/esm5/testing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__file_browser_file_browser_component__["a" /* FileBrowserComponent */],
                __WEBPACK_IMPORTED_MODULE_4__menubar_menubar_component__["a" /* MenubarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__coding_files_coding_files_component__["a" /* CodingFilesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_tree__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_ace_editor__["a" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_router_testing__["a" /* RouterTestingModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_9__mock_server_service__["a" /* MockServerService */], __WEBPACK_IMPORTED_MODULE_10__tree_model_service__["a" /* TreeModelService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.setCode = function (code) {
        this.curentCode = code;
    };
    AppService.prototype.getCode = function () {
        return this.curentCode;
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/coding-files/coding-files.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-code-editor\">\n  <mat-tab-group [(selectedIndex)]=\"activeTabIndex\">\n  <span *ngFor=\"let tab of tabs\">\n    <mat-tab>\n        <ng-template mat-tab-label>\n          {{tab.name}} &nbsp;  &nbsp;\n            <i class=\"fa fa-arrows-alt\" aria-hidden=\"true\" (click)=\"removeTab($event)\" id=\"{{tab.name}}\"></i>\n        </ng-template>\n      <section id=\"{{ tab.name }}\">\n        <ace-editor #highlight\n                    text=\"{{ tab.code }}\"\n                    mode=\"javascript\"\n                    theme=\"eclipse\"\n                    (textChanged)=\"getCodeInformation($event)\"\n                    [autoUpdateContent]=\"true\"\n                    [style.top.px]=\"fromTop\"\n                    [durationBeforeCallback]=\"1000\"\n                    style=\"min-height: 600px; width:83%; overflow: auto;\"></ace-editor>\n      </section>\n\n      </mat-tab>\n  </span>\n  </mat-tab-group>\n</div>\n\n<nav class=\"navbar navbar-default\" id=\"smallnavbar\" *ngIf=\"showBar\">\n  <div class=\"container-fluid\">\n    <!-- header  -->\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav\">\n        <li class=''>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-arrows-alt\" aria-hidden=\"true\" title=\"Close\"></i><span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\" (click)=\"closeTab()\"><i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i> Close</a></li>\n            <li><a href=\"#\" (click)=\"closeOtherTabs()\"><i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i> Close Others</a>\n            </li>\n            <li><a href=\"#\" (click)=\"closeAllTabs()\"><i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i> Close All</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"topNavBar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=''>\n          <a href=\"#\">\n            <i class=\"fa fa-window-maximize\" aria-hidden=\"true\" title=\"Maximize\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- For Event Binding -->\n<app-file-browser (selectedFileIdParent)=\"collectFileId($event)\"></app-file-browser>\n\n"

/***/ }),

/***/ "../../../../../src/app/coding-files/coding-files.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  position: absolute;\n  left: 16%;\n  width: 75%;\n  top: 37px;\n  border-radius: 50px; }\n\n.navbar-default {\n  position: absolute;\n  left: 90.20%;\n  width: 9.7%;\n  top: -15px;\n  margin-top: 50px; }\n\n.container > div > span > a {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n  border-color: lightgray;\n  border-style: solid;\n  border-radius: 10px; }\n\n.navbar-nav > li > a {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important; }\n\n#smallnavbar {\n  min-height: 48px !important; }\n\n.container-fluid {\n  width: -30px; }\n\nscrollmenu {\n  width: 50px; }\n\ndiv.scrollmenu {\n  background-color: #F5F5F5;\n  overflow: auto;\n  white-space: nowrap; }\n\ndiv.scrollmenu a {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none; }\n\ndiv.scrollmenu a:hover {\n  background-color: #777; }\n\nspan {\n  color: #2E2E2E; }\n\n.tabnames {\n  color: #2E2E2E; }\n\na {\n  color: black; }\n\n.fa-window-close-o, .fa-arrows-alt {\n  color: red; }\n\n#main-code-editor {\n  position: absolute;\n  top: 37px;\n  left: 16.8%;\n  width: 73.4%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coding-files/coding-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodingFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_model_service__ = __webpack_require__("../../../../../src/app/tree-model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_server_service__ = __webpack_require__("../../../../../src/app/mock-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CodingFilesComponent = (function () {
    function CodingFilesComponent(appService, treeModelService, mockServerService) {
        this.appService = appService;
        this.treeModelService = treeModelService;
        this.mockServerService = mockServerService;
        this.options = { maxLines: 1000, printMargin: false };
        this.tabs = [];
        this.fromTop = 0;
        this.fromTopSmallNavBar = 0;
        this.activeTabIndex = 0;
        this.allFileCodesMap = new Map();
        this.showBar = false;
        this.updateEditorPosition();
    }
    CodingFilesComponent.prototype.updateEditorPosition = function () {
        var tabCount = this.tabs.length;
        if (tabCount > 8) {
            this.fromTop = 35;
            this.fromTopSmallNavBar = 25;
        }
        else if (tabCount === 0) {
            this.fromTop = -17;
            this.fromTopSmallNavBar = this.fromTopSmallNavBar + 20;
        }
        else if (tabCount > 0 && tabCount <= 8) {
            this.fromTop = 20;
            this.fromTopSmallNavBar = 5;
        }
        console.log(this.fromTop);
        console.log(this.fromTopSmallNavBar);
    };
    CodingFilesComponent.prototype.ngOnInit = function () {
    };
    CodingFilesComponent.prototype.collectFileId = function ($event) {
        console.log('Collected File ID: ' + this.treeModelService.getFileName(Number($event)));
        var selectedFileName = this.treeModelService.getFileName(Number($event));
        // console.log('------------------------------- Map Size: ' + this.allFileCodesMap.size);
        this.codeToUpdate = this.mockServerService.getFileCode(Number($event));
        this.tabs.push({
            name: selectedFileName,
            code: this.codeToUpdate
        });
        this.activeTabIndex = this.tabs.length - 1;
        this.displaySmallNavBar();
        this.displayAllTabCodes();
    };
    CodingFilesComponent.prototype.sleep = function (seconds) {
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {
        }
    };
    CodingFilesComponent.prototype.getCodeInformation = function ($event) {
        var currentSelectedTab = this.tabs[this.activeTabIndex].name;
        console.log('-------------------------------This is active tab name: ' + this.currentCode);
        this.currentCode = $event;
        this.allFileCodesMap.set(currentSelectedTab, this.currentCode);
        console.log('------------------------------- Map Size: ' + this.allFileCodesMap.size);
        console.log(this.currentCode);
        this.displaySmallNavBar();
        this.displayAllTabCodes();
    };
    CodingFilesComponent.prototype.displayAllTabCodes = function () {
        console.log('------------------------------- final codes: started');
        var allKeys = this.allFileCodesMap.keys();
        this.allFileCodesMap.forEach(function (value, key) {
            console.log(key + ':  ' + value);
        });
        console.log('------------------------------- final codes: completed');
    };
    CodingFilesComponent.prototype.removeTab = function ($event) {
        console.log($event);
        console.log('-------------------------------: Called removeTab method');
        console.log($event);
        var tabName = '';
        try {
            tabName = $event.path[0].id;
        }
        catch (Error) {
            tabName = $event.explicitOriginalTarget.id;
        }
        console.log('Initial-------------------------');
        console.log(this.tabs);
        console.log('Initial-------------------------');
        for (var i = 0; i < this.tabs.length; i++) {
            console.log('Current tab name: ' + this.tabs[i].name);
            if (this.tabs[i].name === tabName) {
                console.log('Slicing the index: ' + i + ', And Tab Name: ' + this.tabs[i].name);
                this.tabs.splice(i, 1);
            }
        }
        console.log('Later *********************');
        console.log(this.tabs);
        console.log('Later *********************');
        this.allFileCodesMap.delete(tabName);
        // this.ngOnInit();
        this.displaySmallNavBar();
    };
    CodingFilesComponent.prototype.closeTab = function () {
        var currentSelectedTab = this.tabs[this.activeTabIndex].name;
        if (this.tabs.length != 0) {
            this.activeTabIndex = this.tabs.length - 1;
        }
        this.allFileCodesMap.delete(currentSelectedTab);
        for (var i = 0; i < this.tabs.length; i++) {
            console.log('Current tab name: ' + this.tabs[i].name);
            if (this.tabs[i].name === currentSelectedTab) {
                console.log('Slicing the index: ' + i + ', And Tab Name: ' + this.tabs[i].name);
                this.tabs.splice(i, 1);
            }
        }
        this.displaySmallNavBar();
    };
    CodingFilesComponent.prototype.closeAllTabs = function () {
        this.allFileCodesMap.clear();
        this.tabs = [];
        this.showBar = false;
    };
    CodingFilesComponent.prototype.closeOtherTabs = function () {
        var _this = this;
        var currentSelectedTab = this.tabs[this.activeTabIndex].name;
        console.log('Current Selected Tab: ' + currentSelectedTab);
        this.displayAllTabCodes();
        this.tabs.forEach(function (tab) {
            console.log(tab.name);
        });
        this.allFileCodesMap.forEach(function (value, key) {
            if (key !== currentSelectedTab) {
                console.log('Deleting: ' + key);
                _this.allFileCodesMap.delete(key);
            }
        });
        this.displayAllTabCodes();
        var allTabsLegth = this.tabs.length;
        console.log('All tabs length: ' + allTabsLegth);
        for (var i = allTabsLegth - 1; i >= 0; i--) {
            console.log('Current tab name: ' + this.tabs[i].name);
            if (this.tabs[i].name !== currentSelectedTab) {
                console.log('Slicing the index: ' + i + ', And Tab Name: ' + this.tabs[i].name);
                this.tabs.splice(i, 1);
            }
        }
        this.displaySmallNavBar();
    };
    CodingFilesComponent.prototype.displaySmallNavBar = function () {
        if (this.tabs.length > 0) {
            this.showBar = true;
        }
        else {
            this.showBar = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CodingFilesComponent.prototype, "selectedTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CodingFilesComponent.prototype, "focusChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editor'),
        __metadata("design:type", Object)
    ], CodingFilesComponent.prototype, "editor", void 0);
    CodingFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coding-files',
            template: __webpack_require__("../../../../../src/app/coding-files/coding-files.component.html"),
            styles: [__webpack_require__("../../../../../src/app/coding-files/coding-files.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__tree_model_service__["a" /* TreeModelService */], __WEBPACK_IMPORTED_MODULE_3__mock_server_service__["a" /* MockServerService */]])
    ], CodingFilesComponent);
    return CodingFilesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file-browser/file-browser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"maincontainer\">\n\n  <nav class=\"navbar navbar-default\" id=\"navbarFileBrowser\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=''>\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-expand fa-lg\" aria-hidden=\"true\" title=\"Expand All\" (click)=\"expandAll()\"></i>\n            </a>\n          </li>\n          <li class=''>\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-compress fa-lg\" aria-hidden=\"true\" title=\"Collapse All\" (click)=\"collpaseAll()\"></i>\n            </a>\n          </li>\n          <li class=''>\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-refresh fa-lg\" aria-hidden=\"true\" title=\"Refresh\"></i>\n            </a>\n          </li>\n          <li class=''>\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-exchange fa-lg\" aria-hidden=\"true\" title=\"Link To Editor\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n\n  <perfect-scrollbar class=\"ps\" [perfectScrollbar]=\"config\">\n    <div class=\"horizontal-container\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"auto\">\n      <div class=\"scrollable-content\">\n\n        <tree\n          [tree]=\"tree\" #treeComponent\n          [settings]=\"settings\"\n          (nodeRemoved)=\"handleRemoved($event)\"\n          (nodeRenamed)=\"handleRenamed($event)\"\n          (nodeSelected)=\"handleSelected($event)\"\n          (nodeMoved)=\"handleMoved($event)\"\n          (nodeCreated)=\"handleCreated($event)\"\n          (nodeExpanded)=\"handleExpanded($event)\"\n          (nodeCollapsed)=\"handleCollapsed($event)\"\n          (loadNextLevel)=\"handleNextLevel($event)\"\n          (menuItemSelected)=\"onMenuItemSelected($event)\">\n        </tree>\n\n      </div>\n    </div>\n  </perfect-scrollbar>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/file-browser/file-browser.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n  color: white; }\n\na, p {\n  font-family: Courier;\n  color: white; }\n\n.fa-arrows-alt {\n  color: red; }\n\n.fa-compress, .fa-expand {\n  color: #2E2E2E; }\n\n.fa-refresh {\n  color: darkgreen; }\n\n.fa-exchange {\n  color: #FF8800; }\n\n.horizontal-container {\n  min-height: 0 !important;\n  overflow: auto;\n  overflow-x: auto;\n  overflow-y: auto;\n  margin-left: 0px;\n  padding-left: 0px; }\n\n.scrollable-content {\n  padding: 16px;\n  margin: 0;\n  overflow: auto;\n  overflow-x: auto;\n  overflow-y: auto;\n  min-width: 400px;\n  margin-left: 0px;\n  padding-left: 0px; }\n\n.ps {\n  position: absolute;\n  max-width: 228px;\n  max-height: 88%;\n  background-color: #F5F5F5;\n  top: 85px;\n  margin-top: 0px;\n  margin-left: 0px;\n  padding-left: 0px; }\n\n.navbar-default {\n  position: absolute;\n  left: 4px;\n  width: 16.5%;\n  top: -15px;\n  margin-top: 50px; }\n\n.navbar-nav > li > a {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important; }\n\n#navbarFileBrowser {\n  min-height: 48px !important; }\n\n.maincontainer {\n  width: 16.5%;\n  margin-left: 0px;\n  padding-left: 0px; }\n\ntree {\n  margin-left: 0px;\n  padding-left: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-browser/file-browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileBrowserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_server_service__ = __webpack_require__("../../../../../src/app/mock-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileBrowserComponent = (function () {
    function FileBrowserComponent(mockServerSevice) {
        var _this = this;
        this.mockServerSevice = mockServerSevice;
        this.selectedFileIdParent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.settings = '';
        this.config = '';
        this.handleSelected = function ($event) {
            console.log('Called method: handleSelected');
            if (_this.iFile($event)) {
                _this.selectedFileIdParent.emit(String($event.node.id));
            }
        };
        this.tree = mockServerSevice.getTreeModel();
    }
    // ------------ publish check
    FileBrowserComponent.prototype.t = function (e) {
        console.log('Called method: t');
        console.log(e);
        if (this.iFile(e)) {
            this.selectedFileIdParent.emit(String(e.node.id));
        }
    };
    // ------------
    //custom menus
    FileBrowserComponent.prototype.onMenuItemSelected = function ($event) {
        console.log('Called method: onMenuItemSelected');
        console.log($event);
    };
    FileBrowserComponent.prototype.collpaseAll = function () {
        this.treeComponent.getControllerByNodeId(1).collapse();
    };
    FileBrowserComponent.prototype.expandAll = function () {
        this.treeComponent.getControllerByNodeId(1).expand();
    };
    FileBrowserComponent.prototype.iFile = function ($event) {
        console.log('-------------------isFile-------------started');
        console.log($event);
        var allMenuItems = $event.node.menuItems;
        console.log('Menu items length: ' + allMenuItems.length);
        if (allMenuItems.length === 10) {
            return true;
        }
        return false;
    };
    FileBrowserComponent.prototype.handleCollapsed = function ($event) {
        console.log($event);
    };
    FileBrowserComponent.prototype.handleExpanded = function ($event) {
        console.log($event);
    };
    FileBrowserComponent.prototype.handleRemoved = function ($event) {
        console.log($event);
        console.log('Removed: Parent ID: ' + $event.node.parent.id);
    };
    FileBrowserComponent.prototype.handleRenamed = function ($event) {
        console.log($event);
        console.log('Renamed: Parent ID: ' + $event.node.parent.id);
    };
    FileBrowserComponent.prototype.handleMoved = function ($event) {
        console.log($event);
    };
    FileBrowserComponent.prototype.handleCreated = function ($event) {
        console.log($event);
        console.log('Parent ID: ' + $event.node.parent.id);
        var cuurentNode = $event.node;
        var counter = 1;
        var someObj = cuurentNode;
        var allIds = [];
        while (true) {
            someObj = someObj.parent;
            try {
                console.log(counter + ' : ' + someObj.id);
                allIds.push(someObj.id);
            }
            catch (e) {
                console.log('Meet exception!!');
                break;
            }
            // -------------------
            counter++;
            if (counter === 100) {
                break;
            }
            // -------------------
        }
        console.log(allIds);
    };
    FileBrowserComponent.prototype.handleNextLevel = function ($event) {
        console.log($event);
    };
    FileBrowserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FileBrowserComponent.prototype, "selectedFileIdParent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('treeComponent'),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "treeComponent", void 0);
    FileBrowserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-browser',
            template: __webpack_require__("../../../../../src/app/file-browser/file-browser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file-browser/file-browser.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mock_server_service__["a" /* MockServerService */]])
    ], FileBrowserComponent);
    return FileBrowserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav\">\n        <li class=''>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> New<span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Script</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Scenario</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> CSV</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Properties</a></li>\n          </ul>\n        </li>\n        <li class=''>\n          <a href=\"#\">\n            <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i> Open\n          </a>\n        </li>\n        <li class=''>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save<span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save As</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save All</a></li>\n          </ul>\n        </li>\n        <li class=''>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-folder-o\" aria-hidden=\"true\"></i> Create Suite<span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\"><i class=\"fa fa-folder-o\" aria-hidden=\"true\"></i> Suite</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-folder-o\" aria-hidden=\"true\"></i> Data Driven Suite</a></li>\n          </ul>\n        </li>\n        <li class=''>\n          <a href=\"#\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i> Find Usage\n          </a>\n        </li>\n        <li class=''>\n          <a href=\"#\">\n            <i class=\"fa fa-cog fa-spin\" aria-hidden=\"true\"></i> Playback\n          </a>\n        </li>\n        <li class=''>\n          <a href=\"#\">\n            <i class=\"fa fa-stop\" aria-hidden=\"true\"></i> Stop All\n          </a>\n        </li>\n\n        <li class=''>\n          <a href=\"#\">\n            <i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i> Clear Break Points\n          </a>\n        </li>\n\n        <li class=''>\n          <a href=\"#\">\n            Rest Client\n          </a>\n        </li>\n\n        <li class=''>\n          <a href=\"#\">\n            <i class=\"fa fa-long-arrow-left\" aria-hidden=\"true\" title=\"Previous\"></i>\n          </a>\n        </li>\n\n        <li class=''>\n          <a href=\"#\">\n            <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\" title=\"Next\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"topNavBar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=''>\n          <a href=\"#\">\n            Docs\n          </a>\n        </li>\n        <li class=''>\n          <a href=\"#\">\n            Logs\n          </a>\n        </li>\n        <li class=''>\n          <a href=\"#\">About</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  width: -30px; }\n\n.fa-arrows-alt, .fa-stop {\n  color: red; }\n\n.fa-search, .fa-cog, .fa-file-text-o, .fa-folder-open-o, .fa-floppy-o, .fa-folder-o {\n  color: slateblue; }\n\n.navbar-nav > li > a {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important; }\n\n.navbar {\n  min-height: 5px !important;\n  min-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenubarComponent = (function () {
    function MenubarComponent(appSevice) {
        this.appSevice = appSevice;
    }
    MenubarComponent.prototype.ngOnInit = function () {
    };
    MenubarComponent.prototype.retriveCode = function () {
        var currentCode = this.appSevice.getCode();
        console.log('Current Code Started---------------------------------------');
        console.log(currentCode);
        console.log('Current Code Completed-------------------------------------');
    };
    MenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menubar',
            template: __webpack_require__("../../../../../src/app/menubar/menubar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menubar/menubar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mock-server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_tree__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MockServerService = (function () {
    function MockServerService() {
        this.settingsFile = {
            'cssClasses': {
                'expanded': 'fa fa-caret-down fa-lg',
                'collapsed': 'fa fa-caret-right fa-lg',
                'leaf': 'fa fa-lg',
                'empty': 'fa fa-caret-right disabled'
            },
            'templates': {
                'node': '<i class="fa fa-folder-o fa-lg"></i>',
                'leaf': '<i class="fa fa-file-o fa-lg"></i>',
                'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
            },
            'menuItems': [
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'New', cssClass: 'fa fa-file-text-o' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Run', cssClass: 'fa fa-play' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Open', cssClass: 'fa fa-folder-open-o' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Logs', cssClass: 'fa fa-list' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Docs', cssClass: 'fa fa-list' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Rename', cssClass: 'fa fa-circle-o-notch' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Cut', cssClass: 'fa fa-scissors' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Copy', cssClass: 'fa fa-files-o' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Paste', cssClass: 'fa fa-clipboard' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Delete', cssClass: 'fa fa-arrows-alt' }
            ]
        };
        this.settingsFolder = {
            'cssClasses': {
                'expanded': 'fa fa-caret-down fa-lg',
                'collapsed': 'fa fa-caret-right fa-lg',
                'leaf': 'fa fa-lg',
                'empty': 'fa fa-caret-right disabled'
            },
            'templates': {
                'node': '<i class="fa fa-folder-o fa-lg"></i>',
                'leaf': '<i class="fa fa-file-o fa-lg"></i>',
                'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
            },
            'menuItems': [
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'New', cssClass: 'fa fa-file-text-o' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Rename', cssClass: 'fa fa-circle-o-notch' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Cut', cssClass: 'fa fa-scissors' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Copy', cssClass: 'fa fa-files-o' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Paste', cssClass: 'fa fa-clipboard' },
                { action: __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["NodeMenuItemAction"].Custom, name: 'Delete', cssClass: 'fa fa-arrows-alt' }
            ]
        };
        this.tree = {
            value: 'Root Folder',
            id: 1,
            settings: this.settingsFolder,
            children: [
                {
                    value: 'Test Folder',
                    id: 2,
                    settings: this.settingsFolder,
                    children: [
                        {
                            value: 'sample1.java',
                            id: 21,
                            settings: this.settingsFile
                        },
                        {
                            value: 'sample2.java',
                            id: 22,
                            settings: this.settingsFile
                        },
                        {
                            value: 'sample3.java',
                            id: 23,
                            settings: this.settingsFile
                        },
                        {
                            value: 'sample4.java',
                            id: 24,
                            settings: this.settingsFile
                        },
                        {
                            value: 'sample5.java',
                            id: 25,
                            settings: this.settingsFile
                        },
                        {
                            value: 'sample6.java',
                            id: 26,
                            settings: this.settingsFile
                        }
                    ]
                },
                {
                    value: 'sample7.java',
                    id: 27,
                    settings: this.settingsFile
                },
                {
                    value: 'sample8.java',
                    id: 28,
                    settings: this.settingsFile
                },
                {
                    value: 'sample9.java',
                    id: 29,
                    settings: this.settingsFile
                },
                {
                    value: 'sample10.java',
                    id: 30,
                    settings: this.settingsFile
                },
                {
                    value: 'sample11.java',
                    id: 31,
                    settings: this.settingsFile
                },
                {
                    value: 'Level two',
                    id: 32,
                    settings: this.settingsFolder,
                    children: [
                        {
                            value: 'Level three',
                            id: 33,
                            settings: this.settingsFolder,
                            children: [
                                {
                                    value: 'sample14java',
                                    id: 35,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample15java',
                                    id: 36,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample16java',
                                    id: 37,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample17java',
                                    id: 38,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample18java',
                                    id: 39,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample19java',
                                    id: 40,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample20java',
                                    id: 41,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample21java',
                                    id: 42,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample22java',
                                    id: 43,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample23java',
                                    id: 44,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample24java',
                                    id: 45,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample25java',
                                    id: 46,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample26java',
                                    id: 47,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample27java',
                                    id: 48,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample28java',
                                    id: 49,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample29java',
                                    id: 50,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample30java',
                                    id: 51,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample31java',
                                    id: 52,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample32java',
                                    id: 53,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample33java',
                                    id: 54,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample34java',
                                    id: 55,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample35java',
                                    id: 56,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample36java',
                                    id: 57,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample37java',
                                    id: 58,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample38java',
                                    id: 59,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample39java',
                                    id: 60,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample40java',
                                    id: 61,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample41java',
                                    id: 62,
                                    settings: this.settingsFile
                                },
                                {
                                    value: 'sample42java',
                                    id: 63,
                                    settings: this.settingsFile
                                },
                            ]
                        }
                    ]
                }
            ]
        };
        this.allCodes = { 2: 'This is code of id : 2', 3: 'some other code' };
    }
    MockServerService.prototype.getTreeModel = function () {
        return this.tree;
    };
    MockServerService.prototype.updateTreeModel = function () {
        console.log('Update Data');
    };
    MockServerService.prototype.getFileCode = function (id) {
        var codeToReturn = 'class TestDemo \n{ \n\tpublic void testCaseDemo' + String(id) + '()\n\t{ \n\t\tSystem.out.println("This is about: ' + String(id) + '");\n\t}\n}';
        return codeToReturn;
    };
    MockServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MockServerService);
    return MockServerService;
}());



/***/ }),

/***/ "../../../../../src/app/tree-model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_server_service__ = __webpack_require__("../../../../../src/app/mock-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_tree__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeModelService = (function () {
    function TreeModelService() {
    }
    TreeModelService.prototype.getFileName = function (id) {
        var mockServer = new __WEBPACK_IMPORTED_MODULE_1__mock_server_service__["a" /* MockServerService */]();
        console.log('Looking for: ' + id);
        var selectedNode = this.getNodeByID(new __WEBPACK_IMPORTED_MODULE_2_ng2_tree__["Tree"](mockServer.getTreeModel()), id);
        console.log(selectedNode);
        return selectedNode.value;
    };
    TreeModelService.prototype.getFullPath = function (currentNode) {
        var fullPath = [];
        while (currentNode.parent != null) {
            fullPath.push(currentNode.value);
            currentNode = currentNode.parent;
        }
        fullPath.push(currentNode.value);
        console.log(fullPath.reverse().join('/'));
    };
    TreeModelService.prototype.getNodeByID = function (node, matchingId) {
        console.log('----------Entered----------');
        if (node.id === matchingId) {
            console.log('Finaly Found: ' + node.value);
            return node;
        }
        if (node.hasChildren()) {
            console.log('Has Children!!');
            var list = node.children;
            for (var i = 0; i < list.length; i++) {
                var res = this.getNodeByID(list[i], matchingId);
                if (res)
                    return res;
            }
        }
        return null;
    };
    TreeModelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TreeModelService);
    return TreeModelService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map