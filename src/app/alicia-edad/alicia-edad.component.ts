import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alicia-edad',
  templateUrl: './alicia-edad.component.html',
  styleUrls: ['./alicia-edad.component.css']
})
export class AliciaEdadComponent implements OnInit {

  aliciaEdad: number=0;

  cambiarEdad(event: Event){

      this.aliciaEdad= parseInt((<HTMLInputElement>event.target).value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
