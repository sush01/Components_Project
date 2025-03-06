import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  standalone: false,
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {

  modalOpen = false;
  items :{title:string, content: string}[] = [
    { title:'What is Angular?', content:'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.It is developed by Google and helps developers create dynamic and interactive web applications.'},
    { title:'What is TypeScript?', content:'TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors during development and makes large-scale applications more maintainable.'},
    { title:'What is Semantic UI', content:'Semantic UI is a UI framework that uses human-friendly HTML to create beautiful, responsive layouts and components. It provides a wide range of pre-designed UI components to speed up development.'}

  ];
  onClick(){
    this.modalOpen = !this.modalOpen;

  }

}
