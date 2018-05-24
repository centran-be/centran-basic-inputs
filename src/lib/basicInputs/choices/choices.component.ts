import {AfterContentInit, Component, ContentChildren, Input, QueryList} from "@angular/core";
import {AbstractControl, FormGroup} from "@angular/forms";
import {ChoiceComponent} from "./choice.component";

@Component({
  selector: 'choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choice.component.css', '../basic-input.module.css']
})
export class ChoicesComponent implements AfterContentInit {
  @Input() formGroup: FormGroup
  @Input() name: string
  @Input() label: string
  @Input() needed : boolean
  @Input() exceptions: Map<String, Object>;
  @Input() validationPath: Array<String> = [];
  @Input() inputControl: AbstractControl
  @Input() hide: boolean;

  @ContentChildren(ChoiceComponent)
  choicesQL: QueryList<ChoiceComponent>;

  choices: Array<ChoiceComponent> = []

  constructor() {
  }

  ngOnInit() {
    if( !this.hide ){
      this.choices.forEach(v => v.chosen = true)
    }
  }

  getExceptions(): any {
    if (this.inputControl.touched && this.exceptions ) {
      return this.exceptions[this.validationPath.join('.')];
    }
  }

  ngAfterContentInit() {
    this.choicesQL.forEach(choice => {
      this.choices.push(choice)
      choice.formControlChoice = this.formGroup.get(this.name)
      choice.name = this.name
    });
  }

  clearChoices(){
    this.formGroup.get(this.name).setValue('');
  }

}
