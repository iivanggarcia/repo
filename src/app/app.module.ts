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

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TablaComponent,
    EncabezadoComponent,
    ContenidoTablaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
