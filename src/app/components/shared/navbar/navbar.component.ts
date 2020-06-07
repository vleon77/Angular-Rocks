import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banda } from 'src/app/model/banda';
import { BandasService } from 'src/app/services/bandas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  buscarBanda(texto:string){
    console.log(texto);
    this.router.navigate(['/buscar',texto]);
  }

}
