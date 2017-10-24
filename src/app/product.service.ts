import { Injectable } from '@angular/core'; 
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable() 
export class productService { 
   add(first:any, second:any) : number{
        return parseInt(first)+parseInt(second);
    }
    constructor( private  http: Http){
      
    }
    getData(){
        return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
        .map((res:Response)=>res.json());
    }

} 