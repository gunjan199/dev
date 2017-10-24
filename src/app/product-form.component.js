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
var product_service_1 = require("./product.service");
var ProductFormComponent = (function () {
    function ProductFormComponent(_productService) {
        this._productService = _productService;
        /**  model   =   new Product(1, 2); */
        this.profile = {};
        this.first = 0;
        this.second = 0;
        this.result = 0;
    }
    ;
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getData().subscribe(function (data) { return _this.profile = data; });
    };
    ;
    ;
    ;
    ProductFormComponent.prototype.addNum = function (first, second) {
        this.result = this._productService.add(first, second);
        return this.result;
    };
    return ProductFormComponent;
}());
ProductFormComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [product_service_1.productService],
        templateUrl: 'app/product-form.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.productService])
], ProductFormComponent);
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=product-form.component.js.map