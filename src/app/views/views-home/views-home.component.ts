import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  standalone: false,
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {

  stats:{ value: number, label: string }[] = [
    {value: 22, label: '# of Users'},
    {value: 900, label: 'Revenue'},
    {value: 50, label: 'Reviews'}
  ]

}
