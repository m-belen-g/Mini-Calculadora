import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.css']
})
export class PorcentajeComponent implements OnInit {
  numero1: number=0;
  numero2: number=0;
  resultado: number=0;

  sumar():void {
    this.resultado=this.numero1*this.numero2/100;
}



  constructor() { }

  ngOnInit(): void {
  }

}
