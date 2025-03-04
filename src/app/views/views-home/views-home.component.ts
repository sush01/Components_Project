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
  ];

  items: {image: string, title:string, description:string} []=[
    { image: '/assets/images/iphone.jpeg',
      title: 'Iphone 16 Pro Max 5G',
      description: 'This is a new  version of Iphone'
    },
    { image: '/assets/images/samsung.jpeg',
      title: 'Samsung Galaxy S24 Ultra 5G',
      description: 'This is a new Samsung Galaxy S24 Ultra 5G '
    }
  ];

}
