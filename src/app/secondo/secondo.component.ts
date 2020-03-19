import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {

  testo: string = 'Iniziale';
  constructor() { }

  ngOnInit(): void {
  }


  clickEvent(pippo: MouseEvent, param:number) {
   if(param === 2){
    this.testo="Default";
   }
    console.log('Ho cliccato il pulsante '+param);
    pippo.stopPropagation();
    //senza questo, cliccando il bottone nel div si prende due click
  }

  inputEvent(ev){
    this.testo =ev.targer.value ;
  }
}
