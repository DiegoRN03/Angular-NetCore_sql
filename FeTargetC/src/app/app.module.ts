import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { TargetCredComponent } from './components/target-cred/target-cred.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppComponent,
    BrowserAnimationsModule, // Importa el componente standalone aquí
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    HttpClientModule
  ],
  providers: [],
 // Bootstrap del componente standalone
})
export class AppModule { }
