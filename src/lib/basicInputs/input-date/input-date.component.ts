import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IMyDateModel, IMyDpOptions} from "mydatepicker";

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
})
export class InputDateComponent implements OnInit {

  @Input() formGroup: FormGroup
  @Input() name: string
  @Input() label: string
  @Input() validationPath: Array<String> = [];
  @Input() exceptions: Map<String, Object>;
  @Input() needed: boolean;
  @Input() defaultDate: boolean;
  @Output() blur: EventEmitter<any> = new EventEmitter();
  public model: any;


  constructor() {
  }

  ngOnInit() {
    if (this.formGroup.get(this.name).value != null){
      let date = new Date((this.formGroup.get(this.name).value + "").substring(0,10));
      this.formGroup.get(this.name).setValue(date)
      this.model = { date: { year: date.getFullYear(), month: date.getMonth() +1 , day: date.getDate()}}

    }
    if (this.defaultDate){
     this.formGroup.get(this.name).setValue(new Date())
     this.model = { date: { year: new Date().getFullYear(), month: new Date().getMonth() +1 , day: new Date().getDate() } };
    }
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
    showTodayBtn: true
  };

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.formGroup.get(this.name).setValue(event.jsdate);
  }



}


