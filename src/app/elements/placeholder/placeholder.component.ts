import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: false,
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent {
  @Input() header = true;
  @Input() lines = 3;

}
