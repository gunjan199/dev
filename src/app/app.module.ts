import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms'; 
import {ReactiveFormsModule} from '@angular/forms'; 
import { ProductFormComponent } from './product-form.component'; 
import { ProductDirective } from './product.directive';
import {RouterModule, Routes} from '@angular/router';
 

const appRoutes : Routes =  [
  {path:'product', component: ProductFormComponent,data: {title: "Product"}}
  ]


@NgModule({ 
   imports:      [ BrowserModule,HttpModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes,{enableTracing:true})], 
  declarations: [ AppComponent,ProductFormComponent,ProductDirective ],
  //bootstrap:    [ ProductFormComponent ]
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
