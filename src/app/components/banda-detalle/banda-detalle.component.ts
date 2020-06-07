import { Component, OnInit } from '@angular/core';
import { Banda } from 'src/app/model/banda';
import { ActivatedRoute } from '@angular/router';
import { BandasService } from 'src/app/services/bandas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-banda-detalle',
  templateUrl: './banda-detalle.component.html',
  styleUrls: ['./banda-detalle.component.css']
})
export class BandaDetalleComponent implements OnInit {

  banda:Banda;

  constructor(
    private route:ActivatedRoute,
    private bandasService:BandasService,
    private location:Location
    ) { }

  ngOnInit(): void {

    this.getHero();
  }

  getHero():void{

    const id:number = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.banda = this.bandasService.obtenerBanda(id)
    console.log(this.banda);



  }

}
