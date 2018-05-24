import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IECompatiblityUtils} from "../iECompatiblityUtils";


@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
})
export class InputSelectComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() items: string[];
  @Input() validationPath: Array<String> = [];
  @Input() exceptions: Map<String, Object>;
  @Input() needed: boolean;

  constructor() {
  }

  ngOnInit() {
    new IECompatiblityUtils().loadSelectForIE();
  }

}
