import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls:['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string
  @Input() name: string
  @Input() inputControl: AbstractControl
  @Input() validationPath: Array<String> = [];
  @Input() exceptions: Map<String, Object>;
  @Input() alerts : Array<String>;
  @Input() needed : boolean;
  @Input() onlyNumber :boolean;

  showLabel: boolean

  constructor() {
  }

  ngOnInit() {
    this.showLabel = (this.label != null || this.name != null)
  }

  errorKeys(): string[] {
    return Object.keys(this.inputControl.errors)
  }

  getExceptions(): any {
    if (this.inputControl.touched && this.exceptions ) {
      return this.exceptions[this.validationPath.join('.')];
    }
  }
}
