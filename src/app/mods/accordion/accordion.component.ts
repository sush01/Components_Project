import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: false,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

  @Input() items:{title:string, content: string}[] = [];
 

}
