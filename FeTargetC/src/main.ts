import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideToastr(),
    provideHttpClient() // Proporcionar el servicio Toastr
  ]
}).catch(err => console.error(err));
