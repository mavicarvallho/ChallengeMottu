import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControlComponent } from '../common/form-control.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent extends FormControlComponent {
  @Input() public type: 'text' | 'password' = 'text';

  @Output() public onType: EventEmitter<null> = new EventEmitter();

  public handleKeyUp(): void {
    this.onType.emit();
  }
}
