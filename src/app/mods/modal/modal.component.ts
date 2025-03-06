import { Component , ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef){
    
  }

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement)
  }

}
