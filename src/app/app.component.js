"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(_formbuilder) {
        this._formbuilder = _formbuilder;
        this.appname = 'Angular Application';
        this.name = 'John';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.myForm = this._formbuilder.group({
            name: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            email: [],
            address: this._formbuilder.group({
                city: [],
                zip: [],
            })
        });
        //  this.
    };
    AppComponent.prototype.onSubmit = function () {
        console.log("fffff");
        console.log(this.myForm.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        /**
         * template: '<product-form>l;</product-form>'
         */
        templateUrl: 'app/app.component.html',
        styles: ["input.ng-invalid{border-left: 5px solid red;}\n     input.ng-valid{border-left: 5px solid green}\n     "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map