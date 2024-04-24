import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollingService } from 'src/app/scrolling.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent  implements OnInit {

  constructor(private elementRef: ElementRef, private scrollingService: ScrollingService) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  onClickEnlaceVs() {
    const destination = 130; // La posición de destino deseada
    this.scrollingService.scrollTo(destination);
  }
  onClickEnlaceRs() {
    const destination = 550; // La posición de destino deseada
    this.scrollingService.scrollTo(destination);
  }
  onClickEnlaceVr() {
    const destination = 980; // La posición de destino deseada
    this.scrollingService.scrollTo(destination);
  }
  onClickEnlaceMv() {
    const destination = 1310; // La posición de destino deseada
    this.scrollingService.scrollTo(destination);
  }
  onClickEnlaceTs() {
    const destination = 1000; // La posición de destino deseada
    this.scrollingService.scrollTo(destination);
  }
  onClickEnlaceIp() {
    const destination = 470; // La posición de destino deseada
    this.scrollingService.scrollTo(destination);
  }
  onClickEnlaceAr() {
    const destination = 160; // La posición de destino deseada
    this.scrollingService.scrollTo(destination);
  }
}
