import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';

@Component({
    selector: 'my-app',
    /**
     * template: '<product-form>l;</product-form>' 
     */ 
     templateUrl : 'app/app.component.html',
     styles:[`input.ng-invalid{border-left: 5px solid red;}
     input.ng-valid{border-left: 5px solid green}
     `]
})

export class AppComponent implements OnInit {
    appname: string='Angular Application' ;
    name: string='John';
    mycolor : string;

   /** onSubmit(valye: any){
        console.log(valye);
    }
*/
  /*  myForm  =   new FormGroup({
        name: new FormControl(null,Validators.required),
        email: new FormControl(),
        address: new FormGroup({
            city: new FormControl(),
            zip: new FormControl(null,Validators.pattern('[1-9][0-9]{4}$'))
        }),
       

    });*/
    myForm: FormGroup;
    constructor(private _formbuilder: FormBuilder){

    }
    ngOnInit(){
        this.myForm     =   this._formbuilder.group({
            name: [null,[Validators.required,Validators.minLength(4)]],
            email: [],
            address: this._formbuilder.group({
                city: [],
                zip:[],
            })
            
        })
      //  this.
    }
     onSubmit(){
         console.log("fffff");
        console.log(this.myForm.value);
    }

}