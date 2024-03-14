import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss',
})
export class EmptyComponent {
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public showBackButton: boolean = false;

  constructor(private router: Router) {}

  public goToHome(): void {
    this.router.navigate(['/']);
  }
}
