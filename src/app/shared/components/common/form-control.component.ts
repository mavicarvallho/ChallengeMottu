import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  template: '',
})
export abstract class FormControlComponent implements OnInit {
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public controlName: string = '';

  public formGroupRef!: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.getFormGroupRef();
  }

  private getFormGroupRef(): void {
    const ref = this.formGroupDirective.form;
    if (!ref || this.controlName === '')
      throw 'FormGroup Reference not Found Or ControlName not informed';
    this.formGroupRef = ref;
  }
}
