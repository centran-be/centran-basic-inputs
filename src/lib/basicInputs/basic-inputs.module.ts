import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextComponent} from "./input-text/input-text.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LabelEditionService, LabelModule, LabelProductionService, LabelService} from "centran-label-manager";
import {InputRadioButtonsComponent} from './input-radio-buttons/input-radio-buttons.component';
import {InputComponent} from './input/input.component';
import {ChoicesComponent} from './choices/choices.component';
import {ChoiceComponent} from './choices/choice.component';
import {InputDateComponent} from './input-date/input-date.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormSectionComponent} from './form-section/form-section.component';
import {InputSelectComponent} from './input-select/input-select.component';
import {InputAmountComponent} from './input-amount/input-amount.component';
import {ErrorComponent} from './error/error.component';
import {TextMaskModule} from "angular2-text-mask";
import {MyDatePickerModule} from "mydatepicker";
import {InputNumberComponent} from "./input-number/input-number.component";
import {InputAmountSearchCurrencyModal} from "./input-amount/input-amount-search-currency-modal/input-amount-search-currency-modal.component";
import {InputTextAreaComponent} from './input-text-area/input-text-area.component';
import {BasicInputsConfig} from "./basic-inputs.config";



@NgModule({
  imports: [
    CommonModule,
    LabelModule.switch(),
    ReactiveFormsModule,
    NgbModule.forRoot(),
    TextMaskModule,
    MyDatePickerModule,
    FormsModule
  ],
  declarations: [
    InputTextComponent,
    InputRadioButtonsComponent,
    InputComponent,
    ChoicesComponent,
    ChoiceComponent,
    InputDateComponent,
    FormSectionComponent,
    InputSelectComponent,
    InputAmountComponent,
    InputNumberComponent,
    ErrorComponent,
    InputAmountSearchCurrencyModal,
    InputTextAreaComponent,
  ],
  exports: [
    InputTextComponent,
    InputRadioButtonsComponent,
    ChoicesComponent,
    ChoiceComponent,
    InputDateComponent,
    FormSectionComponent,
    InputSelectComponent,
    InputAmountComponent,
    InputNumberComponent,
    InputComponent,
    ErrorComponent,
    InputTextAreaComponent,
  ],
  entryComponents:[InputAmountSearchCurrencyModal]
})
export class BasicInputsModule {

     static forRoot(config: BasicInputsConfig) : ModuleWithProviders {
      return {ngModule : BasicInputsModule,
              providers: [
              LabelService,LabelEditionService,LabelProductionService,
              {provide:'currencyConfig', useValue: config},
              ]
      }

    }
}


