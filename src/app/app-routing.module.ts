import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BandasComponent} from './components/bandas/bandas.component'
import {BandaDetalleComponent } from './components/banda-detalle/banda-detalle.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'bandas',component:BandasComponent},
  {path:'detalle/:id',component:BandaDetalleComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
