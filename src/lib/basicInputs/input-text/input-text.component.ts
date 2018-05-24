import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {AbstractControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() formControl: AbstractControl
  @Input() validationPath: Array<String>
  @Input() exceptions: Map<String, Object>
  @Input() mask : any;
  @Input() pipe: any;
  @Input() needed : boolean;
  @Input() alerts: Array<String>;
  @Output() blur : EventEmitter<any> = new EventEmitter()

  constructor() {
  }

  ngOnInit() {

    if( this.mask === undefined || this.mask === null){
      this.mask = false;
    }

    if( this.pipe === undefined || this.pipe === null){
      this.pipe =false;
    }

    if (!this.placeholder && this.label) {
      this.placeholder = this.label
    } else if (!this.placeholder) {
      this.placeholder = this.name
    }

    if (!this.formControl && this.formGroup && this.name) {
      this.formControl = this.formGroup.get(this.name)
    }
  }

}
