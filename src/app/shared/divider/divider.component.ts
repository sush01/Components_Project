import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: false,
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {

  @Input() title = '';

}
