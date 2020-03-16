import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {

  title:'DemoAngular'
  
  htmlString = "<div> <p> Prova </p></div>"
  linkURL ="https://www.google.it/"
  

  @Input()
  titoloInput:string

  constructor() { }

  ngOnInit(): void {
  }

}
