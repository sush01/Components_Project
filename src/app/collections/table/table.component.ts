import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() classNames = '';

  @Input() data : { [key: string]: string | number }[] = [];
  @Input() headers: { key: string, label: string }[]= [];
  

}
