import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DatosService } from './datos.service';
import { TablaComponent } from './tabla/tabla.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ContenidoTablaComponent } from './contenido-tabla/contenido-tabla.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TablaComponent,
    EncabezadoComponent,
    ContenidoTablaComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
