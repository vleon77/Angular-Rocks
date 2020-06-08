import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandaDetalleComponent } from './components/banda-detalle/banda-detalle.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AgregarBandaComponent } from './components/agregar-banda/agregar-banda.component';


@NgModule({
  declarations: [
    AppComponent,
    BandasComponent,
    BandaDetalleComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    DomseguroPipe,
    AgregarBandaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
