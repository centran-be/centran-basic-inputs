import {Component, Inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {floor} from 'lodash';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {InputAmountSearchCurrencyModal} from "./input-amount-search-currency-modal/input-amount-search-currency-modal.component";
import {BasicInputsConfig} from "../basic-inputs.config";

@Component({
  selector: 'input-amount',
  templateUrl: './input-amount.component.html',
  providers: []
})
export class InputAmountComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() validationPath: Array<String> = [];
  @Input() formControl: AbstractControl
  @Input() exceptions: Map<String, Object>;
  @Input() needed : boolean;

  currencies: Object;

  constructor(@Inject('currencyConfig') public config: BasicInputsConfig,private modalService: NgbModal) {
  }

  ngOnInit() {

    this.currencies = this.config.currencies;

    console.log("Config " , this.config);
    console.log("Currencies  ",this.currencies)

    if (!this.formControl && this.formGroup && this.name) {
      this.formControl = this.formGroup.get(this.name)
    }

    this.formGroup.get(this.name).get('Amount').valueChanges.distinctUntilChanged().subscribe(v =>{
      if( v != null && /^[0-9]+(\,[0-9]{2}){0,1}$/.test(v)){
        this.formGroup.get(this.name).get('Amount').setValue((""+v).replace(/,/g, '.'))
      }
      if( /[0-9]*\.[0-9]{3,}/.test(v)){
        this.formGroup.get(this.name).get('Amount').setValue(floor(v,2));
      }
    })
  }


  static formGroupInit(fb: FormBuilder) {
    return fb.group({
      Amount: null,
      Currency: 'EUR'
    })
  };

  showSearchModal(){
    const modalRef = this.modalService.open(InputAmountSearchCurrencyModal,{size:"lg", windowClass:"xxl"});
    modalRef.componentInstance.list = this.currencies;
    modalRef.result.then(value => {
      this.formGroup.get(this.name).get('Currency').setValue(value);
    })
  }


}
