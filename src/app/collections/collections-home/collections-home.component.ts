import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  standalone: false,
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

  data: { name: string, age: number, job: string }[]= [
    { name: 'James', age: 24, job: 'Designer'},
    { name: 'Jill', age: 28, job: 'Engineer'},
    { name: 'Tim', age: 34, job: 'Engineer'}
  ];
  headers: { key: string, label: string }[] = [
    {key:'name', label: 'Name'},
    {key:'age', label: 'Age'},
    {key:'job', label: 'Job'},
  ];

}
