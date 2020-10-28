import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserinputComponent } from './components/userinput/userinput.component';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { LuckynumberComponent } from './components/luckynumber/luckynumber.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserinputComponent,
    ButtonComponent,
    ContainerComponent,
    LuckynumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
