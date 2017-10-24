import { Component } from '@angular/core';
import { Product } from './product';
import { productService } from './product.service';


@Component({
    selector: 'my-app',
    providers: [productService],
    templateUrl : 'app/product-form.component.html'
})

export class ProductFormComponent{
    constructor(private _productService: productService){
    };
   /**  model   =   new Product(1, 2); */
    profile = {};
    ngOnInit(){
      
        this._productService.getData().subscribe(data=>this.profile = data)
    }

    public first: number=0;;
    public second:number=0;;
    public result:number=0;;
    addNum(first: number,second: number):number{
        this.result = this._productService.add(first,second);
        return this.result;
    }

   
}

