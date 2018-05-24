import {Component, Input, OnInit} from "@angular/core";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent implements OnInit {
  @Input() value: any
  @Input() label: string
  @Input() hide :boolean

  public chosen :boolean = true;

  public formControlChoice: AbstractControl
  public name: string

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.formControlChoice.setValue(this.value)
    this.formControlChoice.updateValueAndValidity()
  }
}
