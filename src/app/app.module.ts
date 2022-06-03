import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component'
//import { ContadorComponent } from './Contador/contador/contador.component';
// import { HeroeComponent } from './Heroes/heroe/heroe.component';
// import { ListadoComponent } from './Heroes/listado/listado.component';
import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './Contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
