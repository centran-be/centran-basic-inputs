import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {filter} from "lodash";


@Component({
  selector: 'input-amount-search-currency-modal',
  templateUrl: 'input-amount-search-currency-modal.component.html',
  styleUrls: ['../../basic-input.module.css']
})

export class InputAmountSearchCurrencyModal implements OnInit {

  _list : any
  searchCurrencyForm : FormGroup;
  searchResult: any
  searchTags: any

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal){

  }

  ngOnInit(){
    this.searchCurrencyForm = InputAmountSearchCurrencyModal.usualRequestFormGroupInit(this.fb)
  }

  public set list(list:any){
    this._list = list;
  }


  static usualRequestFormGroupInit(fb: FormBuilder) {
    return fb.group({
     search:''
    })
  }

  search(){
    let self = this;
    let results = filter(this._list,function(item){
      return item['tags'].join().indexOf(self.searchCurrencyForm.get('search').value)>-1;
    });
    if( results.length === 0){
      results = filter(this._list,function(item){
        return item['key'].indexOf(self.searchCurrencyForm.get('search').value)>-1;
      });
    }
    if( results.length === 0){
      results = filter(this._list,function(item){
        return item['tags'].join().toLowerCase().indexOf(self.searchCurrencyForm.get('search').value.toLowerCase())>-1;
      });
    }

    this.searchResult = results;
  }

  chooseCurrency(key: any){
    this.activeModal.close(key);
  }

  showTags(tags: any){
    this.searchTags  = tags;
  }


}
