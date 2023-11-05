import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from './shared/modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { AuthModalComponent } from './user/auth-modal/auth-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
