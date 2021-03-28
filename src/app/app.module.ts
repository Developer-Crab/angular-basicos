import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULES
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

// COMPONENTS
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
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
