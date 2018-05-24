import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() rows: number;
  @Input() cols: number;
  @Input() formControl: AbstractControl;
  @Input() validationPath: Array<String>;
  @Input() exceptions: Map<String, Object>;
  @Input() needed : boolean;
  @Output() blur : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
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
