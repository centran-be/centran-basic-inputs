import {Component, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'input-radio-buttons',
  templateUrl: './input-radio-buttons.component.html',
})
export class InputRadioButtonsComponent implements OnInit {

  @Input() buttons: Array<RadioButton>
  @Input() buttonsValues: Array<string>
  @Input() formGroup: FormGroup
  @Input() name: string
  @Input() label: string
  @Input() validationPath: Array<String> = [];
  @Input() exceptions: Map<String, Object>;
  @Input() needed: boolean;

  constructor() {
  }

  ngOnInit() {
    if (this.buttonsValues && !this.buttons) {
      this.buttons = RadioButton.buttons(...this.buttonsValues)
    }
  }

}

// @dynamic
export class RadioButton {
  constructor(public value: string,
              public label: string) {

  }

  static buttons(...values: string[]): Array<RadioButton> {
    return values.map(v => new RadioButton(v, null))
  }
}
