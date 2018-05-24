import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  @Input() label: string;
  @Input() needed: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
